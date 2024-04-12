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
      // => @media (min-width: 768px) { ... }

      xl: "1200px",
      // => @media (min-width: 1200px) { ... }
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
      extend: {
        spacing: {
          0: "0",
          1: "0.1rem",
          2: "0.2rem",
          5: "0.5rem",
          8: "0.8rem",
          10: "1rem",
          15: "1.5rem",
          20: "2rem",
          25: "2.5rem",
          30: "3rem",
          40: "4rem",
          50: "5rem",
          60: "6rem",
          70: "7rem",
          80: "8rem",
          90: "9rem",
          100: "10rem",
          120: "12rem",
          150: "15rem",
        },
        fontSize: {
          8: "0.8rem",
          10: "1rem",
          11: "1.1rem",
          12: "1.2rem",
          14: "1.4rem",
          16: "1.6rem",
          17: "1.7rem",
          18: "1.8rem",
          20: "2rem",
          22: "2.2rem",
          24: "2.4rem",
          30: "3rem",
          32: "3.2rem",
          48: "4.8rem",
        },
        fontFamily: {
          acme: "acme",
          pretendard: "pretendard",
        },
      },
    },
    plugins: [],
  },
};
