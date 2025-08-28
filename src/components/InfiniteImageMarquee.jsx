import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

const Gallery = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState("AARAMBH"); 

    const eventImages = {
        AARAMBH: [
            { id: 1, src: "/Events/aarambh/Aarambh24_first.jpg", alt: "Aarambh First" },
            { id: 2, src: "/Events/aarambh/Aarambh24_second.jpg", alt: "Aarambh Second" },
            { id: 3, src: "/Events/aarambh/Aarambh24_third.jpg", alt: "Aarambh Third" },
            { id: 4, src: "/Events/aarambh/Aarambh24_fourth.jpg", alt: "Aarambh Fourth" },
            { id: 5, src: "/Events/aarambh/Aarambh24_fifth.jpg", alt: "Aarambh Fifth" },
            { id: 6, src: "/Events/aarambh/Aarambh24_sixth.jpg", alt: "Aarambh Sixth" },
            { id: 7, src: "/Events/aarambh/Aarambh24_seventh.jpg", alt: "Aarambh Seventh" },
            { id: 8, src: "/Events/aarambh/Aarambh24_eighth.jpg", alt: "Aarambh Eighth" },
            { id: 9, src: "/Events/aarambh/Aarambh24_ninth.jpg", alt: "Aarambh Ninth" },
        ],

        SAMWAAD: [
            { id: 10, src: "/Events/samwaad/Samwaad25_first.jpg", alt: "Samwaad First" },
            { id: 11, src: "/Events/samwaad/Samwaad25_second.jpg", alt: "Samwaad Second" },
            { id: 12, src: "/Events/samwaad/Samwaad25_third.jpg", alt: "Samwaad Third" },
            { id: 13, src: "public/Events/samwaad/Samwad25_fourth.jpg", alt: "Samwaad Fourth" },
            { id: 14, src: "public/Events/samwaad/Samwad25_fifth.jpg", alt: "Samwaad Fifth" },
            { id: 15, src: "public/Events/samwaad/Samwad25_sixth.jpg", alt: "Samwaad Sixth" },
            { id: 16, src: "public/Events/samwaad/Samwad25_seventh.jpg", alt: "Samwaad Seventh" },
            { id: 17, src: "public/Events/samwaad/Samwad25_eighth.jpg", alt: "Samwaad Eighth" },
            { id: 18, src: "public/Events/samwaad/Samwad25_ninth.jpg", alt: "Samwaad Ninth" },
        ],

        SCEECS: [
            { id: 19, src: "public/Events/sceecs/SCEECS24_1.JPG", alt: "SCEECS First" },
            { id: 20, src: "public/Events/sceecs/SCEECS24_2.JPG", alt: "SCEECS Second" },
            { id: 21, src: "public/Events/sceecs/SCEECS24_3.JPG", alt: "SCEECS Third" },
            { id: 22, src: "public/Events/sceecs/SCEECS24_4.JPG", alt: "SCEECS Fourth" },
            { id: 23, src: "public/Events/sceecs/SCEECS24_5.JPG", alt: "SCEECS Fifth" },
            { id: 24, src: "/Events/sceecs/SCEECS24_6.JPG", alt: "SCEECS Sixth" },
            { id: 25, src: "/Events/sceecs/SCEECS24_7.JPG", alt: "SCEECS Seventh" },
            { id: 26, src: "/Events/sceecs/SCEECS24_8.JPG", alt: "SCEECS Eighth" },
            { id: 27, src: "/Events/sceecs/SCEECS24_9.JPG", alt: "SCEECS Ninth" },
        ],
    };


    const GridGallery = () => (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {eventImages[selectedEvent].map((img) => (
                <motion.div
                    key={img.id}
                    whileHover={{ scale: 1.05 }}
                    className="cursor-pointer"
                    onClick={() => setIsModalOpen(true)}
                >
                    <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-64 object-cover rounded-lg shadow-lg"
                    />
                </motion.div>
            ))}
        </div>
    );

    return (
        <div className="min-h-screen bg-white">
            <div className="text-center py-12">
                <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
                    Gallery
                </h1>

                <div className="flex justify-center gap-4 mb-10">
                    {Object.keys(eventImages).map((event) => (
                        <button
                            key={event}
                            onClick={() => setSelectedEvent(event)}
                            className={`px-6 py-2 rounded-full font-semibold text-white shadow-lg transition-all duration-300
                ${selectedEvent === event
                                    ? "bg-gradient-to-r from-indigo-500 via-blue-600 to-cyan-500 scale-105"
                                    : "bg-slate-400 hover:bg-slate-500"
                                }`}
                        >
                            {event}
                        </button>
                    ))}
                </div>
            </div>

            <div className="px-6 md:px-20">
                <GridGallery />
            </div>

            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        onClick={() => setIsModalOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="bg-white rounded-2xl p-6 max-w-6xl max-h-[90vh] overflow-auto w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-bold text-slate-800">
                                    {selectedEvent} Collection
                                </h2>
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                                >
                                    <X size={24} className="text-slate-600" />
                                </button>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {eventImages[selectedEvent].map((img) => (
                                    <img
                                        key={img.id}
                                        src={img.src}
                                        alt={img.alt}
                                        className="w-full h-64 object-cover rounded-lg shadow-lg"
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
