import React from 'react';
import { SvgIconComponent } from '@mui/icons-material'; // For type safety

// Define props for the component
type SideNavigationItemProps = {
    icon: SvgIconComponent; // Material UI Icon component type
    label: string; // Label for the navigation item
    isActive: boolean; // Whether the item is active
    handleClick: () => void; // The function to be called when the item is clicked
};

export const SideNavigationItem: React.FC<SideNavigationItemProps> = ({ icon: Icon, label, isActive, handleClick }) => {
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
