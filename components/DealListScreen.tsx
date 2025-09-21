import React from 'react';
import type { Deal } from '../types';
import DealCard from './DealCard';
import { ChevronLeftIcon } from './Icons';

interface DealListScreenProps {
    title: string;
    deals: Deal[];
    onBack: () => void;
    onSelectDeal: (deal: Deal) => void;
}

const DealListScreen: React.FC<DealListScreenProps> = ({ title, deals, onBack, onSelectDeal }) => {
    return (
        <div className="bg-gray-50 min-h-screen">
            <header className="p-4 bg-white/80 backdrop-blur-sm sticky top-0 z-10 border-b border-gray-100 flex items-center">
                <button onClick={onBack} className="p-2 -ml-2 mr-2">
                    <ChevronLeftIcon className="w-6 h-6 text-gray-700" />
                </button>
                <h1 className="text-xl font-bold text-gray-800 truncate">{title}</h1>
            </header>
            <main className="p-4">
                {deals.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {deals.map(deal => (
                            <DealCard key={deal.id} deal={deal} onClick={() => onSelectDeal(deal)} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-10 bg-white rounded-2xl shadow-sm">
                        <p className="text-gray-500">Không có ưu đãi nào phù hợp.</p>
                        <p className="text-sm text-gray-400 mt-1">Vui lòng kiểm tra lại sau.</p>
                    </div>
                )}
            </main>
        </div>
    );
};

export default DealListScreen;