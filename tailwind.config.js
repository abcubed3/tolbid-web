/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#D4AF37", // Desert Gold
        "primary-dark": "#B5952F",
        "midnight": "#0F1C2E", // Midnight Blue
        "midnight-card": "#162338",
        "background-light": "#f6f7f8",
        "background-dark": "#0F1C2E",
        "surface-dark": "#0F1A30",
        "border-midnight": "#23324F",
        "text-secondary": "#94A3B8",
      },
      fontFamily: {
        "display": ["Inter", "sans-serif"]
      },
    },
  },
  plugins: [],
}
