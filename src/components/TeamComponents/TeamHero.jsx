import React from "react";
import { motion } from "framer-motion";
import aboutheroimage from '../../assets/images/aboutHeroImage.jpg' // dummy image

const TeamHero = () => {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center text-center bg-gray-900">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={aboutheroimage}
          alt="Team Background"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-3xl px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          Meet Our Professional <span className="text-blue-600">Team</span>
        </motion.h1>
      </motion.div>
    </section>
  );
};

export default TeamHero;
