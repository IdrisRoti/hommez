import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        lightBlue: "var(--light-blue)",
        brightPurple: "var(--bright-purple)",
        brightPink: "var(--bright-pink)",
        textDark: "var(--text-dark)",
        textDarker: "var(--text-darker)",
        textlight: "var(--text-light)",
        textlighter: "var(--text-lighter)",
        textGray: "var(--text-gray)",
        darkRed: "var(--dark-red)",
        lightRed: "var(--light-red)",
        darkGreen: "var(--dark-green)",
        lightGreen: "var(--light-green)",
        darkBlue: "var(--dark-blue)",
        lighterBlue: "var(--lighter-blue)",
      },
    },
  },
  plugins: [],
};
export default config;
