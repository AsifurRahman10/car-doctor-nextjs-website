/** @type {import('tailwindcss').Config} */
const daisyui = require("daisyui");
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [
    daisyui,
  ],
};
