import { motion,useInView } from "framer-motion";
import Footer from "../components/Footer";
import { useRef } from "react";
import EventVideoCarousel from "../components/VideoCaraousel";
import {useSelector} from 'react-redux'

const Aarambh = () => {

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  // Grid configuration - responsive
  const gridCols = 10;
  const gridRows = 8;
  const gridColsMobile = 6;
  const gridRowsMobile = 8;

  // Generate tile array
  const tiles = Array.from({ length: gridCols * gridRows }, (_, i) => i);
  const tilesMobile = Array.from({ length: gridColsMobile * gridRowsMobile }, (_, i) => i);


    // Dummy speaker images from Unsplash
    const Images = [
        "/Events/aarambh/Aarambh25_first.JPG",
        "/Events/aarambh/Aarambh24_second.jpg",
        "/Events/aarambh/Aarambh24_third.jpg",
        "/Events/aarambh/Aarambh24_fourth.jpg",
        "/Events/aarambh/Aarambh25_fifth.JPG",
        "/Events/aarambh/Aarambh24_sixth.jpg",
        "/Events/aarambh/Aarambh24_seventh.jpg",
        "/Events/aarambh/Aarambh24_eighth.jpg",
        "/Events/aarambh/Aarambh24_ninth.jpg",
    ];

    const aarambh25=[
     "/Events/aarambh/Aarambh25_first.JPG",
        "/Events/aarambh/Aarambh25_second.JPG",
        "/Events/aarambh/Aarambh25_third.JPG",
        "/Events/aarambh/Aarambh25_fourth.JPG",
        "/Events/aarambh/Aarambh25_fifth.JPG",
        "/Events/aarambh/Aarambh25_sixth.JPG",
        "/Events/aarambh/Aarambh25_seventh.JPG",
        "/Events/aarambh/Aarambh25_eighth.jpg",
        "/Events/aarambh/Aarambh25_ninth.JPG",
        "/Events/aarambh/Aarambh25_tenth.JPG",    
    ]

    const paragraphs = [
        "Aarambh is a social initiative, organized by IEEE MSB, that focuses on encompassing a large number of students across numerous poverty stricken under-resourced schools for acquainting them with the tantalizing mysteries of the world of science. The sole purpose of this event is to instigate an inquisitiveness in the young minds and to introduce them with the wonders, science and technology world can achieve.",
        "It is often the case where children hailing from under privileged sections of the society are encountered with the obscurityof how to step into the technologically proliferating world.It is this quandary of “how to begin” that presents itself as the prime impediment.Our social initiative, AARAMBH, revolves around the idea of Education for All, Hope for the Future. We believe that real change happens when we strengthen the foundations of our society, and that begins with our children.",
        "Through this event, we aspire to cultivate a generation well-equipped with technological innovation skills, enabling them to become agents of change in their communities.",
    ]

    // Duplicate images for seamless loop
    const duplicatedImages = [...Images, ...Images];

    const marqueeText = "IEEE MSB • IEEE MSB • IEEE MSB • ";
    const duplicatedText = marqueeText + marqueeText + marqueeText;

    const theme = useSelector((state) => state.theme.mode);

    return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
      className={`w-full pt-[1.5rem] md:pt-[5rem] overflow-hidden ${
        theme === "light" ? "bg-white text-gray-900" : "bg-black text-white"
      }`}
    >

      {/* Tilted Image Wrapper Section */}
      <div className="relative mb-12 mt-[6rem] md:mb-20">
        <div className="relative mt-[6rem] -rotate-3 overflow-hidden">
          <motion.div
            className="flex gap-2 md:gap-3"
            animate={{
              x: [0, "-50%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {duplicatedImages.map((img, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-48 h-32 sm:w-60 sm:h-40 md:w-72 md:h-48 lg:w-80 lg:h-56"
              >
                <img
                  src={img}
                  alt={`Speaker ${(index % Images.length) + 1}`}
                  className="w-full h-full object-cover rounded-lg shadow-2xl"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Moving Text Strip Section */}
      <div
        className={`relative overflow-hidden py-6 md:py-8 ${
          theme === "light" ? "bg-gray-100" : "bg-black"
        }`}
      >
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: [0, "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 10,
              ease: "linear",
            },
          }}
        >
          <span
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-wider ${
              theme === "light" ? "text-gray-900" : "text-white"
            }`}
          >
            {duplicatedText}
          </span>
        </motion.div>
      </div>

      <section
        className={`py-20 px-6 md:px-12 lg:px-20 ${
          theme === "light" ? "bg-white text-gray-900" : "bg-black text-white"
        }`}
      >
        <div className="max-w-4xl mx-auto">
          {/* Animated Heading */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-widest mb-6">
              AARAMBH
            </h1>
            <motion.div
              className="h-1 bg-blue-600 mx-auto"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              viewport={{ once: true }}
              style={{ originX: 0 }}
            />
          </motion.div>

          {/* Event Description Paragraphs */}
          <div className="space-y-6">
            {paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                className={`text-[13px] md:text-lg leading-relaxed text-center ${
                  theme === "light" ? "text-gray-700" : "text-gray-300"
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      <section
        className={`w-full py-12 md:py-16 lg:py-20 ${
          theme === "light" ? "bg-gray-50 text-gray-900" : "bg-black text-white"
        }`}
      >
        {/* Main Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-widest mb-6">
            Aarambh Report
          </h1>
          <motion.div
            className="h-1 bg-blue-600 mx-[4rem]"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: true }}
            style={{ originX: 0 }}
          />
        </motion.div>

        {/* AARAMBH'24 Section */}
        <div
          className="animate-in fade-in slide-in-from-bottom-4 mt-12 space-y-4 text-center duration-700 md:mt-16"
          style={{ animationDelay: "200ms" }}
        >
          <h2 className="text-2xl font-bold md:text-3xl">AARAMBH'24</h2>
          <a
            href="/pdfs/AARAMBH'24- report.pdf"
            download
            className={`inline-block text-lg font-semibold transition-colors ${
              theme === "light"
                ? "text-blue-600 hover:text-blue-800"
                : "text-blue-300 hover:text-blue-600"
            }`}
          >
            View Report
          </a>
        </div>

        {/* Appreciation Letters Section */}
        <div
          className="animate-in fade-in slide-in-from-bottom-4 mt-16 space-y-8 text-center duration-700 md:mt-20"
          style={{ animationDelay: "400ms" }}
        >
          <div className="space-y-4">
            <h2 className="text-2xl font-bold md:text-3xl">
              Appreciation Letters from schools
            </h2>
          </div>

          {/* Cards Container */}
          <div className="flex flex-col gap-8 px-4 md:flex-row md:gap-0">
            {/* Left Card */}
            <div
              className={`animate-in fade-in slide-in-from-bottom-4 flex flex-1 flex-col items-center justify-center space-y-4 py-8 duration-700 md:border-r ${
                theme === "light"
                  ? "md:border-gray-300"
                  : "md:border-gray-200"
              }`}
              style={{ animationDelay: "600ms" }}
            >
              <h3 className="text-2xl font-bold">
                Government Sardar Patel High School
              </h3>
              <a
                href="/pdfs/Sardar_patel_new.pdf"
                download
                className={`text-lg font-semibold transition-colors ${
                  theme === "light"
                    ? "text-blue-600 hover:text-blue-800"
                    : "text-blue-300 hover:text-blue-600"
                }`}
              >
                View letter
              </a>
            </div>

            {/* Right Card */}
            <div
              className="animate-in fade-in slide-in-from-bottom-4 flex flex-1 flex-col items-center justify-center space-y-4 py-8 duration-700"
              style={{ animationDelay: "800ms" }}
            >
              <h3 className="text-2xl font-bold">
                Government Higher Secondary School
              </h3>
              <a
                href="/pdfs/hss_new.pdf"
                download
                className={`text-lg font-semibold transition-colors ${
                  theme === "light"
                    ? "text-blue-600 hover:text-blue-800"
                    : "text-blue-300 hover:text-blue-600"
                }`}
              >
                View letter
              </a>
            </div>
          </div>
        </div>
      </section>

      <EventVideoCarousel />

      <section
        className={`py-16 px-4 sm:px-6 lg:px-8 ${
          theme === "light" ? "bg-gray-50 text-gray-900" : "bg-background text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          {/* Title Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2
              className={`text-3xl md:text-4xl font-bold mb-2 ${
                theme === "light" ? "text-blue-700" : "text-blue-600"
              }`}
            >
              Glimpses of Aarambh'25
            </h2>
            <div
              className={`w-24 h-1 mx-auto rounded-full ${
                theme === "light" ? "bg-blue-700" : "bg-blue-600"
              }`}
            />
          </motion.div>

          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {aarambh25.map((image, index) => (
              <ImageCard key={index} image={image} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
};

const ImageCard = ({ image, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="break-inside-avoid"
    >
      <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer">
        <img
          src={`${image}`}
          className="w-full h-auto object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-75"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-600/80 via-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Text Label */}
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="text-white font-bold text-lg drop-shadow-lg">
            {image.label}
          </h3>
        </div>

        {/* Corner Accent */}
        <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-t-blue-600 border-l-[40px] border-l-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
};

export default Aarambh;