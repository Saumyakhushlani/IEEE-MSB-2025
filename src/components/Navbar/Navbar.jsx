import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import MobileAndTab from "./MobileAndTab";
import msbLogo from "../../assets/images/msb-logo.png";
import { useEffect } from "react";
import {Link} from 'react-scroll'
import {NavLink} from 'react-router-dom'

const navItems = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    {
        name: "Events",
        dropdown: [
            { name: "Aarambh", to: "/aarambh" },
            { name: "Samwad", to: "/samwad" },
            { name: "SCEECS", to: "/sceecs" },
        ],
    },
    { name: "Team", to: "/team" },
    { name: "Alumni", to: "/alumni" },
    { name: "Contact Us", to: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [scrollUp, setScrollUp] = useState(true);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                // user scrolled down
                setScrollUp(false);
            } else {
                // user scrolled up
                setScrollUp(true);
            }
            lastScrollY = window.scrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: -15 },
        show: { opacity: 1, y: 0 },
    };

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 shadow-md transition-colors duration-500 ${scrollUp ? "bg-transparent" : "bg-white/20 backdrop-blur-md"
            }`}>
            <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
                {/* Logo */}

                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center cursor-pointer"
                >
                    <img
                        src={msbLogo}
                        alt="Logo"
                        className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto object-contain"
                    />
                </motion.div>

                {/* Desktop Links */}
                <motion.ul
                    className="hidden md:flex space-x-6 text-white font-medium"
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                >
                    {navItems.map((item, idx) =>
                        item.dropdown ? (
                            <li
                                key={idx}
                                className="relative group cursor-pointer"
                                onMouseEnter={() => setDropdownOpen(true)}
                                onMouseLeave={() => setDropdownOpen(false)}
                            >
                                <motion.div
                                    variants={itemVariants}
                                    className="flex items-center relative px-4 py-2 rounded-2xl overflow-hidden"
                                >
                                    <span className="relative z-10">{item.name}</span>
                                    <ChevronDown size={16} className="ml-1 z-10" />

                                    {/* Background effect */}
                                    <span className="absolute inset-0 bg-[rgba(255,255,255,0.1)] rounded-2xl"></span>
                                    <span className="absolute bottom-0 left-0 w-full h-0 bg-blue-600 transition-all duration-300 group-hover:h-full rounded-2xl"></span>
                                </motion.div>

                                {/* Dropdown */}
                                <AnimatePresence>
                                    {dropdownOpen && (
                                        <motion.ul
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="absolute left-0 mt-2 bg-white rounded-2xl shadow-lg py-2 text-black w-40"
                                        >
                                            {item.dropdown.map((drop, i) => (
                                                <li
                                                    key={i}
                                                    className="px-4 py-2 hover:bg-blue-200 cursor-pointer"
                                                >
                                                    <NavLink to={drop.to}>{drop.name}</NavLink>
                                                </li>
                                            ))}
                                        </motion.ul>
                                    )}
                                </AnimatePresence>
                            </li>
                        ) : (
                            <motion.li
                                key={idx}
                                variants={itemVariants}
                                className="relative group px-4 py-2 rounded-2xl overflow-hidden"
                            >
                                <NavLink to={item.to} className="relative z-10">
                                    {item.name}
                                </NavLink>
                                <span className="absolute inset-0 bg-[rgba(255,255,255,0.1)] rounded-2xl"></span>
                                <span className="absolute bottom-0 left-0 w-full h-0 bg-blue-600 transition-all duration-300 group-hover:h-full rounded-2xl"></span>
                            </motion.li>
                        )
                    )}
                </motion.ul>

                {/* Mobile Hamburger */}
                <div className="md:hidden relative w-8 h-8">
                    <motion.button
                        key={isOpen ? "close" : "menu"}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-0 right-0 z-50 text-white hover:text-blue-700 duration-150"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </motion.button>
                </div>
            </div>

            {/* Mobile and Tablet Navbar */}
            <MobileAndTab isOpen={isOpen} setIsOpen={setIsOpen} navItems={navItems} />
        </nav>
    );
}
