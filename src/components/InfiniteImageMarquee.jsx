import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState("ALL");
  const [activeImage, setActiveImage] = useState(null);

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
      { id: 13, src: "/Events/samwaad/Samwad25_fourth.jpg", alt: "Samwaad Fourth" },
      { id: 14, src: "/Events/samwaad/Samwad25_fifth.jpg", alt: "Samwaad Fifth" },
      { id: 15, src: "/Events/samwaad/Samwad25_sixth.jpg", alt: "Samwaad Sixth" },
      { id: 16, src: "/Events/samwaad/Samwad25_seventh.jpg", alt: "Samwaad Seventh" },
      { id: 17, src: "/Events/samwaad/Samwad25_eighth.jpg", alt: "Samwaad Eighth" },
      { id: 18, src: "/Events/samwaad/Samwad25_ninth.jpg", alt: "Samwaad Ninth" },
    ],
    SCEECS: [
      { id: 19, src: "/Events/sceecs/SCEECS24_1.JPG", alt: "SCEECS First" },
      { id: 20, src: "/Events/sceecs/SCEECS24_2.JPG", alt: "SCEECS Second" },
      { id: 21, src: "/Events/sceecs/SCEECS24_3.JPG", alt: "SCEECS Third" },
      { id: 22, src: "/Events/sceecs/SCEECS24_4.JPG", alt: "SCEECS Fourth" },
      { id: 23, src: "/Events/sceecs/SCEECS24_5.JPG", alt: "SCEECS Fifth" },
      { id: 24, src: "/Events/sceecs/SCEECS24_6.JPG", alt: "SCEECS Sixth" },
      { id: 25, src: "/Events/sceecs/SCEECS24_7.JPG", alt: "SCEECS Seventh" },
      { id: 26, src: "/Events/sceecs/SCEECS24_8.JPG", alt: "SCEECS Eighth" },
      { id: 27, src: "/Events/sceecs/SCEECS24_9.JPG", alt: "SCEECS Ninth" },
    ],
  };

  const mixedImages = Object.values(eventImages).flat();
  const shuffled = [...mixedImages].sort(() => Math.random() - 0.5);

  return (
    <div className="relative py-12 bg-black overflow-hidden">
      <h1 className="absolute inset-0 flex items-center justify-center text-white text-5xl md:text-7xl font-bold pointer-events-none z-10">
        Our <span className="text-blue-500">&nbsp;Gallery</span>
      </h1>

      <motion.div
        className="flex gap-4"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      >
        {[...shuffled, ...shuffled].map((img) => (
          <img
            key={img.id + Math.random()}
            src={img.src}
            alt={img.alt}
            onClick={() => setIsModalOpen(true)}
            className="md:w-84 w-60 md:h-54 h-40 object-cover rounded-lg shadow-lg cursor-pointer"
          />
        ))}
      </motion.div>

      <motion.div
        className="flex gap-4 mt-10"
        animate={{ x: ["-100%", "0%"] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      >
        {[...shuffled, ...shuffled].map((img) => (
          <img
            key={img.id + Math.random()}
            src={img.src}
            alt={img.alt}
            onClick={() => setIsModalOpen(true)}
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
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="bg-white rounded-2xl p-4 sm:p-6 w-full max-w-7xl max-h-[90vh] overflow-y-auto relative"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.3 }}
            >
              <button
                className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 bg-gray-200 rounded-full hover:bg-gray-300"
                onClick={() => setIsModalOpen(false)}
              >
                <X />
              </button>

              <div className="text-3xl sm:text-4xl md:text-5xl mb-5 text-center font-bold">
                Our <span className="text-blue-500">Events</span>
              </div>

              <div className="flex gap-4 justify-center mb-6">
                <button
                  onClick={() => setFilter("ALL")}
                  className={`px-4 py-2 rounded-full ${filter === "ALL" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                >
                  All
                </button>
                {Object.keys(eventImages).map((event) => (
                  <button
                    key={event}
                    onClick={() => setFilter(event)}
                    className={`px-4 py-2 rounded-full ${filter === event ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                  >
                    {event}
                  </button>
                ))}
              </div>

              {activeImage && (
                <div className="mb-8">
                  <img
                    src={activeImage}
                    alt="Selected"
                    className="w-full aspect-video object-cover rounded-lg"
                  />
                </div>
              )}

              {filter === "ALL" ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {Object.keys(eventImages).map((event) => (
                    <div key={event} className="flex flex-col gap-4">
                      <div className="text-lg font-semibold text-center">{event}</div>
                      {eventImages[event].map((img) => (
                        <img
                          key={img.id}
                          src={img.src}
                          alt={img.alt}
                          className="w-full aspect-video object-cover rounded-lg cursor-pointer hover:opacity-80 transition"
                          onClick={() => setActiveImage(img.src)}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {eventImages[filter].map((img) => (
                    <img
                      key={img.id}
                      src={img.src}
                      alt={img.alt}
                      className="w-full aspect-video object-cover rounded-lg cursor-pointer hover:opacity-80 transition"
                      onClick={() => setActiveImage(img.src)}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
