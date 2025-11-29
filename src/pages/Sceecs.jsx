import { motion,useInView } from "framer-motion";
import Footer from "../components/Footer";
import { useRef } from "react";
import Speaker from "../components/Speaker";
import EventVideoCarousel from "../components/VideoCaraousel";
import { useSelector } from "react-redux";
import Lottie from 'lottie-react'
import sceecsOne from '../../Sceecs-1.json'
import sceecsTwo from '../../Sceecs-2.json'

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

   const mode = useSelector((state) => state.theme.mode);
    return (
        <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.6 }}
    className={`w-full pt-[5rem] sm:pt-[6rem] md:pt-[8rem] overflow-hidden ${mode==='light'?'bg-white':'bg-black'}`}>

  {/* tab and pc section */}
      <section className={`pt-20 hidden sm:block px-4 md:px-12 lg:px-16 ${mode === 'light' ? 'bg-white' : 'bg-black'} mx-2 `}>
        <div className="mx-auto flex flex-col gap-4">
          {/* Animated Heading */}
          <div className="flex items-center">
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="h-[145px] lg:h-[300px] hover:border-4 hover:border-gray-500 duration-300 rounded-xl"
              src="/eventPage/sceecs/eventpage-3.jpg"
            />
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="h-[145px] lg:h-[300px] hover:border-4 hover:border-blue-500 duration-300 rounded-xl relative sm:left-[0.6rem] lg:left-[5rem]"
              src="/eventPage/sceecs/eventpage-2.JPG"
            />
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="h-[145px] lg:h-[300px] hover:border-4 hover:border-pink-500 duration-300 rounded-xl relative sm:left-[1.5rem] lg:left-[10rem]"
              src="/eventPage/sceecs/eventpage-5.JPG"
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
                <h1 className={`text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-widest mb-6 ${mode === 'light' ? 'text-black' : 'text-white'}`}>Sceecs</h1>
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
              className="h-[250px] lg:h-[450px] hover:border-4 hover:border-green-500 duration-300 rounded-xl relative sm:left-[2rem] lg:left-[11rem] bottom-[3rem]"
              src="/eventPage/sceecs/eventpage-1.jpg"
            />
          </div>

          <div className="flex items-center">
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="h-[135px] lg:h-[300px] hover:border-4 hover:border-red-500 duration-300 rounded-xl relative sm:bottom-[12rem] lg:bottom-[6rem]"
              src="/eventPage/sceecs/eventpage-6.jpg"
            />

            <motion.img
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="h-[135px] lg:h-[300px] hover:border-4 hover:border-yellow-500 duration-300 rounded-xl relative sm:left-[4rem] lg:left-[9rem] sm:bottom-[12rem] lg:bottom-[6rem]"
              src="/eventPage/sceecs/eventpage-4.JPG"
            />

            <motion.img
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="h-[135px] lg:h-[350px] hover:border-4 hover:border-cyan-500 duration-300 rounded-xl relative sm:left-[9rem] lg:left-[18rem] sm:bottom-[17rem] lg:bottom-[6rem]"
              src="/eventPage/sceecs/eventpage7.jpg"
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
              src="/eventPage/sceecs/eventpage-3.jpg"
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
                <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-widest mb-6 ${mode === 'light' ? 'text-black' : 'text-white'}`}>Sceecs</h1>
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
              src="/eventPage/sceecs/eventpage-6.jpg"
            />
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
            <h1 className={`text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-widest mb-6 ${mode==='light'?'text-black':'text-white'}`}>SCEECS - Past Proceedings</h1>
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
                    <h3 className={`text-[13px] md:text-2xl font-bold ${mode==='light'?'text-black':'text-white'}`}>{proceeding.title}</h3>
                    <a href={proceeding.url} className={`text-[7px] md:text-[14px] font-semibold transition-colors ${mode==='light'?'text-blue-600 hover:text-blue-800':'text-blue-300 hover:text-blue-600'}`}>
                        View proceeding
                    </a>
                </div>
            ))}
        </div>
    </section>

    {/* Past speakers */}
    <motion.div className='mt-[5rem] mb-[4rem] flex flex-col items-center mx-4'>
        <motion.h1
            className={`text-center mb-12 font-bold text-2xl sm:text-4xl md:text-5xl ${mode==='light'?'text-black':'text-white'}`}
        >Past <span className='text-blue-500'>Speakers</span></motion.h1>

        <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid justify-items-center items-center grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-[1rem] md:gap-[3rem]"
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
                <h2 className={`text-2xl md:text-4xl font-bold mb-2 ${mode==='light'?'text-blue-500':'text-blue-500'}`}>
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

      </div>
    </motion.div>
  );
};

export default Sceecs;