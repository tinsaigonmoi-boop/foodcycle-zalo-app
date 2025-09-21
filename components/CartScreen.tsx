import React from 'react';
// FIX: Corrected import path for CartItem type
import type { CartItem } from '../types';
import { ChevronLeftIcon, ZaloIcon, TrashIcon, ClockIcon, MapPinIcon } from './Icons';

interface CartScreenProps {
    cartItems: CartItem[];
    onBack: () => void;
    onUpdateQuantity: (dealId: string, newQuantity: number) => void;
    onCheckout: () => void;
}

const formatPrice = (price: number) => {
    return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
};

const CartScreen: React.FC<CartScreenProps> = ({ cartItems, onBack, onUpdateQuantity, onCheckout }) => {
    const subtotal = cartItems.reduce((sum, item) => sum + item.deal.salePrice * item.quantity, 0);
    const total = subtotal; // Assuming no service fee for now
    
    const firstItem = cartItems[0];

    if (cartItems.length === 0) {
        return (
            <div className="flex flex-col h-full bg-gray-50">
                <header className="bg-white p-4 border-b border-gray-200 flex items-center shrink-0 z-10">
                    <button onClick={onBack} className="p-1">
                        <ChevronLeftIcon className="w-6 h-6 text-gray-700" />
                    </button>
                    <h1 className="text-lg font-bold text-center flex-1">Giỏ hàng</h1>
                    <div className="w-7"></div> {/* Spacer */}
                </header>
                <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
                     <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-5xl">🛍️</span>
                    </div>
                    <h2 className="text-xl font-semibold text-gray-700 mt-6">Giỏ hàng của bạn còn trống</h2>
                    <p className="text-gray-500 mt-2 max-w-xs">Thêm vài ưu đãi ngon lành để bắt đầu giải cứu thực phẩm nào!</p>
                    <button onClick={onBack} className="mt-6 bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                        Khám phá ngay
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-full bg-gray-50">
            <header className="bg-white p-4 border-b border-gray-200 flex items-center shrink-0 z-10">
                <button onClick={onBack} className="p-1 mr-3">
                    <ChevronLeftIcon className="w-6 h-6 text-gray-700" />
                </button>
                <div className="flex items-center">
                    <img src={firstItem.deal.store.logoUrl} alt={firstItem.deal.store.name} className="w-8 h-8 rounded-full object-cover mr-2" />
                    <div>
                        <p className="text-sm font-bold text-gray-800">{firstItem.deal.store.name}</p>
                        <p className="text-xs text-gray-500">Giỏ hàng</p>
                    </div>
                </div>
            </header>

            <main className="flex-1 overflow-y-auto p-4 space-y-4">
                {/* Product List */}
                <div className="bg-white rounded-2xl shadow-sm p-4 space-y-4">
                    {cartItems.map(item => (
                        <div key={item.deal.id} className="flex items-start space-x-4">
                            <img src={item.deal.images[0]} alt={item.deal.name} className="w-20 h-20 rounded-xl object-cover" />
                            <div className="flex-1">
                                <p className="font-bold text-gray-800 leading-tight">{item.deal.name}</p>
                                <p className="text-lg font-bold text-green-600 mt-1">{formatPrice(item.deal.salePrice)}</p>
                                
                                <div className="flex items-center justify-between mt-2">
                                    <div className="flex items-center border border-gray-200 rounded-full">
                                        <button onClick={() => onUpdateQuantity(item.deal.id, item.quantity - 1)} className="px-3 py-1 text-xl font-bold text-gray-500">-</button>
                                        <span className="px-3 py-1 text-md font-bold">{item.quantity}</span>
                                        <button 
                                          onClick={() => onUpdateQuantity(item.deal.id, item.quantity + 1)} 
                                          className="px-3 py-1 text-xl font-bold text-green-600"
                                          disabled={item.quantity >= item.deal.remaining}
                                        >
                                          +
                                        </button>
                                    </div>
                                    <button onClick={() => onUpdateQuantity(item.deal.id, 0)} className="p-2 text-gray-400 hover:text-red-500">
                                      <TrashIcon className="w-5 h-5"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Pickup Info */}
                <div className="bg-white rounded-2xl shadow-sm p-4">
                    <h2 className="font-semibold text-gray-800 mb-3">Thông tin nhận hàng</h2>
                    <div className="text-sm text-gray-700 space-y-2">
                       <div className="flex items-start">
                           <ClockIcon className="w-4 h-4 mr-3 mt-0.5 text-gray-500 flex-shrink-0" />
                           <p><span className="font-medium">Thời gian:</span> Hôm nay, {firstItem.deal.pickupTime}</p>
                       </div>
                       <div className="flex items-start">
                           <MapPinIcon className="w-4 h-4 mr-3 mt-0.5 text-gray-500 flex-shrink-0" />
                           <p><span className="font-medium">Địa điểm:</span> {firstItem.deal.store.address}</p>
                       </div>
                    </div>
                </div>
            </main>

            <footer className="bg-white/80 border-t border-gray-200 backdrop-blur-sm p-4 rounded-t-2xl shadow-top shrink-0">
                <div className="flex justify-between items-center mb-4">
                    <p className="font-medium text-gray-700">Tổng cộng</p>
                    <p className="text-2xl font-extrabold text-green-600">{formatPrice(total)}</p>
                </div>
                <button 
                    onClick={onCheckout}
                    className="w-full bg-green-600 text-white font-bold py-3.5 rounded-full shadow-lg flex items-center justify-center space-x-2 hover:bg-green-700 transition-colors"
                >
                    <ZaloIcon className="w-6 h-6" />
                    <span>Thanh toán an toàn</span>
                </button>
            </footer>
        </div>
    );
};

export default CartScreen;