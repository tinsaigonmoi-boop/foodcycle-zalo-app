import React, { useState } from 'react';
import type { Deal } from '../types';
import { HomeIcon, PlusCircleIcon, PencilSquareIcon } from './Icons';
import DealEditorScreen from './DealEditorScreen';

interface StoreAdminScreenProps {
    onSwitchToUser: () => void;
    deals: Deal[];
    onCreateDeal: (newDeal: Deal) => void;
    onUpdateDeal: (updatedDeal: Deal) => void;
}

const formatPrice = (price: number) => {
    return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
};

const StoreDealCard: React.FC<{ deal: Deal; onEdit: () => void }> = ({ deal, onEdit }) => (
    <div className="bg-white rounded-lg shadow-sm p-3 flex items-start space-x-3">
        <img src={deal.images[0]} alt={deal.name} className="w-20 h-20 rounded-md object-cover"/>
        <div className="flex-1">
            <p className="font-bold text-gray-800">{deal.name}</p>
            <p className="text-sm text-gray-500">{deal.remaining} túi còn lại</p>
            <p className="text-md font-semibold text-green-600 mt-1">{formatPrice(deal.salePrice)}</p>
        </div>
        <div className="flex flex-col items-end space-y-2">
             <span className="text-xs font-medium bg-green-100 text-green-700 px-2 py-1 rounded-full">Đang bán</span>
             <button onClick={onEdit} className="p-1 text-gray-500 hover:text-blue-600">
                <PencilSquareIcon className="w-5 h-5" />
             </button>
        </div>
    </div>
);

const StoreAdminScreen: React.FC<StoreAdminScreenProps> = ({ onSwitchToUser, deals, onCreateDeal, onUpdateDeal }) => {
    const [view, setView] = useState<'list' | 'create' | 'edit'>('list');
    const [dealToEdit, setDealToEdit] = useState<Deal | null>(null);

    const handleCreate = (newDeal: Deal) => {
        onCreateDeal(newDeal);
        setView('list');
    };

    const handleUpdate = (updatedDeal: Deal) => {
        onUpdateDeal(updatedDeal);
        setView('list');
        setDealToEdit(null);
    };

    const handleStartEdit = (deal: Deal) => {
        setDealToEdit(deal);
        setView('edit');
    }

    const handleBack = () => {
        setView('list');
        setDealToEdit(null);
    }

    if (view === 'create' || view === 'edit') {
        return (
            <DealEditorScreen 
                onBack={handleBack} 
                onCreateDeal={handleCreate}
                onUpdateDeal={handleUpdate}
                dealToEdit={dealToEdit}
            />
        );
    }

    return (
        <div className="bg-gray-100 min-h-screen">
            <header className="p-4 bg-white shadow-sm sticky top-0 z-10 flex items-center justify-between">
                <h1 className="text-xl font-bold text-gray-800">Quản lý Cửa hàng</h1>
                <button onClick={onSwitchToUser} className="flex items-center text-sm font-medium text-green-600">
                    <HomeIcon className="w-5 h-5 mr-1" />
                    <span>Giao diện người dùng</span>
                </button>
            </header>

            <main className="p-4 space-y-4">
                 <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                        <p className="text-sm text-gray-500">Doanh thu hôm nay</p>
                        <p className="text-2xl font-bold text-gray-800">1.560.000đ</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                        <p className="text-sm text-gray-500">Túi đã bán</p>
                        <p className="text-2xl font-bold text-gray-800">32</p>
                    </div>
                </div>

                <div>
                    <div className="flex justify-between items-center mb-2">
                        <h2 className="text-lg font-semibold text-gray-700">Túi giải cứu đang bán</h2>
                        <button onClick={() => setView('create')} className="flex items-center text-sm font-semibold text-green-600 bg-green-100 px-3 py-1.5 rounded-full">
                            <PlusCircleIcon className="w-5 h-5 mr-1" />
                            <span>Tạo túi mới</span>
                        </button>
                    </div>
                    <div className="space-y-3">
                        {deals.map(deal => (
                            <StoreDealCard key={deal.id} deal={deal} onEdit={() => handleStartEdit(deal)} />
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default StoreAdminScreen;