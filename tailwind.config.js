/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    width: {
      "50rem": "50rem",
      "70%": "70%",
      "28rem": "28rem",
      "64rem": "64rem",
    },
    margin: {
      "30rem": "30rem",
      "24rem": "24rem",
      "5px": "5px",
      "1rem": "1rem",
      "2rem": "2rem",
      "3rem": "3rem",
      "5rem": "5rem",
      "10px": "10px",
    },
  },
  plugins: [require("daisyui")],
};
