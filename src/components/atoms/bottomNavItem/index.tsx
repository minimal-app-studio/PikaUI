import React from 'react';
import { SvgIconComponent } from '@mui/icons-material';

type BottomNavItemProps = {
    data: {
        icon: SvgIconComponent;
        label?: string;
        isActive: boolean;
        handleClick: () => void;
    }
};

export const BottomNavItem: React.FC<BottomNavItemProps> = ({ data }) => {
    const { icon: Icon, label, isActive, handleClick } = data;
    const _handleClick = () => {
        handleClick()
        console.log('clicked');
    }

    return (
        <div onClick={_handleClick} className={`flex flex-col items-center ${label ? '' : 'justify-center'}  p-2 rounded-lg hover:bg-slate-100 group ${isActive ? 'text-slate-900 font-semibold' : 'text-slate-600'}`}>
            <Icon className={`w-4 h-4 transition duration-75 group-hover:text-slate-900`} />
            {label && <span className="ms-3">{label}</span>}
        </div>
    );
};
