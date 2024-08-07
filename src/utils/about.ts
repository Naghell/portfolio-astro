import { FaGamepad, FaMusic, FaDrum, FaLaptopCode } from "react-icons/fa6";
import type { IconType } from "react-icons";

interface PersonalInfo {
  name: string;
  age: number;
  location: string;
  occupation: string;
}

interface Interest {
  name: string;
  icon: IconType;
}

interface AboutData {
  personalInfo: PersonalInfo;
  professionalSummary: string;
  interests: Interest[];
  journey: string;
}

export const aboutData: AboutData = {
  personalInfo: {
    name: "Renzo Luis Battaglino",
    age: 22,
    location: "Córdoba, Argentina",
    occupation: "Full Stack Developer (Frontend focused)",
  },
  professionalSummary:
    "I'm a Full Stack Developer with a stronger focus on Frontend development. My favorite technologies are Next.js and Astro. I've been working in this field for over a year and I'm continuously improving my English skills.",
  interests: [
    { name: "Gaming", icon: FaGamepad },
    { name: "Music", icon: FaMusic },
    { name: "Playing drums", icon: FaDrum },
    { name: "Developing solutions", icon: FaLaptopCode },
  ],
  journey:
    "My passion for coding led me to become a Full Stack Developer, with a particular interest in creating intuitive and efficient user interfaces. I've been honing my skills for over a year now, working on various projects and continuously learning new technologies. I'm especially drawn to Next.js and Astro for their powerful capabilities in building modern web applications. Alongside my professional growth, I'm dedicated to improving my English skills to better collaborate in the global tech community.",
};
