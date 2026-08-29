import { FaReact, FaNodeJs, FaSass, FaAws, FaGoogle, FaJava } from "react-icons/fa6";
import {
  SiNextdotjs,
  SiAstro,
  SiTailwindcss,
  SiRedux,
  SiJavascript,
  SiTypescript,
  SiExpress,
  SiNestjs,
  SiFastify,
  SiBun,
  SiPrisma,
  SiSequelize,
  SiPostgresql,
  SiMariadb,
  SiRedis,
  SiDocker,
  SiGithubactions,
  SiPlaywright,
  SiStripe,
  SiMercadopago,
  SiClerk,
  SiJsonwebtokens,
  SiLinear,
  SiFigma,
  SiLua,
} from "react-icons/si";
import type { IconType } from "react-icons";
import type { Lang } from "../i18n/ui";

interface TechItem {
  name: string;
  icon: IconType;
}

export interface TechCategory {
  category: string;
  items: TechItem[];
}

/** Category labels are the only translated part; product names never translate. */
const groups: { en: string; es: string; items: TechItem[] }[] = [
  {
    en: "Languages",
    es: "Lenguajes",
    items: [
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Lua (Garry's Mod)", icon: SiLua },
      { name: "Java (Minecraft)", icon: FaJava },
    ],
  },
  {
    en: "Frontend",
    es: "Frontend",
    items: [
      { name: "React", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Astro", icon: SiAstro },
      { name: "Redux / RTK", icon: SiRedux },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "SCSS", icon: FaSass },
    ],
  },
  {
    en: "Backend",
    es: "Backend",
    items: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "NestJS", icon: SiNestjs },
      { name: "Fastify", icon: SiFastify },
      { name: "Express", icon: SiExpress },
      { name: "Bun", icon: SiBun },
    ],
  },
  {
    en: "Data and ORM",
    es: "Datos y ORM",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL / MariaDB", icon: SiMariadb },
      { name: "Redis", icon: SiRedis },
      { name: "Prisma", icon: SiPrisma },
      { name: "Sequelize", icon: SiSequelize },
    ],
  },
  {
    en: "Infrastructure and testing",
    es: "Infraestructura y testing",
    items: [
      { name: "Docker", icon: SiDocker },
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "AWS", icon: FaAws },
      { name: "Google Cloud", icon: FaGoogle },
      { name: "Playwright", icon: SiPlaywright },
    ],
  },
  {
    en: "Integrations and tooling",
    es: "Integraciones y herramientas",
    items: [
      { name: "Stripe", icon: SiStripe },
      { name: "MercadoPago", icon: SiMercadopago },
      { name: "Clerk", icon: SiClerk },
      { name: "JWT", icon: SiJsonwebtokens },
      { name: "Linear", icon: SiLinear },
      { name: "Figma", icon: SiFigma },
    ],
  },
];

export const techStack = (lang: Lang): TechCategory[] =>
  groups.map((g) => ({ category: lang === "es" ? g.es : g.en, items: g.items }));
