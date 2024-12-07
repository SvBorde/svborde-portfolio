/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lavender: '#E6E6FA',  // Lavender color
      },
      fontSize: {
        '5.5xl': '3.375rem',  // Custom size for 5.5xl (you can change the value as needed)
      },

      animation: {
        pulse: 'pulse 2s cubic-bezier(0.4, 0.0, 0.6, 1) infinite',
      },
      keyframes: {
        pulse: {
          '0%': { opacity: 1 },
          '50%': { opacity: 0.5 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}