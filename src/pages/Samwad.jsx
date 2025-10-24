import { motion, useInView } from "framer-motion";
import Footer from "../components/Footer";
import { useRef } from "react";
import EventVideoCarousel from "../components/VideoCaraousel";
import Speaker from '../components/Speaker'
import {useSelector} from 'react-redux'
import { div } from "framer-motion/client";

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
        "/Events/samwaad/Samwaad25_first.jpg",
        "/Events/samwaad/Samwaad25_second.jpg",
        "/Events/samwaad/Samwaad25_third.jpg",
        "/Events/samwaad/Samwad25_fourth.jpg",
        "/Events/samwaad/Samwad25_fifth.jpg",
        "/Events/samwaad/Samwad25_sixth.jpg",
        "/Events/samwaad/Samwad25_seventh.jpg",
        "/Events/samwaad/Samwad25_eighth.jpg",
        "/Events/samwaad/Samwad25_ninth.jpg",
    ]

    const paragraphs = [
        "Commemorating the role of women in the fields of sciences, technology, engineering and mathematics (STEM), IEEE celebrates the eternal legacy of the women’s role in engineering by organising an event called Samwad'23, a WIE (Women in Engineering) initiative. Our event aims to foster discussions, share experiences, and provide guidance to young women pursuing engineering careers.",
        "SAMWAD, an engaging and vibrant space that goes beyond the ordinary, where we joyfully acknowledge the accomplishments of women in technology, takes center stage in actively nurturing a culture that propels women in engineering (WIE). IEEE-MSB, the central India's largest technical professional organization, is dedicated to the advancement of technology for the betterment and to praise and promote the significant contribution of women.",
        "SAMWAD is like a dynamic collage, a gathering of young tech enthusiasts fervently exchanging ideas, especially focusing on solutions to empower women. It's more than just an event—it's where professionals share their invaluable experiences and dreams, coming together to shape the rising generation."
    ]

    // Duplicate images for seamless loop
    const duplicatedImages = [...speakerImages, ...speakerImages];

    const marqueeText = "IEEE MSB • IEEE MSB • IEEE MSB • ";
    const duplicatedText = marqueeText + marqueeText + marqueeText;
    const mode = useSelector((state) => state.theme.mode);

    return (
        <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.6 }}
    className={`w-full pt-[1.5rem] md:pt-[5rem] overflow-hidden ${mode==='light'?'bg-white':'bg-black'}`}>

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
                            alt={`Speaker ${(index % speakerImages.length) + 1}`}
                            className="w-full h-full object-cover rounded-lg shadow-2xl"
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    </div>

    {/* Moving Text Strip Section */}
    <div
        className={`relative overflow-hidden py-6 md:py-8 ${mode==='light'?'bg-white':'bg-black'}`}
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
            <span className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-wider ${mode==='light'?'text-black':'text-white'}`}>
                {duplicatedText}
            </span>
        </motion.div>
    </div>

    <section className={`py-20 px-6 md:px-12 lg:px-20 ${mode==='light'?'bg-white':'bg-black'}`}>
        <div className="max-w-4xl mx-auto">
            {/* Animated Heading */}
            <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <h1 className={`text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-widest mb-6 ${mode==='light'?'text-black':'text-white'}`}>SAMWAD</h1>
                <motion.div
                    className="h-1 mx-auto bg-blue-500"
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
                        className={`text-[13px] md:text-lg leading-relaxed text-center lg:text-center md:text-center ${mode==='light'?'text-gray-800':'text-gray-300'}`}
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


    <EventVideoCarousel />

    {/* Past speakers */}
    <motion.div className='mt-[5rem] mb-[4rem] flex flex-col items-center'>
        <motion.h1
            className={`text-center mb-12 font-bold text-3xl sm:text-4xl md:text-5xl ${mode==='light'?'text-black':'text-white'}`}
        >Past <span className='text-blue-500'>Speakers</span></motion.h1>

        <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{amount: 0.2 }}
                className="grid justify-items-centeritems-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1.5rem] md:gap-[3rem]">
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
                <h2 className={`text-3xl md:text-4xl font-bold mb-2 ${mode==='light'?'text-blue-500':'text-blue-500'}`}>
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

        {/* Corner Accent */}
        <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-t-blue-600 border-l-[40px] border-l-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
};

export default Samwad;