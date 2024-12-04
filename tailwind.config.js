/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightGray: "#c4c2c2",
        gray: "#808081",
        darkGray: "#181717",
        black:"#000000",
        white: "#ffffff",
        violet: "#DB83FF",
      },

      backgroundImage: {
        'blackGradient': 'linear-gradient(to bottom right, #797879 0%, #5a5959 50%, #272626 100%)',
        'purpleGradient': 'linear-gradient(to right, #FF62EF 0%, #F48F7B 50%, #FF61EF 100%)',
      },
     },
  },
  
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".placeholder-blackGradient": {
          "&::placeholder": {
            backgroundImage:
              "linear-gradient(to bottom, #FAAB02 0%, #539D43 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          },
        },
      });
    },
  ],
}