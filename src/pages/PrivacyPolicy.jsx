import { motion } from "framer-motion";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import { useSelector } from 'react-redux';

const PrivacyPolicy = () => {
  const mode = useSelector((state) => state.theme.mode);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
      className={`min-h-screen ${mode === 'dark' ? 'bg-[#060507] text-white' : 'bg-white text-gray-900'}`}
    >
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className={`text-4xl md:text-5xl font-bold mb-8 ${mode === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Privacy Policy
        </h1>
        <div className={`prose prose-lg max-w-none ${mode === 'dark' ? 'prose-invert' : ''}`}>
          <p className={`text-lg leading-relaxed ${mode === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            This privacy policy will be updated soon. Please check back later for our complete privacy policy.
          </p>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default PrivacyPolicy;

