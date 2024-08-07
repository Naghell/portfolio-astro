import { FaReact, FaNodeJs, FaBootstrap, FaSass, FaAws } from "react-icons/fa6";
import {
  SiNextdotjs,
  SiAstro,
  SiTailwindcss,
  SiRedux,
  SiFramer,
  SiJavascript,
  SiTypescript,
  SiExpress,
  SiNestjs,
  SiPrisma,
  SiPassport,
  SiJsonwebtokens,
  SiMariadb,
  SiMysql,
  SiPostgresql,
  SiSequelize,
} from "react-icons/si";
import type { IconType } from "react-icons";

interface TechItem {
  name: string;
  icon: IconType;
}

interface TechStack {
  [category: string]: TechItem[];
}

export const techStack: TechStack = {
  "Frontend Frameworks": [
    { name: "React", icon: FaReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Astro", icon: SiAstro },
  ],
  Styling: [
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Bootstrap", icon: FaBootstrap },
    { name: "SCSS", icon: FaSass },
  ],
  "State Management": [{ name: "Redux", icon: SiRedux }],
  Animation: [{ name: "Framer Motion", icon: SiFramer }],
  Languages: [
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
  ],
  Backend: [
    { name: "Node.js", icon: FaNodeJs },
    { name: "Express", icon: SiExpress },
    { name: "NestJS", icon: SiNestjs },
  ],
  "ORM & Authentication": [
    { name: "Prisma ORM", icon: SiPrisma },
    { name: "Sequelize", icon: SiSequelize },
    { name: "Passport.js", icon: SiPassport },
    { name: "JWT", icon: SiJsonwebtokens },
  ],
  Databases: [
    { name: "MariaDB", icon: SiMariadb },
    { name: "MySQL", icon: SiMysql },
    { name: "PostgreSQL", icon: SiPostgresql },
  ],
  "Cloud Services": [{ name: "AWS", icon: FaAws }],
};
