import SkillsCard from "../components/SkillsCard";
import { motion } from "framer-motion";
import { TotalSkillsCards } from "../helpers/data";
import { useNavigate } from "react-router-dom";
import { HiArrowSmRight } from "react-icons/hi";

export default function AboutPage() {
  const navigate = useNavigate();

  return (
    <motion.div exit={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <section className="w-full flex justify-center">
        <div className="xl:px-0 px-10 xl:text-left text-center xl:w-[60%] py-10 lg:py-16 flex flex-col gap-y-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="flex"
          >
            <h1 id="text" className="text-2xl lg:text-4xl mx-auto">
              front-end developer, with knowledge in the following
              technologies:
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
                    delay: 0.4 + index / 3,
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
