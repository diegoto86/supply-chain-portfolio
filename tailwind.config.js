/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        fadeWord: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        vibrate: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-1px)' },
          '75%': { transform: 'translateX(1px)' },
        },
      },
      animation: {
        'fade-word': 'fadeWord 0.3s ease-in-out forwards',
        vibrate: 'vibrate 0.3s infinite',
      },
    },
  },
  plugins: [],
}
