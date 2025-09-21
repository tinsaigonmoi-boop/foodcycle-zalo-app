import React, { useState } from 'react';
import type { Deal } from '../types';
import { ChevronLeftIcon, MapPinIcon, ClockIcon, StarIcon } from './Icons';

interface ProductDetailScreenProps {
    deal: Deal;
    onBack: () => void;
    onAddToCart: (deal: Deal, quantity: number) => void;
}

const formatPrice = (price: number) => {
    return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
};

const ProductDetailScreen: React.FC<ProductDetailScreenProps> = ({ deal, onBack, onAddToCart }) => {
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        onAddToCart(deal, quantity);
    };

    const increaseQuantity = () => {
        if (quantity < deal.remaining) {
            setQuantity(q => q + 1);
        }
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(q => q - 1);
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-white pb-24">
            <div className="relative">
                <img src={deal.images[0]} alt={deal.name} className="w-full h-64 object-cover" />
                <button onClick={onBack} className="absolute top-4 left-4 bg-white/80 rounded-full p-2 backdrop-blur-sm">
                    <ChevronLeftIcon className="w-6 h-6 text-gray-800" />
                </button>
            </div>

            <main className="p-4 flex-1">
                <div className="flex justify-between items-start">
                    <h1 className="text-2xl font-bold text-gray-800">{deal.name}</h1>
                    <div className="flex items-center space-x-2">
                        <p className="text-2xl font-bold text-green-600">{formatPrice(deal.salePrice)}</p>
                        <p className="text-md text-gray-400 line-through">{formatPrice(deal.originalPrice)}</p>
                    </div>
                </div>
                <p className="text-md text-gray-600 mt-1">Bởi {deal.store.name}</p>

                <div className="flex items-center mt-2 text-sm text-gray-600">
                    <StarIcon className="w-5 h-5 text-yellow-400 mr-1" />
                    <span className="font-bold">{deal.rating.score}</span>
                    <span className="mx-2">·</span>
                    <span>{deal.rating.reviews} đánh giá</span>
                </div>

                <div className="border-t border-b border-gray-200 my-4 py-4 space-y-3 text-gray-700">
                     <div className="flex items-center">
                        <ClockIcon className="w-5 h-5 mr-3 text-gray-500" />
                        <span>Hôm nay, {deal.pickupTime}</span>
                    </div>
                     <div className="flex items-center">
                        <MapPinIcon className="w-5 h-5 mr-3 text-gray-500" />
                        <span>{deal.store.address}</span>
                    </div>
                </div>

                <div>
                    <h2 className="text-lg font-bold mb-2">Thông tin sản phẩm</h2>
                    <p className="text-gray-600">{deal.description}</p>
                    <ul className="list-disc list-inside mt-2 text-gray-600 space-y-1">
                        {deal.exampleItems.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                </div>
                
                <div className="mt-4">
                    <h3 className="text-md font-bold mb-2">Thông tin dị ứng</h3>
                    <p className="text-sm text-gray-600 bg-yellow-50 p-3 rounded-lg border border-yellow-200">{deal.allergyInfo}</p>
                </div>
            </main>

            <footer className="fixed bottom-0 left-0 right-0 bg-white/80 border-t border-gray-200 backdrop-blur-sm p-4 max-w-sm mx-auto">
                <div className="flex justify-between items-center">
                    <div className="flex items-center border rounded-lg bg-white">
                        <button onClick={decreaseQuantity} className="px-4 py-3 text-xl font-bold text-gray-600">-</button>
                        <span className="px-5 py-3 text-lg font-bold">{quantity}</span>
                        <button onClick={increaseQuantity} className="px-4 py-3 text-xl font-bold text-gray-600">+</button>
                    </div>
                    <button 
                        onClick={handleAddToCart}
                        className="flex-1 ml-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                    >
                        Thêm vào giỏ ({formatPrice(deal.salePrice * quantity)})
                    </button>
                </div>
            </footer>
        </div>
    );
};

export default ProductDetailScreen;