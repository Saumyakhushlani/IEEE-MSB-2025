import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const ShuffleHero = () => {
  const mode = useSelector((state) => state.theme.mode);
  
  return (
    <section className="md:mt-28 mt-10 w-full px-8 py-16 grid grid-cols-1 md:grid-cols-2 items-center gap-32 max-w-6xl mx-auto">
      <div>
        <span className={`block mb-4 text-xs md:text-sm font-semibold uppercase tracking-wider ${
          mode === "dark" ? "text-indigo-400" : "text-indigo-600"
        }`}>
          Advancing Technology for Humanity
        </span>
        <h3 className={`text-4xl md:text-6xl font-bold leading-tight ${
          mode === "dark" ? "text-white" : "text-black"
        }`}>
          IEEE MSB Student Branch
        </h3>
        <p className={`text-base md:text-lg my-4 md:my-6 leading-relaxed ${
          mode === "dark" ? "text-gray-300" : "text-gray-800"
        }`}>
          Empowering the next generation of engineers and technologists through cutting-edge research, 
          professional development, and innovative solutions that address global challenges.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
         
         <a href="#events">
           <button className={`font-semibold py-3 px-6 rounded-lg transition-all active:scale-95 ${
            mode === "dark"
              ? "border-2 border-indigo-400 text-indigo-400 hover:bg-indigo-900/20"
              : "border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50"
          }`}>
            Explore Events
          </button>
         </a>
        </div>
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "/Events/aarambh/Aarambh24_first.jpg",
  },
  {
    id: 2,
    src: "/Events/samwaad/Samwaad25_first.jpg",
  },
  {
    id: 3,
    src: "/Events/sceecs/SCEECS24_1.JPG",
  },
  {
    id: 4,
    src: "/Events/aarambh/Aarambh24_second.jpg",
  },
  {
    id: 5,
    src: "/Events/samwaad/Samwaad25_second.jpg",
  },
  {
    id: 6,
    src: "/Events/sceecs/SCEECS24_2.JPG",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 0.8, type: "tween", ease: "easeInOut" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        willChange: "transform",
        imageRendering: "optimizeSpeed",
        transform: "translateZ(0)",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      shuffleSquares();
    }, 100);

    return () => {
      clearTimeout(timer);
      clearTimeout(timeoutRef.current);
    };
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 2000);
  };

  return (
    <div className="grid grid-cols-2 grid-rows-3 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;