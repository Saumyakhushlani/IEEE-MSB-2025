// InfoCard.jsx
import { motion } from "framer-motion";

const InfoCard = ({ logo, heading, text }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="bg-gray-900 hover:bg-gray-950 rounded-2xl hover:scale-105 hover:border-blue-600 hover:border-2 duration-500 shadow-md p-6 flex flex-col gap-4 items-start cursor-pointer "
    >
      {/* Logo */}
      <img src={logo} alt="logo" className="w-30 h-30 object-contain" />

      {/* Heading */}
      <motion.h3 
        className="text-blue-100 text-lg border-b-2 border-b-blue-600 font-semibold"
      >
        {heading}
      </motion.h3>

      {/* Text */}
      <motion.p
        className="text-gray-300 text-sm leading-relaxed"
      >
        {text}
      </motion.p>
    </motion.div>
  );
};

export default InfoCard;
