import { twMerge } from "tailwind-merge";

export const mergeThemes = (defaultTheme: any, userTheme: any = {}) => {
    const merged: any = {};

    // Iterate over the keys in the default theme
    Object.keys(defaultTheme).forEach((key) => {
        if (typeof defaultTheme[key] === 'object' && !Array.isArray(defaultTheme[key])) {
            // If the value is an object, recursively merge
            merged[key] = mergeThemes(defaultTheme[key], userTheme[key]);
        } else {
            // If the value is a string (tailwind class), merge with user-defined class using twMerge
            merged[key] = twMerge(defaultTheme[key], userTheme[key] || '');
        }
    });

    // Handle extra user keys that are not in the default theme
    Object.keys(userTheme).forEach((key) => {
        if (!merged[key]) {
            merged[key] = userTheme[key];
        }
    });

    return merged;
};
