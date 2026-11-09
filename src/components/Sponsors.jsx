import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { getCloudinaryImage } from "../utils/cloudinary";

const sponsors = [
  { id: 1, src: getCloudinaryImage("Sponsors/kadam"), alt: "Kadam" },

  { id: 7, src: getCloudinaryImage("Sponsors/ieee-jobsite"), alt: "IEEE Job Site" },
  { id: 3, src: getCloudinaryImage("Sponsors/ieee-spectrum"), alt: "IEEE Spectrum" },
  { id: 4, src: getCloudinaryImage("Sponsors/ieee"), alt: "IEEE" },
  { id: 5, src: getCloudinaryImage("Sponsors/ieee-tv"), alt: "IEEE TV" },
  { id: 6, src: getCloudinaryImage("Sponsors/ieee-xplore"), alt: "IEEE Xplore" },

  { id: 2, src: getCloudinaryImage("Sponsors/ieee-region10"), alt: "IEEE Region 10" },
  { id: 8, src: getCloudinaryImage("Sponsors/ieee-standards"), alt: "IEEE Standards Association" },
  { id: 9, src: getCloudinaryImage("Sponsors/ieee-tech-navigator"), alt: "IEEE Technology Navigator" },
  { id: 10, src: getCloudinaryImage("Sponsors/coding-ninjas"), alt: "Coding Ninjas" },
  { id: 11, src: getCloudinaryImage("Sponsors/hitbullseye"), alt: "Hitbullseye" },
  { id: 12, src: getCloudinaryImage("Sponsors/ed-times"), alt: "ED Times" },
  { id: 13, src: getCloudinaryImage("Sponsors/ibuddy2"), alt: "Interview Buddy" },
  { id: 14, src: getCloudinaryImage("Sponsors/balsamiq2"), alt: "Balsamiq" },
  { id: 15, src: getCloudinaryImage("Sponsors/RagaAI"), alt: "RagaAI" },
  { id: 16, src: getCloudinaryImage("Sponsors/coding-thinker-logo"), alt: "Coding-thinker" },
];

const Sponsors = () => {
  const mode = useSelector((state) => state.theme.mode);

  return (
    <section className={`w-full py-16 relative ${mode === "dark" ? "bg-neutral-950" : "bg-gray-50"
      }`}>
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={`text-3xl md:text-4xl font-bold mb-12 ${mode === "dark" ? "text-white" : "text-gray-900"
            }`}
        >
          Our <span className="text-blue-600">Sponsors</span>
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 place-items-center">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={`flex items-center justify-center p-2 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ${mode === "dark"
                  ? "bg-gray-800 border border-gray-700"
                  : "bg-white border border-gray-100"
                }`}
            >
              <img
                src={sponsor.src}
                alt={sponsor.alt}
                className="max-h-30 object-contain"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className={`rounded-2xl p-8 ${mode === "dark"
              ? "bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-700"
              : "bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100"
            }`}>
            <h3 className={`text-2xl font-bold mb-4 ${mode === "dark" ? "text-white" : "text-gray-900"
              }`}>
              Interested in Sponsoring?
            </h3>
            <p className={`mb-6 max-w-2xl mx-auto ${mode === "dark" ? "text-gray-300" : "text-gray-600"
              }`}>
              Join our community of forward-thinking organizations and help shape the future together
            </p>
            <a href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Become a Sponsor
              </motion.button>
            </a>
          </div>
        </motion.div>
      </div>
      <div className="absolute top-4 right-4 w-4 h-4 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full opacity-60"></div>
      <div className="absolute top-20 right-20 w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full opacity-40"></div>
      <div className="absolute bottom-10 right-10 w-2 h-2 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full opacity-50"></div>
    </section>
  );
};

export default Sponsors;