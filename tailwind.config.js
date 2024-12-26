/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#344054", // Replace with your exact primary color
        secondary: "#7F56D9", // Accent color
        lightGray: "#F9FAFB",
        grayText: "#667085",
        whiteText: "#FFFFFF",
      },

    },
  },
  plugins: [],
}

