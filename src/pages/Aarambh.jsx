import { motion, useInView } from "framer-motion";
import Footer from "../components/Footer";
import { useRef } from "react";
import EventVideoCarousel from "../components/VideoCaraousel";
import { useSelector } from 'react-redux'
import Lottie from 'lottie-react'
import aarambhOne from '../../Aarambh-1.json'
import aarambhTwo from '../../Aarambh-2.json'


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



  const aarambh25 = [
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

  const theme = useSelector((state) => state.theme.mode);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
      className={`w-full pt-[2rem] sm:pt-[3rem] md:pt-[4rem] overflow-hidden ${theme === "light" ? "bg-white text-gray-900" : "bg-black text-white"
        }`}
    >


{/* tab and pc section */}
      <section className={`pt-20 hidden sm:block px-4 md:px-12 lg:px-16 ${theme === 'light' ? 'bg-white' : 'bg-black'} `}>
        <div className="mx-auto flex flex-col gap-4">
          {/* Animated Heading */}
          <div className="flex items-center">
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="h-[145px] lg:h-[300px] hover:border-4 hover:border-gray-500 duration-300 rounded-xl"
              src="/eventPage/aarambh/eventpage-1.JPG"
            />
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="h-[145px] lg:h-[300px] hover:border-4 hover:border-blue-500 duration-300 rounded-xl relative sm:left-[2rem] lg:left-[9rem]"
              src="/eventPage/aarambh/eventpage-7.jpg"
            />
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="h-[145px] lg:h-[300px] hover:border-4 hover:border-pink-500 duration-300 rounded-xl relative sm:left-[5rem] lg:left-[15rem]"
              src="/eventPage/aarambh/eventpage-2.JPG"
            />
          </div>

          <div className="flex items-center">
            <div className="flex flex-col items-start relative sm:bottom-[10rem] lg:bottom-[8rem]">
              <motion.div
                className="mt-[12rem]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <h1 className={`text-2xl sm:text-4xl md:text-7xl font-bold tracking-widest mb-6 ${theme === 'light' ? 'text-black' : 'text-white'}`}>Aarambh</h1>
                <motion.div
                  className="h-1 bg-blue-600"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  viewport={{ once: true }}
                  style={{ originX: 0 }}
                />
              </motion.div>

              <div className="my-12">
                <div className="flex flex-col justify-between items-center">
                  <div className="space-y-6 self-start sm:max-w-[25rem] lg:max-w-4xl">
                    {paragraphs.map((paragraph, index) => (
                      <motion.p
                        key={index}
                        className={`sm:text-[11px] lg:text-sm text-left ${theme === 'light' ? 'text-gray-800' : 'text-gray-300'}`}
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
              </div>
            </div>


            <motion.img
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="h-[250px] lg:h-[450px] hover:border-4 hover:border-green-500 duration-300 rounded-xl relative sm:left-[2rem] lg:left-[12rem] bottom-[3rem]"
              src="/eventPage/aarambh/eventpage-6.jpg"
            />
          </div>

          <div className="flex items-center">
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="h-[135px] lg:h-[300px] hover:border-4 hover:border-red-500 duration-300 rounded-xl relative sm:bottom-[12rem] lg:bottom-[6rem]"
              src="/eventPage/aarambh/eventpage-3.JPG"
            />

            <motion.img
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="h-[135px] lg:h-[300px] hover:border-4 hover:border-yellow-500 duration-300 rounded-xl relative sm:left-[4rem] lg:left-[12rem] sm:bottom-[12rem] lg:bottom-[6rem]"
              src="/eventPage/aarambh/eventpage-4.jpg"
            />

            <motion.img
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="h-[135px] lg:h-[350px] hover:border-4 hover:border-cyan-500 duration-300 rounded-xl relative sm:left-[9rem] lg:left-[22rem] sm:bottom-[14rem] lg:bottom-[6rem]"
              src="/eventPage/aarambh/eventpage-5.jpg"
            />
          </div>
        </div>
      </section>





{/* mobile section */}
       <section className={`pt-20 sm:hidden px-4 md:px-12 lg:px-16 ${theme === 'light' ? 'bg-white' : 'bg-black'} `}>
        <div className="mx-auto flex flex-col items-center">
          {/* Animated Heading */}
          <div className="flex items-center">
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="h-[180px] hover:border-4 hover:border-cyan-500 duration-300 rounded-xl"
              src="/eventPage/aarambh/eventpage-1.JPG"
            />
          </div>

          <div className="flex items-center">
            <div className="flex flex-col items-center relative bottom-[8rem]">
              <motion.div
                className="mt-[12rem]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <h1 className={`text-2xl sm:text-4xl md:text-7xl font-bold tracking-widest mb-6 ${theme === 'light' ? 'text-black' : 'text-white'}`}>Aarambh</h1>
                <motion.div
                  className="h-1 bg-blue-600"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  viewport={{ once: true }}
                  style={{ originX: 0 }}
                />
              </motion.div>

              <div className="my-12">
                <div className="flex flex-col justify-between items-center">
                  <div className="space-y-6">
                    {paragraphs.map((paragraph, index) => (
                      <motion.p
                        key={index}
                        className={`text-[8px] text-center ${theme === 'light' ? 'text-gray-800' : 'text-gray-300'}`}
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
              </div>
            </div>

          </div>

          <div className="flex items-center">
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="h-[135px]hover:border-4 hover:border-pink-500 duration-300 rounded-xl relative bottom-[6rem]"
              src="/eventPage/aarambh/eventpage-3.JPG"
            />
          </div>
        </div>
      </section>




      <section
        className={`w-full py-12 md:py-16 lg:py-20 ${theme === "light" ? "bg-gray-50 text-gray-900" : "bg-black text-white"
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
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-widest mb-6">
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
          <h2 className="text-xl font-bold md:text-3xl">AARAMBH'24</h2>
          <a
            href="/pdfs/AARAMBH'24- report.pdf"
            download
            className={`inline-block text-[13px] sm:text-lg font-semibold transition-colors ${theme === "light"
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
            <h2 className="text-xl font-bold md:text-3xl">
              Appreciation Letters from schools
            </h2>
          </div>

          {/* Cards Container */}
          <div className="flex flex-col gap-8 px-4 md:flex-row md:gap-0">
            {/* Left Card */}
            <div
              className={`animate-in fade-in slide-in-from-bottom-4 flex flex-1 flex-col items-center justify-center space-y-4 py-8 duration-700 md:border-r ${theme === "light"
                ? "md:border-gray-300"
                : "md:border-gray-200"
                }`}
              style={{ animationDelay: "600ms" }}
            >
              <h3 className="text-[15px] sm:text-xl md:text-2xl font-bold">
                Government Sardar Patel High School
              </h3>
              <a
                href="/pdfs/Sardar_patel_new.pdf"
                download
                className={`text-[13px] sm:text-lg font-semibold transition-colors ${theme === "light"
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
              <h3 className="text-[15px] sm:text-xl md:text-2xl font-bold">
                Government Higher Secondary School
              </h3>
              <a
                href="/pdfs/hss_new.pdf"
                download
                className={`text-[13px] sm:text-lg font-semibold transition-colors ${theme === "light"
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

      <EventVideoCarousel
        eventVideos={[
          {
            id: 1,
            title: "Aarambh'25",
            videoUrl:
              "/vids/aarambh1.mp4",
            thumbnailUrl:
              "/vids/aarambh1_thumbnail.png",
          },
          {
            id: 2,
            title: "Aarambh'25",
            videoUrl:
              "/vids/aarambh2.mp4",
            thumbnailUrl:
              "/vids/aarambh2_thumbnail.png",
          },
          {
            id: 3,
            title: "Aarambh'25",
            videoUrl:
              "/vids/aarambh3.mp4",
            thumbnailUrl:
              "/vids/aarambh3_thumbnail.png",
          },
          {
            id: 4,
            title: "Aarambh'25",
            videoUrl:
              "/vids/aarambh4.mp4",
            thumbnailUrl:
              "/vids/aarambh4_thumbnail.png",
          },
        ]} />

      <section
        className={`py-16 px-4 sm:px-6 lg:px-8 ${theme === "light" ? "bg-gray-50 text-gray-900" : "bg-background text-white"
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
              className={`text-2xl md:text-4xl font-bold mb-2 ${theme === "light" ? "text-blue-700" : "text-blue-600"
                }`}
            >
              Glimpses of Aarambh'25
            </h2>
            <div
              className={`w-24 h-1 mx-auto rounded-full ${theme === "light" ? "bg-blue-700" : "bg-blue-600"
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

      </div>
    </motion.div>
  );
};

export default Aarambh;