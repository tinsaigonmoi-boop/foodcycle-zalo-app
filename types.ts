export interface Store {
    id: string;
    name: string;
    logoUrl: string;
    rating: number;
    address: string;
}

export interface Deal {
    id: string;
    store: Store;
    name: string;
    originalPrice: number;
    salePrice: number;
    distance: number;
    remaining: number;
    pickupTime: string;
    images: string[];
    rating: {
        score: number;
        reviews: number;
    };
    description: string;
    exampleItems: string[];
    allergyInfo: string;
    category: string;
}

export interface User {
    id: string;
    name: string;
    email: string;
    phone: string;
    role?: 'store_owner' | 'customer';
}

export interface CartItem {
    deal: Deal;
    quantity: number;
}