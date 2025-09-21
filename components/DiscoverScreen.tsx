import React, { useState } from 'react';
import { MagnifyingGlassIcon, ArrowRightIcon, BoltIcon, SparklesIcon, BanknotesIcon, LeafIcon, StarIcon, ChevronLeftIcon } from './Icons';
import { mockDeals } from '../data/mockData';
import type { Deal, Store } from '../types';
import DealCard from './DealCard';

const suggestionChips = ['Gần đây', 'Cơm trưa', 'Giảm 50%', 'Đồ uống', 'Ăn vặt'];

const moodSuggestions = [
    {
        id: 'fast',
        title: 'Nhanh và gọn',
        subtitle: 'Khi bạn cần gấp',
        Icon: BoltIcon,
        color: 'bg-yellow-100 text-yellow-800'
    },
    {
        id: 'party',
        title: 'Tiệc tùng',
        subtitle: 'Ăn mừng nào!',
        Icon: SparklesIcon,
        color: 'bg-purple-100 text-purple-800'
    },
    {
        id: 'cheap',
        title: 'Rẻ mà ngon',
        subtitle: 'Tiết kiệm chi phí',
        Icon: BanknotesIcon,
        color: 'bg-green-100 text-green-800'
    },
    {
        id: 'veg',
        title: 'Ăn chay',
        subtitle: 'Tốt cho sức khỏe',
        Icon: LeafIcon,
        color: 'bg-blue-100 text-blue-800'
    }
];

const allCategories = [
    { name: 'Cơm', icon: '🍚' },
    { name: 'Bún/Phở', icon: '🍜' },
    { name: 'Bánh ngọt', icon: '🍰' },
    { name: 'Đồ uống', icon: '🍹' },
    { name: 'Ăn vặt', icon: '🍿' },
    { name: 'Healthy', icon: '🥗' },
    { name: 'Món Hàn', icon: '🇰🇷' },
    { name: 'Trà sữa', icon: '🧋' },
];

interface DiscoverScreenProps {
    onSelectDeal: (deal: Deal) => void;
}

const ResultsView: React.FC<{ title: string; deals: Deal[]; onBack: () => void, onSelectDeal: (deal: Deal) => void }> = ({ title, deals, onBack, onSelectDeal }) => (
    <div>
        <header className="sticky top-0 z-10 bg-gray-50/80 backdrop-blur-sm p-4 flex items-center">
            <button onClick={onBack} className="p-2 -ml-2 mr-2">
                <ChevronLeftIcon className="w-6 h-6 text-gray-700" />
            </button>
            <h1 className="text-lg font-bold text-gray-800 truncate">Kết quả cho: {title}</h1>
        </header>
        <main className="p-4">
            {deals.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {deals.map(deal => (
                        <DealCard key={deal.id} deal={deal} onClick={() => onSelectDeal(deal)} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-10">
                    <p className="text-gray-600">Không tìm thấy ưu đãi phù hợp.</p>
                </div>
            )}
        </main>
    </div>
);


const DiscoverScreen: React.FC<DiscoverScreenProps> = ({ onSelectDeal }) => {
    const [activeChip, setActiveChip] = useState('Gần đây');
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState('');

    const [view, setView] = useState<'main' | 'results'>('main');
    const [filterTitle, setFilterTitle] = useState('');
    const [filteredDeals, setFilteredDeals] = useState<Deal[]>([]);

    const handleBackToMain = () => setView('main');

    const handleMoodClick = (mood: typeof moodSuggestions[0]) => {
        setFilterTitle(mood.title);
        let results: Deal[] = [];
        switch(mood.id) {
            case 'fast':
                results = mockDeals.filter(d => d.category === 'Bánh mì & Sandwich');
                break;
            case 'party':
                 results = mockDeals.filter(d => d.category === 'Bánh ngọt & Tráng miệng');
                break;
            case 'cheap':
                results = mockDeals.filter(d => d.salePrice < 50000);
                break;
            case 'veg':
                results = mockDeals.filter(d => d.category === 'Rau củ & Trái cây');
                break;
            default:
                results = mockDeals.slice(0, 3); // Fallback
        }
        setFilteredDeals(results);
        setView('results');
    };

    const handleBrandClick = (store: Store) => {
        setFilterTitle(store.name);
        setFilteredDeals(mockDeals.filter(deal => deal.store.id === store.id));
        setView('results');
    };

    const handleCategoryClick = (categoryName: string) => {
        setActiveCategory(categoryName);
        setFilterTitle(categoryName);
        const results = mockDeals.filter(d => 
            d.category.includes(categoryName) ||
            (categoryName === 'Healthy' && d.category.includes('Rau củ'))
        );
        setFilteredDeals(results);
        setView('results');
    };
    
    // Get unique stores for the featured brands section
    const featuredStores = [...new Map(mockDeals.map(deal => [deal.store.id, deal.store])).values()];

    if (view === 'results') {
        return <ResultsView title={filterTitle} deals={filteredDeals} onBack={handleBackToMain} onSelectDeal={onSelectDeal} />;
    }

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Header with Search Bar */}
            <header className="sticky top-0 z-10 bg-gray-50/80 backdrop-blur-sm p-4">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Tìm ưu đãi, món ăn, cửa hàng..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-white border border-gray-200 rounded-xl py-3 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
            </header>

            <main className="p-4 space-y-8">
                {/* Suggestion Chips */}
                <div className="flex overflow-x-auto space-x-2 pb-2 -mx-4 px-4">
                    {suggestionChips.map((chip) => (
                        <button 
                            key={chip} 
                            onClick={() => {
                                setActiveChip(chip);
                                setSearchTerm(chip);
                            }}
                            className={`flex-shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                                activeChip === chip
                                ? 'bg-green-600 text-white border-green-600'
                                : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-100'
                            }`}
                        >
                            {chip}
                        </button>
                    ))}
                </div>

                {/* What to eat today? */}
                <section>
                    <h2 className="text-xl font-bold text-gray-800 mb-3">Hôm nay ăn gì?</h2>
                    <div className="grid grid-cols-2 gap-4">
                        {moodSuggestions.map((mood) => (
                            <div key={mood.id} onClick={() => handleMoodClick(mood)} className="bg-white p-4 rounded-2xl shadow-sm cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${mood.color}`}>
                                    <mood.Icon className="w-6 h-6" />
                                </div>
                                <h3 className="font-bold text-gray-800 mt-3 text-md">{mood.title}</h3>
                                <p className="text-xs text-gray-500">{mood.subtitle}</p>
                            </div>
                        ))}
                    </div>
                </section>
                
                {/* Featured Brands */}
                <section>
                    <div className="flex justify-between items-center mb-3">
                        <h2 className="text-xl font-bold text-gray-800">Thương hiệu nổi bật</h2>
                        <button className="flex items-center text-sm font-semibold text-green-600">
                            Xem tất cả <ArrowRightIcon className="w-4 h-4 ml-1" />
                        </button>
                    </div>
                     <div className="flex overflow-x-auto space-x-4 pb-2 -mx-4 px-4">
                        {featuredStores.map(store => (
                            <div key={store.id} onClick={() => handleBrandClick(store)} className="flex-shrink-0 w-32 flex flex-col items-center bg-white rounded-2xl shadow-sm p-4 cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center">
                                <img src={store.logoUrl} alt={store.name} className="w-20 h-20 rounded-full object-cover" />
                                <div className="mt-3">
                                    <h4 className="font-bold text-sm text-gray-800 truncate w-full">{store.name}</h4>
                                    <div className="flex items-center justify-center text-xs text-gray-500 mt-1">
                                        <StarIcon className="w-4 h-4 text-yellow-400 mr-1" />
                                        <span className="font-semibold">{store.rating}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* All Categories */}
                <section>
                    <h2 className="text-xl font-bold text-gray-800 mb-3">Tất cả danh mục</h2>
                    <div className="grid grid-cols-4 gap-4">
                        {allCategories.map(({ name, icon }) => (
                            <div 
                                key={name} 
                                onClick={() => handleCategoryClick(name)}
                                className="flex flex-col items-center space-y-2 cursor-pointer group"
                            >
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-105 transition-all duration-300 ${
                                    activeCategory === name ? 'bg-green-600 scale-105' : 'bg-green-100'
                                }`}>
                                    {icon}
                                </div>
                                <p className={`text-xs text-center transition-colors ${
                                    activeCategory === name ? 'text-green-700 font-bold' : 'text-gray-700 font-medium'
                                }`}>{name}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default DiscoverScreen;