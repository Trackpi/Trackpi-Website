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
      colors: {
        'custom-light-yellow': 'rgba(255, 245, 194, 0.2)', // 20% opacity
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