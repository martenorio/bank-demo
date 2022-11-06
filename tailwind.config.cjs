/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    // extend: {
    //   screens: {
    //     '8xl': {'max': '1535px'},
    //     // => @media (max-width: 1535px)
    //   },
    // }
  },
  plugins: [],
};