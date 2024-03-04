import CypressIcon from "../components/icons/CypressIcon";
import JSIcon from "../components/icons/JSIcon";
import JestIcon from "../components/icons/JestIcon";
import MUIIcon from "../components/icons/MUIIcon";
import NextIcon from "../components/icons/NextIcon";
import ReactIcon from "../components/icons/ReactIcon";
import ReduxIcon from "../components/icons/ReduxIcon";
import TSIcon from "../components/icons/TSIcon";
import TailwindIcon from "../components/icons/TailwindIcon";
import { ExperienceType, NavItemType, SkillsCardType } from "../types";

export const experiences: ExperienceType[] = [
  {
    title: "Web Developer",
    company: "RTB House",
    start_date: "september/2022",
    responsabilities: [
      "Creation of dynamic banners for Deep Learning-based advertisements.",
      "'Pixel Perfect' development based on mockups provided by Designers.",
      "Rigorous debugging of code for maximum performance of active banners.",
      "Creation of custom animations using GSAP/Javascript library.",
    ],
  },
  {
    title: "Front-end Developer",
    company: "Wivenn",
    start_date: "october/2022",
    end_date: "july/2023",
    responsabilities: [
      "Responsible for Front-end development in the systems and websites supported by the company.",
      "Development of new features, improvements and bug fixes with React.js and Typescript.",
      "Development of landing pages using Next.js.",
      "Internal system rebuild, using best practices for better scalability, such as Jest for unit tests, Cypress for integration tests and Storybook for component documentation.",
    ],
  },
  {
    title: "Junior Development Analyst",
    company: "Hospital São Camilo SP",
    start_date: "feb/2022",
    end_date: "april/2022",
    responsabilities: [
      "Responsible for managing changes and improvements to the company's institutional website.",
      "Development of new features and improvements in the project with React.JS and Javascript.",
    ],
  },
 
];

export const navItems: NavItemType[] = [
  {
    href: "/",
    value: "home",
  },
  {
    href: "/about",
    value: "about",
  },
  {
    href: "/experiences",
    value: "experiences",
  },
  {
    href: "/contact",
    value: "contact",
  },
];

export const TotalSkillsCards: SkillsCardType[] = [
  {
    Icon: <JSIcon />,
    name: "Javascript",
  },
  {
    Icon: <TSIcon />,
    name: "Typescript",
  },
  {
    Icon: <ReactIcon />,
    name: "React.js",
  },
  {
    Icon: <NextIcon />,
    name: "Next.js",
  },
  {
    Icon: <TailwindIcon />,
    name: "Tailwind CSS",
  },
  {
    Icon: <MUIIcon />,
    name: "Material UI",
  },
  {
    Icon: <ReduxIcon />,
    name: "Redux Toolkit",
  },
  {
    Icon: <JestIcon />,
    name: "Jest",
  },
  {
    Icon: <CypressIcon />,
    name: "Cypress",
  },
];
