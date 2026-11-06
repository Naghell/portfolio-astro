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
          DEFAULT: "var(--surface)",
          hover: "var(--surface-hover)",
          inset: "var(--surface-inset)",
          border: "var(--border-surface)",
        },
        accent: {
          fill: "var(--accent-fill)",
          "fill-hover": "var(--accent-fill-hover)",
          on: "var(--on-accent)",
        },
        content: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          accent: "var(--text-accent)",
        },
        ring: "var(--focus-ring)",
        plate: "var(--logo-plate)",
      },
      outlineColor: {
        image: "var(--image-outline)",
      },
    },
  },
  plugins: [],
};
