import { HiArrowSmRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <motion.div
      exit={{ opacity: 0, x: "40%" }}
      transition={{duration: 1}}
    >
      <section className="w-full flex">
        <div className="group mx-auto relative flex lg:flex-row flex-col justify-center items-center w-fit py-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 3,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            drag
            dragConstraints={{
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          >
            <img
              src="/assets/images/react.png"
              alt="React_logo"
              draggable={false}
              className="animate-spin-slow w-[60vw] sm:w-[26rem] cursor-grab"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 1,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            style={{ z: 1 }}
          >
            <div className="lg:-ml-32 lg:mt-[48px] mt-10 lg:w-auto w-full text-center">
              <span className="text-5xl sm:text-7xl text-center uppercase">
                Matheus Dias
              </span>
              <div className="h-1 bg-black w-[0%] lg:group-hover:w-[100%] transition-all duration-300"></div>
              <div className="flex justify-center lg:pt-3">
                <button
                  onClick={() => navigate("/about")}
                  className="flex items-center gap-x-1 lg:text-2xl lg:group-hover:opacity-100 lg:opacity-0 transition-opacity duration-700 delay-75"
                >
                  <span>about me</span>
                  <span className="lg:pt-[7px]">
                    <HiArrowSmRight />
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
