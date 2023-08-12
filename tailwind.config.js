/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'bounce-slow': 'bounce 2s infinite',
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        lingifyTheme: {
          "primary": "#ffc107",
          "secondary": "#005bb9",
          "accent": "#171c2f",
          "neutral": "#ffc107",
          "base-100": "#fcfbfa",
        },
      },
      "synthwave",
    ],
  }
}

