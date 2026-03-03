"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-7 rounded-full p-0.5 cursor-pointer transition-colors duration-500 bg-gray-200 dark:bg-gray-700 focus:outline-none"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >

      <span className="absolute inset-0 flex items-center justify-between px-1.5 pointer-events-none">
        <Sun className="w-3.5 h-3.5 text-amber-400 opacity-40" />
        <Moon className="w-3.5 h-3.5 text-blue-300 opacity-40" />
      </span>


      <motion.div
        layout
        className="relative w-6 h-6 rounded-full shadow-md flex items-center justify-center bg-white dark:bg-gray-900"
        animate={{ x: isDark ? 28 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        <AnimatePresence mode="wait">
          {isDark ? (
            <motion.div
              key="moon"
              initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.25 }}
            >
              <Moon className="w-3.5 h-3.5 text-blue-400" />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.25 }}
            >
              <Sun className="w-3.5 h-3.5 text-amber-500" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </button>
  );
}
