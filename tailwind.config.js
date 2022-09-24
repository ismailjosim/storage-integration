/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#2a83b7",

          "secondary": "#f7c913",

          "accent": "#e23f89",

          "neutral": "#372239",

          "base-100": "#E6E6E6",

          "info": "#245DE0",

          "success": "#17826D",

          "warning": "#F1C065",

          "error": "#DE2721",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
