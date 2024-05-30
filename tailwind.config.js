/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#126699",
      white: "#ffffff",
      black: "#000000",
    },
    extend: {
      fontFamily: {
        opensans: ["Open Sans"],
        robotoslab: ["Roboto Slab"],
        leaguespartan: ["League Spartan"],
      },
    },
  },
  plugins: [],
};
