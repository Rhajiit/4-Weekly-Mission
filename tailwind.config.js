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
        black: "#111322",
        red: "#ff5b56",
        white: "#ffffff",
        skyblue: "#6ae3fe",
        gray100: "#3e3e43",
        gray60: "#9fa6b2",
        gray20: "#ccd5e3",
        gray10: "#e7effb",
        lightgray: "#f5f5f5",
        background: "#f0f6ff",
      },
      fontFamily: {
        acme: "acme",
      },
    },
  },
  plugins: [],
};
