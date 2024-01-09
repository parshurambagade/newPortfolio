/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  
  theme: {
    extend: {}, 
    screens: {
      'xs': {'min': '300px', 'max': '479px'},
      
      'sm': {'min': '480px', 'max': '767px'},


      'md': {'min': '768px', 'max': '1023px'},
  

      'lg': {'min': '1024px', 'max': '1279px'},


      'xl': '1280px',

    }
  },
  plugins: [],
}

