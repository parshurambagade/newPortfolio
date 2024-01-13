/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  
  theme: {
    extend: {}, 
    screens: {
      // 'xs': {'min': '300px', 'max': '479px'},
      'xs': '320px',
      
      'sm': '480px',

      'md': '768px',

      'lg': '1024px',

      'xl': '1280px',

    }
  },
  plugins: [],
}

