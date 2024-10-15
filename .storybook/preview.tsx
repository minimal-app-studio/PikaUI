import type { Preview } from "@storybook/react";
import './style.css';
import { ThemeProvider } from "../src/context/themeProvider";
import React from "react";

const customTheme = {};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

export const decorators = [
  (Story: any) => {
    return (
      <ThemeProvider theme={customTheme} >
        <Story />
      </ThemeProvider>
    );
  }
];
