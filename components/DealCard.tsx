import React from 'react';
import type { Deal } from '../types';
import { MapPinIcon, ClockIcon, StarIcon, HeartIcon } from './Icons';

interface DealCardProps {
    deal: Deal;
    onClick: () => void;
}

const formatPrice = (price: number) => {
    return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
};

const QuantityBar: React.FC<{ remaining: number }> = ({ remaining }) => {
    const total = 15; // Assume max quantity is 15 for visual representation
    const percentage = (remaining / total) * 100;
    
    let barColor = 'bg-green-500';
    if (remaining < 5) {
        barColor = 'bg-red-500';
    } else if (remaining < 10) {
        barColor = 'bg-yellow-500';
    }

    return (
        <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
            <div className={`${barColor} h-1.5 rounded-full`} style={{ width: `${percentage}%` }}></div>
        </div>
    );
};

const DealCard: React.FC<DealCardProps> = ({ deal, onClick }) => {
    return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300 cursor-pointer w-full" onClick={onClick}>
            <div className="relative">
                <img className="w-full h-32 object-cover" src={deal.images[0]} alt={deal.name} />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/50 to-transparent"></div>
                <img src={deal.store.logoUrl} alt={deal.store.name} className="absolute top-2 left-2 w-10 h-10 rounded-full border-2 border-white object-cover" />
                <button className="absolute top-2 right-2 bg-white/80 rounded-full p-1.5 backdrop-blur-sm">
                    <HeartIcon className="w-5 h-5 text-red-500" />
                </button>
            </div>
            <div className="p-3">
                <h3 className="font-bold text-gray-800 text-md truncate">{deal.name}</h3>
                <div className="flex items-center text-sm text-gray-500 mt-1">
                    <StarIcon className="w-4 h-4 text-yellow-400 mr-1" />
                    <span>{deal.rating.score} ({deal.rating.reviews} đánh giá)</span>
                </div>
                
                <div className="mt-2">
                    <div className="flex justify-between items-center text-xs text-orange-600 font-semibold">
                        <span>Sắp hết!</span>
                        <span>Còn lại {deal.remaining} túi</span>
                    </div>
                    <QuantityBar remaining={deal.remaining} />
                </div>

                <div className="flex justify-between items-end mt-3">
                     <div className="flex items-center space-x-2">
                        <div className="flex items-center text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                            <MapPinIcon className="w-3 h-3 mr-1" />
                            {deal.distance} km
                        </div>
                         <div className="flex items-center text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                            <ClockIcon className="w-3 h-3 mr-1" />
                            {deal.pickupTime.split('-')[0].trim()}
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="text-xl font-extrabold text-green-600">{formatPrice(deal.salePrice)}</p>
                        <p className="text-xs text-gray-400 line-through">{formatPrice(deal.originalPrice)}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DealCard;