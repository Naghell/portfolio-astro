/**
 * Renders the CV to PDF with headless Chromium, so the output carries a real
 * text layer (selectable, and readable by ATS and AI parsers) rather than an image.
 *
 * All content comes from ./data.mjs. The CV deliberately does not share prose with the
 * site: a CV reads dense and formal, the site reads like a person talking.
 *
 * Run:  bun cv/build.mjs
 * If playwright lives outside this project:
 *       PLAYWRIGHT_PATH=/path/to/node_modules/playwright bun cv/build.mjs
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { contact, cv } from "./data.mjs";

const { chromium } = await import(process.env.PLAYWRIGHT_PATH ?? "playwright");

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// Single column, real headings, real lists, no tables and no text boxes:
// the layout rules ATS and document parsers actually depend on.
const css = `
  @page { size: A4; margin: 14mm 15mm; }
  * { box-sizing: border-box; }
  body {
    margin: 0;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 10pt;
    line-height: 1.45;
    color: #16151c;
  }
  a { color: #5b21b6; text-decoration: none; }
  h1 { font-size: 20pt; margin: 0; letter-spacing: -0.01em; }
  .role { font-size: 11.5pt; color: #5b21b6; font-weight: 600; margin: 2pt 0 0; }
  .meta { margin: 4pt 0 0; color: #45424f; }
  .meta span { white-space: nowrap; }
  h2 {
    font-size: 10pt; text-transform: uppercase; letter-spacing: 0.08em;
    color: #5b21b6; margin: 15pt 0 5pt; padding-bottom: 2pt;
    border-bottom: 0.7pt solid #d9d5e6;
  }
  h3 { font-size: 11pt; margin: 0; }
  .job { margin-top: 9pt; page-break-inside: avoid; }
  .job:first-of-type { margin-top: 0; }
  .job-head { display: flex; justify-content: space-between; gap: 10pt; align-items: baseline; }
  .company { color: #45424f; font-weight: 600; }
  .dates { color: #45424f; white-space: nowrap; font-variant-numeric: tabular-nums; }
  .blurb { margin: 3pt 0 4pt; color: #45424f; }
  ul { margin: 0; padding-left: 13pt; }
  li { margin-bottom: 2.5pt; }
  p { margin: 0; }
  .skill { margin-bottom: 2.5pt; }
  .skill b { color: #16151c; }
  .proj { margin-bottom: 5pt; }
`;

function render(lang) {
  const t = cv[lang];
  const jobs = t.experience;

  const contactLine = [
    t.location,
    ...contact.emails,
    contact.site,
    contact.linkedin,
    contact.github,
  ]
    .map((x) => `<span>${esc(x)}</span>`)
    .join(" &nbsp;·&nbsp; ");

  return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<title>${esc(contact.name)} — ${esc(t.title)}</title>
<style>${css}</style>
</head>
<body>
  <header>
    <h1>${esc(contact.name)}</h1>
    <p class="role">${esc(t.title)}</p>
    <p class="meta">${contactLine}</p>
  </header>

  <h2>${esc(t.sections.summary)}</h2>
  <p>${esc(t.summary)}</p>

  <h2>${esc(t.sections.experience)}</h2>
  ${jobs
    .map(
      (job) => `<section class="job">
    <div class="job-head">
      <h3>${esc(job.position)} — <span class="company">${esc(job.company)}</span></h3>
      <span class="dates">${esc(job.period)}</span>
    </div>
    <p class="blurb">${esc(job.blurb)}</p>
    <ul>${job.bullets.map((r) => `<li>${esc(r)}</li>`).join("")}</ul>
  </section>`,
    )
    .join("\n")}

  <h2>${esc(t.sections.projects)}</h2>
  ${t.projects
    .map(
      (p) =>
        `<p class="proj"><b>${esc(p.name)}</b> — ${esc(p.note)}</p>`,
    )
    .join("\n")}

  <h2>${esc(t.sections.skills)}</h2>
  ${t.skills
    .map(([label, items]) => `<p class="skill"><b>${esc(label)}:</b> ${esc(items)}</p>`)
    .join("\n")}

  <h2>${esc(t.sections.education)}</h2>
  <ul>${t.education.map((e) => `<li>${esc(e)}</li>`).join("")}</ul>

  <h2>${esc(t.sections.languages)}</h2>
  <p>${esc(t.languages)}</p>
</body>
</html>`;
}

mkdirSync("public/cv", { recursive: true });
const browser = await chromium.launch();

for (const [lang, file] of [
  ["en", "renzo-battaglino-cv.pdf"],
  ["es", "renzo-battaglino-cv-es.pdf"],
]) {
  const html = render(lang);
  writeFileSync(`cv/preview-${lang}.html`, html);
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: "networkidle" });
  await page.pdf({
    path: `public/cv/${file}`,
    format: "A4",
    printBackground: true,
    preferCSSPageSize: true,
  });
  await page.close();
  console.log(`built public/cv/${file}`);
}

await browser.close();
