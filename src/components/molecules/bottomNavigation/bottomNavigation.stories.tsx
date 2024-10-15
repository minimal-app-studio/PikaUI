import type { StoryObj } from '@storybook/react';
import { BottomNavigation } from '.';
import { BottomNavItem } from '../../atoms/bottomNavItem';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import LoyaltyOutlinedIcon from '@mui/icons-material/LoyaltyOutlined';
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


const navigationsWithLabels = [
    {
        icon: FeedOutlinedIcon,
        label: "News Feed",
    },
    {
        icon: ExploreOutlinedIcon,
        label: "Explore",
    },
    {
        icon: LoyaltyOutlinedIcon,
        label: "Sale",
    },
    {
        icon: NotificationsActiveOutlinedIcon,
        label: "Alerts",
    }
]

const navigationsWithoutLabels = [
    {
        icon: FeedOutlinedIcon,
    },
    {
        icon: ExploreOutlinedIcon,
    },
    {
        icon: LoyaltyOutlinedIcon,
    },
    {
        icon: NotificationsActiveOutlinedIcon,
    }
]


export const WithoutLabels: Story = {
    args: {
        navigations: navigationsWithoutLabels,
        listItem: BottomNavItem,
    },
};

export const WithLabels: Story = {
    args: {
        navigations: navigationsWithLabels,
        listItem: BottomNavItem,
    },
};

