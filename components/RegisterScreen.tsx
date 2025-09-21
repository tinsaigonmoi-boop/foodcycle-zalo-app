import React, { useState } from 'react';
import { UserIcon, EnvelopeIcon, PhoneIcon, LockClosedIcon, ZaloIcon } from './Icons';
import type { User } from '../types';
// import { getUserInfo } from 'zmp-js';


interface RegisterScreenProps {
    onSwitchToLogin: () => void;
    onLogin: (user: User) => void; // Pass onLogin to automatically log in after Zalo registration
}

const RegisterScreen: React.FC<RegisterScreenProps> = ({ onSwitchToLogin, onLogin }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleZaloRegister = async () => {
         try {
            // Mô phỏng việc gọi API Zalo để lấy thông tin người dùng
            // const { userInfo } = await getUserInfo({ avatarType: 'normal' });
            const simulatedUserInfo = {
                id: 'zalo_user_12345',
                name: 'Người dùng Zalo',
            };

            const zaloUser: User = {
                id: simulatedUserInfo.id,
                name: simulatedUserInfo.name,
                email: `${simulatedUserInfo.id}@zalo.me`,
                phone: 'N/A'
            };
            
            // Tự động đăng nhập người dùng sau khi đăng ký thành công
            onLogin(zaloUser);

        } catch (error) {
            console.error('Lỗi đăng ký Zalo:', error);
            alert('Đăng ký qua Zalo không thành công. Vui lòng thử lại.');
        }
    };

    const handleTraditionalRegister = (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Mật khẩu không khớp!");
            return;
        }
        console.log("Creating account with:", { name, email, phone, password });
        alert("Tạo tài khoản thành công! Vui lòng đăng nhập.");
        onSwitchToLogin();
    };

    return (
        <>
            <h1 className="text-3xl font-bold text-gray-800 text-center">Tạo tài khoản</h1>
            <p className="text-gray-500 mt-2 text-center">Nhanh chóng và tiện lợi!</p>

            <div className="mt-8 space-y-4">
                <button
                    onClick={handleZaloRegister}
                    className="w-full bg-[#0068FF] text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center space-x-3"
                >
                    <ZaloIcon className="w-6 h-6" />
                    <span>Đăng ký nhanh bằng Zalo</span>
                </button>

                <div className="flex items-center">
                    <div className="flex-grow border-t border-gray-200"></div>
                    <span className="flex-shrink mx-4 text-gray-400 text-sm">Hoặc đăng ký thủ công</span>
                    <div className="flex-grow border-t border-gray-200"></div>
                </div>

                <form onSubmit={handleTraditionalRegister} className="space-y-4">
                    <div className="relative">
                        <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Họ và tên"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full p-4 pl-12 bg-gray-100 border-2 border-transparent rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none focus:bg-white"
                        />
                    </div>
                     <div className="relative">
                        <EnvelopeIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="email"
                            placeholder="Địa chỉ email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                    <div className="relative">
                        <LockClosedIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="password"
                            placeholder="Xác nhận mật khẩu"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full p-4 pl-12 bg-gray-100 border-2 border-transparent rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none focus:bg-white"
                        />
                    </div>
                    
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                    >
                        Tạo tài khoản
                    </button>
                </form>
            </div>


            <p className="text-sm text-gray-500 mt-8 text-center">
                Đã có tài khoản?{' '}
                <button onClick={onSwitchToLogin} className="font-semibold text-green-600 hover:underline">
                    Đăng nhập ngay
                </button>
            </p>
        </>
    );
};

export default RegisterScreen;