/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "hsl(0, 97%, 63%)",
        white: "hsl(0, 0%, 100%)",
        lightBlack: "hsl(223, 30%, 9%)",
        blueGrey: "hsl(223, 23%, 47%)",
        darkBlueGrey: "hsl(223, 36%, 14%)",
      },
      fontFamily: {
        outfit: ["'Outfit'", "sans-serif"],
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        bold: 700,
      },
      fontSize: {
        headingL: "2rem",
        headingM: "1.5rem",
        headingS: "1.5rem",
        headingXS: "1.125rem",
        bodyM: "0.9375rem",
        bodyS: "0.8125rem",
      },
    },
  },
  plugins: [],
};
