import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://battaglino.dev",
  // Spanish used to live under /es/ before it became the default; keep old links working.
  // ponytail: listed by hand, add a line when a Spanish post is published before this goes stale.
  redirects: Object.fromEntries(
    ["/", "/about", "/experience", "/projects", "/tech-stack", "/blog", "/blog/como-construi-este-sitio"].map(
      (p) => [`/es${p === "/" ? "" : p}`, p === "/" ? p : `${p}/`],
    ),
  ),
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
