import React from 'react'
import { motion } from 'framer-motion'
import { toast } from 'react-hot-toast'
import { useForm } from "react-hook-form"
import Footer from '../components/Footer'
import Navbar from '../components/Navbar/Navbar'
import ContactUsimage from '../assets/Images/ContactUsImage.jpg'
import { MapPin, Mail } from 'lucide-react'
import {useSelector} from 'react-redux'

const Contact = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm()

    function onSubmit(data) {
        console.log(data);
        const scriptUrl="https://script.google.com/macros/s/AKfycbwf99mMR2aUEIzEMMTtvc56E_Cy1AlITthl1iK_IA7N687kfhhwiqt0xNxIWIhKxi_L/exec";

        fetch(scriptUrl, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body:(`Name=${data.name}&Email=${data.email}&Phone=${data.phone}&Subject=${data.subject}&Message=${data.message}`),
  })
    .then((response) => {
      console.log(response);
      toast.success("Message Sent Successfully!");
      reset();
    })
    .catch((err) => {
      console.error("Error:", err);
      toast.error("Failed to send message. Please try again later.");
    });
    }

    const mode = useSelector((state) => state.theme.mode);
return (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.6 }}
    className={`min-h-screen ${
      mode === "dark" 
        ? "bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800" 
        : "bg-gradient-to-br from-gray-50 via-white to-blue-50"
    }`}
  >
    <Navbar />
    
    {/* Hero image - Full Screen */}
    <section className="relative w-full h-screen flex items-center justify-center text-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/Events/sceecs/SCEECS24_1.JPG"
          alt="Contact Background"
          className="w-full h-full object-cover"
        />
        <div
          className={`absolute inset-0 ${
            mode === "dark" ? "bg-black/60" : "bg-black/40"
          }`}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          Contact <span className="text-blue-400">Us</span>
        </motion.h1>
        <motion.p
          className="text-xl sm:text-2xl text-gray-200 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Get in touch with IEEE MSB Student Branch. We're here to help and connect with you.
        </motion.p>
      </motion.div>
    </section>

    {/* Contact Form Section */}
    <section
      className={`py-16 px-6 md:px-12 lg:px-20 ${
        mode === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Image with Animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src={ContactUsimage}
            alt="Contact Us"
            className="rounded-xl shadow-lg"
          />
        </motion.div>

        {/* Right Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={`p-8 rounded-xl shadow-lg ${
            mode === "dark" ? "bg-gray-900" : "bg-white"
          }`}
        >
          <h2 className="text-3xl font-bold mb-2">Get in touch</h2>
          <p
            className={`mb-8 ${
              mode === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Reach Out To Us
          </p>

          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input
                placeholder="Name"
                className={
                  errors.name
                    ? "border-red-500 border-4"
                    : `w-full p-3 rounded-md focus:ring-2 focus:ring-blue-600 outline-none ${
                        mode === "dark"
                          ? "bg-gray-800 text-white"
                          : "bg-gray-200 text-black"
                      }`
                }
                {...register("name", {
                  required: true,
                })}
              />
            </div>

            <div>
              <input
                placeholder="Email"
                className={
                  errors.email
                    ? "border-red-500 border-4"
                    : `w-full p-3 rounded-md focus:ring-2 focus:ring-blue-600 outline-none ${
                        mode === "dark"
                          ? "bg-gray-800 text-white"
                          : "bg-gray-200 text-black"
                      }`
                }
                {...register("email", {
                  required: true,
                })}
              />
            </div>

            <div>
              <input
                placeholder="Phone"
                className={
                  errors.phone
                    ? "border-red-500 border-4"
                    : `w-full p-3 rounded-md focus:ring-2 focus:ring-blue-600 outline-none ${
                        mode === "dark"
                          ? "bg-gray-800 text-white"
                          : "bg-gray-200 text-black"
                      }`
                }
                {...register("phone", {
                  required: true,
                })}
              />
            </div>

            <div>
              <input
                placeholder="Subject"
                className={
                  errors.subject
                    ? "border-red-500 border-4"
                    : `w-full p-3 rounded-md focus:ring-2 focus:ring-blue-600 outline-none ${
                        mode === "dark"
                          ? "bg-gray-800 text-white"
                          : "bg-gray-200 text-black"
                      }`
                }
                {...register("subject", { required: true })}
              />
            </div>

            <div>
              <textarea
                placeholder="Message"
                className={
                  errors.message
                    ? "border-red-500 border-4"
                    : `w-full p-3 rounded-md focus:ring-2 focus:ring-blue-600 outline-none ${
                        mode === "dark"
                          ? "bg-gray-800 text-white"
                          : "bg-gray-200 text-black"
                      }`
                }
                {...register("message", { required: true })}
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-blue-600 py-3 rounded-md font-semibold text-white"
              type="submit"
              disabled={isSubmitting}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>

    <section
      className={`py-16 px-6 md:px-12 lg:px-20 ${
        mode === "dark" ? "bg-gray-800 text-white" : "bg-gray-50 text-black"
      }`}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side Map */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-xl overflow-hidden shadow-lg"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.6883136856673!2d77.40527465101373!3d23.21802691474579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c42ef566fe395%3A0xcd068348cdaaf336!2sFaculty%20Guest%20House!5e0!3m2!1sen!2sin!4v1663624428201!5m2!1sen!2sin"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            className="w-full h-[350px] md:h-[450px] rounded-lg border-0"
          ></iframe>
        </motion.div>

        {/* Right Side Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={`p-8 rounded-xl shadow-lg ${
            mode === "dark" ? "bg-gray-900" : "bg-white"
          }`}
        >
          <h4 className="text-blue-600 font-semibold uppercase tracking-wide">
            Quick Contact
          </h4>
          <h2 className="text-3xl font-bold mt-2 mb-4">
            Need Help? Contact Us
          </h2>
          <p
            className={`mb-8 ${
              mode === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            We will try to be available to you at the earliest.
          </p>

          {/* Location */}
          <div className="flex items-start gap-4 mb-6">
            <div
              className={`p-3 rounded-md ${
                mode === "dark" ? "bg-gray-800" : "bg-gray-200"
              }`}
            >
              <MapPin className="text-blue-600 w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Our Location:</h3>
              <p
                className={mode === "dark" ? "text-gray-300" : "text-gray-700"}
              >
                MANIT Bhopal, M.P. 462003, India
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <div
              className={`p-3 rounded-md ${
                mode === "dark" ? "bg-gray-800" : "bg-gray-200"
              }`}
            >
              <Mail className="text-blue-600 w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Email:</h3>
              <p
                className={mode === "dark" ? "text-gray-300" : "text-gray-700"}
              >
                ieeemanitstudentbranch@gmail.com
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    <Footer />
  </motion.div>
);

}

export default Contact
