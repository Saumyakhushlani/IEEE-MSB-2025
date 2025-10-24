import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const TeamHero = () => {
  const mode = useSelector((state) => state.theme.mode);
  
  return (
    <section className="relative w-full h-[100vh] flex items-center justify-center text-center bg-gray-900">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/Events/sceecs/SCEECS24_8.JPG"
          alt="IEEE Team Background"
          className="w-full h-full object-cover opacity-90"
        />
        <div className={`absolute inset-0 ${
          mode === "dark" ? "bg-black/30" : "bg-black/20"
        }`} />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl px-4 sm:px-6 lg:px-8 -mt-64"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          Meet Our <span className="text-blue-500">Leadership Team</span>
        </motion.h1>
        
        <motion.p
          className="text-lg sm:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Our dedicated team of faculty advisors and student leaders work together to 
          drive innovation, organize impactful events, and foster a vibrant community 
          of engineers and researchers at IEEE MANIT Student Branch.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default TeamHero;
