/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",

  theme: {
    extend: {
      backgroundImage: {
        "dark-wallpaper": "url('/Images/wallpaper-light.jpg')",
        "light-wallpaper": "url('/Images/wallpaper.jpg')",
      },
      colors: {
        sleepless: {
          50: "#e8e8e8",
          75: "#9fa1a2",
          100: "#787a7b",
          200: "#3e4042",
          300: "#16191b",
          400: "#0f1213",
          500: "#0d0f10",
        },
      },
    },
  },
  plugins: [],
};
