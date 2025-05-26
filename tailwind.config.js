/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: "#FF7F00",
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        },
        dark: "#111111",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
      keyframes: {
        pulseShadow: {
          '0%, 100%': {
            boxShadow: '0 0 0 0 rgba(16, 185, 129, 0.4)',
          },
          '50%': {
            boxShadow: '0 0 20px 10px rgba(16, 185, 129, 0.6)',
          },
        },
      },
      animation: {
        pulseShadow: 'pulseShadow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};