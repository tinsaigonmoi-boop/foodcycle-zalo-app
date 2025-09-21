import React, { useState, useMemo } from 'react';
import type { User, Deal, CartItem } from './types';
import { mockDeals } from './data/mockData';
import LoginScreen from './components/LoginScreen';
import HomeScreen from './components/HomeScreen';
import ProductDetailScreen from './components/ProductDetailScreen';
import CartScreen from './components/CartScreen';
import ConfirmationScreen from './components/ConfirmationScreen';
import DiscoverScreen from './components/DiscoverScreen';
import AccountScreen from './components/AccountScreen';
import StoreAdminScreen from './components/StoreAdminScreen';
import BottomNavBar from './components/BottomNavBar';
import DealListScreen from './components/DealListScreen';

type View = 'login' | 'app' | 'detail' | 'confirmation' | 'storeAdmin';

const App: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);
    const [view, setView] = useState<View>('login');
    const [activeTab, setActiveTab] = useState('home');
    const [selectedDeal, setSelectedDeal] = useState<Deal | null>(null);
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [allDeals, setAllDeals] = useState<Deal[]>(mockDeals);
    const [listView, setListView] = useState<{ title: string; deals: Deal[] } | null>(null);

    const handleLogin = (loggedInUser: User) => {
        setUser(loggedInUser);
        setView('app');
    };

    const handleLogout = () => {
        setUser(null);
        setCartItems([]);
        setView('login');
        setActiveTab('home');
    };

    const handleSelectDeal = (deal: Deal) => {
        setSelectedDeal(deal);
        setView('detail');
    };

    const handleBack = () => {
        setView('app');
        setSelectedDeal(null);
    };

    const handleAddToCart = (deal: Deal, quantity: number) => {
        setCartItems(prevItems => {
            const itemInCart = prevItems.find(item => item.deal.id === deal.id);
            if (itemInCart) {
                return prevItems.map(item => item.deal.id === deal.id ? {...item, quantity: item.quantity + quantity} : item);
            }
            return [...prevItems, { deal, quantity }];
        });
        setActiveTab('cart');
        setView('app'); 
    };
    
    const handleUpdateQuantity = (dealId: string, newQuantity: number) => {
        if (newQuantity <= 0) {
            setCartItems(prevItems => prevItems.filter(item => item.deal.id !== dealId));
        } else {
            setCartItems(prevItems =>
                prevItems.map(item =>
                    item.deal.id === dealId ? { ...item, quantity: newQuantity } : item
                )
            );
        }
    };

    const handleCheckout = () => {
        setCartItems([]);
        setView('confirmation');
    };

    const handleContinueShopping = () => {
        setActiveTab('home');
        setView('app');
    };

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
        setListView(null); // Reset list view when changing tabs
    };

    const handleSwitchToStore = () => {
        setView('storeAdmin');
    };

    const handleSwitchToUser = () => {
        setView('app');
    };

    const handleCreateDeal = (newDeal: Deal) => {
        setAllDeals(prevDeals => [newDeal, ...prevDeals]);
    };

    const handleUpdateDeal = (updatedDeal: Deal) => {
        setAllDeals(prevDeals =>
            prevDeals.map(deal => (deal.id === updatedDeal.id ? updatedDeal : deal))
        );
    };

    const cartItemCount = useMemo(() => {
        return cartItems.reduce((sum, item) => sum + item.quantity, 0);
    }, [cartItems]);

    const handleViewCategory = (categoryName: string) => {
        const categoryDeals = allDeals.filter(deal => {
            if (categoryName === 'Bánh ngọt') return deal.category.includes('Bánh ngọt');
            if (categoryName === 'Bánh mì') return deal.category.includes('Bánh mì');
            if (categoryName === 'Rau củ') return deal.category.includes('Rau củ');
            if (categoryName === 'Bữa ăn') return deal.category.includes('Bữa ăn');
            if (categoryName === 'Tạp hóa') return deal.category.includes('Tạp hóa');
            return deal.category === categoryName;
        });
        setListView({
            title: `Danh mục: ${categoryName}`,
            deals: categoryDeals,
        });
    };

    const handleViewAllExclusive = () => {
        // For this demo, "exclusive" deals are the first 4 deals.
        const exclusiveDeals = allDeals.slice(0, 4);
        setListView({
            title: 'Ưu đãi độc quyền',
            deals: exclusiveDeals,
        });
    };

    const handleBackFromListView = () => {
        setListView(null);
    };
    

    if (!user) {
        return <LoginScreen onLogin={handleLogin} />;
    }

    if (view === 'detail' && selectedDeal) {
        return <ProductDetailScreen deal={selectedDeal} onBack={handleBack} onAddToCart={handleAddToCart} />;
    }

    if (view === 'confirmation') {
        return <ConfirmationScreen onContinueShopping={handleContinueShopping} />;
    }
    
    if (view === 'storeAdmin') {
        return <StoreAdminScreen onSwitchToUser={handleSwitchToUser} deals={allDeals} onCreateDeal={handleCreateDeal} onUpdateDeal={handleUpdateDeal} />;
    }

    return (
        <div className="max-w-sm mx-auto h-screen overflow-y-auto pb-16">
            <div style={{ display: activeTab === 'home' ? 'block' : 'none' }}>
                {listView ? (
                    <DealListScreen
                        title={listView.title}
                        deals={listView.deals}
                        onBack={handleBackFromListView}
                        onSelectDeal={handleSelectDeal}
                    />
                ) : (
                    <HomeScreen
                        deals={allDeals}
                        onSelectDeal={handleSelectDeal}
                        onViewCategory={handleViewCategory}
                        onViewAllExclusive={handleViewAllExclusive}
                    />
                )}
            </div>
             <div style={{ display: activeTab === 'discover' ? 'block' : 'none' }}>
                <DiscoverScreen onSelectDeal={handleSelectDeal}/>
            </div>
             <div style={{ display: activeTab === 'cart' ? 'block' : 'none', height: '100%' }}>
                <CartScreen cartItems={cartItems} onBack={() => setActiveTab('home')} onUpdateQuantity={handleUpdateQuantity} onCheckout={handleCheckout} />
            </div>
             <div style={{ display: activeTab === 'account' ? 'block' : 'none' }}>
                <AccountScreen user={user} onLogout={handleLogout} onSwitchToStore={handleSwitchToStore} />
            </div>
            
            <BottomNavBar activeTab={activeTab} onTabChange={handleTabChange} cartItemCount={cartItemCount} />
        </div>
    );
};

export default App;