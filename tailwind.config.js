/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,scss}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#FBBF24",
        "primary-dark": "#F59E0B",
        "midnight": "#101010",
        "midnight-card": "#1C1C1C",
        "background-light": "#F8FAFC",
        "background-dark": "#101010",
        "surface-dark": "#1C1C1C",
        "border-midnight": "#2C2C2C",
        "text-secondary": "#94A3B8",
        "text-light": "#F8FAFC",
        "text-dark": "#0F172A"
      },
      fontFamily: {
        "display": ["Inter", "sans-serif"]
      },
      borderRadius: { "DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px" },
              
    },
  },
  plugins: [],
}