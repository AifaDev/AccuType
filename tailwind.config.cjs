/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    colors: {
      background: {
        light: "#FFFFFF",
        DEFAULT: "#FFFFFF",
        dark: "#222831",
      },
      back_bar: {
        light: "#E9E9E9",
        DEFAULT: "#E9E9E9",
        dark: "#393E46",
      },
      bar: {
        light: "#12C9D1",
        DEFAULT: "#12C9D1",
        dark: "#00ADB5",
      },
      paragraph: {
        light: "#555555",
        DEFAULT: "#555555",
        dark: "#EEEEEE",
      },
      key: {
        light: "#FAFAFA",
        DEFAULT: "#FAFAFA",
        dark: "#21262F",
      },
      key_text: {
        light: "#A5A5A5",
        DEFAULT: "#A5A5A5",
        dark: "#EEEEEE",
      },
      keyboard: {
        light: "#E6E6E6",
        DEFAULT: "#E6E6E6",
        dark: "#424750",
      },
      gaps: {
        light: "#A5A5A5",
        DEFAULT: "#A5A5A5",
        dark: "#5A5A5A",
      },
      menu_button: {
        light: "#555555",
        DEFAULT: "#555555",
        dark: "#EEEEEE",
      },
      goal_text: {
        light: "#999898",
        DEFAULT: "#999898",
        dark: "#CDCDCD",
      },
      crown: {
        light: "#FFD336",
        DEFAULT: "#FFD336",
        dark: "#3A8F94",
      },
      brief_text: {
        light: "#898989",
        DEFAULT: "#898989",
        dark: "#A1A1A1",
      },
      brief_border: {
        light: "#CACACA",
        DEFAULT: "#CACACA",
        dark: "#00ADB5",
      },
      config_button: {
        light: "#9B9B9B",
        DEFAULT: "#9B9B9B",
        dark: "#00ADB5",
      },
      correct: {
        light: "#E6E6E6",
        DEFAULT: "#E6E6E6",
        dark: "#3A4554",
      },
      incorrect: {
        light: "#FF5757",
        DEFAULT: "#FF5757",
        dark: "#FF6060",
      },
    },
    keyframes: {
      breathe: {
        "0%": { opacity: 1 },
        "50%": { opacity: 0 },
        "100%": { opacity: 1 },
      },
      appear: {
        "0%": { opacity: 0 },
        "100%": { opacity: 1 },
      },
    },
    screens: {
      xm: "600px",
      sm: "985px",
      md: "1390px",
      short: { raw: "(max-height: 640px )" },
      //raw: "(max-height: 640px ) and (min-width: 985px)"
    },
  },
  plugins: [],
};
