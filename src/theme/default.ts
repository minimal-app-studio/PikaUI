export const defaultTheme = {
    button: {
        base:
            "rounded-lg px-5 py-2.5",
        variants: {
            filled: "",
            outlined: "bg-transparent border border-default-300 text-default-800",
            text: "bg-transparent text-default-800",
        },
        colors: {
            default: `bg-default-200 text-default-800 hover:bg-default-300 `,
            secondary: `bg-default-200 text-default-800 hover:bg-default-300 `,
            primary: `bg-primary-700 text-white hover:bg-primary-800 hover:text-white`,
        },
        sizes: {
            small: 'text-xs px-3 py-1.5',
            medium: 'text-sm px-5 py-2.5',
            large: 'text-base px-7 py-3',
        }
    }
};
