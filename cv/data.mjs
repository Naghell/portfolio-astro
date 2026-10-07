/** The CV owns its own prose. It reads as a CV — dense, formal, exhaustive — while the
 *  site says the same things in its own voice. Sharing the strings made both read like
 *  the CV, so they are kept separate on purpose. Changing a job means editing here and
 *  in src/utils/experience.ts. */

export const contact = {
  name: "Renzo Luis Battaglino",
  emails: ["renzo@battaglino.dev", "renzojmp@gmail.com"],
  site: "battaglino.dev",
  linkedin: "linkedin.com/in/renzobxt",
  github: "github.com/Naghell",
  x: "x.com/ren_tsx",
};

export const cv = {
  en: {
    title: "Full Stack Developer",
    location: "Córdoba, Argentina",
    summary:
      "Full Stack Developer specialized in TypeScript, with end-to-end experience across web products and fintech. Currently at Lannis, building a tax settlement and e-invoicing platform on a Next.js + Node.js monorepo with Prisma and PostgreSQL, along with third-party integrations and fiscal data pipelines. Product-minded profile: feature design, PRD writing and technical ownership of projects.",
    experience: [
      {
        position: "Full Stack Developer",
        company: "Lannis",
        period: "June 2025 – Present",
        blurb:
          "Fintech platform for tax settlement and electronic invoicing in Argentina, built as a Next.js + Node.js monorepo on Prisma and PostgreSQL.",
        bullets: [
          "Broad hands-on experience with ARCA, Argentina's national tax authority: both at the operational level, covering the fiscal procedures taxpayers go through, and across its web services",
          "Technical lead of the Clover (POS) integration: OAuth 2.0 connection flow, synchronization of orders, line items and payments, and the monthly sales ledger that feeds the tax-return engine",
          "Built the monthly turnover-tax (IIBB) settlement engine for local and Convenio Multilateral taxpayers: taxable base by document type, credit notes, USD to ARS conversion, advance payments, carry-forward balances and special regimes, covered by an E2E test suite",
          "Electronic invoicing through ARCA's official web services (SOAP API): issuing, credit and debit notes, document rules engine, VAT breakdown by rate, export invoices and CAE error handling",
          "Fiscal data ingestion pipelines: headless workers running queue-backed idempotent jobs with retries, backoff and cancellation handling, plus CSV/PDF parsing, normalization and document storage",
          "Fiscal permissions and delegations module: monthly and weekly cron jobs for provisioning and cleanup, company-administrator data model and the PRD for the full flow",
          "Data modeling with Prisma over PostgreSQL, technical planning and PRD writing, and roadmap management in Linear",
        ],
      },
      {
        position: "Full Stack Developer",
        company: "Edison",
        period: "July 2023 – July 2025",
        blurb: "Argentine edtech startup running short-format courses taught by industry leaders.",
        bullets: [
          "Migrated course landing pages, a marketplace and a checkout system from no-code tools to full-code applications with React/Vite, later moved to Next.js",
          "Integrated payment providers: Stripe, MercadoPago (Checkout API with installments) and dLocal",
          "Built the first internal API with NestJS and MariaDB on AWS RDS, including a centralized response service (error handling, pagination, per-model filtering)",
          "Built a dynamic Prisma module that auto-generates CRUD operations across models with configurable per-model filters",
          "AWS infrastructure: hosting, RDS, Lambda serverless functions and CI/CD pipelines with CodePipeline and CodeBuild",
        ],
      },
    ],

    sections: {
      summary: "Summary",
      experience: "Experience",
      projects: "Selected projects",
      skills: "Skills",
      education: "Education",
      languages: "Languages",
    },
    projects: [
      {
        name: "Habita — habita.ar (in production)",
        note: "Multi-tenant SaaS for Argentine real estate agencies: contracts with automatic index adjustment (ICL, IPC, UVA, CER), services and taxes per contract, owner settlements with itemized commission, daily cash book and due-date agenda, portfolio import from eSecure and spreadsheets, tenant and owner portals with WhatsApp notifications. One core package behind the HTTP API and an MCP server covering the full backoffice. Bun monorepo, Next.js + Hono, PostgreSQL with row-level security.",
      },
      {
        name: "Barrito (in progress)",
        note: "Neighborhood issue map for Ombú and Escobar (Córdoba), designed for older users on mobile: four-step reporting with photo and location, Waze-style confirmation votes, per-category contacts and an admin moderation panel. Go API (net/http, pgx, sqlc), Next.js, PostgreSQL, S3-compatible photo storage with EXIF stripping and SafeSearch screening, deployed with Docker Compose and GitHub Actions.",
      },
      {
        name: "Comunidad Reborn — comunidadreborn.net",
        note: "Website for a gaming community: Steam OpenID login, live server status and a storefront wired to Tebex. Next.js and Supabase.",
      },
      {
        name: "battaglino.dev",
        note: "Personal portfolio and blog. Astro and Tailwind CSS, bilingual, light and dark theme.",
      },
    ],
    skills: [
      ["Languages", "TypeScript, JavaScript, Go, Lua, Java"],
      ["Frontend", "React, Next.js, Astro, Redux / RTK, Tailwind CSS, SCSS"],
      ["Backend", "Node.js, NestJS, Fastify, Express, Bun"],
      ["Data", "PostgreSQL, MySQL / MariaDB, Redis, Prisma, Sequelize"],
      ["Infrastructure", "Docker, GitHub Actions, AWS (RDS, Lambda, CodePipeline), Google Cloud"],
      ["Integrations", "ARCA web services (SOAP), Clover, Stripe, MercadoPago, dLocal, Clerk"],
      ["Testing", "Unit, integration and E2E (Playwright)"],
      ["Analytics and messaging", "Amplitude, Hotjar, Microsoft Clarity, Mixpanel, MailerLite, Botmaker, Meta API"],
      ["Automation and tooling", "n8n, Make, Zapier, Airtable, Linear, Figma"],
    ],
    education: [
      "Systems Engineering — Universidad Tecnológica Nacional, FRC. 2020–2022 (two years completed).",
      "Full Stack Web Developer — SoyHenry Bootcamp. 700 hours of coursework and practice, 2023.",
    ],
    languages: "Spanish (native) · English (B2)",
  },
  es: {
    title: "Desarrollador Full Stack",
    location: "Córdoba, Argentina",
    summary:
      "Desarrollador Full Stack especializado en TypeScript, con experiencia end-to-end en productos web y fintech. Actualmente en Lannis, construyendo una plataforma de liquidación de impuestos y facturación electrónica sobre un monorepo Next.js + Node.js con Prisma y PostgreSQL, además de integraciones con sistemas externos y pipelines de datos fiscales. Perfil orientado a producto: diseño de features, redacción de PRDs y liderazgo técnico de proyectos.",
    experience: [
      {
        position: "Desarrollador Full Stack",
        company: "Lannis",
        period: "Junio 2025 – Actualidad",
        blurb:
          "Plataforma fintech de liquidación de impuestos y facturación electrónica en Argentina, construida como un monorepo Next.js + Node.js sobre Prisma y PostgreSQL.",
        bullets: [
          "Amplia experiencia con ARCA, tanto a nivel operativo, abarcando los trámites fiscales que atraviesan los contribuyentes, como a nivel de sus web services",
          "Lead técnico de la integración con Clover (POS): flujo de conexión OAuth 2.0, sincronización de órdenes, ítems y pagos, y el libro de ventas mensual que alimenta el motor de declaraciones juradas",
          "Desarrollo del motor de liquidación mensual de IIBB para contribuyentes locales y de Convenio Multilateral: base imponible por tipo de comprobante, notas de crédito, conversión de USD a ARS, pagos a cuenta, traslado de saldo a favor y regímenes especiales, cubierto con una suite de tests E2E",
          "Facturación electrónica sobre los web services oficiales de ARCA (API SOAP): emisión, notas de crédito y débito, motor de reglas de comprobantes, desglose de IVA por alícuota, facturas de exportación y manejo de errores de CAE",
          "Pipelines de ingesta de datos fiscales: workers headless que ejecutan jobs idempotentes sobre colas con reintentos, backoff y manejo de cancelación, más parseo de CSV/PDF, normalización y almacenamiento de documentos",
          "Módulo de permisos y delegaciones fiscales: crons mensuales y semanales de aprovisionamiento y limpieza, modelo de datos empresa-administrador y el PRD del flujo completo",
          "Modelado de datos con Prisma sobre PostgreSQL, planificación técnica, redacción de PRDs y gestión del roadmap en Linear",
        ],
      },
      {
        position: "Desarrollador Full Stack",
        company: "Edison",
        period: "Julio 2023 – Julio 2025",
        blurb: "Startup argentina de edtech que dicta cursos de formato corto con referentes de la industria.",
        bullets: [
          "Migración de landings de cursos, un marketplace y un sistema de checkout desde herramientas no-code a aplicaciones full-code con React/Vite, luego migrado a Next.js",
          "Integración de pasarelas de pago: Stripe, MercadoPago (Checkout API con pagos en cuotas) y dLocal",
          "Desarrollo de la primera API interna con NestJS y MariaDB en AWS RDS, incluyendo un servicio centralizado de respuestas (manejo de errores, paginación y filtros por modelo)",
          "Desarrollo de un módulo dinámico sobre Prisma que autogenera operaciones CRUD para todos los modelos con filtros configurables por modelo",
          "Infraestructura en AWS: hosting, RDS, funciones serverless con Lambda y pipelines de CI/CD con CodePipeline y CodeBuild",
        ],
      },
    ],

    sections: {
      summary: "Perfil",
      experience: "Experiencia",
      projects: "Proyectos destacados",
      skills: "Tecnologías",
      education: "Formación",
      languages: "Idiomas",
    },
    projects: [
      {
        name: "Habita — habita.ar (en producción)",
        note: "SaaS multi-tenant para inmobiliarias argentinas: contratos con ajuste automático por índice (ICL, IPC, UVA, CER), servicios e impuestos por contrato, liquidaciones al propietario con comisión ítem por ítem, caja diaria y agenda de vencimientos, importación de cartera desde eSecure y planillas, portales de inquilino y propietario con avisos por WhatsApp. Un solo core detrás de la API HTTP y de un servidor MCP que cubre todo el backoffice. Monorepo Bun, Next.js + Hono, PostgreSQL con row-level security.",
      },
      {
        name: "Barrito (en desarrollo)",
        note: "Mapa de problemas del barrio para Ombú y Escobar (Córdoba), pensado para gente mayor desde el celular: reporte en cuatro pasos con foto y ubicación, votos de confirmación estilo Waze, contactos por categoría y panel de moderación. API en Go (net/http, pgx, sqlc), Next.js, PostgreSQL, fotos en almacenamiento S3 sin EXIF y filtradas con SafeSearch, desplegado con Docker Compose y GitHub Actions.",
      },
      {
        name: "Comunidad Reborn — comunidadreborn.net",
        note: "Sitio de una comunidad gamer: login con Steam OpenID, estado de los servidores en vivo y tienda conectada a Tebex. Next.js y Supabase.",
      },
      {
        name: "battaglino.dev",
        note: "Portfolio personal y blog. Astro y Tailwind CSS, bilingüe, con tema claro y oscuro.",
      },
    ],
    skills: [
      ["Lenguajes", "TypeScript, JavaScript, Go, Lua, Java"],
      ["Frontend", "React, Next.js, Astro, Redux / RTK, Tailwind CSS, SCSS"],
      ["Backend", "Node.js, NestJS, Fastify, Express, Bun"],
      ["Datos", "PostgreSQL, MySQL / MariaDB, Redis, Prisma, Sequelize"],
      ["Infraestructura", "Docker, GitHub Actions, AWS (RDS, Lambda, CodePipeline), Google Cloud"],
      ["Integraciones", "Web services de ARCA (SOAP), Clover, Stripe, MercadoPago, dLocal, Clerk"],
      ["Testing", "Unitario, integración y E2E (Playwright)"],
      ["Analítica y mensajería", "Amplitude, Hotjar, Microsoft Clarity, Mixpanel, MailerLite, Botmaker, Meta API"],
      ["Automatización y herramientas", "n8n, Make, Zapier, Airtable, Linear, Figma"],
    ],
    education: [
      "Ingeniería en Sistemas — Universidad Tecnológica Nacional, FRC. 2020–2022 (dos años cursados).",
      "Desarrollador Web Full Stack — Bootcamp SoyHenry. 700 horas de cursada y práctica, 2023.",
    ],
    languages: "Español (nativo) · Inglés (B2)",
  },
};
