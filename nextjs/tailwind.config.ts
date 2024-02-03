import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.tsx",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      colors: {
        black: {
          '50': '#f5f5f5',
          '100': '#e0e0e0',
          '200': '#bdbdbd',
          '300': '#9e9e9e',
          '400': '#757575',
          '500': '#504741',
          '600': '#424242',
          '700': '#303030',
          '800': '#212121',
          '900': '#111111',
        },
        white: {
          '50': '#ffffff',
          '100': '#ffffff',
          '200': '#ffffff',
          '300': '#ffffff',
          '400': '#ffffff',
          '500': '#fbfaf8',
          '600': '#f5f5f5',
          '700': '#e0e0e0',
          '800': '#cccccc',
          '900': '#b3b3b3',
        },
        green: {
          '50': '#e6f4e3',
          '100': '#ccedcc',
          '200': '#a3dbaa',
          '300': '#7ac989',
          '400': '#51b867',
          '500': '#008b44',
          '600': '#1e7e37',
          '700': '#165c28',
          '800': '#0c3a19',
          '900': '#02180a',
        },
        yellow: {
          '50': '#fffbe6',
          '100': '#fff0b3',
          '200': '#ffdb80',
          '300': '#ffc64d',
          '400': '#ffb01a',
          '500': '#ffd350',
          '600': '#cc7a00',
          '700': '#995a00',
          '800': '#663a00',
          '900': '#331f00',
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      prefix: "nextui", // prefix for themes variables
      addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
      defaultTheme: "light", // default theme from the themes object
      defaultExtendTheme: "light", // default theme to extend on custom themes
      layout: {}, // common layout tokens (applied to all themes)
      themes: {
        light: {
          extend: "light",
          layout: {}, // light theme layout tokens
          colors: {
            //background: "#fbfaf8",
            //foreground: "#504741",
            primary: "#008b44",
            secondary: "#ffd350",
            green: {
              '50': '#e6f4e3',
              '100': '#ccedcc',
              '200': '#a3dbaa',
              '300': '#7ac989',
              '400': '#51b867',
              '500': '#008b44',
              '600': '#1e7e37',
              '700': '#165c28',
              '800': '#0c3a19',
              '900': '#02180a',
            },
            yellow: {
              '50': '#fffbe6',
              '100': '#fff0b3',
              '200': '#ffdb80',
              '300': '#ffc64d',
              '400': '#ffb01a',
              '500': '#ffd350',
              '600': '#cc7a00',
              '700': '#995a00',
              '800': '#663a00',
              '900': '#331f00',
            },
          },
        },
      },
    })
  ],
} satisfies Config;
