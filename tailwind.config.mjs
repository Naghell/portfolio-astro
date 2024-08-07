/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        lightBackground: "#FCFCFD",
        darkBackground: "#0A0A0A",
      },
    },
  },
  plugins: [],
};
