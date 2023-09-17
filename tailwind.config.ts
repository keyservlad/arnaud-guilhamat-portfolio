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
      colors: {
        dark: "#1c1d20",
      },
      boxShadow: {
        custom: "0 9px 20px rgba(0, 0, 0, 0.28)",
        footer: "0px 60px 50px rgba(0, 0, 0, 0.748);",
        buttonHeader: "inset 0px 0px 0px 1px rgba(255, 255, 255, 0.2)",
      },
    },
  },
  plugins: [],
} satisfies Config;
