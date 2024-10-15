import type { StoryObj, Meta } from '@storybook/react';
import { TextField } from '.';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof TextField> = {
    title: 'Atoms/TextField',
    component: TextField,
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


export const TextFieldWithLabel: Story = {
    args: {
        placeholder: "Enter your first name",
        label: "First name",
    },
};


export const TextFieldWithoutLabel: Story = {
    args: {
        placeholder: "Enter your email",
    },
};

export const TextFieldWithIcon: Story = {
    args: {
        placeholder: "Enter your name",
        icon: FeedOutlinedIcon,
    },
};


export const TextFieldWithIconAndLabel: Story = {
    args: {
        placeholder: "Enter your name",
        icon: FeedOutlinedIcon,
        label: "First name",
    },
};

export const SearchBar: Story = {
    args: {
        placeholder: "Search",
        icon: SearchOutlinedIcon
    },
};

