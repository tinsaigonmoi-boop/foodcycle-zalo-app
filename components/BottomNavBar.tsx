import React from 'react';
import { HomeIcon, MagnifyingGlassIcon, ShoppingCartIcon, UserIcon } from './Icons';

interface BottomNavBarProps {
    activeTab: string;
    onTabChange: (tab: string) => void;
    cartItemCount: number;
}

const NavItem: React.FC<{
    icon: React.ElementType;
    label: string;
    isActive: boolean;
    onClick: () => void;
    badgeCount?: number;
}> = ({ icon: Icon, label, isActive, onClick, badgeCount }) => {
    const activeColor = 'text-green-600';
    const inactiveColor = 'text-gray-500';

    return (
        <button onClick={onClick} className="flex flex-col items-center justify-center w-full space-y-1 focus:outline-none">
            <div className="relative">
                <Icon className={`w-6 h-6 ${isActive ? activeColor : inactiveColor}`} />
                {badgeCount && badgeCount > 0 ? (
                    <div className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                        {badgeCount}
                    </div>
                ) : null}
            </div>
            <span className={`text-xs ${isActive ? activeColor : inactiveColor}`}>{label}</span>
        </button>
    );
};


const BottomNavBar: React.FC<BottomNavBarProps> = ({ activeTab, onTabChange, cartItemCount }) => {
    return (
        <footer className="fixed bottom-0 left-0 right-0 bg-white/80 border-t border-gray-200 backdrop-blur-sm max-w-sm mx-auto">
            <div className="flex justify-around items-center h-16">
                <NavItem
                    icon={HomeIcon}
                    label="Trang chủ"
                    isActive={activeTab === 'home'}
                    onClick={() => onTabChange('home')}
                />
                <NavItem
                    icon={MagnifyingGlassIcon}
                    label="Khám phá"
                    isActive={activeTab === 'discover'}
                    onClick={() => onTabChange('discover')}
                />
                <NavItem
                    icon={ShoppingCartIcon}
                    label="Giỏ hàng"
                    isActive={activeTab === 'cart'}
                    onClick={() => onTabChange('cart')}
                    badgeCount={cartItemCount}
                />
                <NavItem
                    icon={UserIcon}
                    label="Tài khoản"
                    isActive={activeTab === 'account'}
                    onClick={() => onTabChange('account')}
                />
            </div>
        </footer>
    );
};

export default BottomNavBar;
