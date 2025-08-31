import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import msbLogo from "../../assets/images/msb-logo.png";
import {NavLink} from 'react-router-dom'

export default function MobileAndTab({ isOpen, setIsOpen, navItems }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ type: "spring", stiffness: 70 }}
          className="fixed top-0 left-0 w-full flex flex-col h-screen bg-white/20 backdrop-blur-md shadow-lg z-40 p-6 md:hidden"
        >
          <ul className="space-y-6 text-lg font-medium text-white">
            {navItems.map((item, idx) =>
              item.dropdown ? (
                <li key={idx}>
                  <div
                    className="flex justify-between items-center cursor-pointer px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-blue-300 transition"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    {item.name}
                    <ChevronDown
                      size={18}
                      className={`transition-transform ${dropdownOpen ? "rotate-180" : ""
                        }`}
                    />
                  </div>
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.ul
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="ml-4 mt-2 space-y-2"
                      >
                        {item.dropdown.map((drop, i) => (
                          <li
                            key={i}
                            className="px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-blue-300 transition"
                          >
                            <NavLink to={drop.to} onClick={() => setIsOpen(false)}>
                              {drop.name}
                            </NavLink>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
              ) : (
                <li
                  key={idx}
                  className="px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-blue-300 transition"
                >
                  <NavLink to={item.to} onClick={() => setIsOpen(false)}>
                    {item.name}
                  </NavLink>
                </li>
              )
            )}
          </ul>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            className="flex  justify-center cursor-pointer"
          >
            <img
              src={msbLogo}
              alt="Logo"
              className="h-8 sm:h-20 mt-5 object-contain"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
