import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://battaglino.dev",
  markdown: {
    // Dual themes: Shiki emits both palettes and CSS picks one, so a code block
    // follows the site theme instead of staying dark on a light page.
    shikiConfig: {
      themes: { light: "github-light", dark: "github-dark" },
      defaultColor: false,
      wrap: false,
    },
  },
  vite: {
    envPrefix: "PUBLIC_",
  },
  integrations: [tailwind(), react()],
});
