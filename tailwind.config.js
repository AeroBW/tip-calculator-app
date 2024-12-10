/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      strongCyan: "#26c0ab",
      veryDarkCyan: "#00494d",
      darkGrayishCyan: "#5e7a7d",
      grayishCyan: "#7f9c9f",
      veryLightGrayishCyan: "#f4fafa",
      white: "#ffffff",
    },
    extend: {
      backgroundImage: {
        dollarIcon: "url('/images/icon-dollar.svg')",
        personIcon: "url('/images/icon-person.svg')",
        logo: "url('/images/logo.svg')",
      },
    },
  },
  plugins: [],
};
