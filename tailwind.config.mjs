/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Inter Variable", "ui-sans-serif", "system-ui"],
    },
    extend: {
      colors: {
        lightBackground: "#FCFCFD",
        darkBackground: "#0A0A0A",
      },
    },
  },
  plugins: [],
};
