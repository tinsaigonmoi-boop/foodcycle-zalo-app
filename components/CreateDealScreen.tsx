import React, { useState, useRef } from 'react';
import type { Deal } from '../types';
import { mockDeals } from '../data/mockData'; // To get store info
import { ChevronLeftIcon, SparklesIcon } from './Icons';

interface CreateDealScreenProps {
    onBack: () => void;
    onCreateDeal: (newDeal: Deal) => void;
}

const formatPrice = (price: number) => {
    return price.toLocaleString('vi-VN');
};

const parsePrice = (priceStr: string) => {
    return parseInt(priceStr.replace(/,/g, ''), 10) || 0;
};

const CreateDealScreen: React.FC<CreateDealScreenProps> = ({ onBack, onCreateDeal }) => {
    const [name, setName] = useState('');
    const [originalPrice, setOriginalPrice] = useState('');
    const [salePrice, setSalePrice] = useState('');
    const [remaining, setRemaining] = useState('');
    const [description, setDescription] = useState('');
    const [imagePreview, setImagePreview] = useState<string | null>(null);

    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !salePrice || !remaining || !imagePreview) {
            alert('Vui lòng điền đầy đủ thông tin và tải lên một hình ảnh.');
            return;
        }

        const newDeal: Deal = {
            id: `deal-${Date.now()}`,
            store: mockDeals[0].store, // Using mock store for now
            name,
            originalPrice: parsePrice(originalPrice),
            salePrice: parsePrice(salePrice),
            distance: 0, // Default value
            remaining: parseInt(remaining, 10),
            pickupTime: '6:00 CH - 8:00 CH', // Default value
            images: [imagePreview],
            rating: { score: 0, reviews: 0 }, // Default value
            description,
            exampleItems: [],
            allergyInfo: 'Vui lòng liên hệ cửa hàng để biết thông tin dị ứng.',
            category: 'Mới',
        };

        onCreateDeal(newDeal);
    };
    
    const handlePriceChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/,/g, '');
        if (!isNaN(Number(value))) {
            setter(formatPrice(Number(value)));
        }
    };

    return (
        <div className="absolute inset-0 bg-gray-50 z-20">
            <header className="p-4 bg-white shadow-sm sticky top-0 z-10 flex items-center">
                <button onClick={onBack} className="p-1 -ml-1 mr-3"><ChevronLeftIcon className="w-6 h-6 text-gray-800" /></button>
                <h1 className="text-xl font-bold text-center text-gray-800">Tạo túi giải cứu mới</h1>
            </header>

            <main className="p-4">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div 
                        className="w-full h-48 bg-gray-200 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-300 cursor-pointer"
                        onClick={() => fileInputRef.current?.click()}
                    >
                        {imagePreview ? (
                            <img src={imagePreview} alt="Xem trước" className="w-full h-full object-cover rounded-xl"/>
                        ) : (
                            <div className="text-center text-gray-500">
                                <SparklesIcon className="w-8 h-8 mx-auto"/>
                               <p className="mt-2 font-semibold">Tải ảnh sản phẩm</p>
                               <p className="text-xs">Chụp ảnh hoặc chọn từ thư viện</p>
                            </div>
                        )}
                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleImageUpload}
                            className="hidden"
                            accept="image/*"
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium text-gray-700">Tên túi giải cứu</label>
                        <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="VD: Túi bánh ngọt bất ngờ" className="w-full mt-1 p-3 border border-gray-200 rounded-lg"/>
                    </div>
                    
                    <div className="flex space-x-4">
                        <div className="flex-1">
                            <label className="text-sm font-medium text-gray-700">Giá gốc (VND)</label>
                            <input type="text" value={originalPrice} onChange={handlePriceChange(setOriginalPrice)} placeholder="150,000" className="w-full mt-1 p-3 border border-gray-200 rounded-lg"/>
                        </div>
                        <div className="flex-1">
                             <label className="text-sm font-medium text-gray-700">Giá bán (VND)</label>
                            <input type="text" value={salePrice} onChange={handlePriceChange(setSalePrice)} placeholder="49,000" className="w-full mt-1 p-3 border border-gray-200 rounded-lg"/>
                        </div>
                    </div>

                     <div>
                        <label className="text-sm font-medium text-gray-700">Số lượng túi</label>
                        <input type="number" value={remaining} onChange={e => setRemaining(e.target.value)} placeholder="VD: 5" className="w-full mt-1 p-3 border border-gray-200 rounded-lg"/>
                    </div>
                    
                     <div>
                        <label className="text-sm font-medium text-gray-700">Mô tả ngắn</label>
                        <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Bên trong túi có thể bao gồm..." rows={3} className="w-full mt-1 p-3 border border-gray-200 rounded-lg"></textarea>
                    </div>

                    <div className="pt-4">
                         <button type="submit" className="w-full bg-green-600 text-white font-bold py-3.5 rounded-full shadow-lg">Lưu và Đăng bán</button>
                    </div>
                </form>
            </main>
        </div>
    );
};

export default CreateDealScreen;
