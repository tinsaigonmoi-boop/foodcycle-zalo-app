import type { Deal, Store, User } from '../types';

const abcBakery: Store = {
    id: 'store-1',
    name: 'ABC Bakery',
    logoUrl: 'https://static.mservice.io/placebrand/s/momo-upload-api-190801163640-636998614004941914.jpg',
    rating: 4.7,
    address: '123 Cách Mạng Tháng Tám, P. Long Toàn, TP. Bà Rịa',
};

const parisBaguette: Store = {
    id: 'store-2',
    name: 'Paris Baguette',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Paris_Baguette_logo.svg/1200px-Paris_Baguette_logo.svg.png',
    rating: 4.9,
    address: '456 Lê Lợi, P. Bến Thành, Q.1, TP. HCM',
};

const freshGarden: Store = {
    id: 'store-3',
    name: 'Fresh Garden',
    logoUrl: 'https://theme.hstatic.net/1000313040/1000882361/14/logo.png?v=116',
    rating: 4.6,
    address: '789 Hai Bà Trưng, P. Tân Định, Q.1, TP. HCM'
};

const kingCoffee: Store = {
    id: 'store-4',
    name: 'King Coffee',
    logoUrl: 'https://cdn.haitrieu.com/wp-content/uploads/2021/10/Logo-King-Coffee-V.png',
    rating: 4.5,
    address: '100 Nguyễn Thị Minh Khai, P.6, Q.3, TP. HCM'
};

export const mockUser: User = {
    id: 'user-123',
    name: 'Trần Bích Phương',
    email: 'phuong.tran@example.com',
    phone: '0912 345 678',
    role: 'store_owner'
};


export const mockDeals: Deal[] = [
    {
        id: 'deal-1',
        store: abcBakery,
        name: 'Túi Bánh Ngọt Bất Ngờ',
        originalPrice: 150000,
        salePrice: 49000,
        distance: 1.2,
        remaining: 3,
        pickupTime: '6:00 CH - 8:00 CH',
        images: [
            'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1587314168485-3236d6710814?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        ],
        rating: {
            score: 4.8,
            reviews: 125,
        },
        description: "Vì đây là những sản phẩm 'cứu trợ' cuối ngày, nên bên trong túi sẽ là một điều bất ngờ thú vị! Chúng tôi không thể kết luận chính xác loại bánh, nhưng thông thường, túi sẽ bao gồm các sản phẩm như:",
        exampleItems: [
            'Bánh sừng bò hoặc bánh cuộn socola',
            'Bánh su kem hoặc bánh tart',
            'Bánh mì các loại',
        ],
        allergyInfo: 'Sản phẩm có chứa sữa, trứng, bột mì, các loại hạt... Vui lòng cân nhắc nếu bạn bị dị ứng thực phẩm.',
        category: 'Bánh ngọt & Tráng miệng'
    },
    {
        id: 'deal-2',
        store: parisBaguette,
        name: 'Túi Cứu Trợ Mặn Mà',
        originalPrice: 200000,
        salePrice: 69000,
        distance: 0.8,
        remaining: 8,
        pickupTime: '7:00 CH - 9:00 CH',
        images: [
            'https://images.unsplash.com/photo-1534790566855-4cb788d389ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1626202157923-9572950552b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        ],
        rating: {
            score: 4.9,
            reviews: 210,
        },
        description: "Một sự kết hợp tuyệt vời giữa các loại bánh mì kẹp, sandwich và bánh mặn khác. Hoàn hảo cho một bữa ăn nhẹ buổi tối hoặc bữa sáng ngày hôm sau.",
        exampleItems: [
            'Sandwich gà nướng',
            'Bánh mì xúc xích phô mai',
            'Pizza mini',
        ],
        allergyInfo: 'Sản phẩm có chứa sữa, trứng, bột mì, thịt. Vui lòng cân nhắc nếu bạn bị dị ứng thực phẩm.',
        category: 'Bánh mì & Sandwich'
    },
    {
        id: 'deal-3',
        store: freshGarden,
        name: 'Hộp Trái Cây Tươi Mát',
        originalPrice: 120000,
        salePrice: 39000,
        distance: 2.5,
        remaining: 12,
        pickupTime: '5:00 CH - 6:00 CH',
        images: [
            'https://images.unsplash.com/photo-1571575294343-963d272aa1b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        ],
        rating: {
            score: 4.7,
            reviews: 88,
        },
        description: "Giải cứu những loại trái cây tươi ngon nhất trong ngày! Mỗi hộp là một sự kết hợp ngẫu nhiên nhưng luôn đảm bảo độ tươi và chất lượng.",
        exampleItems: [
            'Dâu tây, Nho',
            'Dưa hấu, Táo',
            'Chuối, Cam',
        ],
        allergyInfo: 'Chỉ bao gồm trái cây tươi. Không chứa chất gây dị ứng phổ biến.',
        category: 'Rau củ & Trái cây'
    },
    {
        id: 'deal-4',
        store: abcBakery,
        name: 'Túi Cơm Trưa Văn Phòng',
        originalPrice: 100000,
        salePrice: 35000,
        distance: 1.5,
        remaining: 10,
        pickupTime: '12:00 TR - 1:00 CH',
        images: ['https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=2072&auto=format&fit=crop'],
        rating: { score: 4.6, reviews: 75 },
        description: 'Bữa trưa đầy đủ dinh dưỡng với các món mặn, xào, canh được thay đổi mỗi ngày. Giải pháp tiết kiệm và tiện lợi cho dân văn phòng.',
        exampleItems: ['Cơm trắng', 'Thịt kho trứng', 'Rau muống xào tỏi', 'Canh bí đao'],
        allergyInfo: 'Có thể chứa nước mắm, đậu nành. Vui lòng liên hệ để biết thực đơn chi tiết.',
        category: 'Bữa ăn'
    },
    {
        id: 'deal-5',
        store: kingCoffee,
        name: 'Túi Cà Phê Bất Ngờ',
        originalPrice: 130000,
        salePrice: 59000,
        distance: 3.1,
        remaining: 5,
        pickupTime: '3:00 CH - 5:00 CH',
        images: ['https://images.unsplash.com/photo-1511920183353-3c9c940ce5c9?q=80&w=1887&auto=format&fit=crop'],
        rating: { score: 4.8, reviews: 150 },
        description: 'Dành cho tín đồ cà phê! Một túi bất ngờ có thể chứa cà phê pha phin, cà phê ủ lạnh hoặc các loại hạt cà phê rang xay thơm ngon.',
        exampleItems: ['2 ly Cà phê sữa đá', '1 chai Cold Brew', 'Hoặc 1 túi hạt cà phê Robusta 250g'],
        allergyInfo: 'Chứa caffeine và sữa đặc.',
        category: 'Đồ uống'
    },
    {
        id: 'deal-6',
        store: freshGarden,
        name: 'Túi Tạp Hóa Xanh',
        originalPrice: 180000,
        salePrice: 69000,
        distance: 2.2,
        remaining: 7,
        pickupTime: '6:00 CH - 7:00 CH',
        images: ['https://images.unsplash.com/photo-1608686207856-001b95cf60ca?q=80&w=1782&auto=format&fit=crop'],
        rating: { score: 4.7, reviews: 62 },
        description: 'Các sản phẩm tạp hóa cần thiết cho gia đình bạn. Túi có thể bao gồm sữa tươi, trứng, mì gói, và một số gia vị cơ bản.',
        exampleItems: ['1 vỉ trứng gà (10 quả)', '1 lốc sữa tươi tiệt trùng', '2 gói mì ăn liền', 'Rau gia vị'],
        allergyInfo: 'Vui lòng kiểm tra bao bì từng sản phẩm để biết thông tin dị ứng chi tiết.',
        category: 'Tạp hóa'
    }
];