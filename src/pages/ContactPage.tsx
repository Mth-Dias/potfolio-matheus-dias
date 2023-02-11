import { motion } from "framer-motion";
import LinkedinIcon from "../components/icons/LinkedinIcon";
import EmailIcon from "../components/icons/EmailIcon";

export default function ContactPage() {
  return (
    <motion.div exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <div className="flex w-full flex-col items-center gap-y-4 text-2xl lg:text-4xl text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 2,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <h1>you can get in touch with me through:</h1>
        </motion.div>
        <div className="flex flex-col text-sm sm:text-base">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: .5,
              duration: 1,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <a
              href="https://www.linkedin.com/in/matheusjdias/"
              target="_blank"
              rel="noreferrer"
              className="transition-all duration-200 flex items-center"
            >
              <LinkedinIcon />
              <span>www.linkedin.com/in/matheusjdias</span>
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1,
              duration: 1,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <a
              href="mailto:mthdias@outlook.com"
              target="_blank"
              rel="noreferrer"
              className="transition-all duration-200 flex items-center"
            >
              <EmailIcon />
              <span>mthdias@outlook.com</span>
            </a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
