/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkShadowGrey: "#666666",
        lightGreen: "#8DC63F",
        deepGreen: "#00AB4E",
        lightBlue: "#188ECE",
        deepBlue: "#034EA2",
        eRed: "#ED1C24",
        eYellow: "#FFC20E",
        eWhite: "#FFFFFF",
        eGrey: "#d3d3d3",
        eBlack: "#000000",
        texaBlue: "#0a73b7",
        texaRed: "#e92028",
        darkGray: "#333333",
        fireYellow: "#FDA50F",
        zkCoffee: "#4c4c4c",
        darkCofee: "#38220f",
      },
      animate: {
        fadeIn: "transition fadeOut transform duration-5000 ease-in-out",
      },
      keyframes: (theme) => ({
        fadeOut: {
          "0%": {
            transition: "-translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2",
            opocity: "0",
          },
          "100%": {
            transition: "-translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2",
            opocity: "1",
          },
        },
      }),
    },
  },

  plugins: [require("@tailwindcss/forms")],
};
