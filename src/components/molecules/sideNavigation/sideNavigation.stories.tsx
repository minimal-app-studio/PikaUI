import type { StoryObj } from '@storybook/react';
import { SideNavigation } from '.';
import { SideNavItem } from '../../atoms/sideNavItem';
import { WithLabels } from '../bottomNavigation/bottomNavigation.stories';

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

const Logo = () => (
    <div className='flex items-center ps-2.5 mb-5'>
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Neighborhood</span>
    </div>
)



export const SideNavigationWithLabels: Story = {
    args: {
        ...WithLabels.args,
        logo: Logo,
        listItem: SideNavItem
    },
};

