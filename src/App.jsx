import Navbar from "./components/Navbar/Navbar";
import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import recapVideo from './assets/Videos/recap-2025.mp4'
import {createBrowserRouter,RouterProvider,useLocation} from 'react-router-dom'
import About from './pages/About'
import Team from './pages/Team'
import { div } from "framer-motion/client";


function Home() {
  const location=useLocation();
  const videoRef = useRef(null);
  const hasStarted = useRef(false);

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

  return (
    <AnimatePresence mode="wait">
    <motion.div 
    className="bg-gray-950 mb-5"
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
    >
      {/* Navbar */}
      <Navbar />

Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis saepe maxime voluptatem. Magnam, in? Nobis quidem vitae, dolorem autem exercitationem cum atque odit molestiae reprehenderit dolorum. Hic itaque quas qui.
Numquam, soluta, ipsum reiciendis iste deserunt odio molestias accusantium at maiores voluptatum corporis, iure vel ad amet nostrum fuga eveniet cumque voluptate aspernatur labore sed illo. Eligendi sequi quidem officia.
Officia, voluptatem doloribus totam architecto corporis earum deserunt molestias minima esse tempore quis aliquid perferendis ducimus fugiat saepe dicta et asperiores quisquam odit consequatur aut exercitationem nobis cum explicabo. Expedita.
Sed, cumque. Ut non eveniet odit. Veritatis, ut ipsa, vero voluptatum voluptatibus labore dolore fugit excepturi asperiores eaque quae nulla nam libero earum error, dolorum doloremque rem laborum odio inventore.
Commodi sunt voluptatum quae reprehenderit atque corporis voluptate minima, dolorum quisquam natus sint esse error porro cumque, odio distinctio voluptas eius architecto asperiores autem rerum voluptatem recusandae animi suscipit! Mollitia.
Vero, iste commodi rerum blanditiis incidunt nobis reiciendis eveniet voluptates vitae sit dolorum tempore laudantium eaque illum at quis recusandae cupiditate enim voluptatem aspernatur! Cupiditate itaque ducimus eaque accusamus autem?
Blanditiis, sequi. Aut nesciunt quasi nihil est minima, enim quibusdam doloremque repudiandae molestiae explicabo harum perspiciatis deserunt iste consequuntur quo recusandae dolor, totam natus hic laboriosam laudantium voluptatem accusantium doloribus.
Necessitatibus in ipsam blanditiis repellendus temporibus numquam optio sunt ipsa quaerat labore explicabo eveniet pariatur quod deleniti, a alias possimus? Cum, consequuntur magnam aut modi voluptatum laboriosam officiis eveniet voluptate.
Rerum praesentium facere aspernatur omnis ad placeat, laborum, rem similique ex mollitia a vero deserunt quas odit aperiam? Voluptatibus recusandae sed sit inventore tenetur quidem et, facere voluptatem itaque adipisci.
Minima ea quisquam eveniet corrupti! Unde, a officiis. Placeat magnam fuga, eum reiciendis veritatis tempora odio excepturi, ipsam maxime tempore molestias mollitia hic delectus? Quisquam voluptatibus placeat recusandae iure corrupti.
Facilis a omnis mollitia quia! Reprehenderit, nulla minus suscipit numquam odio nihil ipsam dolor accusantium similique autem soluta sed eius quod impedit provident maxime repudiandae molestias praesentium deleniti minima cumque!
Fugit ut vel ipsum dicta, expedita omnis, sequi earum iusto porro aliquam, consequatur id corporis aperiam error soluta. Quas commodi modi dolores laboriosam. Voluptatibus, fugit porro nemo quis minus itaque.
Nobis, magni nulla quasi laboriosam excepturi inventore perferendis vel modi eos quas aperiam dignissimos doloribus esse officia corrupti laborum neque quod dolorem ab alias doloremque. Enim, earum. Autem, iure nisi!
Eligendi eveniet sunt natus ullam dolore tenetur illum velit maxime rem voluptates aut, eos iure vero id iste, corrupti cum sapiente dignissimos? Saepe quisquam assumenda magni quasi rem, id esse?
Facilis fuga nobis quaerat molestias ipsa rerum, laborum repellat necessitatibus eos libero amet a quidem modi magnam eaque natus quia quod assumenda similique recusandae eum et laudantium illo vel. Repellendus.
Quo quam maxime cupiditate tenetur omnis aliquid aliquam eum voluptas atque, at dicta quibusdam illum nemo? Maxime laboriosam, modi est corporis vero rem ut voluptas ab nesciunt tempore asperiores vel.
Pariatur non minima obcaecati totam consequuntur nulla cupiditate odio rem voluptatem soluta? Eveniet sint aspernatur officia, aperiam quis amet provident tempore voluptates at repudiandae quae minima doloremque, illum expedita nihil!
Ratione, cum fuga quaerat similique ipsa voluptates quibusdam porro placeat, itaque eius aliquam quasi nostrum aut quia eveniet ut quisquam. Quia at adipisci, aliquam fugit voluptatibus labore sint voluptates quaerat.
Repudiandae laboriosam illo inventore alias vel velit similique eius amet molestias est aut doloribus tempore, magnam provident iusto dolore minus libero magni. Adipisci molestias officiis accusantium cumque possimus at sed?
Ipsam voluptatibus labore earum, laudantium nulla ea iusto repudiandae dolorum numquam. Cupiditate, voluptatem? Error, dolorem facere hic aliquid nobis dolore rerum suscipit, fuga libero distinctio cupiditate atque impedit earum perspiciatis!
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur dolore facilis quo ratione quasi odit consequuntur doloremque repudiandae nihil corrupti iure, beatae est expedita quia exercitationem nobis, cum ipsam adipisci.
Molestias recusandae nobis aspernatur totam magnam quia soluta est, tenetur saepe at alias facere officiis expedita nam iusto cupiditate? Maxime doloremque delectus blanditiis quia rerum fugit molestias ad cupiditate dolorem!
Nulla nihil eos aliquid reprehenderit illo, rem aperiam voluptas quae recusandae repudiandae officia molestias mollitia perspiciatis deserunt. Error, qui? Reprehenderit earum impedit minus eos quas nemo delectus eveniet doloribus fuga!
Similique alias quia aperiam, dicta velit aliquid eaque nam, ducimus non doloremque necessitatibus itaque voluptatem iusto unde animi iste nemo amet ex quae sapiente sunt facere quis quos sequi. Saepe.
Aliquid tempore suscipit numquam quo cumque alias nam earum! Nobis ipsam in cum unde quibusdam dicta nulla nostrum non sit sapiente? Dolor necessitatibus nesciunt quaerat enim aperiam! Ex, nisi culpa?

      {/* About section */}
      <section className="bg-gray-950 text-white mt-[8rem]">
        {/* Top content */}
        <motion.h1 
        className="text-center font-bold text-4xl sm:text-5xl md:text-7xl"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        >  
          About <span className="text-blue-600">Us</span>
          </motion.h1>

        <div className="max-w-6xl mx-auto px-6 md:px-8 py-14 md:py-20">
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
            {/* LEFT: Heading + Slider */}
            <div>
              <motion.h2
                className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.4 }}
              >
                Advancing Technology for 
                <br />
                Humanity <span className="text-blue-500">IEEE MSB</span>
              </motion.h2>
            </div>

            {/* RIGHT: Paragraphs */}
            <div>
              <motion.p
                className="text-gray-300 leading-relaxed text-base md:text-[17px]"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.4 }}
              >
                IEEE is the world's largest technical professional organization. It is dedicated to the advancement of technology for the betterment of humanity.
                Its core purpose is to foster the technological innovation and excellence.Believing in the same ideology and to carry this envisioned purpose, IEEE MANIT Student Branch ventures to be conducive and works assiduously towards achieving its goal.
              </motion.p>
              <motion.p
                className="mt-4 text-gray-300 leading-relaxed text-base md:text-[17px]"
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
          className="max-w-6xl mx-auto px-6 md:px-8 "
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.35 }}
        >
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <video
              ref={videoRef}
              src={recapVideo}
              muted
              loop
              playsInline
              className="w-full max-h-[90vh] object-contain bg-gray-950 rounded-2xl"
              controls={false}
            />
          </div>
        </motion.div>
      </section>
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
  }
])

function app(){
  return(
 <div>
    <RouterProvider router={router}></RouterProvider>
  </div>
  )
}

export default app;
