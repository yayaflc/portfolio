/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
     extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        pinkPrimary: "#F48FB1",
        pinkSecondary: "#F8BBD0",
        blackPrimary: "#2E2E2E",
        blackSecondary: "#555555",
        grayPrimary: "#4C4A4A",
        graySecondary: "#868282",
        whitePrimary: "#F5F5F5",
        whiteSecondary: "#BDBDBD",
        redPrimary: "#78223F",
      },
    },
  },
  plugins: [],
}

