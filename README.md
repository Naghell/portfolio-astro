# battaglino.dev

Personal portfolio and blog of Renzo Luis Battaglino, built with Astro and Tailwind CSS. Live at [battaglino.dev](https://battaglino.dev).

## Features

- 🚀 Built with Astro for optimal performance
- 🎨 Styled with Tailwind CSS for easy customization
- 📱 Fully responsive design
- 🧩 Bento-style layout for an attractive presentation
- 🌍 Bilingual (English at the root, Spanish under `/es/`) from a single set of pages
- 🌗 Light and dark theme, following the system preference by default
- 📝 Integrated blog with Markdown support
- 🔍 SEO optimized
- 📊 Analytics ready (configured for Microsoft Clarity)
- 🗺️ Canonical URLs, Open Graph image, JSON-LD `Person` schema, `sitemap.xml` and `robots.txt`

## Getting Started

### Prerequisites

- Node.js (version 18 or later)
- npm, pnpm, yarn or bun

### Installation

1. Install dependencies:

   ```
   pnpm install
   ```

2. Start the development server:

   ```
   pnpm run dev
   ```

3. Open `http://localhost:4321` in your browser to see the site.

## Languages

Pages live once, under `src/pages/[...lang]/`. The rest param is `undefined` for English
(`/about`) and `"es"` for Spanish (`/es/about`). All copy lives in `src/i18n/ui.ts`; the
data files in `src/utils/` export `(lang) => data`.

`localizePath()` is the single source of truth for URLs — it always returns a trailing
slash so hrefs, `hreflang` and the canonical agree.

## Theme

Semantic tokens are defined in `src/styles/theme.css` (`:root` for light, `.dark` for dark)
and mapped to Tailwind names in `tailwind.config.mjs`. Components only reference roles
(`bg-page`, `text-content-secondary`), never a raw colour.

The `.dark` class is the only switching mechanism. An inline script in the layout resolves
the system preference before first paint. Choosing the value the system already uses clears
the stored preference, so the site goes back to following the OS.

## SEO

The canonical domain lives in `astro.config.mjs` (`site`). Change it there and the canonical
links, Open Graph URLs and `sitemap.xml` follow. `public/robots.txt` hardcodes the sitemap URL —
update it too if the domain changes.

The Open Graph image is `public/og.png` (1200x630). Regenerate it with `sharp` if the title or
tagline changes.

## CV

The PDFs in `public/cv/` are generated, not hand-made. Content comes from the site's own
data (`src/utils/experience.ts`, `src/utils/about.ts`) plus the CV-only fields in
`cv/data.mjs`, so the CV cannot drift from the site.

```bash
bun cv/build.mjs
# playwright installed elsewhere:
PLAYWRIGHT_PATH=/path/to/node_modules/playwright bun cv/build.mjs
```

Headless Chromium prints it, so the PDF carries a real text layer — ATS and AI parsers read
it as text, not as an image. Verify with `pdftotext public/cv/renzo-battaglino-cv.pdf -`.
The layout is deliberately single-column with real headings and lists, and no tables or text
boxes, which is what document parsers depend on.

## Customization

### Personal Information

Edit `src/utils/*` to update your personal information, skills, and experiences.

### Blog Posts

Add new blog posts as Markdown files in the `src/content/blog/` directory.

## Environment Variables

Create a `.env` file in the root directory and add the following:

```
PUBLIC_CLARITY_KEY=your_clarity_key_here
```

Replace `your_clarity_key_here` with your actual Microsoft Clarity key.

## Deployment

This site can be deployed on any platform that supports Astro. Here are instructions for a few popular options:

### Vercel

1. Push your code to a GitHub repository.
2. Log in to Vercel and import your repository.
3. Set the build command to `astro build` and the output directory to `dist`.
4. Add your environment variables in the Vercel project settings.

### Netlify

1. Push your code to a GitHub repository.
2. Log in to Netlify and click "New site from Git".
3. Choose your repository and set the build command to `astro build` and the publish directory to `dist`.
4. Add your environment variables in the Netlify project settings.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

If you have any questions or suggestions, please feel free to contact me at [renzo@battaglino.dev](mailto:renzo@battaglino.dev).

---

Happy coding! 🚀
