import Navbar from "./components/Navbar/Navbar";
import Gallery from './components/InfiniteImageMarquee';
import Footer from './components/Footer';
import Sponsors from './components/Sponsors';
import Events from './components/Events';
import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import recapVideo from './assets/Videos/recap-2025.mp4'
import {Toaster} from 'react-hot-toast'
import {createBrowserRouter,RouterProvider,useLocation} from 'react-router-dom'
import About from './pages/About'
import Aarambh from "./pages/Aarambh";
import Sceecs from "./pages/Sceecs";
import Samwad from "./pages/Samwad";
import Team from './pages/Team'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsConditions from './pages/TermsConditions'
import RefundPolicy from './pages/RefundPolicy'
import Recruitment from "./pages/Recruitment";
import RecruitmentTrash from "./pages/RecruitmentTrash";
import ThemeBtn from "./components/ThemeBtn";
import ShuffleHero from "./components/ShuffleHero";
import Alumni from "./components/Alumni";
import { useState } from "react";
import {useSelector} from 'react-redux'
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";



function Home() {
  const location=useLocation();
  const videoRef = useRef(null);
  const hasStarted = useRef(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  // Autoplay video when visible
  useEffect(() => {
    const node = videoRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true;
          node.play().catch(() => {
            /* ignore autoplay rejection; user gesture will start it */
          });
          observer.unobserve(node); // don't track anymore
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

    const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const enterFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };


const mode = useSelector((state) => state.theme.mode);
return (
  <AnimatePresence mode="wait">
    <motion.div
      className={`${mode === 'dark' ? 'bg-[#060507] text-white' : 'bg-white text-black'} overflow-hidden`}
      key={location.pathname}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Home section */}
      <ShuffleHero />

      {/* About section */}
      <section className={`${mode === 'dark' ? 'bg-[#060507] text-white' : 'bg-white text-black'} my-[8rem]`}>
        {/* Top content */}
        <motion.h1
          className={`text-center font-bold text-4xl sm:text-5xl md:text-7xl ${mode === 'dark' ? 'text-white' : 'text-gray-900'}`}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About <span className={`${mode === 'dark' ? 'text-blue-500' : 'text-blue-600'}`}>Us</span>
        </motion.h1>

        <div className="max-w-6xl mx-auto px-6 md:px-8 py-14 md:py-20">
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
            {/* LEFT: Heading + Slider */}
            <div>
              <motion.h2
                className={`text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight ${mode === 'dark' ? 'text-white' : 'text-gray-900'}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.4 }}
              >
                Advancing Technology for
                <br />
                Humanity <span className={`${mode === 'dark' ? 'text-blue-500' : 'text-blue-600'}`}>IEEE MSB</span>
              </motion.h2>
            </div>

            {/* RIGHT: Paragraphs */}
            <div>
              <motion.p
                className={`${mode === 'dark' ? 'text-gray-300' : 'text-gray-700'} leading-relaxed text-base md:text-[17px]`}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.4 }}
              >
                IEEE is the world's largest technical professional organization. It is dedicated to the advancement of technology for the betterment of humanity.
                Its core purpose is to foster the technological innovation and excellence.Believing in the same ideology and to carry this envisioned purpose, IEEE MANIT Student Branch ventures to be conducive and works assiduously towards achieving its goal.
              </motion.p>
              <motion.p
                className={`mt-4 ${mode === 'dark' ? 'text-gray-300' : 'text-gray-700'} leading-relaxed text-base md:text-[17px]`}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true, amount: 0.4 }}
              >
                IEEE MSB is the only renowned branch of central India, Madhya Pradesh region. Having received prestigious accolades, including, the Darrel Chong medal, twice, one being gold.
              </motion.p>
            </div>
          </div>
        </div>

        {/* Video */}
        <motion.div
          className="max-w-6xl mx-auto px-6 md:px-8"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.35 }}
        >
          <div className={`relative rounded-2xl overflow-hidden shadow-xl ${mode === 'dark' ? 'bg-[#060507]' : 'bg-white'}`}>
            <video
              ref={videoRef}
              src={recapVideo}
              muted={isMuted}
              loop
              playsInline
              className="w-full max-h-[90vh] object-contain rounded-2xl"
              controls={false}
            />
            {/* Custom Controls */}
            <div className={`absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 px-4 py-2 rounded-full ${mode === 'dark' ? 'bg-black/50' : 'bg-white/70'}`}>
              <button
                onClick={togglePlay}
                className={`${mode === 'dark' ? 'text-white' : 'text-black'} hover:scale-110 transition`}
              >
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
              </button>
              <button
                onClick={toggleMute}
                className={`${mode === 'dark' ? 'text-white' : 'text-black'} hover:scale-110 transition`}
              >
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>
              <button
                onClick={enterFullscreen}
                className={`${mode === 'dark' ? 'text-white' : 'text-black'} hover:scale-110 transition`}
              >
                <Maximize size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      <Events />
      <Gallery />
      <Sponsors />
      <Footer />
    </motion.div>
  </AnimatePresence>
);

}

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'about',
    element:<div>
      <Navbar/>
      <About/>
    </div>
  },
   {
    path:'team',
    element:<div>
      <Navbar/>
      <Team/>
    </div>
  },
  {
    path:'contact',
    element:<div>
      <Navbar />
      <Contact />
    </div>
  },
  {
    path:'alumni',
    element:<div>
      <Navbar/>
      <Alumni />
    </div>
  },
  {
    path:'aarambh',
    element:<div>
      <Navbar/>
      <Aarambh/>
    </div>
  },
  {
    path:'sceecs',
    element:<div>
      <Navbar/>
      <Sceecs/>
    </div>
  },
  {
    path:'samwad',
    element:<div>
      <Navbar/>
      <Samwad/>
    </div>
  },
  {
    path: "recruitment",
    element: (
      <div>
        {/* <Navbar /> */}
        <Recruitment />
      </div>
    ),
  },
  {
    path: "weird-dashboard-404",
    element: (
      <div>
        {/* Intentional bare page for internal use */}
        <RecruitmentTrash />
      </div>
    ),
  }
])

function app(){
  return(
 <div>
    <RouterProvider router={router}></RouterProvider>
    <Toaster position="top-center" reverseOrder={false} />
  </div>
  )
}

export default app;
