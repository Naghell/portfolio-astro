/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  // Keeps hover styling from sticking after a tap on touch devices.
  future: { hoverOnlyWhenSupported: true },
  theme: {
    fontFamily: {
      sans: ["Inter Variable", "ui-sans-serif", "system-ui", "sans-serif"],
    },
    extend: {
      colors: {
        page: "var(--bg-page)",
        surface: {
          from: "var(--surface-from)",
          to: "var(--surface-to)",
          "hover-from": "var(--surface-hover-from)",
          "hover-to": "var(--surface-hover-to)",
          border: "var(--border-surface)",
        },
        content: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          accent: "var(--text-accent)",
        },
        ring: "var(--focus-ring)",
        plate: "var(--logo-plate)",
      },
      boxShadow: {
        surface: "var(--shadow-surface)",
      },
      outlineColor: {
        image: "var(--image-outline)",
      },
    },
  },
  plugins: [],
};
