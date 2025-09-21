import React, { useState } from 'react';
import { XMarkIcon, UserIcon, CheckCircleIcon } from './Icons';

interface ForgotPasswordModalProps {
    show: boolean;
    onClose: () => void;
}

const ForgotPasswordModal: React.FC<ForgotPasswordModalProps> = ({ show, onClose }) => {
    const [emailOrPhone, setEmailOrPhone] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate API call to send reset instructions
        console.log(`Password reset requested for: ${emailOrPhone}`);
        setIsSubmitted(true);
    };

    const handleClose = () => {
        onClose();
        // Reset state after a short delay to allow for the closing animation
        setTimeout(() => {
            setIsSubmitted(false);
            setEmailOrPhone('');
        }, 300);
    };

    if (!show) return null;

    return (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 animate-fade-in">
            <div className="bg-white rounded-2xl p-6 w-full max-w-sm relative transform transition-all animate-scale-up">
                <button onClick={handleClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 p-1">
                    <XMarkIcon className="w-6 h-6" />
                </button>
                
                {!isSubmitted ? (
                    <>
                        <h2 className="text-xl font-bold text-gray-800 mb-2">Quên mật khẩu?</h2>
                        <p className="text-sm text-gray-600 mb-6">Đừng lo! Nhập email hoặc số điện thoại của bạn để nhận mật khẩu mới.</p>
                        <form onSubmit={handleSubmit}>
                            <div className="relative">
                                <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Email hoặc Số điện thoại"
                                    value={emailOrPhone}
                                    onChange={(e) => setEmailOrPhone(e.target.value)}
                                    className="w-full p-3 pl-10 bg-gray-100 border-2 border-transparent rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none focus:bg-white"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full mt-4 bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-green-700 transition-all duration-300"
                            >
                                Gửi yêu cầu
                            </button>
                        </form>
                    </>
                ) : (
                    <div className="text-center py-4">
                        <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-4" />
                        <h2 className="text-xl font-bold text-gray-800">Yêu cầu đã được gửi!</h2>
                        <p className="text-sm text-gray-600 mt-2">
                            Vui lòng kiểm tra email hoặc tin nhắn Zalo để nhận mật khẩu mới và đăng nhập lại.
                        </p>
                        <button
                            onClick={handleClose}
                            className="w-full mt-6 bg-gray-200 text-gray-800 font-bold py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors"
                        >
                            Đóng
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ForgotPasswordModal;