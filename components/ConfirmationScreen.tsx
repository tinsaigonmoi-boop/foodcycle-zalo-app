import React from 'react';
import { CheckCircleIcon } from './Icons';

interface ConfirmationScreenProps {
    onContinueShopping: () => void;
}

const ConfirmationScreen: React.FC<ConfirmationScreenProps> = ({ onContinueShopping }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center p-8 bg-white">
            <CheckCircleIcon className="w-24 h-24 text-green-500 mb-6" />
            <h1 className="text-2xl font-bold text-gray-800">Đặt hàng thành công!</h1>
            <p className="text-gray-600 mt-2">
                Cảm ơn bạn đã giải cứu những món ăn ngon.
                Vui lòng đến cửa hàng đúng giờ để nhận hàng nhé!
            </p>
            <button
                onClick={onContinueShopping}
                className="mt-8 w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
            >
                Tiếp tục khám phá
            </button>
        </div>
    );
};

export default ConfirmationScreen;