import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <section
      className="relative h-[70vh] sm:h-[80vh] md:h-[90vh] flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1920&q=80")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative max-w-3xl px-4">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.6 }}
        >
          Innovating for a Better Tomorrow
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.6 }}
        >
          IEEE MANIT Student Branch is driven by the mission to advance technology for
           humanity. We bring together students, researchers, and innovators to learn, 
           collaborate, and create impactful solutions that shape the future.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutHero;
