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

const AppLogo: React.FC = () => (
    <div className="text-center mb-8">
        <div className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 p-3 rounded-2xl shadow-lg">
            <span className="text-white font-bold text-4xl leading-none">FC</span>
        </div>
        <h1 className="text-3xl font-bold text-white mt-4 tracking-tight">FoodCycle</h1>
        <p className="text-green-200">Giải cứu món ngon, giá hời</p>
    </div>
);


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
        <div 
          className="relative min-h-screen bg-gray-800 flex flex-col items-center justify-center p-8 bg-cover bg-center" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop')" }}
        >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
            <div className="relative w-full max-w-sm mx-auto z-10">
                <AppLogo />
                {view === 'login' ? (
                    <>
                        <div className="space-y-4">
                             <button
                                onClick={handleZaloLogin}
                                className="w-full bg-[#0068FF] text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center space-x-3"
                            >
                                <ZaloIcon className="w-6 h-6" />
                                <span>Đăng nhập bằng Zalo</span>
                            </button>

                             <div className="flex items-center">
                                <div className="flex-grow border-t border-gray-500"></div>
                                <span className="flex-shrink mx-4 text-gray-300 text-sm">Hoặc đăng nhập thủ công</span>
                                <div className="flex-grow border-t border-gray-500"></div>
                            </div>

                            <form onSubmit={handleTraditionalLogin} className="space-y-4">
                                <div className="relative">
                                    <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Email hoặc Số điện thoại"
                                        value={emailOrPhone}
                                        onChange={(e) => setEmailOrPhone(e.target.value)}
                                        className="w-full p-4 pl-12 bg-gray-800/50 border-2 border-gray-600 text-white rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none focus:bg-gray-700"
                                    />
                                </div>
                                <div className="relative">
                                    <LockClosedIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="password"
                                        placeholder="Mật khẩu"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full p-4 pl-12 bg-gray-800/50 border-2 border-gray-600 text-white rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none focus:bg-gray-700"
                                    />
                                </div>
                                <div className="text-right">
                                    <button
                                        type="button"
                                        onClick={() => setShowForgotPassword(true)}
                                        className="text-sm font-semibold text-green-400 hover:underline"
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
                        
                        <p className="text-sm text-gray-300 mt-8 text-center">
                            Chưa có tài khoản?{' '}
                            <button onClick={switchToRegister} className="font-semibold text-green-400 hover:underline">
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