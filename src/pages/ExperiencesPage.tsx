import { motion } from "framer-motion";
import { experiences } from "../helpers/data";
import { useEffect } from "react";

export default function ExperiencesPage() {
  
  return (
    <motion.div exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <section className="w-full flex justify-center">
        <div className="xl:w-[60%] xl:px-0 px-10 flex flex-col gap-y-10 py-10 lg:py-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <h1 id="text" className="text-2xl lg:text-4xl">
              work experiences:
            </h1>
          </motion.div>
          <ul className="space-y-4">
            {experiences.map((experience, index) => {
              return (
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.5 + index / 2,
                    duration: 1,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                  className="border-b pb-3 last:border-none"
                >
                  <li className="flex flex-col gap-y-4">
                    <span className="text-xl flex flex-col gap-y-1">
                     <span>{experience.title} - {experience.company}</span> <span className="text-sm text-gray-600">({experience.start_date}) - {experience.end_date ? `(${experience.end_date})` : 'current'}</span>
                    </span>
                    <div className="flex flex-col lg:gap-y-0 gap-y-2">
                      {experience.responsabilities.map((responsability) => {
                        return <p>• {responsability}</p>;
                      })}
                    </div>
                  </li>
                </motion.div>
              );
            })}
          </ul>
        </div>
      </section>
    </motion.div>
  );
}
