import type { StoryObj } from '@storybook/react';
import { SideNavigation } from '.';
import { SideNavigationItem } from '../../atoms/sideNavigationItem';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import LoyaltyOutlinedIcon from '@mui/icons-material/LoyaltyOutlined';

const meta: any = {
    title: 'Molecules/SideNavigation',
    component: SideNavigation,
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
        item: ({ handleClick, isActive }: any) => (
            <SideNavigationItem
                icon={FeedOutlinedIcon}
                label="News Feed"
                handleClick={handleClick}
                isActive={isActive}
            />
        ),
    },
    {
        item: ({ handleClick, isActive }: any) => (
            <SideNavigationItem
                icon={ExploreOutlinedIcon}
                label="Explore"
                handleClick={handleClick}
                isActive={isActive}
            />
        ),
    },
    {
        item: ({ handleClick, isActive }: any) => (
            <SideNavigationItem
                icon={LoyaltyOutlinedIcon}
                label="For Sale"
                handleClick={handleClick}
                isActive={isActive}
            />
        ),
    }
]

const Logo = () => (
    <div className='flex items-center ps-2.5 mb-5'>
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Neighborhood</span>
    </div>
)

export const Default: Story = {
    args: {
        navigations,
        logo: Logo
    },
};
