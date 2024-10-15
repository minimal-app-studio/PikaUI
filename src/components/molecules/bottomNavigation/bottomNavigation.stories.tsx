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

export const appNavigations = [
    {
        item: () => <>
            <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group" >
                <FeedOutlinedIcon fontSize="medium" />
            </button>
        </>,

    },
    {
        item: () => <>
            <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                <ExploreOutlinedIcon fontSize="medium" />
            </button>
        </>,

    },
    {
        item: () => <>
            <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                <LoyaltyOutlinedIcon fontSize="medium" />
            </button>
        </>,

    },
    {
        item: () => <>
            <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group" >
                <NotificationsActiveOutlinedIcon fontSize="medium" />
            </button>
        </>,

    },
]

export const MobileBottomNavigation: Story = {
    args: {
        navigations: appNavigations
    },
};
