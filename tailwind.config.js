/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/index.html"],
  theme: {
    extend: {
      fontFamily: {
        helvetica: [
          '"Helvetica Neue Light"',
          '"Helvetica Neue"',
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      colors: {
        "portfolio-blue": "#4A90E2",
        "portfolio-blue-light": "#6BB6FF",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
