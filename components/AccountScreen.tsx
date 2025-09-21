import React, { useState } from 'react';
import type { User } from '../types';
import { 
    UserCircleIcon, 
    ShoppingBagIcon, 
    BanknotesIcon, 
    PencilSquareIcon,
    CreditCardIcon,
    HomeModernIcon,
    QuestionMarkCircleIcon,
    ArrowLeftOnRectangleIcon,
    ChevronRightIcon,
    ZaloIcon,
    XMarkIcon,
    PlusCircleIcon,
    ChevronDownIcon,
    ChevronLeftIcon,
    HomeIcon, // Using HomeIcon for store view switch
    PhoneIcon
} from './Icons';

// --- Reusable Components ---

interface StatCardProps {
    icon: React.ElementType;
    value: string;
    label: string;
    color: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon: Icon, value, label, color }) => (
    <div className="flex items-center p-3 bg-white rounded-xl shadow-sm w-full">
        <div className={`p-2 rounded-lg ${color}`}>
            <Icon className="w-6 h-6 text-white" />
        </div>
        <div className="ml-3">
            <p className="text-lg font-bold text-gray-800">{value}</p>
            <p className="text-xs text-gray-500">{label}</p>
        </div>
    </div>
);

interface ListItemProps {
    icon: React.ElementType;
    label: string;
    onClick?: () => void;
    children?: React.ReactNode;
}

const ListItem: React.FC<ListItemProps> = ({ icon: Icon, label, onClick, children }) => (
    <button onClick={onClick} className="flex items-center w-full text-left py-3 px-1 hover:bg-gray-50 rounded-lg transition-colors">
        <Icon className="w-6 h-6 text-gray-500 mr-4"/>
        <span className="flex-1 font-medium text-gray-700">{label}</span>
        {children || <ChevronRightIcon className="w-5 h-5 text-gray-400" />}
    </button>
);

interface ModalProps {
    title: string;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ title, onClose, children }) => (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-end justify-center">
        <div className="bg-gray-100 rounded-t-2xl p-4 w-full max-w-sm animate-slide-up">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-gray-800">{title}</h3>
                <button onClick={onClose} className="p-1 rounded-full bg-gray-200 hover:bg-gray-300">
                    <XMarkIcon className="w-5 h-5 text-gray-600" />
                </button>
            </div>
            {children}
        </div>
    </div>
);


// --- Specific Views & Modals ---

const SupportCenterView: React.FC<{ onBack: () => void }> = ({ onBack }) => {
    const [openAccordion, setOpenAccordion] = useState<string | null>(null);

    const toggleAccordion = (id: string) => {
        setOpenAccordion(openAccordion === id ? null : id);
    };

    const faqs = [
        { id: 'q1', q: 'Làm thế nào để đặt hàng?', a: 'Để đặt hàng, bạn chỉ cần chọn ưu đãi, thêm vào giỏ hàng và tiến hành thanh toán. Sau đó đến cửa hàng vào khung giờ quy định để nhận túi của bạn.' },
        { id: 'q2', q: 'Chính sách hoàn tiền hoạt động ra sao?', a: 'Chúng tôi chỉ hỗ trợ hoàn tiền trong trường hợp cửa hàng đóng cửa đột xuất hoặc không thể giao đơn hàng của bạn. Vui lòng liên hệ bộ phận hỗ trợ để được giúp đỡ.' },
        { id: 'q3', q: 'Tôi có thể đổi hoặc trả hàng không?', a: 'Vì các sản phẩm là thực phẩm giải cứu cuối ngày, chúng tôi không áp dụng chính sách đổi hoặc trả hàng sau khi bạn đã nhận túi. Mong bạn thông cảm.' },
    ];
    
    return (
        <div className="absolute inset-0 bg-gray-50 z-20">
            <header className="p-4 bg-white shadow-sm sticky top-0 z-10 flex items-center">
                <button onClick={onBack} className="p-1 -ml-1 mr-3"><ChevronLeftIcon className="w-6 h-6"/></button>
                <h1 className="text-xl font-bold text-center text-gray-800">Trung tâm hỗ trợ</h1>
            </header>
            <main className="p-4 space-y-4">
                {faqs.map(faq => (
                    <div key={faq.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                        <button onClick={() => toggleAccordion(faq.id)} className="w-full flex justify-between items-center p-4 text-left font-medium">
                            <span>{faq.q}</span>
                            <ChevronDownIcon className={`w-5 h-5 transition-transform ${openAccordion === faq.id ? 'transform rotate-180' : ''}`} />
                        </button>
                        {openAccordion === faq.id && (
                            <div className="px-4 pb-4 text-gray-600 text-sm">
                                {faq.a}
                            </div>
                        )}
                    </div>
                ))}
            </main>
        </div>
    );
};

const AddPaymentMethodModal: React.FC<{ type: 'card' | 'wallet'; onClose: () => void; }> = ({ type, onClose }) => {
    const title = type === 'card' ? 'Thêm thẻ ngân hàng' : 'Thêm ví điện tử';
    return (
        <Modal title={title} onClose={onClose}>
            <div className="bg-white p-4 rounded-lg">
                <form className="space-y-4">
                     {type === 'card' ? (
                        <>
                            <div>
                                <label className="text-xs font-medium text-gray-500">Số thẻ</label>
                                <input type="text" placeholder="**** **** **** ****" className="w-full mt-1 p-2 border border-gray-200 rounded-lg"/>
                            </div>
                             <div>
                                <label className="text-xs font-medium text-gray-500">Tên chủ thẻ</label>
                                <input type="text" placeholder="NGUYEN VAN A" className="w-full mt-1 p-2 border border-gray-200 rounded-lg"/>
                            </div>
                             <div className="flex space-x-4">
                                <div className="flex-1">
                                    <label className="text-xs font-medium text-gray-500">Ngày hết hạn</label>
                                    <input type="text" placeholder="MM/YY" className="w-full mt-1 p-2 border border-gray-200 rounded-lg"/>
                                </div>
                                <div className="flex-1">
                                    <label className="text-xs font-medium text-gray-500">CVV</label>
                                    <input type="text" placeholder="***" className="w-full mt-1 p-2 border border-gray-200 rounded-lg"/>
                                </div>
                            </div>
                        </>
                    ) : (
                         <div>
                            <label className="text-xs font-medium text-gray-500">Số điện thoại liên kết</label>
                            <input type="tel" placeholder="Nhập số điện thoại" className="w-full mt-1 p-2 border border-gray-200 rounded-lg"/>
                        </div>
                    )}
                    <button type="button" onClick={onClose} className="w-full bg-green-600 text-white font-bold py-2.5 rounded-lg">Thêm</button>
                </form>
            </div>
        </Modal>
    )
};


const PaymentModal: React.FC<{ onClose: () => void; onAddMethod: (type: 'card' | 'wallet') => void; }> = ({ onClose, onAddMethod }) => (
    <Modal title="Phương thức thanh toán" onClose={onClose}>
        <div className="space-y-3">
             <div className="bg-white p-3 rounded-lg flex justify-between items-center">
                <div className="flex items-center">
                    <ZaloIcon className="w-6 h-6 mr-3" />
                    <span className="font-medium">ZaloPay</span>
                </div>
                <span className="text-sm text-green-600 font-semibold">Mặc định</span>
            </div>
             <button onClick={() => onAddMethod('card')} className="w-full flex items-center bg-white p-3 rounded-lg text-left text-green-600 font-semibold">
                <PlusCircleIcon className="w-6 h-6 mr-3"/>
                Thêm thẻ ngân hàng
            </button>
             <button onClick={() => onAddMethod('wallet')} className="w-full flex items-center bg-white p-3 rounded-lg text-left text-green-600 font-semibold">
                <PlusCircleIcon className="w-6 h-6 mr-3"/>
                Thêm ví điện tử
            </button>
            <button className="w-full flex items-center bg-white p-3 rounded-lg text-left">
                <BanknotesIcon className="w-6 h-6 mr-3 text-gray-500"/>
                Thanh toán bằng tiền mặt
            </button>
        </div>
    </Modal>
);

const AddressModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const addresses = [
        { id: '1', type: 'Nhà riêng', address: '123 Cách Mạng Tháng Tám, P. Long Toàn, TP. Bà Rịa' },
        { id: '2', type: 'Công ty', address: '456 Lê Lợi, P. Bến Thành, Quận 1, TP. HCM' },
    ];
    return (
        <Modal title="Địa chỉ đã lưu" onClose={onClose}>
            <div className="space-y-3">
                {addresses.map(addr => (
                    <div key={addr.id} className="bg-white p-3 rounded-lg">
                        <p className="font-bold text-sm">{addr.type}</p>
                        <p className="text-gray-600 text-sm">{addr.address}</p>
                    </div>
                ))}
                <button className="w-full flex items-center bg-white p-3 rounded-lg text-left text-green-600 font-semibold">
                    <PlusCircleIcon className="w-6 h-6 mr-3"/>
                    Thêm địa chỉ mới
                </button>
            </div>
        </Modal>
    );
};


const LogoutModal: React.FC<{ onConfirm: () => void; onCancel: () => void; }> = ({ onConfirm, onCancel }) => (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl p-6 w-full max-w-sm text-center">
            <h3 className="text-lg font-bold text-gray-800">Đăng xuất</h3>
            <p className="text-gray-600 my-4">Bạn có chắc chắn muốn đăng xuất không?</p>
            <div className="flex space-x-4">
                <button onClick={onCancel} className="flex-1 bg-gray-200 text-gray-800 font-bold py-2.5 rounded-lg">Hủy</button>
                <button onClick={onConfirm} className="flex-1 bg-red-500 text-white font-bold py-2.5 rounded-lg">Đăng xuất</button>
            </div>
        </div>
    </div>
);

const HotlineModal: React.FC<{ onConfirm: () => void; onCancel: () => void; }> = ({ onConfirm, onCancel }) => (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl p-6 w-full max-w-sm text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <PhoneIcon className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-800">Gọi tổng đài?</h3>
            <p className="text-gray-600 my-2">Bạn có muốn gọi đến số hotline <br/> <span className="font-bold text-gray-800">08.22.00.78.78</span> không?</p>
            <div className="flex space-x-4 mt-4">
                <button onClick={onCancel} className="flex-1 bg-gray-200 text-gray-800 font-bold py-2.5 rounded-lg">Hủy</button>
                <button onClick={onConfirm} className="flex-1 bg-green-600 text-white font-bold py-2.5 rounded-lg">Gọi</button>
            </div>
        </div>
    </div>
);

// --- Main Account Screen Component ---

interface AccountScreenProps {
    user: User;
    onLogout: () => void;
    onSwitchToStore: () => void;
}

const AccountScreen: React.FC<AccountScreenProps> = ({ user, onLogout, onSwitchToStore }) => {
    const [activeView, setActiveView] = useState<'main' | 'support'>('main');
    const [isModalOpen, setModalOpen] = useState<'payment' | 'address' | 'logout' | 'hotline' | null>(null);
    const [addPaymentModalType, setAddPaymentModalType] = useState<'card' | 'wallet' | null>(null);
    
    // Check if the logged-in user is a store owner based on their role
    const isStoreOwner = user.role === 'store_owner';

    const handleLogoutConfirm = () => {
        setModalOpen(null);
        onLogout();
    };

    const handleOpenAddPaymentMethod = (type: 'card' | 'wallet') => {
        setModalOpen(null);
        setAddPaymentModalType(type);
    };
    
    const handleCallHotlineConfirm = () => {
        setModalOpen(null);
        window.location.href = 'tel:0822007878';
    };

    return (
        <div className="bg-gray-50 min-h-screen relative">
            {activeView === 'main' && (
                <>
                    <header className="p-4 bg-white shadow-sm sticky top-0 z-10">
                        <h1 className="text-xl font-bold text-center text-gray-800">Tài khoản</h1>
                    </header>
                    
                    <main className="p-4 space-y-6">
                        <section className="flex flex-col items-center text-center">
                            <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200 ring-4 ring-white shadow-md">
                                <img 
                                    src={`https://api.dicebear.com/8.x/initials/svg?seed=${encodeURIComponent(user.name)}`} 
                                    alt="User Avatar" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h2 className="text-2xl font-bold mt-3 text-gray-800">{user.name}</h2>
                            <div className="flex w-full space-x-4 mt-4">
                                <StatCard icon={ShoppingBagIcon} value="25" label="Túi đã cứu" color="bg-green-500" />
                                <StatCard icon={BanknotesIcon} value="1.250K" label="Đã tiết kiệm" color="bg-orange-500" />
                            </div>
                        </section>

                        <section className="bg-white rounded-2xl shadow-sm p-4">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-lg font-bold text-gray-800">Thông tin cá nhân</h3>
                                <PencilSquareIcon className="w-5 h-5 text-gray-500" />
                            </div>
                            <form className="space-y-4">
                                <div>
                                    <label className="text-xs font-medium text-gray-500">Họ và tên</label>
                                    <input type="text" name="name" value={user.name} readOnly className="w-full mt-1 p-2 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none"/>
                                </div>
                                <div>
                                    <label className="text-xs font-medium text-gray-500">Email</label>
                                    <input type="email" name="email" value={user.email} readOnly className="w-full mt-1 p-2 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none"/>
                                </div>
                                <div>
                                    <label className="text-xs font-medium text-gray-500">Số điện thoại</label>
                                    <input type="tel" name="phone" value={user.phone} readOnly className="w-full mt-1 p-2 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none"/>
                                </div>
                                <button type="button" className="w-full bg-green-600 text-white font-bold py-2.5 rounded-lg hover:bg-green-700 transition-colors">
                                    Lưu thay đổi
                                </button>
                            </form>
                        </section>
                        
                        <section className="bg-white rounded-2xl shadow-sm p-3 divide-y divide-gray-100">
                            <ListItem icon={CreditCardIcon} label="Phương thức thanh toán" onClick={() => setModalOpen('payment')} />
                            <ListItem icon={HomeModernIcon} label="Địa chỉ đã lưu" onClick={() => setModalOpen('address')} />
                        </section>

                        <section className="bg-white rounded-2xl shadow-sm p-3 divide-y divide-gray-100">
                            {isStoreOwner && (
                               <ListItem icon={HomeIcon} label="Chuyển sang Giao diện Cửa hàng" onClick={onSwitchToStore} />
                            )}
                            <ListItem icon={QuestionMarkCircleIcon} label="Trung tâm hỗ trợ" onClick={() => setActiveView('support')} />
                            <ListItem icon={PhoneIcon} label="Liên hệ hotline: 08.22.00.78.78" onClick={() => setModalOpen('hotline')}>
                                 <div/>
                            </ListItem>
                            <ListItem icon={ArrowLeftOnRectangleIcon} label="Đăng xuất" onClick={() => setModalOpen('logout')}>
                                 <div/>
                            </ListItem>
                        </section>
                    </main>
                </>
            )}

            {activeView === 'support' && <SupportCenterView onBack={() => setActiveView('main')} />}
            
            {isModalOpen === 'payment' && <PaymentModal onClose={() => setModalOpen(null)} onAddMethod={handleOpenAddPaymentMethod} />}
            {isModalOpen === 'address' && <AddressModal onClose={() => setModalOpen(null)} />}
            {isModalOpen === 'logout' && <LogoutModal onConfirm={handleLogoutConfirm} onCancel={() => setModalOpen(null)} />}
            {isModalOpen === 'hotline' && <HotlineModal onConfirm={handleCallHotlineConfirm} onCancel={() => setModalOpen(null)} />}
            {addPaymentModalType && <AddPaymentMethodModal type={addPaymentModalType} onClose={() => setAddPaymentModalType(null)} />}
        </div>
    );
};

export default AccountScreen;