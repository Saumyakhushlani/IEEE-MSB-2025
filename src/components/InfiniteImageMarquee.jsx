import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useSelector } from "react-redux";
import { getCloudinaryImage } from "../utils/cloudinary";

const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState("ALL");
  const [activeImage, setActiveImage] = useState(null);

  const eventImages = {
    AARAMBH: [
      {
        id: 1,
        src: getCloudinaryImage("Events/Aarambh/Aarambh25_eighth"),
        alt: "Aarambh First",
      },
      {
        id: 2,
        src: getCloudinaryImage("Events/Aarambh/Aarambh25_fifth"),
        alt: "Aarambh Second",
      },
      {
        id: 3,
        src: getCloudinaryImage("Events/Aarambh/Aarambh25_first"),
        alt: "Aarambh Third",
      },
      {
        id: 4,
        src: getCloudinaryImage("Events/Aarambh/Aarambh25_second"),
        alt: "Aarambh Fourth",
      },
      {
        id: 5,
        src: getCloudinaryImage("Events/Aarambh/Aarambh25_fourth"),
        alt: "Aarambh Fifth",
      },
      {
        id: 6,
        src: getCloudinaryImage("Events/Aarambh/Aarambh25_ninth"),
        alt: "Aarambh Sixth",
      },
      {
        id: 7,
        src: getCloudinaryImage("Events/Aarambh/Aarambh25_seventh"),
        alt: "Aarambh Seventh",
      },
      {
        id: 8,
        src: getCloudinaryImage("Events/Aarambh/Aarambh25_sixth"),
        alt: "Aarambh Eighth",
      },
      {
        id: 9,
        src: getCloudinaryImage("Events/Aarambh/Aarambh25_tenth"),
        alt: "Aarambh Ninth",
      },
    ],

    SAMWAAD: [
      {
        id: 10,
        src: getCloudinaryImage("Events/Samwad/samwad1"),
        alt: "Samwaad First",
      },
      {
        id: 11,
        src: getCloudinaryImage("Events/Samwad/samwad2"),
        alt: "Samwaad Second",
      },
      {
        id: 12,
        src: getCloudinaryImage("Events/Samwad/samwad4"),
        alt: "Samwaad Third",
      },
      {
        id: 13,
        src: getCloudinaryImage("Events/Samwad/samwad5"),
        alt: "Samwaad Fourth",
      },
      {
        id: 14,
        src: getCloudinaryImage("Events/Samwad/samwad8"),
        alt: "Samwaad Fifth",
      },
      {
        id: 15,
        src: getCloudinaryImage("Events/Samwad/samwad16"),
        alt: "Samwaad Sixth",
      },
      {
        id: 16,
        src: getCloudinaryImage("Events/Samwad/samwad11"),
        alt: "Samwaad Seventh",
      },
      {
        id: 17,
        src: getCloudinaryImage("Events/Samwad/samwad15"),
        alt: "Samwaad Eighth",
      },
      {
        id: 18,
        src: getCloudinaryImage("Events/Samwad/samwad12"),
        alt: "Samwaad Ninth",
      },
    ],

    SCEECS: [
      {
        id: 19,
        src: getCloudinaryImage("Events/SCEECS/sceecs26_21"),
        alt: "SCEECS First",
      },
      {
        id: 20,
        src: getCloudinaryImage("Events/SCEECS/sceecs26_22"),
        alt: "SCEECS Second",
      },
      {
        id: 21,
        src: getCloudinaryImage("Events/SCEECS/sceecs26_17"),
        alt: "SCEECS Third",
      },
      {
        id: 22,
        src: getCloudinaryImage("Events/SCEECS/sceecs26_19"),
        alt: "SCEECS Fourth",
      },
      {
        id: 23,
        src: getCloudinaryImage("Events/SCEECS/sceecs26_14"),
        alt: "SCEECS Fifth",
      },
      {
        id: 24,
        src: getCloudinaryImage("Events/SCEECS/sceecs26_15"),
        alt: "SCEECS Sixth",
      },
      {
        id: 25,
        src: getCloudinaryImage("Events/SCEECS/sceecs26_11"),
        alt: "SCEECS Seventh",
      },
      {
        id: 26,
        src: getCloudinaryImage("Events/SCEECS/sceecs26_13"),
        alt: "SCEECS Eighth",
      },
      {
        id: 27,
        src: getCloudinaryImage("Events/SCEECS/sceecs26_8"),
        alt: "SCEECS Ninth",
      },
    ],
  };

  const mixedImages = Object.values(eventImages).flat();
  const shuffled = [...mixedImages].sort(() => Math.random() - 0.5);
  const mode = useSelector((state) => state.theme.mode);
  return (
    <div
      className={`relative py-12 overflow-hidden ${
        mode === "dark" ? "bg-black" : "bg-white"
      }`}
    >
      <h1
        className={`absolute inset-0 flex items-center justify-center text-5xl md:text-7xl font-bold pointer-events-none z-10 ${
          mode === "dark" ? "text-white" : "text-gray-900"
        }`}
      >
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
              className={`rounded-2xl p-4 sm:p-6 w-full max-w-7xl max-h-[90vh] overflow-y-auto relative ${
                mode === "dark"
                  ? "bg-[#111] text-white"
                  : "bg-white text-gray-900"
              }`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.3 }}
            >
              <button
                className={`absolute top-3 right-3 sm:top-4 sm:right-4 p-2 rounded-full ${
                  mode === "dark"
                    ? "bg-gray-700 hover:bg-gray-600 text-white"
                    : "bg-gray-200 hover:bg-gray-300 text-black"
                }`}
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
                  className={`px-4 py-2 rounded-full ${
                    filter === "ALL"
                      ? "bg-blue-500 text-white"
                      : mode === "dark"
                        ? "bg-gray-700 text-white"
                        : "bg-gray-200 text-black"
                  }`}
                >
                  All
                </button>
                {Object.keys(eventImages).map((event) => (
                  <button
                    key={event}
                    onClick={() => setFilter(event)}
                    className={`px-4 py-2 rounded-full ${
                      filter === event
                        ? "bg-blue-500 text-white"
                        : mode === "dark"
                          ? "bg-gray-700 text-white"
                          : "bg-gray-200 text-black"
                    }`}
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
                      <div className="text-lg font-semibold text-center">
                        {event}
                      </div>
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
