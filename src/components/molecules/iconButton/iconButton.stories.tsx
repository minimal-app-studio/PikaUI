import type { StoryObj } from '@storybook/react';
import { IconButton } from '.';

const meta: any = {
    title: 'Molecules/IconButton',
    component: IconButton,
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

const Icon = () => <>😄</>;

export const Primary: Story = {
    args: {
        icon: Icon,
        label: "Button",
        position: "left",
        color: 'primary',
        variant: 'filled',
    },
};

export const Secondary: Story = {
    args: {
        icon: Icon,
        label: "Button",
        position: "left",
        color: 'secondary',
        variant: 'filled',
    },
};