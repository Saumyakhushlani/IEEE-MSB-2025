import { motion } from 'motion/react';
import { FaTwitter, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';


const Footer = () => {
  return (
    <div className='overflow-y-hidden'>

      <motion.footer
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-[#06103f] text-white py-8"
        id='about'
      >

        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between flex-wrap gap-8">


            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4 max-w-sm"
            >
              <h3 className="text-2xl font-bold">IEEE MSB</h3>
              <p className="text-white/90 max-w-lg">
                Whether you are starting out or at the very height of your career, these are the stepping stones of your professional path. No matter where you are in your journey, IEEE can help you find your path.

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
              <ul className="space-y-2">
                <li><a href="/" className="hover:underline">Home</a></li>
                <li><a href="/" className="hover:underline">About</a></li>
                <li><a href="/" className="hover:underline">Events</a></li>
                <li><a href="/" className="hover:underline">Team</a></li>
                <li><a href="/" className="hover:underline">Alumini</a></li>
                <li><a href="/" className="hover:underline">Contact us</a></li>
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
              <ul className="space-y-2">
                <li><a href="/" className="hover:underline">Aarambh</a></li>
                <li><a href="/" className="hover:underline">Samwaad</a></li>
                <li><a href="/" className="hover:underline">Sceecs</a></li>
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
              <ul className="space-y-2">
                <li><a href="/" className="hover:underline">Privacy Policy</a></li>
                <li><a href="/" className="hover:underline">Terms & Conditions</a></li>
                <li><a href="/" className="hover:underline">Refund Policy</a></li>
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
              <div className="flex space-x-4 text-2xl">
                <a href="" className="hover:text-white/70 transition">
                  <FaInstagram />
                </a>
                <a href="" className="hover:text-white/70 transition">
                  <FaTwitter />
                </a>
                <a href="" className="hover:text-white/70 transition">
                  <FaLinkedin/>
                </a>
                <a href="" className="hover:text-white/70 transition">
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
            className="mt-10 pt-8 border-t border-white/30 text-center text-white/90"
          >
            <p>&copy; {new Date().getFullYear()} IEEE MSB</p>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Footer;