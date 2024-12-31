/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(5%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        scroll: 'scroll 20s linear infinite',
      },
      fontSize: {
        mainHeading: '46px', // Main heading
        subHeading: '34px',  // Subheading
        content: '20px',     // Content
      },
      fontFamily: {
        trebuchet: ['"Trebuchet MS"', 'sans-serif'], // Define your custom font family
      },
     
    },
  },

    theme: {
      extend: {
        colors: {
          amberCustom: 'rgba(255, 179, 0, 1)',
        },
      },
    },
    plugins: [],

  
  plugins: [],
}