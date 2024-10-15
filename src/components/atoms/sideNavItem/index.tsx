import React from 'react';
import { SvgIconComponent } from '@mui/icons-material'; // For type safety

type SideNavItemProps = {
    data: {
        icon: SvgIconComponent;
        label: string;
        isActive: boolean;
        handleClick: () => void;
    }
};

export const SideNavItem: React.FC<SideNavItemProps> = ({ data }) => {
    const { icon: Icon, label, isActive, handleClick } = data;
    const _handleClick = () => {
        handleClick()
        console.log('clicked');
    }

    return (
        <div onClick={_handleClick} className={`flex items-center p-2 rounded-lg hover:bg-slate-100 group ${isActive ? 'text-slate-900 font-semibold' : 'text-slate-600'}`}>
            <Icon className={`w-5 h-5 transition duration-75 group-hover:text-slate-900`} />
            <span className="ms-3">{label}</span>
        </div>
    );
};
