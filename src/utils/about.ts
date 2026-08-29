import { FaGamepad, FaMusic, FaDrum, FaLaptopCode } from "react-icons/fa6";
import type { IconType } from "react-icons";
import type { Lang } from "../i18n/ui";

interface Interest {
  name: string;
  icon: IconType;
}

export interface AboutData {
  personalInfo: {
    name: string;
    location: string;
    occupation: string;
    education: string;
    languages: string;
  };
  professionalSummary: string;
  interests: Interest[];
  journey: string;
}

const icons = [FaGamepad, FaMusic, FaDrum, FaLaptopCode];
const withIcons = (names: string[]): Interest[] =>
  names.map((name, i) => ({ name, icon: icons[i] }));

const en: AboutData = {
  personalInfo: {
    name: "Renzo Luis Battaglino",
    location: "Córdoba, Argentina",
    occupation: "Full Stack Developer (TypeScript)",
    education:
      "Systems Engineering at UTN FRC (2020–2022) · Full Stack Web Developer, SoyHenry Bootcamp (2023)",
    languages: "Spanish (native) · English (B2)",
  },
  professionalSummary:
    "TypeScript across the whole stack, currently pointed at fintech. At Lannis I work on the part of the product where a wrong number is a real problem for someone: tax settlement, invoicing and the pipelines that feed them. I like owning a feature from the data model and the PRD through to the tests, not just the part that renders.",
  interests: withIcons(["Game modding", "Music", "Playing drums", "Building side projects"]),
  journey:
    "Games are what got me into code in the first place: Lua addons for Garry's Mod and Java plugins for Minecraft, long before any of it was a job. I started at Edison in 2023 with basic programming knowledge and grew into a key contributor, moving their internal systems from no-code platforms to full-code applications: landings, a marketplace, a checkout with Stripe, MercadoPago and dLocal, and the first internal API on NestJS and AWS. Since mid-2025 I've been at Lannis, working on fintech: a monthly tax settlement engine, electronic invoicing against ARCA's official web services, POS integrations and queue-backed data pipelines. Along the way my focus shifted from writing features to owning them end to end — data modeling, PRDs, technical planning and the tests that keep it all honest. I still build for gaming communities on the side, which is where I get to try things the day job would not risk.",
};

const es: AboutData = {
  personalInfo: {
    name: "Renzo Luis Battaglino",
    location: "Córdoba, Argentina",
    occupation: "Desarrollador Full Stack (TypeScript)",
    education:
      "Ingeniería en Sistemas en UTN FRC (2020–2022) · Desarrollador Web Full Stack, Bootcamp SoyHenry (2023)",
    languages: "Español (nativo) · Inglés (B2)",
  },
  professionalSummary:
    "TypeScript en todo el stack, hoy apuntado a fintech. En Lannis trabajo en la parte del producto donde un número mal calculado es un problema real para alguien: liquidación de impuestos, facturación y los pipelines que las alimentan. Me gusta hacerme cargo de una feature desde el modelo de datos y el PRD hasta los tests, no solo de la parte que se ve.",
  interests: withIcons(["Modding de juegos", "Música", "Tocar la batería", "Proyectos propios"]),
  journey:
    "A la programación llegué por los videojuegos: addons en Lua para Garry's Mod y plugins en Java para Minecraft, mucho antes de que esto fuera un trabajo. Entré a Edison en 2023 con conocimientos básicos y terminé siendo un colaborador clave en llevar sus sistemas internos de plataformas no-code a aplicaciones full-code: landings, un marketplace, un checkout con Stripe, MercadoPago y dLocal, y la primera API interna sobre NestJS y AWS. Desde mediados de 2025 estoy en Lannis, trabajando en fintech: un motor mensual de liquidación de impuestos, facturación electrónica contra los web services oficiales de ARCA, integraciones con POS y pipelines de datos sobre colas. En el camino mi foco pasó de escribir features a hacerme cargo de ellas de punta a punta: modelado de datos, PRDs, planificación técnica y los tests que mantienen todo honesto. Sigo construyendo para comunidades gamer por fuera del trabajo, que es donde pruebo cosas que en producción no arriesgaría.",
};

export const aboutData = (lang: Lang): AboutData => (lang === "es" ? es : en);
