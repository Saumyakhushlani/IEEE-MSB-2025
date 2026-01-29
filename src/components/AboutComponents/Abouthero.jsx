import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const AboutHero = () => {
  const mode = useSelector((state) => state.theme.mode);
  
  return (
    <section
      className="relative h-[70vh] sm:h-[80vh] md:h-[100vh] flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `url("/Events/sceecs/SCEECS24_1.JPG")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className={`absolute inset-0 ${
        mode === "dark" ? "bg-black/60" : "bg-black/40"
      }`}></div>

      {/* Content */}
      <div className="relative max-w-4xl px-4">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.6 }}
        >
          Empowering Tomorrow's Innovators
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.6 }}
        >
          IEEE MANIT Student Branch fosters a community of passionate engineers and researchers 
          dedicated to advancing technology for humanity. Through collaborative learning, 
          innovative projects, and professional development, we shape the future of engineering.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutHero;
