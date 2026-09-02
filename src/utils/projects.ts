import { FaReact } from "react-icons/fa6";
import {
  SiNextdotjs,
  SiAstro,
  SiTailwindcss,
  SiTypescript,
  SiPostgresql,
  SiSupabase,
  SiBun,
  SiDocker,
} from "react-icons/si";
import type { IconType } from "react-icons";
import type { Lang } from "../i18n/ui";

interface Technology {
  name: string;
  icon: IconType;
}

export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  technologies: Technology[];
  githubUrl?: string;
  liveUrl?: string;
}

const base = [
  {
    title: "Habita",
    imageUrl: "/projects/habita.avif",
    liveUrl: "https://habita.ar",
    technologies: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Bun", icon: SiBun },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Docker", icon: SiDocker },
    ],
    en: "A rental contract is a mess of index adjustments, guarantees and split receipts. Habita keeps that straight for an agency: contracts that adjust by ICL, IPC, UVA or CER, daily billing, owner settlements with itemized commission, and portals for tenants and owners. One core package behind both the HTTP API and an MCP server, with tenant isolation enforced by row-level security in Postgres.",
    es: "Un contrato de alquiler es un lío de ajustes por índice, garantías y recibos partidos. Habita se lo ordena a la inmobiliaria: contratos que ajustan por ICL, IPC, UVA o CER, facturación diaria, liquidaciones al propietario con comisión ítem por ítem, y portales para inquilinos y propietarios. Un solo core detrás de la API HTTP y de un servidor MCP, con aislamiento por row-level security en Postgres.",
  },
  {
    title: "Comunidad Reborn",
    imageUrl: "/projects/comunidad-reborn.avif",
    liveUrl: "https://comunidadreborn.net",
    technologies: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: FaReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Supabase", icon: SiSupabase },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
    en: "Home base for a gaming community. Players sign in with their Steam account, see which servers are up, read the rules and buy from a Tebex-backed store.",
    es: "La casa de una comunidad gamer. Los jugadores entran con su cuenta de Steam, ven qué servidores están arriba, leen el reglamento y compran en una tienda conectada a Tebex.",
  },
  {
    title: "Portfolio (Astro)",
    imageUrl: "/projects/portfolio-astro.avif",
    githubUrl: "https://github.com/Naghell/portfolio-astro",
    liveUrl: "https://battaglino.dev",
    technologies: [
      { name: "Astro", icon: SiAstro },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "TypeScript", icon: SiTypescript },
    ],
    en: "This site. A bento grid in Astro, two languages, two themes, and a CV that is generated rather than exported by hand.",
    es: "Este sitio. Una grilla bento en Astro, dos idiomas, dos temas, y un CV que se genera en vez de exportarse a mano.",
  },
  {
    title: "Minecraft Landing Page",
    imageUrl: "/projects/landing-minecraft-bento.avif",
    githubUrl: "https://github.com/Naghell/bento-minecraft-landing",
    liveUrl: "https://bento-minecraft-landing.vercel.app/",
    technologies: [
      { name: "Astro", icon: SiAstro },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
    en: "A bento-style landing page for Minecraft built with Astro, showcasing game features and information.",
    es: "Una landing estilo bento para Minecraft construida con Astro, que presenta las características del juego.",
  },
  {
    title: "FuxiaLab Landing Page",
    imageUrl: "/projects/fuxia-lab.avif",
    liveUrl: "https://fuxialab.com",
    technologies: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: FaReact },
      { name: "TypeScript", icon: SiTypescript },
    ],
    en: "A landing page for FuxiaLab, a creative agency, built with Next.js.",
    es: "Una landing para FuxiaLab, una agencia creativa, construida con Next.js.",
  },
];

export const projects = (lang: Lang): Project[] =>
  base.map(({ en, es, ...rest }) => ({ ...rest, description: lang === "es" ? es : en }));
