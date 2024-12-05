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
        lightMidGray: "#313131",
        darkGray: "#181717", 
        black:"#000000",
        white: "#ffffff",
        violet: "#DB83FF",
        lightVoilet: "#F4CEFF",
        blue: "#212D49",
      },

      backgroundImage: {
        'blackGradient': 'linear-gradient(to bottom right, #797879 0%, #5a5959 50%, #272626 100%)',
        'purpleGradient': 'linear-gradient(to right, #FF62EF 0%, #F48F7B 50%, #FF61EF 100%)',
        'revpurpleGradient': 'linear-gradient(to bottom, #90417E 0%, #9D4B6D 50%, #FF7448 100%)',
        'voiletGradient': 'linear-gradient(to right, #FF62EF 0%, #F48F7B 100%)',
        'customFooterGradient': 'linear-gradient( 180deg, rgba(201, 201, 201, 0.27) 11.19%, rgb(0, 0 ,0,29) 89.78%)',
        
      },

      boxShadow: {
        custom: "0px 0px 20.1px 3px rgba(1, 0, 0, 0.24)", // Custom shadow
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