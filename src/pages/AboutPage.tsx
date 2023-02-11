import SkillsCard from "../components/SkillsCard";
import JSIcon from "../components/icons/JSIcon";
import NextIcon from "../components/icons/NextIcon";
import ReactIcon from "../components/icons/ReactIcon";
import { motion } from "framer-motion";
import TSIcon from "../components/icons/TSIcon";
import TailwindIcon from "../components/icons/TailwindIcon";
import ReduxIcon from "../components/icons/ReduxIcon";
import JestIcon from "../components/icons/JestIcon";
import CypressIcon from "../components/icons/CypressIcon";
import MUIIcon from "../components/icons/MUIIcon";

const TotalSkillsCards: { Icon: JSX.Element; name: string }[] = [
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
    Icon: <TailwindIcon/>,
    name: "Tailwind CSS"
  },
  {
    Icon: <ReduxIcon/>,
    name: "Redux Toolkit"
  },
  {
    Icon: <JestIcon/>,
    name: "Jest"
  },
  {
    Icon: <CypressIcon/>,
    name: "Cypress"
  },
  {
    Icon: <MUIIcon/>,
    name: "Material UI"
  }
];

export default function AboutPage() {
  return (
    <motion.div exit={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <section className="w-full h-full flex">
        <div className="lg:px-0 px-10 lg:text-left text-center lg:w-[60%] mx-auto py-20 flex flex-col gap-y-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <h1 id="text" className="text-2xl lg:text-4xl">
              im a front-end developer from Brazil, with knowledge in the
              current technologies:
            </h1>
          </motion.div>
          <div className="flex gap-x-10 lg:gap-x-24 flex-wrap justify-center gap-y-4">
            {TotalSkillsCards.map((card, index) => {
              return (
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1,
                    delay: .4 + index / 3,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                >
                  <SkillsCard name={card.name}>{card.Icon}</SkillsCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
