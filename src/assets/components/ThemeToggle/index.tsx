import { BsFillMoonStarsFill  } from "react-icons/bs";
import { FaSun } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <motion.button
      onClick={() => setDarkMode(!darkMode)}
      className="transition-all duration-500 bg-pinkPrimary/40 rounded-full p-2 hover:bg-pinkPrimary/60 dark:bg-pinkPrimary/20 dark:hover:bg-pinkPrimary/40 hover:scale-110 active:scale-95"
      aria-label="Toggle Theme"
      whileTap={{ scale: 0.9 }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={darkMode ? 'dark' : 'light'}
          initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
          transition={{ 
            duration: 0.5,
            ease: [0.4, 0, 0.2, 1]
          }}
        >
          {darkMode ? (
            <FaSun className="text-whitePrimary text-[24px]"/>
          ) : (
            <BsFillMoonStarsFill className="text-blackPrimary text-[24px]"/>
          )}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
}