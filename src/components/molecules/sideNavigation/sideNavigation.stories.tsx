import type { StoryObj } from '@storybook/react';
import { SideNavigation } from '.';

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


export const Default: Story = {
    args: {
    },
};
