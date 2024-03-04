import { AnimatePresence, motion } from "framer-motion";
import NavItem from "../components/NavItem";
import sidebarHook from "../hooks/sidebarHook";
import { navItems } from "../helpers/data";

export default function NavBar() {
  const { handleShrinkMenu, menuShrank } = sidebarHook();

  return (
    <div className="sticky top-0 bg-white transition-all duration-300 w-full border-b-2 border-black py-1 sm:py-4 flex justify-between items-center px-5 lg:px-20 xl:px-52 z-10">
      <img
        src="/assets/images/Logo.png"
        alt="Logo"
        className="w-36 sm:w-52"
        draggable={false}
      />
      <ul className="lg:flex gap-x-7 hidden">
        {navItems.map((item) => (
          <NavItem href={item.href} value={item.value} />
        ))}
      </ul>
      <button onClick={() => handleShrinkMenu()} className="lg:hidden block">
        <svg className="" viewBox="0 0 100 80" width="28" height="28">
          <rect width="70" height="7"></rect>
          <rect y="30" width="70" height="7"></rect>
          <rect y="60" width="70" height="7"></rect>
        </svg>
      </button>
      <div className="lg:hidden flex absolute z-10 right-0 top-0 h-screen bg-white shadow-xl">
        <AnimatePresence>
          {!menuShrank && (
            <motion.aside
              initial={{ width: 0 }}
              animate={{
                width: 200,
              }}
              exit={{
                width: 0,
              }}
              className="overflow-hidden"
            >
              <motion.div
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                className="flex flex-col gap-y-4 items-left px-4 items-center"
              >
                <div className="w-full pt-4">
                  <button onClick={() => handleShrinkMenu()}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="30"
                      viewBox="0 0 24 24"
                      width="30"
                      fill="#000000"
                    >
                      <path d="M0 0h24v24H0V0z" fill="none" />
                      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
                    </svg>
                  </button>
                </div>
                {navItems.map((item) => (
                  <button onClick={() => handleShrinkMenu()}>
                    <NavItem href={item.href} value={item.value} />
                  </button>
                ))}
              </motion.div>
            </motion.aside>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
