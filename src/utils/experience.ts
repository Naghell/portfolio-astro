import { FaReact, FaNodeJs } from "react-icons/fa6";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiAmazonaws,
  SiExpress,
  SiNestjs,
} from "react-icons/si";
import type { IconType } from "react-icons";

interface Technology {
  name: string;
  icon: IconType;
}

interface Job {
  company: string;
  position: string;
  period: string;
  description: string;
  responsibilities: string[];
  technologies: Technology[];
  companyUrl?: string;
}

export const workExperience: Job[] = [
  {
    company: "Edison",
    position: "Full Stack Developer",
    period: "July 2023 - Present",
    description:
      "Edison is a leading Argentine startup in education, focusing on teaching dynamic short-term courses with industry leaders.",
    responsibilities: [
      "Develop and maintain web applications for online education platforms",
      "Collaborate with cross-functional teams to design and implement new features",
      "Optimize application performance and improve user experience",
      "Participate in code reviews and contribute to best practices",
      "Work on both frontend and backend technologies to create full-stack solutions",
    ],
    technologies: [
      { name: "React", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express", icon: SiExpress },
      { name: "NestJS", icon: SiNestjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "AWS", icon: SiAmazonaws },
    ],
    companyUrl: "https://somosedison.com",
  },
];
