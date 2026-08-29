import type { APIRoute } from "astro";
import { LANGS, localizePath } from "../i18n/ui";
import { postPathsByKey, type PostPaths } from "../i18n/posts";
import { getCollection } from "astro:content";

// ponytail: hand-rolled instead of @astrojs/sitemap — a handful of routes × 2 locales,
// and it has to emit xhtml:link alternates, which the integration needs config for anyway.
const PAGES = ["/", "/about", "/experience", "/projects", "/tech-stack", "/blog"];

export const GET: APIRoute = async ({ site }) => {
  const posts = await getCollection("blog");
  const byKey = await postPathsByKey();

  // { paths: url per language, lastmod }
  const routes = [
    ...PAGES.map((p) => ({
      paths: Object.fromEntries(LANGS.map((l) => [l, localizePath(p, l)])) as PostPaths,
      lastmod: null as Date | null,
    })),
    ...[...new Set(posts.map((p) => p.data.translationKey))].map((key) => {
      const group = posts.filter((p) => p.data.translationKey === key);
      const latest = group
        .map((p) => p.data.updatedDate ?? p.data.pubDate)
        .sort((a, b) => b.valueOf() - a.valueOf())[0];
      return { paths: byKey.get(key)!, lastmod: latest };
    }),
  ];

  const entries = routes.flatMap(({ paths, lastmod }) =>
    LANGS.map((lang) => {
      const alternates = [
        ...LANGS.map(
          (l) =>
            `    <xhtml:link rel="alternate" hreflang="${l}" href="${new URL(paths[l], site)}"/>`,
        ),
        `    <xhtml:link rel="alternate" hreflang="x-default" href="${new URL(paths.en, site)}"/>`,
      ].join("\n");
      return `  <url>
    <loc>${new URL(paths[lang], site)}</loc>${
      lastmod ? `\n    <lastmod>${lastmod.toISOString().slice(0, 10)}</lastmod>` : ""
    }
${alternates}
  </url>`;
    }),
  );

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join("\n")}
</urlset>`;

  return new Response(body, { headers: { "Content-Type": "application/xml" } });
};
