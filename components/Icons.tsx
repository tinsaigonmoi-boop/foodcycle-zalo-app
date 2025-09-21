import React from 'react';

const iconProps = {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
};

export const MapPinIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...iconProps} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
);

export const ClockIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...iconProps} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

export const StarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...iconProps} {...props} fill="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.324l5.584.41a.563.563 0 01.31.958l-4.232 3.722a.563.563 0 00-.172.53l1.255 5.432a.563.563 0 01-.844.62l-4.991-2.922a.563.563 0 00-.578 0l-4.99 2.922a.563.563 0 01-.844-.62l1.255-5.432a.563.563 0 00-.172-.53L2.054 9.292a.563.563 0 01.31-.958l5.584-.41a.563.563 0 00.475-.324L11.48 3.5z" />
    </svg>
);

export const HeartIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...iconProps} {...props} fill="currentColor" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
);

export const ChevronLeftIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...iconProps} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
    </svg>
);

export const ZaloIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24Z" fill="#0068FF"/>
        <path d="M24.707 12.321L14.473 35.679H20.536L23.953 27.23H32.015L28.598 35.679H34.66L24.707 12.321ZM25.044 19.347L29.74 29.35H20.347L25.044 19.347Z" fill="white"/>
    </svg>
);


export const CheckCircleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...iconProps} {...props} fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </svg>
);

export const HomeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...iconProps} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h7.5" />
  </svg>
);

export const MagnifyingGlassIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...iconProps} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
  </svg>
);

export const ShoppingCartIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...iconProps} {...props}>
     <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c.51 0 .962-.343 1.087-.835l1.823-6.836a.5.5 0 00-.44-.642H6.241m11.218 0a2.25 2.25 0 01-2.25 2.25h-6.75a2.25 2.25 0 01-2.25-2.25L5.25 3H3.75" />
  </svg>
);

export const UserIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...iconProps} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>
);

export const ArrowRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...iconProps} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
);

export const XMarkIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...iconProps} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

export const BoltIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...iconProps} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
);

export const SparklesIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...iconProps} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM18 15.75l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 20l-1.035.259a3.375 3.375 0 00-2.456 2.456L18 23.75l-.259-1.035a3.375 3.375 0 00-2.456-2.456L14.25 20l1.036-.259a3.375 3.375 0 002.455-2.456L18 15.75z" />
    </svg>
);

export const BanknotesIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...iconProps} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.75A.75.75 0 013 4.5h.75m0 0h.75A.75.75 0 015.25 6v.75m0 0v.75a.75.75 0 01-.75.75h-.75m0 0H3.75m0 0h.75m1.5-1.5H5.25m14.25-7.5v17.25c0 .623-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 013 18.75V5.625c0-.623.504-1.125 1.125-1.125h14.25c.621 0 1.125.504 1.125 1.125zM12 15v.01M15 12v.01M12 9v.01M9 12v.01M15 15v.01M9 15v.01" />
    </svg>
);

export const LeafIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...iconProps} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.385m5.043.025a15.994 15.994 0 001.622-3.385m3.388 1.62a15.994 15.994 0 003.388-1.62m-1.62-3.385a15.994 15.994 0 00-1.622-3.385m-5.043.025a15.994 15.994 0 01-1.622-3.385M6.75 12a.75.75 0 00-.75.75v3.75a.75.75 0 00.75.75h3.75a.75.75 0 00.75-.75v-3.75a.75.75 0 00-.75-.75H6.75z" />
    </svg>
);

export const UserCircleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...iconProps} {...props} >
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

export const ShoppingBagIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...iconProps} {...props} >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.658-.463 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
    </svg>
);

export const PencilSquareIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...iconProps} {...props} >
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
    </svg>
);

export const CreditCardIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...iconProps} {...props} >
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h6m3-3.75l-3 3m3 0l-3-3m-3.75 3.75h6.75A2.25 2.25 0 0021 16.5V7.5A2.25 2.25 0 0018.75 5.25h-13.5A2.25 2.25 0 003 7.5v9A2.25 2.25 0 005.25 18.75h6.75" />
    </svg>
);

export const QuestionMarkCircleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...iconProps} {...props} >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
    </svg>
);

export const ArrowLeftOnRectangleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...iconProps} {...props} >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
    </svg>
);

export const ChevronRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...iconProps} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
);

export const PlusCircleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...iconProps} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

export const HomeModernIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...iconProps} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h7.5" />
    </svg>
);

export const ChevronDownIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...iconProps} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
);

export const TrashIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...iconProps} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12.548 0A48.108 48.108 0 016.25 5.393m0 0a48.108 48.108 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.108 48.108 0 00-7.5 0" />
    </svg>
);

export const LockClosedIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...iconProps} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 00-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H4.5a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
    </svg>
);

export const FingerPrintIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...iconProps} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 12c0 2.252-.966 4.29-2.573 5.756m-4.823-4.823a3 3 0 013.39 3.39M15 12a3 3 0 11-6 0 3 3 0 016 0zM12 12v9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.75v.007A7.5 7.5 0 0119.5 12c0 .245-.015.486-.043.723" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12a8.25 8.25 0 0014.152 5.517 8.25 8.25 0 00-8.652-12.012A8.25 8.25 0 003.75 12z" />
    </svg>
);

export const GoogleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/>
        <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"/>
        <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.223 0-9.641-3.657-11.303-8.625l-6.571 4.818C9.656 39.663 16.318 44 24 44z"/>
        <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C42.022 35.021 44 30.021 44 24c0-1.341-.138-2.65-.389-3.917z"/>
    </svg>
);

export const EnvelopeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...iconProps} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
);

export const PhoneIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...iconProps} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.211-.992-.584-1.33l-3.952-3.693a2.25 2.25 0 00-3.182.025l-.42.42a.75.75 0 01-1.06 0l-4.158-4.158a.75.75 0 010-1.06l.42-.42a2.25 2.25 0 00.025-3.182L6.53 3.32a2.25 2.25 0 00-1.33-.584H3.75A2.25 2.25 0 001.5 5.25v1.5z" />
    </svg>
);