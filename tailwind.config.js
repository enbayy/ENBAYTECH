/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      keyframes: {
        dimlight: {
          '0%, 18%, 20%, 50.1%, 60%, 65.1%, 80%, 90.1%, 92%': {
            color: '#FF7F00',
            boxShadow: 'none',
          },
          '18.1%, 20.1%, 30%, 50%, 60.1%, 65%, 80.1%, 90%, 92.1%, 100%': {
            color: '#fff',
            textShadow: '0 0 10px #FF7F00',
          },
        },
      },
      animation: {
        dimlight: 'dimlight 5s infinite',
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
    },
  },
  plugins: [function ({ addUtilities }) {
    addUtilities({
      '.box-reflect': {
        '-webkit-box-reflect': 'below 1px linear-gradient(transparent, #0004)',
      },
    });
  },],
};