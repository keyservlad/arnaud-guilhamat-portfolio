import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        avenir: ["Avenir", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
        montserat: ["Montserrat", "sans-serif"],
      },
      boxShadow: {
        custom: "0 9px 20px rgba(0, 0, 0, 0.28)",
      },
    },
  },
  plugins: [],
} satisfies Config;
