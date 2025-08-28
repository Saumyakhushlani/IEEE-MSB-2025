
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

const Gallery = () => {
    const [selectedEvent, setSelectedEvent] = useState("AARAMBH");
    const [activeImage, setActiveImage] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Events + Images
    const eventImages = {
        AARAMBH: [
            { id: 1, src: "/Events/aarambh/Aarambh24_first.jpg", alt: "Aarambh First", event: "AARAMBH" },
            { id: 2, src: "/Events/aarambh/Aarambh24_second.jpg", alt: "Aarambh Second", event: "AARAMBH" },
            { id: 3, src: "/Events/aarambh/Aarambh24_third.jpg", alt: "Aarambh Third", event: "AARAMBH" },
            { id: 4, src: "/Events/aarambh/Aarambh24_fourth.jpg", alt: "Aarambh Fourth", event: "AARAMBH" },
            { id: 5, src: "/Events/aarambh/Aarambh24_fifth.jpg", alt: "Aarambh Fifth", event: "AARAMBH" },
            { id: 6, src: "/Events/aarambh/Aarambh24_sixth.jpg", alt: "Aarambh Sixth", event: "AARAMBH" },
            { id: 7, src: "/Events/aarambh/Aarambh24_seventh.jpg", alt: "Aarambh Seventh", event: "AARAMBH" },
            { id: 8, src: "/Events/aarambh/Aarambh24_eighth.jpg", alt: "Aarambh Eighth", event: "AARAMBH" },
            { id: 9, src: "/Events/aarambh/Aarambh24_ninth.jpg", alt: "Aarambh Ninth", event: "AARAMBH" },
        ],
        SAMWAAD: [
            { id: 10, src: "/Events/samwaad/Samwaad25_first.jpg", alt: "Samwaad First", event: "SAMWAAD" },
            { id: 11, src: "/Events/samwaad/Samwaad25_second.jpg", alt: "Samwaad Second", event: "SAMWAAD" },
            { id: 12, src: "/Events/samwaad/Samwaad25_third.jpg", alt: "Samwaad Third", event: "SAMWAAD" },
            { id: 13, src: "public/Events/samwaad/Samwad25_fourth.jpg", alt: "Samwaad Fourth", event: "SAMWAAD" },
            { id: 14, src: "public/Events/samwaad/Samwad25_fifth.jpg", alt: "Samwaad Fifth", event: "SAMWAAD" },
            { id: 15, src: "public/Events/samwaad/Samwad25_sixth.jpg", alt: "Samwaad Sixth", event: "SAMWAAD" },
            { id: 16, src: "public/Events/samwaad/Samwad25_seventh.jpg", alt: "Samwaad Seventh", event: "SAMWAAD" },
            { id: 17, src: "public/Events/samwaad/Samwad25_eighth.jpg", alt: "Samwaad Eighth", event: "SAMWAAD" },
            { id: 18, src: "public/Events/samwaad/Samwad25_ninth.jpg", alt: "Samwaad Ninth", event: "SAMWAAD" },
        ],
        SCEECS: [
            { id: 19, src: "/Events/sceecs/SCEECS24_1.JPG", alt: "SCEECS First", event: "SCEECS" },
            { id: 20, src: "/Events/sceecs/SCEECS24_2.JPG", alt: "SCEECS Second", event: "SCEECS" },
            { id: 21, src: "/Events/sceecs/SCEECS24_3.JPG", alt: "SCEECS Third", event: "SCEECS" },
            { id: 22, src: "/Events/sceecs/SCEECS24_4.JPG", alt: "SCEECS Fourth", event: "SCEECS" },
            { id: 23, src: "/Events/sceecs/SCEECS24_5.JPG", alt: "SCEECS Fifth", event: "SCEECS" },
            { id: 24, src: "/Events/sceecs/SCEECS24_6.JPG", alt: "SCEECS Sixth", event: "SCEECS" },
            { id: 25, src: "/Events/sceecs/SCEECS24_7.JPG", alt: "SCEECS Seventh", event: "SCEECS" },
            { id: 26, src: "/Events/sceecs/SCEECS24_8.JPG", alt: "SCEECS Eighth", event: "SCEECS" },
            { id: 27, src: "/Events/sceecs/SCEECS24_9.JPG", alt: "SCEECS Ninth", event: "SCEECS" },
        ],
    };

    const mixedImages = Object.values(eventImages).flat();
    const shuffled = [...mixedImages].sort(() => Math.random() - 0.5);

    return (
        <div className="relative py-12 bg-black overflow-hidden">
            <h1 className="absolute inset-0  flex items-center justify-center text-white text-5xl md:text-7xl font-bold pointer-events-none z-10">
                Our <span className="text-blue-500">&nbsp;Gallery</span>
            </h1>

            <motion.div
                className="flex gap-4 md:mb-20 "
                animate={{ x: ["0%", "-100%"] }}
                transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            >
                {[...shuffled, ...shuffled].map((img) => (
                    <img
                        key={img.id + Math.random()}
                        src={img.src}
                        alt={img.alt}
                        onClick={() => {
                            setSelectedEvent(img.event);
                            setActiveImage(img.src);
                            setIsModalOpen(true);
                        }}
                        className="md:w-84 w-60 md:h-54 h-40 object-cover rounded-lg shadow-lg cursor-pointer"
                    />
                ))}
            </motion.div>

            <motion.div
                className="flex gap-4 md:mt-20 mt-20"
                animate={{ x: ["-100%", "0%"] }}
                transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            >
                {[...shuffled, ...shuffled].map((img) => (
                    <img
                        key={img.id + Math.random()}
                        src={img.src}
                        alt={img.alt}
                        onClick={() => {
                            setSelectedEvent(img.event);
                            setActiveImage(img.src);
                            setIsModalOpen(true);
                        }}
                        className="md:w-84 w-60 md:h-54 h-40 object-cover rounded-lg shadow-lg cursor-pointer"
                    />
                ))}
            </motion.div>

            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-2 sm:p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <motion.div
                            className="bg-white rounded-2xl p-4 sm:p-6 w-full max-w-6xl max-h-[90vh] overflow-y-auto relative"
                            initial={{ scale: 0.9, opacity: 0, y: 50 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 50 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                        >
                            <button
                                className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
                                onClick={() => setIsModalOpen(false)}
                            >
                                <X />
                            </button>

                            <div className="text-3xl sm:text-4xl md:text-5xl mb-5 text-center font-bold">
                                Our <span className="text-blue-500">Events</span>
                            </div>

                            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6">
                                {Object.keys(eventImages).map((event) => (
                                    <button
                                        key={event}
                                        onClick={() => {
                                            setSelectedEvent(event);
                                            setActiveImage(null);
                                        }}
                                        className={`px-4 sm:px-6 py-2 rounded-full font-semibold shadow-md transition-all ${selectedEvent === event
                                                ? "bg-gradient-to-r from-indigo-500 via-blue-600 to-cyan-500 text-white scale-105"
                                                : "bg-gray-200 text-black hover:bg-gray-300"
                                            }`}
                                    >
                                        {event}
                                    </button>
                                ))}
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-4 mb-6">
                                {eventImages[selectedEvent].map((img) => (
                                    <motion.img
                                        key={img.id}
                                        src={img.src}
                                        alt={img.alt}
                                        className={`w-full h-36 sm:h-48 object-cover rounded-lg cursor-pointer border-2 ${activeImage === img.src
                                                ? "border-blue-500"
                                                : "border-transparent"
                                            }`}
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.2 }}
                                    />
                                ))}
                            </div>

                            
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
};

export default Gallery;
