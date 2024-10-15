import type { StoryObj, Meta } from '@storybook/react';
import { SideNavItem } from '.';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';

const meta: Meta<typeof SideNavItem> = {
    title: 'Atoms/SideNavItem',
    component: SideNavItem,
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


export const NewsFeed: Story = {
    args: {
        data: {
            icon: FeedOutlinedIcon,
            label: "News Feed",
            isActive: false,
            handleClick: () => {
                console.log('clicked');
            }
        }
    },
};

export const Explore: Story = {
    args: {
        data: {
            icon: ExploreOutlinedIcon,
            label: "Explore",
            isActive: false,
            handleClick: () => {
                console.log('clicked');
            }
        }
    },
};



