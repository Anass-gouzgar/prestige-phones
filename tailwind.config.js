/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        MainOrange: "#E65411",
        MainOrangeLight: "#FF7C40",
        LightGray: "#E4E4E4",
        Gray: "#3C3C3C",
      },
    },
    fontFamily: {
      sans: ["Montserrat", "Helvetica", "sans-serif"],
      poppins: ["poppins", "sans-serif"],
    },
  },
  plugins: [require("@xpd/tailwind-3dtransforms")],
};
