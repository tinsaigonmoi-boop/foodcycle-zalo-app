import React from 'react';

// The categories are chosen to align with mockData and provide a good user experience.
const categories = [
    { name: 'Tất cả', icon: '🍲' },
    { name: 'Bánh ngọt', icon: '🍰' },
    { name: 'Bánh mì', icon: '🥪' },
    { name: 'Rau củ', icon: '🥕' },
    { name: 'Bữa ăn', icon: '🍝' },
    { name: 'Tạp hóa', icon: '🛍️' },
];

interface CategoryIconsProps {
    selectedCategory: string;
    onSelectCategory: (category: string) => void;
}

const CategoryIcons: React.FC<CategoryIconsProps> = ({ selectedCategory, onSelectCategory }) => {
    return (
        <div className="my-4">
            <div className="flex justify-between items-center overflow-x-auto space-x-4 pb-2">
                {categories.map((category) => {
                    const isActive = selectedCategory === category.name;
                    return (
                        <div 
                            key={category.name} 
                            onClick={() => onSelectCategory(category.name)}
                            className="flex flex-col items-center flex-shrink-0 w-20 cursor-pointer group"
                            role="button"
                            tabIndex={0}
                            aria-pressed={isActive}
                            onKeyPress={(e) => { if (e.key === 'Enter') onSelectCategory(category.name)}}
                        >
                            <div className={`flex items-center justify-center w-14 h-14 rounded-2xl transition-all duration-200 ease-in-out transform group-hover:scale-105 ${isActive ? 'bg-green-100' : 'bg-gray-100 group-hover:bg-green-50'}`}>
                               <span className="text-3xl">{category.icon}</span>
                            </div>
                            <p className={`mt-2 text-xs text-center font-medium transition-colors ${isActive ? 'text-green-700 font-bold' : 'text-gray-600 group-hover:text-green-600'}`}>{category.name}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default CategoryIcons;