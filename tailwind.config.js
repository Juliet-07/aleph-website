/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primaryThin: ["Thin"],
        primaryRegular: ["Regular"],
        primaryMedium: ["Medium"],
        primarySemibold: ["SemiBold"],
        primaryBold: ["Bold"],
        buttonText: ["ButtonText"],
      },
      animation: {
        marquee: "marquee 10s linear infinite",
        "bounce-slow": "bounce-slow 3s infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "bounce-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      transform: {
        "rotate-y-180": "rotateY(180deg)",
      },
      perspective: {
        1000: "1000px",
      },
    },
  },
  plugins: [],
};
