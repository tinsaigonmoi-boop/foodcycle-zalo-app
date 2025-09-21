import React, { useState } from 'react';
import type { Deal } from '../types';
import DealCard from './DealCard';
import ExclusiveDealCard from './ExclusiveDealCard';
import CategoryIcons from './CategoryIcons';
import LocationModal from './LocationModal';
import { ArrowRightIcon, MapPinIcon, ChevronDownIcon } from './Icons';

interface HomeScreenProps {
    deals: Deal[];
    onSelectDeal: (deal: Deal) => void;
    onViewCategory: (categoryName: string) => void;
    onViewAllExclusive: () => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ deals, onSelectDeal, onViewCategory, onViewAllExclusive }) => {
    const [isLocationModalOpen, setLocationModalOpen] = useState(false);
    
    const exclusiveDeals = deals.slice(0, 2);
    const nearbyDeals = deals;

    const handleSelectCategory = (category: string) => {
        if (category !== 'Tất cả') {
            onViewCategory(category);
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <header className="p-4 bg-white/80 backdrop-blur-sm sticky top-0 z-10 border-b border-gray-100">
                <button onClick={() => setLocationModalOpen(true)} className="flex items-center w-full text-left">
                    <MapPinIcon className="w-5 h-5 text-gray-500 mr-2 flex-shrink-0" />
                    <div className="flex-grow overflow-hidden">
                        <p className="text-xs text-gray-500 uppercase font-semibold">XEM CÁC ƯU ĐÃI GẦN</p>
                        <p className="font-bold text-gray-800 truncate">123 Cách Mạng Tháng Tám, P. Long Toàn...</p>
                    </div>
                    <ChevronDownIcon className="w-5 h-5 text-gray-400 ml-2 flex-shrink-0" />
                </button>
            </header>
            
            <main className="p-4 space-y-6">
                <div 
                    className="relative text-white p-6 rounded-2xl overflow-hidden shadow-lg flex flex-col justify-end" 
                    style={{ 
                        backgroundImage: "url('https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=2070&auto=format&fit=crop')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        minHeight: '180px',
                     }}
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="relative z-10">
                        <h2 className="font-extrabold text-2xl tracking-tight">Giải cứu món ngon, giá hời</h2>
                        <p className="text-sm mt-1 font-light max-w-xs">Những chiếc túi bất ngờ chứa đầy sản phẩm tươi ngon đang chờ bạn.</p>
                    </div>
                </div>
                
                <CategoryIcons selectedCategory="Tất cả" onSelectCategory={handleSelectCategory} />

                {/* Exclusive Deals */}
                <div>
                    <div className="flex justify-between items-center mb-2">
                        <h2 className="text-xl font-bold text-gray-800">Ưu đãi độc quyền</h2>
                        <button onClick={onViewAllExclusive} className="flex items-center text-sm font-semibold text-green-600">
                            Xem tất cả <ArrowRightIcon className="w-4 h-4 ml-1" />
                        </button>
                    </div>
                    <div className="flex overflow-x-auto pb-4 -mx-4 px-4">
                        {exclusiveDeals.map(deal => (
                            <ExclusiveDealCard key={deal.id} deal={deal} onClick={() => onSelectDeal(deal)} />
                        ))}
                    </div>
                </div>

                {/* Nearby Deals */}
                <div className="mt-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-2">Gần bạn</h2>
                     {nearbyDeals.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {nearbyDeals.map(deal => (
                                <DealCard key={deal.id} deal={deal} onClick={() => onSelectDeal(deal)} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-10 bg-white rounded-2xl shadow-sm">
                            <p className="text-gray-500">Không có ưu đãi nào trong khu vực.</p>
                            <p className="text-sm text-gray-400 mt-1">Vui lòng thử lại sau.</p>
                        </div>
                    )}
                </div>
            </main>

            <LocationModal show={isLocationModalOpen} onClose={() => setLocationModalOpen(false)} />
        </div>
    );
};

export default HomeScreen;