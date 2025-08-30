"use client";
import { motion } from "framer-motion";
import { FaTwitter, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  const linkHover =
    "relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:-bottom-1 after:bg-white after:transition-all after:duration-300 hover:after:w-full";

  return (
    <div className="overflow-y-hidden">
      <motion.footer
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-[#06103f] text-white py-12"
        id="about"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between flex-wrap gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4 max-w-sm"
            >
              <h3 className="text-4xl font-bold">IEEE MSB</h3>
              <p className="text-white/80 leading-relaxed">
                Whether you are starting out or at the very height of your
                career, these are the stepping stones of your professional path.
                No matter where you are in your journey, IEEE can help you find
                your way forward.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="/" className={linkHover}>Home</a></li>
                <li><a href="/" className={linkHover}>About</a></li>
                <li><a href="/" className={linkHover}>Events</a></li>
                <li><a href="/" className={linkHover}>Team</a></li>
                <li><a href="/" className={linkHover}>Alumni</a></li>
                <li><a href="/" className={linkHover}>Contact Us</a></li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold">Events</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="/" className={linkHover}>Aarambh</a></li>
                <li><a href="/" className={linkHover}>Samwaad</a></li>
                <li><a href="/" className={linkHover}>SCEECS</a></li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold">Legal</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="/" className={linkHover}>Privacy Policy</a></li>
                <li><a href="/" className={linkHover}>Terms & Conditions</a></li>
                <li><a href="/" className={linkHover}>Refund Policy</a></li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold">Connect With Us</h4>
              <div className="flex space-x-5 text-2xl">
                <a href="/" aria-label="Instagram" className="hover:text-pink-400 transition">
                  <FaInstagram />
                </a>
                <a href="/" aria-label="Twitter" className="hover:text-sky-400 transition">
                  <FaTwitter />
                </a>
                <a href="/" aria-label="LinkedIn" className="hover:text-blue-400 transition">
                  <FaLinkedin />
                </a>
                <a href="/" aria-label="Facebook" className="hover:text-blue-500 transition">
                  <FaFacebook />
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-12 pt-8 border-t border-white/20 text-center text-white/70"
          >
            <p>&copy; {new Date().getFullYear()} IEEE MSB. All rights reserved.</p>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Footer;
