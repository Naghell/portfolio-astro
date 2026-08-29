export const LANGS = ["en", "es"] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = "en";

/** Rest-param routes give `undefined` for the default language (`/about`)
 *  and `"es"` for the prefixed one (`/es/about`). */
export function toLang(param?: string): Lang {
  return param === "es" ? "es" : DEFAULT_LANG;
}

/** `path` is always the English-rooted path ("/", "/about").
 *  Always returns a trailing slash so hrefs, hreflang and the canonical agree —
 *  the build emits directory-style URLs, and a mismatch reads as two URLs to Google. */
export function localizePath(path: string, lang: Lang): string {
  const base = lang === DEFAULT_LANG ? path : `/es${path === "/" ? "" : path}`;
  return base.endsWith("/") ? base : `${base}/`;
}

export const NAV = [
  { path: "/tech-stack", key: "nav.stack" },
  { path: "/about", key: "nav.about" },
  { path: "/projects", key: "nav.projects" },
  { path: "/experience", key: "nav.experience" },
  { path: "/blog", key: "nav.blog" },
] as const;

const ui = {
  en: {
    "site.tagline": "Full Stack Developer",
    "site.role": "Software Engineer",

    "nav.home": "Home",
    "nav.stack": "Tech stack",
    "nav.about": "About me",
    "nav.projects": "Projects",
    "nav.experience": "Work experience",
    "nav.blog": "Blog",
    "nav.back": "Back to home",
    "nav.skip": "Skip to content",

    "controls.language": "Language",
    "controls.theme.toDark": "Switch to dark theme",
    "controls.theme.toLight": "Switch to light theme",

    "home.greeting": "Hello",
    "home.heading": "Hi, I'm Renzo",
    "home.blurb": "TypeScript, fintech and product-minded engineering.",
    "home.cv": "CV",
    "home.stack.blurb": "The technologies and tools I work with every day.",
    "home.stack.cta": "Explore my stack",
    "home.about.blurb": "My path, how I work and what I'm learning right now.",
    "home.about.cta": "Read more",
    "home.projects.blurb": "Products and sites I've designed, built and shipped.",
    "home.projects.cta": "View projects",
    "home.experience.blurb": "Where I've worked and what I built there.",
    "home.experience.cta": "See my experience",
    "home.blog.blurb": "Notes on development, TypeScript and building products.",
    "home.blog.cta": "Visit the blog",

    "about.personal": "Personal info",
    "about.summary": "Professional summary",
    "about.interests": "Interests and hobbies",
    "about.journey": "My journey",
    "about.name": "Name",
    "about.location": "Location",
    "about.occupation": "Occupation",
    "about.education": "Education",
    "about.languages": "Languages",

    "experience.responsibilities": "Highlights",
    "experience.technologies": "Technologies used",
    "experience.present": "Present",
    "experience.logoAlt": "{company} logo",

    "projects.github": "GitHub",
    "projects.live": "Live site",
    "projects.githubOf": "{project} on GitHub",
    "projects.liveOf": "Open {project}",

    "blog.readMore": "Read the post",
    "blog.published": "Published",
    "blog.updated": "Updated",
    "blog.empty.title": "No posts yet",
    "blog.empty.body": "I write here about development and the things I build.",
  },
  es: {
    "site.tagline": "Desarrollador Full Stack",
    "site.role": "Software Engineer",

    "nav.home": "Inicio",
    "nav.stack": "Tecnologías",
    "nav.about": "Sobre mí",
    "nav.projects": "Proyectos",
    "nav.experience": "Experiencia laboral",
    "nav.blog": "Blog",
    "nav.back": "Volver al inicio",
    "nav.skip": "Ir al contenido",

    "controls.language": "Idioma",
    "controls.theme.toDark": "Cambiar al tema oscuro",
    "controls.theme.toLight": "Cambiar al tema claro",

    "home.greeting": "Hola",
    "home.heading": "Hola, soy Renzo",
    "home.blurb": "TypeScript, fintech e ingeniería con foco en producto.",
    "home.cv": "CV",
    "home.stack.blurb": "Las tecnologías y herramientas con las que trabajo todos los días.",
    "home.stack.cta": "Ver mis tecnologías",
    "home.about.blurb": "Mi recorrido, cómo trabajo y qué estoy aprendiendo ahora.",
    "home.about.cta": "Leer más",
    "home.projects.blurb": "Productos y sitios que diseñé, construí y puse en producción.",
    "home.projects.cta": "Ver proyectos",
    "home.experience.blurb": "Dónde trabajé y qué construí en cada lugar.",
    "home.experience.cta": "Ver mi experiencia",
    "home.blog.blurb": "Notas sobre desarrollo, TypeScript y construir productos.",
    "home.blog.cta": "Ir al blog",

    "about.personal": "Datos personales",
    "about.summary": "Resumen profesional",
    "about.interests": "Intereses y hobbies",
    "about.journey": "Mi recorrido",
    "about.name": "Nombre",
    "about.location": "Ubicación",
    "about.occupation": "Ocupación",
    "about.education": "Formación",
    "about.languages": "Idiomas",

    "experience.responsibilities": "Puntos destacados",
    "experience.technologies": "Tecnologías utilizadas",
    "experience.present": "Actualidad",
    "experience.logoAlt": "Logo de {company}",

    "projects.github": "GitHub",
    "projects.live": "Sitio en vivo",
    "projects.githubOf": "{project} en GitHub",
    "projects.liveOf": "Abrir {project}",

    "blog.readMore": "Leer el artículo",
    "blog.published": "Publicado",
    "blog.updated": "Actualizado",
    "blog.empty.title": "Todavía no hay artículos",
    "blog.empty.body": "Acá escribo sobre desarrollo y las cosas que construyo.",
  },
} as const;

export type UIKey = keyof (typeof ui)["en"];

export function useTranslations(lang: Lang) {
  return function t(key: UIKey, vars?: Record<string, string>): string {
    let s: string = ui[lang][key] ?? ui[DEFAULT_LANG][key];
    // Full templated strings, never sentences assembled from fragments.
    if (vars) for (const [k, v] of Object.entries(vars)) s = s.replaceAll(`{${k}}`, v);
    return s;
  };
}

/** Page <title> and meta description per route, per language. */
export const meta: Record<Lang, Record<string, { title: string; description: string }>> = {
  en: {
    "/": {
      title: "Home",
      description:
        "Renzo Luis Battaglino - Full Stack Developer from Córdoba, Argentina, specialized in TypeScript, Next.js, Node.js and fintech products.",
    },
    "/about": {
      title: "About me",
      description:
        "Full Stack Developer specialized in TypeScript, with end-to-end experience across web products and fintech. Based in Córdoba, Argentina.",
    },
    "/experience": {
      title: "Work experience",
      description:
        "Full Stack Developer at Lannis (fintech: tax settlement and e-invoicing) and previously at Edison. Next.js, Node.js, NestJS, Prisma and PostgreSQL.",
    },
    "/projects": {
      title: "Projects",
      description:
        "Web projects built with Astro, Next.js, React and Node.js - portfolios, landing pages and full stack applications.",
    },
    "/tech-stack": {
      title: "Tech stack",
      description:
        "The technologies I work with daily: TypeScript, React, Next.js, Astro, Node.js, NestJS, Prisma, PostgreSQL, Redis, Docker and AWS.",
    },
    "/blog": {
      title: "Blog",
      description:
        "Notes on web development, TypeScript and building products - by Renzo Luis Battaglino.",
    },
  },
  es: {
    "/": {
      title: "Inicio",
      description:
        "Renzo Luis Battaglino - Desarrollador Full Stack de Córdoba, Argentina, especializado en TypeScript, Next.js, Node.js y productos fintech.",
    },
    "/about": {
      title: "Sobre mí",
      description:
        "Desarrollador Full Stack especializado en TypeScript, con experiencia end-to-end en productos web y fintech. Radicado en Córdoba, Argentina.",
    },
    "/experience": {
      title: "Experiencia laboral",
      description:
        "Desarrollador Full Stack en Lannis (fintech: liquidación de impuestos y facturación electrónica) y antes en Edison. Next.js, Node.js, NestJS, Prisma y PostgreSQL.",
    },
    "/projects": {
      title: "Proyectos",
      description:
        "Proyectos web construidos con Astro, Next.js, React y Node.js: portfolios, landings y aplicaciones full stack.",
    },
    "/tech-stack": {
      title: "Tecnologías",
      description:
        "Las tecnologías con las que trabajo todos los días: TypeScript, React, Next.js, Astro, Node.js, NestJS, Prisma, PostgreSQL, Redis, Docker y AWS.",
    },
    "/blog": {
      title: "Blog",
      description:
        "Notas sobre desarrollo web, TypeScript y construir productos, por Renzo Luis Battaglino.",
    },
  },
};
