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
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    ({
      matchUtilities,
      theme /* … */,
    }: {
      matchUtilities: any;
      theme: any;
    }) => {
      // …
      matchUtilities(
        // https://gist.github.com/olets/9b833a33d01384eed1e9f1e106003a3b
        {
          aspect: (value: any) => ({
            "@supports (aspect-ratio: 1 / 1)": {
              aspectRatio: value,
            },
            "@supports not (aspect-ratio: 1 / 1)": {
              // https://github.com/takamoso/postcss-aspect-ratio-polyfill

              "&::before": {
                content: '""',
                float: "left",
                paddingTop: `calc(100% / (${value}))`,
              },
              "&::after": {
                clear: "left",
                content: '""',
                display: "block",
              },
            },
          }),
        },
        { values: theme("aspectRatio") },
      );
    },
  ],
} satisfies Config;
