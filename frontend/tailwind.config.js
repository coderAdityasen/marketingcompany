/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage:{
        'main-bg':"url('/images/young-couple-examining-blueprints-with-real-estate-agent-while-buying-new-home 1.svg')",
        'foot-bg':"url('/images/Rectangle.svg')"
      }
    },
  },
  plugins: [],
}

