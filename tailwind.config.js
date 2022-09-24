/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    blurSize: {},
    extend: {
      colors: {
        "my-orange": {
          light: "#ffbf69",
          dark: "#9f6b3f",
        },
        "my-blue": {
          DEFAULT: "#34495e",
          dark: "#2e343b",
        },
      },
      fontFamily: {
        sans: ["Quicksand", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          ["wk-backdrop-blur"](value) {
            return { "-webkit-backdrop-filter": `blur(${value})` };
          },
        },
        {
          values: theme("backdropBlur"),
        }
      );
    }),
  ],
};
