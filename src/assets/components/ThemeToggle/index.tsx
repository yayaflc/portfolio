import { BsFillMoonStarsFill  } from "react-icons/bs";
import { FaSun } from "react-icons/fa";

export default function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="transition-colors duration-500 bg-pinkPrimary/40 rounded-full p-2 hover:bg-pinkPrimary/60 dark:bg-pinkPrimary/20 dark:hover:bg-pinkPrimary/40"
      aria-label="Toggle Theme"
    >
      {darkMode ? (
        <FaSun  className="text-whitePrimary text-[24px]"/>
      ) : (
        <BsFillMoonStarsFill className="text-blackPrimary text-[24px]"/>
      )}
    </button>
  );
}