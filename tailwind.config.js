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
        "dark-wallpaper": "url('https://i.imgur.com/1ODuiZ6.jpg')",
        "light-wallpaper": "url('https://i.imgur.com/sNRw8El.jpg')",
      },
      screens: {
        short: { raw: "(max-height: 800px)" },

        max_sm: { raw: "(max-width: 640px)" },
        max_md: { raw: "(max-width: 768px)" },
        max_lg: { raw: "(max-width: 1024px)" },
        max_xl: { raw: "(max-width: 1280px)" },
        max_2xl: { raw: "(max-width: 1536px)" },
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
