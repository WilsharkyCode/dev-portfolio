/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        glow: {
          "0%, 100%": { textShadow: "0 0 10px #22d3ee, 0 0 20px #22d3ee" },
          "50%": { textShadow: "0 0 20px #22d3ee, 0 0 30px #22d3ee" },
        },
      },
      animation: {
        glow: "glow 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
