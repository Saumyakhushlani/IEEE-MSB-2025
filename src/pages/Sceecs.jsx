import { motion,useInView } from "framer-motion";
import Footer from "../components/Footer";
import { useRef } from "react";
import Speaker from "../components/Speaker";
import EventVideoCarousel from "../components/VideoCaraousel";
import { useSelector } from "react-redux";

const Sceecs = () => {

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

    // Dummy speaker images from Unsplash
    const speakerImages = [
        "/Events/sceecs/SCEECS24_1.JPG",
        "/Events/sceecs/SCEECS24_2.JPG",
        "/Events/sceecs/SCEECS24_3.JPG",
        "/Events/sceecs/SCEECS24_4.JPG",
        "/Events/sceecs/SCEECS24_5.JPG",
        "/Events/sceecs/SCEECS24_6.JPG",
        "/Events/sceecs/SCEECS24_7.JPG",
        "/Events/sceecs/SCEECS24_8.JPG",
        "/Events/sceecs/SCEECS24_9.JPG",
    ];

    const pastSpeakers=[
        {id:1,name:'Kamran Ali',designation:'Sr. Engineering Manager | Atlassian',src:'/kamran_ali.jpeg'},
        {id:2,name:'Sunchit Dudeja',designation:'SDE | Adobe',src:'/sanchit_dudeja.jpeg'},
        {id:3,name:'Love Babbar',designation:'Founder of Codehelp',src:'/love_babbar.jpg'},
        {id:4,name:'Lakshya Kumar',designation:'Instructor at Codehelp',src:'/lakshya_kumar.jpeg'},
        {id:5,name:'Kshitij Kumar',designation:'Chief Data Officer at OneFootball',src:'/kshitiz_kumar.png'},
        {id:6,name:'Sandeep Jain',designation:'Founder and CEO - Geeksforgeeks',src:'/Sandeep_jain.jpg'},
        {id:7,name:'Pushyamitra Bhargav',designation:'Additional Advocate General, Indore Bench (MP Govt)',src:'/pushyamitra.jpg'},
        {id:8,name:'Subhash Khare',designation:'Vice President of Wipro',src:'Subhash_khare.jpg'},
        {id:9,name:'Sunil K. Prasad',designation:'Chief Technology Officer at Leidos',src:'/Sunil_prasad.jpg'},
        {id:10,name:'Tomy Sebastian',designation:'Director, Motor Drive Systems at Halla Mechatronics',src:'/tomy.jpg'},
        {id:11,name:'Abhas Mitra',designation:'Astrophysicist',src:'/Abhas_mitra.jpg'},
        {id:12,name:'Anima Patil-Sabale',designation:'Scientist-Astronaut',src:'/Anima_patil.jpg'},
        
    ]

    const images=[
     "/Events/sceecs/SCEECS24_1.JPG",
        "/Events/sceecs/SCEECS24_2.JPG",
        "/Events/sceecs/SCEECS24_3.JPG",
        "/Events/sceecs/SCEECS24_4.JPG",
        "/Events/sceecs/SCEECS24_5.JPG",
        "/Events/sceecs/SCEECS24_6.JPG",
        "/Events/sceecs/SCEECS24_7.JPG",
        "/Events/sceecs/SCEECS24_8.JPG",
        "/Events/sceecs/SCEECS24_9.JPG",   
    ]

    const pastProceedings=[
        {id:1,title:"SCEECS'25",url:'https://ieeexplore.ieee.org/xpl/conhome/10939033/proceeding'},
        {id:2,title:"SCEECS'24",url:'https://ieeexplore.ieee.org/xpl/conhome/10481805/proceeding'},
        {id:3,title:"SCEECS'23",url:'https://ieeexplore.ieee.org/xpl/conhome/10062451/proceeding'},
        {id:4,title:"SCEECS'22",url:'https://ieeexplore.ieee.org/xpl/conhome/9740651/proceeding'},
        {id:5,title:"SCEECS'20",url:'https://ieeexplore.ieee.org/xpl/conhome/9082706/proceeding'},
        {id:6,title:"SCEECS'18",url:'https://ieeexplore.ieee.org/xpl/conhome/8520678/proceeding'},
        {id:7,title:"SCEECS'16",url:'https://ieeexplore.ieee.org/xpl/conhome/7504851/proceeding'},
        {id:8,title:"SCEECS'14",url:'https://ieeexplore.ieee.org/xpl/conhome/6784522/proceeding'},
        {id:9,title:"SCEECS'12",url:'https://ieeexplore.ieee.org/xpl/conhome/6179080/proceeding'}
    ]

    const paragraphs = [
        "SCEECS is organised annually by IEEE-MSB with an aim of keeping alive the blazing inferno of curiosity in the ignited young minds of our nation. This event not only instil the importance of research but also encourages people to pursue the science and technology field. SCCEECS has witnessed a multitude of prominent speakers including Sir Love Babbar (Founder of CodeHelp), Sir Sanjeev Somasundaram (a Director,Talent Acquisition at Google), Sir David Grinspoon (a NASA Scientist), Sir H.C. Verma, Sir David Meltzer and many more",
        "Our country though it produces bright young minds is never able to keep the scintillating flame of inquisitiveness glimmering. The event SCEECS is one such effort to revamp this situation. The reason for organizing SCEECS is to keep alive the blazing inferno of curiosity in the ignited young minds of our nation.",
        "To instil the importance of research and to encourage the people to pursue this particular field,IEEE MSB organizes a biennial event called SCEECS.",
        "The event lures young trailblazers from across the nation and provides them with an opportunity and a platform to showcase their brilliance, through an a established procedure . It is an ebullient coalescence of technical workshops and guest lectures by prominent personalities and a conference. The main directive of the event is the research paper conference, with a prime objective to create an environment that facilitates research work and promotes researches for the development of our country.",
        "This conference helps to publish research papers on IEEE Xplore (congregation of research papers published by scholars from all around the world over several years), providing the people with a plethora from which their research could be well accessed by anyone in the world. IEEE Xlpore acts as an user friendly interface which provides information about any relevant topic at just one finger's click. The papers published through this conference are conveniently available and accessible. Had the papers not been published the world could have been deprived of important research. Felicitating the work , publishing it and uploading it on the world wide web, making it more accessible and portable to anyone in the world is what the conference is about."
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
                        duration:20,
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
                <h1 className={`text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-widest mb-6 ${mode==='light'?'text-black':'text-white'}`}>SCEECS</h1>
                <motion.div
                    className="h-1 bg-blue-500 mx-auto"
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


    <section className={`w-full py-12 md:py-16 lg:py-20 ${mode==='light'?'bg-white':'bg-black'}`}>
        {/* Main Title */}
        <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            <h1 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-widest mb-6 ${mode==='light'?'text-black':'text-white'}`}>SCEECS - Past Proceedings</h1>
            <motion.div
                className="h-1 bg-blue-500 mx-[4rem]"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                viewport={{ once: true }}
                style={{ originX: 0 }}
            />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-8 items-center">
            {pastProceedings.map((proceeding)=>(
                <div
                    key={proceeding.id}
                    className={`animate-in fade-in slide-in-from-bottom-4 flex flex-1 flex-col items-center justify-center space-y-4 p-10 rounded-2xl duration-300 ${mode==='light'?'bg-gray-100 hover:bg-gray-200':'bg-gray-950 hover:bg-black hover:border-[1px] hover:border-blue-500'}`}
                    style={{ animationDelay: "600ms" }}
                >
                    <h3 className={`text-[17px] md:text-2xl font-bold ${mode==='light'?'text-black':'text-white'}`}>{proceeding.title}</h3>
                    <a href={proceeding.url} className={`text-[7px] md:text-[14px] font-semibold transition-colors ${mode==='light'?'text-blue-600 hover:text-blue-800':'text-blue-300 hover:text-blue-600'}`}>
                        View proceeding
                    </a>
                </div>
            ))}
        </div>
    </section>

    <EventVideoCarousel/>

    {/* Past speakers */}
    <motion.div className='mt-[5rem] mb-[4rem] flex flex-col items-center'>
        <motion.h1
            className={`text-center mb-12 font-bold text-3xl sm:text-4xl md:text-5xl ${mode==='light'?'text-black':'text-white'}`}
        >Past <span className='text-blue-500'>Speakers</span></motion.h1>

        <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid justify-items-centeritems-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1.5rem] md:gap-[3rem]"
        >
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
                    Glimpses of Sceecs'25
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

export default Sceecs;