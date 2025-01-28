/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
         
          // "pink" : "#0D0300",
          "red" : "#ff6868",
          "secondary" : "#555",
          "prigmayBG" : "#0D0300",
          "orange"  : "#FF3300",
          "black" : "#0D0300",
          "white" : "#FFF5F2",
          "blue"  : "#1434A4"
        }


    },
  },
  plugins: [require('daisyui'),],
}

