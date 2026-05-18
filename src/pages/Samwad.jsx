import { motion, useInView } from "framer-motion";
import Footer from "../components/Footer";
import { useRef } from "react";
import EventVideoCarousel from "../components/VideoCaraousel";
import Speaker from '../components/Speaker'
import {useSelector} from 'react-redux'
import { div } from "framer-motion/client";
import Lottie from 'lottie-react'
import samwadOne from '../../Samwad-1.json';
import samwadTwo from '../../Samwad-2.json'

const Samwad = () => {

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

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,   // delay between children
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    const pastSpeakers=[
        {id:1,name:'Mr Raj Vikramaditya',designation:'Founder, takeUforward',src:'/Striver.jpg'},
        {id:2,name:'Mr Sanjeev Somasundaram',designation:'Director, Talent Acquisition at Google',src:'/Sanjeev Somasundaram.jpeg'},
        {id:3,name:'Ms.Neha Agrawal',designation:'Founder of Mathematically Inclined',src:'/Neha Agrawal.jpg'},
        {id:4,name:'Ms.Preeti Saran',designation:'Indian Foreign Service cadre',src:'/Preeti Saran.jpg'},
        {id:5,name:'Ms.Jagrati Awasthi',designation:'AIR-2 UPSC CSE 2020',src:'/Jagrati Awasthi.jpg'},
        {id:6,name:'Rania Lampou',designation:'STEM instructor at The Greek Astronomy',src:'/Rania Lampou.jpg'},
        {id:7,name:'Bhakti Sharma',designation:'Sarpanch and Motivational Speaker',src:'/Bhakti Sharma.jpg'},
        {id:8,name:'Suneha Gadpande',designation:'Master mariner',src:'/Suneha Gadpande.jpg'},
        {id:9,name:'Prof. Anandi Giridharan',designation:'Principal Research Scientist',src:'/Anandi Giridharan.jpg'},
    ]

    // Dummy speaker images from Unsplash
    const speakerImages = [
        "/Events/samwaad/Samwaad25_first.jpg",
        "/Events/samwaad/Samwaad25_second.jpg",
        "/Events/samwaad/Samwaad25_third.jpg",
        "/Events/samwaad/Samwad25_fourth.jpg",
        "/Events/samwaad/Samwad25_fifth.jpg",
        "/Events/samwaad/Samwad25_sixth.jpg",
        "/Events/samwaad/Samwad25_seventh.jpg",
        "/Events/samwaad/Samwad25_eighth.jpg",
        "/Events/samwaad/Samwad25_ninth.jpg",
    ];

    const images = [
        "/Events/samwaad/samwad4.webp",
        "/Events/samwaad/samwad5.webp",
        "/Events/samwaad/samwad1.webp",
        "/Events/samwaad/samwad3.webp",
        "/Events/samwaad/samwad6.webp",
        "/Events/samwaad/Samwad25_seventh.jpg",
        "/Events/samwaad/Samwad25_sixth.jpg",
        "/Events/samwaad/Samwad25_eighth.jpg",
        "/Events/samwaad/samwad2.webp",
    ]

    const paragraphs = [
        "Commemorating the role of women in the fields of sciences, technology, engineering and mathematics (STEM), IEEE celebrates the eternal legacy of the women’s role in engineering by organising an event called Samwad'23, a WIE (Women in Engineering) initiative. Our event aims to foster discussions, share experiences, and provide guidance to young women pursuing engineering careers.",
        "SAMWAD, an engaging and vibrant space that goes beyond the ordinary, where we joyfully acknowledge the accomplishments of women in technology, takes center stage in actively nurturing a culture that propels women in engineering (WIE). IEEE-MSB, the central India's largest technical professional organization, is dedicated to the advancement of technology for the betterment and to praise and promote the significant contribution of women.",
        "SAMWAD is like a dynamic collage, a gathering of young tech enthusiasts fervently exchanging ideas, especially focusing on solutions to empower women. It's more than just an event—it's where professionals share their invaluable experiences and dreams, coming together to shape the rising generation."
    ]

    // Duplicate images for seamless loop
    const mode = useSelector((state) => state.theme.mode);

    return (
        <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.6 }}
    className={`w-full pt-[5rem] sm:pt-[6rem] md:pt-[8rem] overflow-hidden ${mode==='light'?'bg-white':'bg-black'}`}>
    

    {/* tab and pc section */}
      <section className={`pt-20 hidden sm:block px-4 md:px-12 lg:px-16 ${mode === 'light' ? 'bg-white' : 'bg-black'} `}>
        <div className="mx-auto flex flex-col gap-4">
          {/* Animated Heading */}
          <div className="flex items-center">
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="h-[145px] lg:h-[300px] hover:border-4 hover:border-gray-500 duration-300 rounded-xl"
              src="/eventPage/samwad/samwad1.webp"
            />
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="h-[145px] lg:h-[300px] hover:border-4 hover:border-blue-500 duration-300 rounded-xl relative sm:left-[1rem] lg:left-[5rem]"
              src="/eventPage/samwad/samwad2.webp"
            />
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="h-[145px] lg:h-[300px] hover:border-4 hover:border-pink-500 duration-300 rounded-xl relative sm:left-[2rem] lg:left-[10rem]"
              src="/eventPage/samwad/eventpage-2.jpg"
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
                <h1 className={`text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-widest mb-6 ${mode === 'light' ? 'text-black' : 'text-white'}`}>Samwad</h1>
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
                        className={`text-sm sm:text-base md:text-lg text-left ${mode === 'light' ? 'text-gray-800' : 'text-gray-300'}`}
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
              src="/eventPage/samwad/samwad7.webp"
            />
          </div>

          <div className="flex items-center">
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="h-[135px] lg:h-[300px] hover:border-4 hover:border-red-500 duration-300 rounded-xl relative sm:bottom-[12rem] lg:bottom-[6rem]"
              src="/eventPage/samwad/eventpage-4.jpg"
            />

            <motion.img
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="h-[135px] lg:h-[300px] hover:border-4 hover:border-yellow-500 duration-300 rounded-xl relative sm:left-[4rem] lg:left-[12rem] sm:bottom-[12rem] lg:bottom-[6rem]"
              src="/eventPage/samwad/eventpage-3.jpg"
            />

            <motion.img
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="h-[135px] lg:h-[350px] hover:border-4 hover:border-cyan-500 duration-300 rounded-xl relative sm:left-[9rem] lg:left-[22rem] sm:bottom-[14rem] lg:bottom-[6rem]"
              src="/eventPage/samwad/eventpage-6.jpg"
            />
          </div>
        </div>
      </section>





{/* mobile section */}
       <section className={`pt-20 sm:hidden px-4 md:px-12 lg:px-16 ${mode === 'light' ? 'bg-white' : 'bg-black'} `}>
        <div className="mx-auto flex flex-col items-center">
          {/* Animated Heading */}
          <div className="flex items-center">
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="h-[180px] hover:border-4 hover:border-cyan-500 duration-300 rounded-xl"
              src="/eventPage/samwad/samwad1.webp"
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
                <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-widest mb-6 ${mode === 'light' ? 'text-black' : 'text-white'}`}>Samwad</h1>
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
                        className={`text-sm sm:text-base text-center ${mode === 'light' ? 'text-gray-800' : 'text-gray-300'}`}
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
              src="/eventPage/samwad/eventpage-2.jpg"
            />
          </div>
        </div>
      </section>


    <EventVideoCarousel
     eventVideos = {[
  {
    id: 1,
    title: "Neha Agarwal",
    videoUrl:
      "/vids/samwad1.mp4",
    thumbnailUrl:
      "/vids/samwad1_thumbnail.png",
  },
  {
    id: 2,
    title: "Samwad'24",
    videoUrl:
      "/vids/samwad2.mp4",
    thumbnailUrl:
      "/vids/samwad2_thumbnail.png",
  },
  {
    id: 3,
    title: "Striver",
    videoUrl:
      "/vids/samwad3.mp4",
    thumbnailUrl:
      "/vids/samwad3_thumbnail.png",
  },
  {
    id: 4,
    title: "Striver",
    videoUrl:
      "/vids/samwad4.mp4",
    thumbnailUrl:
      "/vids/samwad4_thumbnail.png",
  },
]} />

    {/* Past speakers */}
    <motion.div className='mt-[5rem] mb-[4rem] flex flex-col items-center mx-4'>
        <motion.h1
            className={`text-center mb-12 font-bold text-2xl sm:text-4xl md:text-5xl ${mode==='light'?'text-black':'text-white'}`}
        >Past <span className='text-blue-500'>Speakers</span></motion.h1>

        <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{amount: 0.2 }}
                className="grid justify-items-center items-center grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-[1rem] md:gap-[3rem]">
            {pastSpeakers.map((speaker)=>( 
                <motion.div key={speaker.id} variants={item}>
                    <Speaker image={speaker.src} name={speaker.name} role={speaker.designation} mode={mode}/>
                </motion.div>
            ))}
        </motion.div>

    </motion.div>


    <section className={`py-16 px-4 sm:px-6 lg:px-8 ${mode==='light'?'bg-white':'bg-background'}`}>
        <div className="max-w-7xl mx-auto">
            {/* Title Section */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-8"
            >
                <h2 className={`text-2xl md:text-4xl font-bold mb-2 ${mode==='light'?'text-blue-500':'text-blue-500'}`}>
                    Glimpses of Samwad'25
                </h2>
                <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full" />
            </motion.div>

            {/* Masonry Grid */}
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                {images.map((image, index) => (
                    <ImageCard key={index} image={image} index={index} mode={mode} />
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

export default Samwad;