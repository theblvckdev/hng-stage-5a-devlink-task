import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray: "#888888",
        background: "#FAFAFA",
        defaultGray: "#EEEEEE",
        border: "#D9D9D9",
        darkGray: "#333333",
        error: "#FF3939",
        primary: "#633CFF",
        primaryHover: "#BEADFF",
        lightPurple: "#EFEBFF",
      },
      fontFamily: {
        instrumentSans: ["Instrument Sans", "sans-serif"],
      },
      boxShadow: {
        customeShadow:
          "0 0px 20px rgba(145, 143, 143, 0.1), 0 1px 0px rgba(0, 0, 0, 0.06)",

        spread:
          "0 0px 20px rgba(145, 143, 143, 0.1), 0 1px 0px rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [],
};
export default config;
