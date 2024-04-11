/** @type {import('tailwindcss').Config} */
module.exports = {
  // corePlugins: {
  //   preflight: false,
  // },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/index.html",
  ],
  theme: {
    screens: {
      md: "768px",
      // => @media (min-width: 640px) { ... }

      xl: "1200px",
      // => @media (min-width: 1024px) { ... }
    },
    extend: {
      colors: {
        primary: "#6d6afe",
      },
    },
  },
  plugins: [],
};
