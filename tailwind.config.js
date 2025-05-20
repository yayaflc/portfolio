/** @type {import('tailwindcss').Config} */
export default {
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
      },
    },
  },
  plugins: [],
}

