import React, { useState } from 'react';
import type { User } from '../types';
import { mockUser } from '../data/mockData';
import { UserIcon, LockClosedIcon, ZaloIcon } from './Icons';
import ForgotPasswordModal from './ForgotPasswordModal';
import RegisterScreen from './RegisterScreen';
// import { getUserInfo } from 'zmp-js';

interface LoginScreenProps {
    onLogin: (user: User) => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
    const [emailOrPhone, setEmailOrPhone] = useState('');
    const [password, setPassword] = useState('');
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [view, setView] = useState<'login' | 'register'>('login');

    const handleTraditionalLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (emailOrPhone && password) {
            console.log('Logging in with:', { emailOrPhone, password });
            onLogin(mockUser);
        } else {
            alert('Vui lòng nhập đầy đủ thông tin.');
        }
    };

    const handleZaloLogin = async () => {
        try {
            // Đây là nơi bạn sẽ gọi Zalo API thật.
            // Vì chúng ta đang ở môi trường giả lập, tôi sẽ mô phỏng dữ liệu trả về.
            // const { userInfo } = await getUserInfo({ avatarType: 'normal' });
            
            // Dữ liệu mô phỏng từ Zalo
            const simulatedUserInfo = {
                id: 'zalo_user_12345',
                name: 'Người dùng Zalo',
            };

            const zaloUser: User = {
                id: simulatedUserInfo.id,
                name: simulatedUserInfo.name,
                // API của Zalo Mini App không cung cấp email/SĐT mặc định
                email: `${simulatedUserInfo.id}@zalo.me`,
                phone: 'N/A',
                role: 'store_owner'
            };
            
            onLogin(zaloUser);

        } catch (error) {
            console.error('Lỗi đăng nhập Zalo:', error);
            // Bạn có thể hiển thị thông báo lỗi cho người dùng ở đây
            alert('Đăng nhập Zalo không thành công. Vui lòng thử lại.');
        }
    };

    const switchToRegister = () => setView('register');
    const switchToLogin = () => setView('login');

    return (
        <div className="flex flex-col min-h-screen bg-white p-8 justify-center">
            <div className="w-full max-w-sm mx-auto">
                {view === 'login' ? (
                    <>
                        <h1 className="text-3xl font-bold text-gray-800 text-center">Đăng nhập</h1>
                        <p className="text-gray-500 mt-2 text-center">Chào mừng bạn quay trở lại!</p>
                        
                        <div className="mt-8 space-y-4">
                             <button
                                onClick={handleZaloLogin}
                                className="w-full bg-[#0068FF] text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center space-x-3"
                            >
                                <ZaloIcon className="w-6 h-6" />
                                <span>Đăng nhập bằng Zalo</span>
                            </button>

                             <div className="flex items-center">
                                <div className="flex-grow border-t border-gray-200"></div>
                                <span className="flex-shrink mx-4 text-gray-400 text-sm">Hoặc đăng nhập thủ công</span>
                                <div className="flex-grow border-t border-gray-200"></div>
                            </div>

                            <form onSubmit={handleTraditionalLogin} className="space-y-4">
                                <div className="relative">
                                    <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Email hoặc Số điện thoại"
                                        value={emailOrPhone}
                                        onChange={(e) => setEmailOrPhone(e.target.value)}
                                        className="w-full p-4 pl-12 bg-gray-100 border-2 border-transparent rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none focus:bg-white"
                                    />
                                </div>
                                <div className="relative">
                                    <LockClosedIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="password"
                                        placeholder="Mật khẩu"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full p-4 pl-12 bg-gray-100 border-2 border-transparent rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none focus:bg-white"
                                    />
                                </div>
                                <div className="text-right">
                                    <button
                                        type="button"
                                        onClick={() => setShowForgotPassword(true)}
                                        className="text-sm font-semibold text-green-600 hover:underline"
                                    >
                                        Quên mật khẩu?
                                    </button>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                                >
                                    Đăng nhập
                                </button>
                            </form>
                        </div>
                        
                        <p className="text-sm text-gray-500 mt-8 text-center">
                            Chưa có tài khoản?{' '}
                            <button onClick={switchToRegister} className="font-semibold text-green-600 hover:underline">
                                Đăng ký ngay
                            </button>
                        </p>
                    </>
                ) : (
                    <RegisterScreen onSwitchToLogin={switchToLogin} onLogin={onLogin} />
                )}
            </div>
            
            <ForgotPasswordModal show={showForgotPassword} onClose={() => setShowForgotPassword(false)} />
        </div>
    );
};

export default LoginScreen;