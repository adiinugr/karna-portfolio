/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--primary-color) / <alpha-value>)",
        shade: "rgb(var(--shade-color) / <alpha-value>)",
        secondary: "rgb(var(--secondary-color) / <alpha-value>)",
        dark: "rgb(var(--dark-color) / <alpha-value>)",
        light: "rgb(var(--light-color) / <alpha-value>)",
        gray: "rgb(var(--gray-color) / <alpha-value>)"
      }
    },
    transitionProperty: {
      height: "height",
      spacing: "margin, padding"
    }
  },
  plugins: [require("@tailwindcss/line-clamp")]
}
