/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    container: {
      center: "true",
      padding: "10px",
    },
    extend: {
      fontFamily: {
        inter: "Inter",
        kanit: "Kanit",
        montserrat: "Montserrat",
      },
      colors: {
        teal: "#008080",
        inzaghi: "#DBA720",
        btn: "#FFB800",
        lgone: "#F5F5DC",
        lgtwo: "#E0E0E0",
      },
      animation: {
        bounceLow: "bounceCustom 1s infinite",
        fadeIn: "fadeIn 1s ease-in-out",
      },
      screens: {
        ss: "320px",
        as: "360px",
        ls: "400px",
      },
      keyframes: {
        bounceCustom: {
          "0%, 100%": {
            transform: "translateY(-7%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
