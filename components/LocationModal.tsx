import React from 'react';
import { XMarkIcon } from './Icons';

interface LocationModalProps {
    show: boolean;
    onClose: () => void;
}

const LocationModal: React.FC<LocationModalProps> = ({ show, onClose }) => {
    if (!show) return null;

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl p-6 w-full max-w-sm relative">
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800">
                    <XMarkIcon className="w-6 h-6" />
                </button>
                <h2 className="text-xl font-bold mb-4">Chọn địa điểm</h2>
                <p>Tính năng chọn địa điểm đang được phát triển. Vui lòng quay lại sau!</p>
            </div>
        </div>
    );
};

export default LocationModal;
