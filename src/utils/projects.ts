import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaSass,
  FaJs,
  FaCss3,
} from "react-icons/fa6";
import {
  SiNextdotjs,
  SiAstro,
  SiTailwindcss,
  SiExpress,
  SiTypescript,
  SiVite,
  SiSequelize,
  SiPostgresql,
} from "react-icons/si";
import type { IconType } from "react-icons";

interface Technology {
  name: string;
  icon: IconType;
}

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  technologies: Technology[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Portfolio Website (Astro)",
    description:
      "Current portfolio website built with Astro and Tailwind CSS, showcasing my projects and skills.",
    imageUrl: "/projects/portfolio-astro.png",
    technologies: [
      { name: "Astro", icon: SiAstro },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "TypeScript", icon: SiTypescript },
    ],
    githubUrl: "https://github.com/naghell/portfolio-astro",
  },
  {
    title: "Portfolio Website (Next.js)",
    description:
      "Previous version of my portfolio built with Next.js, demonstrating my skills and projects.",
    imageUrl: "/projects/portfolio-next.png",
    technologies: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: FaReact },
      { name: "TypeScript", icon: SiTypescript },
    ],
    githubUrl: "https://github.com/naghell/my-fullstack-portfolio",
    liveUrl: "https://my-fullstack-portfolio.vercel.app/",
  },
  {
    title: "Minecraft Landing Page",
    description:
      "A landing page for Minecraft built with Astro, showcasing game features and information.",
    imageUrl: "/projects/landing-minecraft-bento.png",
    technologies: [
      { name: "Astro", icon: SiAstro },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
    githubUrl: "https://github.com/Naghell/bento-minecraft-landing",
    liveUrl: "https://bento-minecraft-landing.vercel.app/",
  },
  {
    title: "PerrAPI",
    description:
      "A full-stack application that consumes a dog API, built with React, Vite, Node, Express, Sequelize, and PostgreSQL.",
    imageUrl: "/projects/perrapi.jpeg",
    technologies: [
      { name: "React", icon: FaReact },
      { name: "Vite", icon: SiVite },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express", icon: SiExpress },
      { name: "Sequelize", icon: SiSequelize },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
    githubUrl: "https://github.com/Naghell/PI-Perros",
  },
  {
    title: "Rick and Morty Explorer",
    description:
      "A web application that displays information from the Rick and Morty API, built with similar technologies to PerrAPI.",
    imageUrl: "/projects/rick-and-morty.png",
    technologies: [
      { name: "React", icon: FaReact },
      { name: "Vite", icon: SiVite },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express", icon: SiExpress },
      { name: "Sequelize", icon: SiSequelize },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
    githubUrl: "https://github.com/Naghell/soyHenry-integrador",
  },
  {
    title: "Real Estate Landing v1",
    description:
      "A landing page for a real estate company, built with HTML, CSS, and JavaScript.",
    imageUrl: "/projects/coder-inmobiliaria-1.png",
    technologies: [
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3 },
      { name: "JavaScript", icon: FaJs },
    ],
    githubUrl: "https://github.com/Naghell/coder-inmobiliaria",
  },
  {
    title: "Real Estate Landing v2",
    description:
      "Another landing page for a different real estate company, also built with HTML, SCSS, and JavaScript.",
    imageUrl: "/projects/coder-inmobiliaria-2.png",
    technologies: [
      { name: "HTML", icon: FaHtml5 },
      { name: "SCSS", icon: FaSass },
      { name: "JavaScript", icon: FaJs },
    ],
    githubUrl: "https://github.com/Naghell/coder-inmobiliaria-v2",
    liveUrl: "https://coder-inmobiliaria-v2.vercel.app/",
  },
  {
    title: "FuxiaLab Landing Page",
    description: "A landing page for FuxiaLab, built with Next.js.",
    imageUrl: "/projects/fuxia-lab.png",
    technologies: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: FaReact },
      { name: "TypeScript", icon: SiTypescript },
    ],
    liveUrl: "https://fuxialab.com",
  },
];
