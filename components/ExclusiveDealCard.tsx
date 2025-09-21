import React from 'react';
import type { Deal } from '../types';
import { ClockIcon, StarIcon } from './Icons';

interface ExclusiveDealCardProps {
    deal: Deal;
    onClick: () => void;
}

const formatPrice = (price: number) => {
    return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
};

const ExclusiveDealCard: React.FC<ExclusiveDealCardProps> = ({ deal, onClick }) => {
    return (
        <div className="bg-white rounded-2xl shadow-md overflow-hidden transform hover:-translate-y-1 transition-all duration-300 cursor-pointer w-64 flex-shrink-0 mr-4" onClick={onClick}>
            <div className="relative">
                <img className="w-full h-32 object-cover" src={deal.images[0]} alt={deal.name} />
                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md">
                    ĐỘC QUYỀN
                </div>
            </div>
            <div className="p-3">
                <p className="text-sm font-semibold text-gray-800 truncate">{deal.store.name}</p>
                <h3 className="font-bold text-gray-800 text-md truncate mt-1">{deal.name}</h3>
                
                <div className="flex items-center text-sm text-gray-500 mt-2">
                    <StarIcon className="w-4 h-4 text-yellow-400 mr-1" />
                    <span>{deal.rating.score}</span>
                    <span className="mx-2 text-gray-300">|</span>
                    <ClockIcon className="w-4 h-4 mr-1" />
                    <span>{deal.pickupTime.split('-')[0].trim()}</span>
                </div>

                <div className="flex justify-between items-center mt-3">
                    <div className="text-left">
                        <p className="text-lg font-extrabold text-green-600">{formatPrice(deal.salePrice)}</p>
                        <p className="text-xs text-gray-400 line-through">{formatPrice(deal.originalPrice)}</p>
                    </div>
                    <div className="text-right text-xs text-orange-600 font-semibold">
                       <p>Còn lại {deal.remaining} túi</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExclusiveDealCard;
