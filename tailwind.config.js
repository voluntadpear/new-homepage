/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
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
  plugins: [require("@tailwindcss/line-clamp")],
};
