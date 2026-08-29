---
title: "Building this site: two languages, two themes, one set of pages"
description: "How battaglino.dev handles bilingual routing without duplicating a single page, and what I got wrong about focus rings along the way."
pubDate: 2026-08-29
tags: ["astro", "i18n", "accessibility"]
lang: "en"
translationKey: "building-this-site"
---

I rebuilt this site to do three things it could not do before: speak Spanish, offer a light theme, and stop lying about where I work. The first two are the interesting ones.

## One set of pages, two languages

The obvious way to make an Astro site bilingual is to duplicate `src/pages` into `src/pages/es`. That means every layout change happens twice, and eventually one copy drifts.

Astro's rest parameters avoid it. A route at `src/pages/[...lang]/about.astro` with this `getStaticPaths`:

```js
export const getStaticPaths = () => [
  { params: { lang: undefined } },
  { params: { lang: "es" } },
];
```

emits `/about` and `/es/about` from one file. `undefined` collapses the segment entirely, so English keeps the root and Spanish gets the prefix. Every page on this site is written once.

Copy lives in `src/i18n/ui.ts`, and the data files export `(lang) => data` rather than a constant.

## The trailing slash that split every URL in two

The build emits directory-style URLs, so the canonical tag read `/es/about/`. My `hreflang` links were built from a different helper and read `/es/about`. To a search engine those are two URLs, and `hreflang` pointing at a non-canonical URL is ignored.

One helper now produces every internal path, and it always ends in a slash. Worth checking on your own site: view source and compare the canonical against the alternates, character for character.

## Themes: pick one switching mechanism

The rule that saved me time: never let `prefers-color-scheme` set some tokens and a class set others. Here the `.dark` class on `<html>` is the only mechanism. A small inline script resolves the system preference into that class before first paint, so there is no flash.

The part I like is the exit. If you toggle to the value your system already uses, the site *deletes* the stored preference instead of saving it. You are back to following your OS, and if you switch your laptop to dark at sunset, the site follows.

There is one more detail. Flipping a theme repaints colour, background, border and shadow on nearly every element at once, and if each has a transition they all fire together and the switch smears. Suppressing transitions for a single frame makes it snap.

## What I got wrong

I gave the bento cards a focus ring with Tailwind's split utilities: `focus-visible:outline`, `outline-2`, `outline-offset-2`, `outline-ring`. Tabbing to a card showed the browser's default ring instead of mine.

The classes were on the element. The rules were in the stylesheet. Only `outline-style` applied.

The cause was a class I had added elsewhere on the same element: an arbitrary `transition-[--tw-gradient-from,--tw-gradient-to,border-color]`. It was also pointless — gradient stops are custom properties, and without registering them they do not animate at all. So a transition that never worked was breaking a focus ring three utilities away.

Deleting it fixed both. The ring is now one shorthand declared once, which is harder to break.

## The lesson

I only found that because I walked the page with a real keyboard in Playwright and read the computed `outline` at every stop, instead of assuming the classes were enough. The check took a minute. I would not have caught it by looking.
