/** @type {import('tailwindcss').Config} */

const withOpacity = (variableName) => {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
    }

    return `rgb(var(${variableName}))`
  }
}

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      textColor: {
        skin: {
          base: withOpacity("--color-text-base"),
          inverted: withOpacity("--color-text-inverted"),
          accent: withOpacity("--color-text-accent"),
          "button-base": withOpacity("--color-text-button-base"),
          "button-inverted": withOpacity("--color-text-button-inverted")
        }
      },
      backgroundColor: {
        skin: {
          base: withOpacity("--color-bg-base"),
          accent: withOpacity("--color-bg-accent"),
          gray: withOpacity("--color-bg-gray"),
          "button-bg-base": withOpacity("--color-button-bg-base"),
          "button-bg-inverted": withOpacity("--color-button-bg-inverted")
        }
      },
      borderColor: {
        skin: {
          base: withOpacity("--color-border-base"),
          gray: withOpacity("--color-border-gray")
        }
      }
    },
    transitionProperty: {
      height: "height",
      spacing: "margin, padding"
    }
  },
  plugins: [require("@tailwindcss/line-clamp")]
}
