import type { StoryObj } from '@storybook/react';
import { BottomNavigation } from '.';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import LoyaltyOutlinedIcon from '@mui/icons-material/LoyaltyOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';

const meta: any = {
    title: 'Molecules/BottomNavigation',
    component: BottomNavigation,
    parameters: {
        layout: 'centered',
        controls: {
            exclude: ["onClick"]
        }
    },
    tags: ['autodocs']
}

export default meta;

type Story = StoryObj<typeof meta>;



const navigations = [
    {
        icon: FeedOutlinedIcon,
        onClick: () => {
            console.log('Home');
        }
    },
    {
        icon: ExploreOutlinedIcon,
        onClick: () => {
            console.log('Explore');
        }
    },
    {
        icon: LoyaltyOutlinedIcon,
        onClick: () => {
            console.log('Sale');
        }
    },
    {
        icon: NotificationsActiveOutlinedIcon,
        onClick: () => {
            console.log('Alerts');
        }
    },
]


export const Default: Story = {
    args: {
        navigations: navigations
    },
};
