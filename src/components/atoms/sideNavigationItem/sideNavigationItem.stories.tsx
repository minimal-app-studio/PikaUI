import type { StoryObj, Meta } from '@storybook/react';
import { SideNavigationItem } from '.';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof SideNavigationItem> = {
    title: 'Atoms/SideNavigationItem',
    component: SideNavigationItem,
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
        icon: FeedOutlinedIcon,
        label: "News Feed",
    },
};

export const Explore: Story = {
    args: {
        icon: ExploreOutlinedIcon,
        label: "Explore",
    },
};



