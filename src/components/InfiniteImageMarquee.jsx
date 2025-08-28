"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

const InfiniteImageMarquee = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
        { id: 1, src: '/Events/aarambh/Aarambh24_first.jpg', alt: 'Aarambh First' },
        { id: 2, src: '/Events/aarambh/Aarambh24_second.jpg', alt: 'Aarambh Second' },
        { id: 3, src: '/Events/aarambh/Aarambh24_third.jpg', alt: 'Aarambh Third' },
        { id: 4, src: '/Events/aarambh/Aarambh24_fourth.jpg', alt: 'Aarambh Fourth' },
        { id: 5, src: '/Events/aarambh/Aarambh24_fifth.jpg', alt: 'Aarambh Fifth' },
        { id: 6, src: '/Events/aarambh/Aarambh24_sixth.jpg', alt: 'Aarambh Sixth' },
        { id: 7, src: '/Events/aarambh/Aarambh24_seventh.jpg', alt: 'Aarambh Seventh' },
        { id: 8, src: '/Events/aarambh/Aarambh24_eighth.jpg', alt: 'Aarambh Eighth' },
        { id: 9, src: '/Events/aarambh/Aarambh24_ninth.jpg', alt: 'Aarambh Ninth' },

        { id: 10, src: '/Events/samwaad/Samwaad25_first.jpg', alt: 'Samwaad First' },
        { id: 11, src: '/Events/samwaad/Samwaad25_second.jpg', alt: 'Samwaad Second' },
        { id: 12, src: '/Events/samwaad/Samwaad25_third.jpg', alt: 'Samwaad Third' },
        { id: 13, src: '/Events/samwaad/Samwad25_fourth.jpg', alt: 'Samwaad Fourth' },
        { id: 14, src: '/Events/samwaad/Samwad25_fifth.jpg', alt: 'Samwaad Fifth' },
        { id: 15, src: '/Events/samwaad/Samwad25_sixth.jpg', alt: 'Samwaad Sixth' },
        { id: 16, src: '/Events/samwaad/Samwad25_seventh.jpg', alt: 'Samwaad Seventh' },
        { id: 17, src: '/Events/samwaad/Samwad25_eighth.jpg', alt: 'Samwaad Eighth' },
        { id: 18, src: '/Events/samwaad/Samwad25_ninth.jpg', alt: 'Samwaad Ninth' },

        { id: 19, src: '/Events/sceecs/SCEECS24_1.JPG', alt: 'SCEECS 1' },
        { id: 20, src: '/Events/sceecs/SCEECS24_2.JPG', alt: 'SCEECS 2' },
        { id: 21, src: '/Events/sceecs/SCEECS24_4.JPG', alt: 'SCEECS 4' },
        { id: 22, src: '/Events/sceecs/SCEECS24_5.JPG', alt: 'SCEECS 5' },
        { id: 23, src: '/Events/sceecs/SCEECS24_6.JPG', alt: 'SCEECS 6' },
        { id: 24, src: '/Events/sceecs/SCEECS24_7.JPG', alt: 'SCEECS 7' },
        { id: 25, src: '/Events/sceecs/SCEECS24_8.JPG', alt: 'SCEECS 8' },
        { id: 26, src: '/Events/sceecs/SCEECS24_9.JPG', alt: 'SCEECS 9' },
    ];

    const row1Images = images.slice(0, 9);
    const row2Images = images.slice(9, 18);
    const row3Images = images.slice(18, 27);

    const handleImageClick = (image) => {
        setSelectedImage(image);
        setIsModalOpen(true);
    };

    const MarqueeRow = ({ images, direction = "left", speed = 50 }) => {
        const duplicatedImages = [...images, ...images]; // double array

        return (
            <div className="overflow-hidden py-4">
                <motion.div
                    className="flex gap-6"
                    animate={{
                        x:
                            direction === "left"
                                ? ["0%", "-100%"] 
                                : ["-100%", "0%"],
                    }}
                    transition={{
                        duration: speed,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                    {duplicatedImages.map((image, index) => (
                        <motion.div
                            key={`${image.id}-${index}`}
                            className="flex-shrink-0 cursor-pointer"
                            whileHover={{ scale: 1.05, y: -10 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleImageClick(image)}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-92 h-58 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        );
    };

    const GridGallery = () => (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((img) => (
                <div key={img.id} className="relative w-full aspect-video">
                    <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
            ))}
        </div>
    );

    return (
        <div className="min-h-screen bg-white">
            <div className="text-center py-12">
                <h1 className="text-4xl md:text-6xl font-bold text-black mb-4">
                    Gallery
                </h1>
            </div>

            <div className="flex flex-col justify-center items-center">
                <div className='text-center text-3xl bg-gradient-to-br from-indigo-500 rounded via-blue-700 to-cyan-600  font-semibold my-3 px-4 py-2 text-white w-max'>AARAMBH</div>
                <MarqueeRow images={row1Images} direction="left" speed={40} />
                <div className='text-center text-3xl bg-gradient-to-br from-indigo-500 rounded via-blue-700 to-cyan-600  font-semibold my-3 px-4 py-2 text-white w-max'>SAMWAAD</div>
                <MarqueeRow images={row2Images} direction="right" speed={45} />
                <div className='text-center text-3xl bg-gradient-to-br from-indigo-500 rounded via-blue-700 to-cyan-600  font-semibold my-3 px-4 py-2 text-white w-max'>SCEECS</div>
                {/* <MarqueeRow images={row3Images} direction="left" speed={50} /> */}
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
                            {/* Modal Header */}
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-3xl font-bold text-slate-800">Gallery Collection</h2>
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                                >
                                    <X size={24} className="text-slate-600" />
                                </button>
                            </div>

                            {/* Grid Gallery */}
                            <GridGallery />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="text-center py-16">
                <p className="text-slate-400">
                    Hover over images to see them lift • Click to explore the full gallery
                </p>
            </div>
        </div>
    );
};

export default InfiniteImageMarquee;