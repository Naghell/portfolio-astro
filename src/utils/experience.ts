import { FaReact, FaNodeJs, FaAws } from "react-icons/fa6";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNestjs,
  SiPrisma,
  SiPostgresql,
  SiRedis,
  SiMariadb,
  SiDocker,
  SiGithubactions,
  SiStripe,
  SiMercadopago,
  SiClerk,
  SiRedux,
} from "react-icons/si";
import type { IconType } from "react-icons";
import type { Lang } from "../i18n/ui";

interface Technology {
  name: string;
  icon: IconType;
}

export interface Job {
  company: string;
  logo: string;
  position: string;
  period: string;
  description: string;
  responsibilities: string[];
  technologies: Technology[];
  companyUrl?: string;
}

const lannisTech: Technology[] = [
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React", icon: FaReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Prisma", icon: SiPrisma },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Redis", icon: SiRedis },
  { name: "Docker", icon: SiDocker },
  { name: "GitHub Actions", icon: SiGithubactions },
  { name: "Stripe", icon: SiStripe },
  { name: "Clerk", icon: SiClerk },
  { name: "Tailwind CSS", icon: SiTailwindcss },
];

const edisonTech: Technology[] = [
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React", icon: FaReact },
  { name: "Redux / RTK", icon: SiRedux },
  { name: "NestJS", icon: SiNestjs },
  { name: "Prisma", icon: SiPrisma },
  { name: "MariaDB", icon: SiMariadb },
  { name: "MercadoPago", icon: SiMercadopago },
  { name: "Stripe", icon: SiStripe },
  { name: "AWS", icon: FaAws },
  { name: "Tailwind CSS", icon: SiTailwindcss },
];

const en: Job[] = [
  {
    company: "Lannis",
    logo: "/experience/lannis.svg",
    position: "Full Stack Developer",
    period: "June 2025 – Present",
    description:
      "A fintech that files taxes and issues invoices for Argentine taxpayers, so they do not have to deal with the tax authority themselves.",
    responsibilities: [
      "I work with ARCA every day, from the procedures a taxpayer actually goes through to the SOAP services behind them",
      "I own the Clover POS integration end to end: connecting a merchant's terminal, keeping orders and payments in sync, and turning that into the sales ledger the tax engine reads",
      "I wrote the IIBB settlement engine. It takes a month of invoices and works out what a taxpayer owes, for local and multi-jurisdiction regimes. It has an E2E suite, because the numbers have to be right",
      "Invoicing runs through me too: credit and debit notes, VAT split by rate, export invoices, and the error handling for when ARCA says no",
      "Keeping fiscal data flowing means queue-backed workers that retry, back off and cancel cleanly, plus the CSV and PDF parsing that feeds them",
      "Outside the editor: data modeling, PRDs, technical planning and the roadmap in Linear",
    ],
    technologies: lannisTech,
    companyUrl: "https://lannis.app",
  },
  {
    company: "Edison",
    logo: "/experience/edison.avif",
    position: "Full Stack Developer",
    period: "July 2023 – July 2025",
    description:
      "An edtech startup selling short, intensive courses taught by people who actually do the job.",
    responsibilities: [
      "I took the internal systems off no-code: course landings, a marketplace and a checkout, first in React/Vite and later Next.js",
      "I made payments work in Argentina. Stripe was easy, MercadoPago's installments were not, and dLocal came in as the alternative",
      "I built the first internal API on NestJS and MariaDB, with one response layer handling errors, pagination and filtering, and a Prisma module that generated CRUD for every model",
      "I ran the AWS side: RDS, Lambda functions and CI/CD through CodePipeline",
    ],
    technologies: edisonTech,
    companyUrl: "https://somosedison.com",
  },
];

const es: Job[] = [
  {
    company: "Lannis",
    logo: "/experience/lannis.svg",
    position: "Desarrollador Full Stack",
    period: "Junio 2025 – Actualidad",
    description:
      "Una fintech que liquida impuestos y emite facturas para contribuyentes argentinos, para que no tengan que lidiar ellos con el organismo fiscal.",
    responsibilities: [
      "Trabajo con ARCA todos los días, desde los trámites que atraviesa un contribuyente hasta los servicios SOAP que hay detrás",
      "La integración con Clover (POS) es mía de punta a punta: conectar la terminal de un comercio, mantener órdenes y pagos sincronizados, y convertir eso en el libro de ventas que lee el motor de impuestos",
      "Escribí el motor de liquidación de IIBB. Toma un mes de comprobantes y calcula lo que debe un contribuyente, para regímenes locales y de convenio multilateral. Tiene suite E2E, porque los números tienen que dar bien",
      "La facturación también pasa por mí: notas de crédito y débito, IVA desglosado por alícuota, facturas de exportación, y el manejo de errores para cuando ARCA dice que no",
      "Que los datos fiscales fluyan significa workers sobre colas que reintentan, hacen backoff y cancelan limpio, más el parseo de CSV y PDF que los alimenta",
      "Fuera del editor: modelado de datos, PRDs, planificación técnica y el roadmap en Linear",
    ],
    technologies: lannisTech,
    companyUrl: "https://lannis.app",
  },
  {
    company: "Edison",
    logo: "/experience/edison.avif",
    position: "Desarrollador Full Stack",
    period: "Julio 2023 – Julio 2025",
    description:
      "Una startup de edtech que vende cursos cortos e intensivos, dictados por gente que hace el trabajo de verdad.",
    responsibilities: [
      "Saqué los sistemas internos del no-code: landings de cursos, un marketplace y un checkout, primero en React/Vite y después en Next.js",
      "Hice que los pagos funcionaran en Argentina. Stripe fue fácil, las cuotas de MercadoPago no, y dLocal entró como alternativa",
      "Construí la primera API interna sobre NestJS y MariaDB, con una capa de respuestas que resolvía errores, paginado y filtros, y un módulo sobre Prisma que generaba el CRUD de todos los modelos",
      "Me encargué del lado de AWS: RDS, funciones Lambda y CI/CD con CodePipeline",
    ],
    technologies: edisonTech,
    companyUrl: "https://somosedison.com",
  },
];

export const workExperience = (lang: Lang): Job[] => (lang === "es" ? es : en);
