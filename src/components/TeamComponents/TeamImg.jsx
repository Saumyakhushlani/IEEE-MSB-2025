import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { div } from "framer-motion/client";

const TeamImg = ({ img, name, post }) => {
  const [isHovered, setIsHovered] = useState(false);

  const width = 330;
  const height = 330;
  const circleSize = Math.min(width, height);
  const borderWidth = circleSize * 0.1;
  const centerX = circleSize / 2;
  const centerY = circleSize / 2;
  const textRadius = centerX - borderWidth / 2;
  const fontSize = Math.max(circleSize * 0.05, 13);

  const circumference = 2 * Math.PI * textRadius;
  const baseText = `IEEE MSB - `;
  const textLength = baseText.length * fontSize * 0.6;
  const repetitions = Math.ceil(circumference / textLength) + 2; // few extra
  const textString = baseText.repeat(repetitions);

  const uniqueId = `textCircle-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div>
      <motion.div
        className="relative cursor-pointer group border-2 border-gray-600 mb-4 hover:border-transparent duration-125 rounded-full"
        style={{ width: circleSize, height: circleSize }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{scale:1.05}}
      >
        {/* Text Circle */}
        <motion.div
          className={`absolute inset-0 rounded-full bg-transparent`}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg
            width={circleSize}
            height={circleSize}
            className="absolute inset-0"
            style={{ overflow: "visible" }}
          >
            <defs>
              <path
                id={uniqueId}
                d={`M ${centerX - textRadius}, ${centerY} 
                 A ${textRadius}, ${textRadius} 0 1,1 ${centerX + textRadius}, ${centerY}
                 A ${textRadius}, ${textRadius} 0 1,1 ${centerX - textRadius}, ${centerY}`}
              />
            </defs>

            <motion.text
              className="fill-white opacity-50 font-bold"
              fontSize={fontSize}
              textAnchor="start"
              dominantBaseline="middle"
              style={{
                letterSpacing: `${fontSize * 0.1}px`,
                fontFamily: "system-ui, -apple-system, sans-serif",
              }}
            >
              <motion.textPath
                href={`#${uniqueId}`}
                startOffset="100%"
                animate={{ startOffset: isHovered ? "0%" : "100%" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                {textString}
              </motion.textPath>
            </motion.text>
          </svg>
        </motion.div>

        {/* Inner Image */}
        <motion.div
          className="absolute rounded-full overflow-hidden shadow-lg border-4 flex justify-center items-center border-background"
          style={{
            width: circleSize - borderWidth,
            height: circleSize - borderWidth,
            top: borderWidth / 2,
            left: borderWidth / 2,
          }}
          whileHover={{ scale: 0.95 }}
        >
          <motion.img
            src={img}
            alt={`${name} - ${post}`}
            className={`w-[340px] h-[340px] transition duration-500 rounded-full ${isHovered ? "brightness-125 contrast-110 saturate-125" : "brightness-100"
              }`}
            
            transition={{ duration: 0.4, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 100, y: 0 }}
        transition={{ duration: 0.5 }}
        className='font-semibold text-[1.3rem] text-blue-500 text-center'>{name}</motion.h1>
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 100, y: 0 }}
        transition={{ duration: 0.5 }}
        className='text-[0.8rem] font-normal text-white text-center'>{post}</motion.h1>
    </div>
  );
};

export default TeamImg;
