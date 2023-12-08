/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pedram: {
          1: "#002642",
          2: "#840032",
          3: "#e59500",
          4: "#efdada",
          5: "#02040f",
        },
      },
    },
  },
  plugins: [],
};
