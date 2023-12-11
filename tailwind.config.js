/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
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
}
