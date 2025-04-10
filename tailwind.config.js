/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
      },
      keyframes: {
        blink: {
          '50%': { opacity: '0' }
        }
      },
      animation: {
        'blink': 'blink 1s step-start infinite'
      }
    },
  },
  plugins: [],
};
