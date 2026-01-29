import React from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import AboutHero from '../components/AboutComponents/Abouthero'
import InfoCard from '../components/AboutComponents/InfoCard'
import { ImageCarousel } from '../components/AboutComponents/ImageCaraousel'
import Footer from '../components/Footer'
import { useRef, useEffect, useState } from 'react'
import infoCardLogo1 from '../assets/Images/infoCardLogo_1.png'
import infoCardLogo2 from '../assets/Images/infoCardLogo_2.png'
import infoCardLogo3 from '../assets/Images/infoCardLogo_3.png'
import infoCardLogo4 from '../assets/Images/infoCardLogo_4.png'
import {useSelector} from 'react-redux'
import { i } from 'framer-motion/client'

const About = () => {
    // For line animation when in view
    const lineRef = useRef(null);
    const containerRef = useRef(null);
    const isInView = useInView(lineRef, { once: true });

    // InfoCard data
    const data = [
        {
            logo: infoCardLogo1,
            heading: "IEEE-MSB",
            text: "The Institute is successfully meeting the objective of producing skilled Technocrats of the highest quality who are able to take up the challenges of the industries and Research organizations of the country. MANIT offers various undergraduate and post graduate courses and research programs.",
        },
        {
            logo: infoCardLogo2,
            heading: "IEEE MP - Subsection",
            text: "Formed under the Bombay Section, in the year 2001, under the able guidance of Dr. S. Kher of Indore, IEEE MP Subsection is being currently chaired by Dr. GS Tomar. Established with the aim of enhancing the nexus between professional members and student members within the state of Madhya Pradesh, IEEE MP Subsection is committed to the advancing technological innovation and excellence for the benefit of humanity.",
        },
        {
            logo: infoCardLogo3,
            heading: "IEEE Region 10",
            text: "IEEE an institute of like-minded individuals, who harmoniously concord on the ideology of technological innovations and incessant growth in technology and sciences for betterment of humanity , is a worldwide umbrella organization Divided into 10 proliferating regions, IEEE encompasses the whole world.",
        },
        {
            logo:infoCardLogo4,
            heading: "IEEE Bombay Section",
            text: "IEEE in our country is a proliferating labyrinthine network of members, colleges and universities, divided into regions, unified by a unanimous intention. India is fragmented into 11 IEEE sections which are further divided into subsections, for optimum functioning. Bombay section is one the most dynamic sections of our country and works efficaciously towards the constructive growth of its members.",
        },
    ];

   const mode = useSelector((state) => state.theme.mode);
return (
    <motion.div
        className={`${
            mode === "dark"
                ? "bg-black text-white"
                : "bg-white text-black"
        }`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}>

        <AboutHero />

        <div
            className={`${
                mode === "dark"
                    ? "bg-black text-white"
                    : "bg-white text-black"
            } py-16 px-6 md:px-12 lg:px-20`}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Left Text Section */}
                <div>
                    <p
                        className={`${
                            mode === "dark" ? "text-blue-400" : "text-blue-600"
                        } font-semibold mb-2`}
                    >
                        About Us
                    </p>
                    <h2
                        className={`${
                            mode === "dark" ? "text-white" : "text-gray-900"
                        } text-3xl md:text-4xl lg:text-5xl font-bold mb-6`}
                    >
                        Driving innovation and <br /> future success.
                    </h2>
                    <p
                        className={`${
                            mode === "dark"
                                ? "text-gray-300"
                                : "text-gray-700"
                        } leading-relaxed mb-8`}
                    >
                        IEEE MANIT Student Branch is committed to advancing
                        technology for humanity. Through collaboration,
                        innovation, and knowledge-sharing, we empower students to
                        create solutions that matter and shape a brighter
                        tomorrow.
                    </p>

                    {/* Animated Line */}
                    <motion.div
                        ref={lineRef}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: "100%" } : {}}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        className={`h-1 rounded ${
                            mode === "dark" ? "bg-blue-400" : "bg-blue-600"
                        }`}
                    />
                </div>

                {/* Right Image Carousel */}
                <div className="mb-12">
                    <ImageCarousel />
                </div>
            </div>
        </div>

        {/* info cards */}
        <div className="px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {data.map((item, index) => (
                <InfoCard
                    key={index}
                    logo={item.logo}
                    heading={item.heading}
                    text={item.text}
                />
            ))}
        </div>

        <Footer />
    </motion.div>
);

}

export default About
