import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Calendar, Users } from "lucide-react";
import {useSelector} from 'react-redux'

const eventVideos = [
  {
    id: 1,
    title: "Design Forward Summit",
    description: "[LIVE + REPLAY]",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop",
  },
  {
    id: 2,
    title: "Design Systems for Scale",
    description: "[WORKSHOP]",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&h=250&fit=crop",
  },
  {
    id: 3,
    title: "Systematic Design Expo",
    description: "[CONFERENCE]",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=250&fit=crop",
  },
  {
    id: 4,
    title: "ScaleUp Conference",
    description: "[KEYNOTE]",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&h=250&fit=crop",
  },
];

const EventVideoCarousel = () => {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const mainVideoRef = useRef(null);
  const carouselRef = useRef(null);

  useEffect(() => {
    if (!isAutoScrolling) return;
    const interval = setInterval(() => {
      setActiveVideoIndex((prev) => (prev + 1) % eventVideos.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [isAutoScrolling]);

  useEffect(() => {
    if (carouselRef.current) {
      const thumbnailWidth = 320;
      const scrollPosition = activeVideoIndex * (thumbnailWidth + 24);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  }, [activeVideoIndex]);

  useEffect(() => {
    if (mainVideoRef.current) {
      mainVideoRef.current.load();
      mainVideoRef.current.play().catch(() => {});
    }
  }, [activeVideoIndex]);

  const handleThumbnailClick = (index) => {
    setActiveVideoIndex(index);
    setIsAutoScrolling(false);
    setTimeout(() => setIsAutoScrolling(true), 15000);
  };

  const activeVideo = eventVideos[activeVideoIndex];
  const mode = useSelector((state) => state.theme.mode);

  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden">
      <div className="relative w-full h-[85vh]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeVideo.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <video
              ref={mainVideoRef}
              className="w-full h-full object-cover"
              loop
              muted
              playsInline
            >
              <source src={activeVideo.videoUrl} type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute top-0 right-0 bottom-0 left-0 flex items-end justify-end p-8 md:p-16"
            >
              <div className="max-w-2xl text-right space-y-4">
                <motion.h1
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-3xl md:text-6xl font-bold text-white tracking-tight"
                >
                  {activeVideo.title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-xl md:text-2xl text-gray-200 font-semibold"
                >
                  {activeVideo.description}
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className={`relative w-full ${mode==='dark' ? 'bg-black' : 'bg-white'} py-8 px-4 md:px-8`}>
        <div
          ref={carouselRef}
          className={`flex gap-3 md:gap-6 justify-center ${mode==='dark' ? 'bg-black' : 'bg-white'} overflow-x-auto overflow-y-hidden scrollbar-hide scroll-smooth`}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {eventVideos.map((video, index) => (
            <motion.div
              key={video.id}
              whileHover={{ scale: 0.98 }}
              className="relative flex-shrink-0 w-[124px] h-[70px] md:h-[180px] md:w-[320px] cursor-pointer group"
              onClick={() => handleThumbnailClick(index)}
            >
              <div
                className={`relative w-full h-full rounded-xl overflow-hidden transition-all duration-300 ${
                  activeVideoIndex === index
                    ? "ring-4 ring-blue-500 shadow-xl blur-[2px] shadow-blue-ring-blue-400/50"
                    : ""
                }`}
              >
                <img
                  src={video.thumbnailUrl}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-100 group-hover:opacity-90 transition-opacity duration-300" />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center">
                    <Play className="w-6 h-6 text-white fill-current ml-1" />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 space-y-1">
                  <h3 className="font-bold text-[12px] md:text-base text-white line-clamp-1">
                    {video.title}
                  </h3>
                  <p className="text-[10px] text-gray-100 line-clamp-1">
                    {video.description}
                  </p>
                </div>
              </div>

              {activeVideoIndex === index && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-gray-200"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventVideoCarousel;
