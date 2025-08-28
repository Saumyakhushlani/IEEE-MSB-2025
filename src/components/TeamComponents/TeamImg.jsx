import React, { useState } from 'react';
import { motion } from 'framer-motion';  // ✅ Import Framer Motion

const TeamImg = ({ img, name, post, width, height }) => {
  const [isHovered, setIsHovered] = useState(false);

  const circleSize = Math.min(width, height);
  const borderWidth = circleSize * 0.15;
  const centerX = circleSize / 2;
  const centerY = circleSize / 2;
  const textRadius = centerX - (borderWidth / 2);
  const fontSize = Math.max(circleSize * 0.040, 10);

  const circumference = 2 * Math.PI * textRadius;
  const baseText = `IEEE MSB -`;
  const textLength = baseText.length * fontSize * 0.6;
  const repetitions = Math.ceil(circumference / textLength);
  const textString = baseText.repeat(repetitions);

  const uniqueId = `textCircle-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <motion.div
      className="relative cursor-pointer group"
      style={{ width: circleSize, height: circleSize }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, scale: 0.8 }}   // 👈 Animation when component mounts
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}           // 👈 Smooth hover scale
    >
      {/* Outer border ring with text - appears on hover */}
      <motion.div
        className={`absolute inset-0 rounded-full transition-all duration-700 bg-blue-500 ease-out ${
          isHovered ? "scale-100 opacity-100" : "scale-98 opacity-0"
        }`}
      >
        <div 
          className={`absolute inset-0 rounded-full transition-all duration-700ease-out ${
            isHovered ? "opacity-50 " : "opacity-0"
          }`}
        >
          <svg
            width={circleSize}
            height={circleSize}
            className="absolute inset-0"
            style={{ overflow: 'visible' }}
          >
            <defs>
              <path
                id={uniqueId}
                d={`M ${centerX - textRadius}, ${centerY} 
                   A ${textRadius}, ${textRadius} 0 1,1 ${centerX + textRadius}, ${centerY}
                   A ${textRadius}, ${textRadius} 0 1,1 ${centerX - textRadius}, ${centerY}`}
              />
            </defs>
            <text
              className="fill-team-border-foreground font-bold"
              fontSize={fontSize}
              textAnchor="start"
              dominantBaseline="middle"
              style={{ 
                letterSpacing: `${fontSize * 0.1}px`,
                fontFamily: 'system-ui, -apple-system, sans-serif'
              }}
            >
              <textPath href={`#${uniqueId}`} startOffset="0%">
                {textString}
              </textPath>
            </text>
          </svg>
        </div>
      </motion.div>

      {/* Inner circular image container */}
      <motion.div
        className="absolute rounded-full overflow-hidden transition-all duration-500 ease-out shadow-lg border-4 border-background"
        style={{
          width: circleSize - borderWidth,
          height: circleSize - borderWidth,
          top: borderWidth / 2,
          left: borderWidth / 2,
          transform: isHovered ? "scale(0.95)" : "scale(1)",
          transformOrigin: "center center"
        }}
         whileHover={{ scale: 0.90 }}   
      >
        <motion.img
          src={img}
          alt={`${name} - ${post}`}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isHovered ? "opacity-60" : "opacity-100"
          }`}
        />
        
        {/* Center text overlay */}
        <motion.div
          className={`absolute inset-0 flex flex-col items-center justify-center text-team-overlay-foreground transition-opacity duration-500 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="text-center px-3">
            <div 
              className="font-bold leading-tight mb-1 text-white drop-shadow-lg"
              style={{ fontSize: Math.max(circleSize * 0.06, 14) }}
            >
              {name}
            </div>
            <div 
              className="text-team-overlay-foreground/90 leading-tight text-blue-200 font-medium drop-shadow-lg"
              style={{ fontSize: Math.max(circleSize * 0.04, 11) }}
            >
              {post}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default TeamImg;
