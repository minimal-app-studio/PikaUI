/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/**/**/*.{ts,tsx, js, jsx}",
    "./src/**/**/*.{ts,tsx, js, jsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: ({ colors }) => ({
        default: colors.slate,
        'primary': {
          '50': '#f0fdf4',
          '100': '#dbfde6',
          '200': '#baf8cf',
          '300': '#84f1aa',
          '400': '#48e07d',
          '500': '#1db954',
          '600': '#14a547',
          '700': '#13823b',
          '800': '#156633',
          '900': '#13542c',
          '950': '#042f15',
        },

        secondary: {
          50: "#f5f2f1",
          100: "#e5e0dc",
          200: "#cdc3bb",
          300: "#b0a094",
          400: "#998376",
          500: "#8b7267",
          600: "#765f58",
          700: "#604c48",
          800: "#534240",
          900: "#493a3a"
        },
      }),
    },
  },
  plugins: [],
}
