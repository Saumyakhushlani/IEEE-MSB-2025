import { motion } from 'framer-motion';

const Speaker = ({image,name,role}) => {
  return (
    <motion.div
      className="relative h-[18rem] w-[14rem] overflow-hidden rounded-2xl group hover:scale-105 hover:border-2 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-600 duration-300 cursor-pointer"
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Background Image */}
      <img
        src={image}
        alt={name}
        className="absolute inset-0 w-full hover:scale-105 duration-200 h-full object-cover"
      />
      
      {/* Default Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-500/90 via-blue-500/10 to-transparent" />
      
      {/* Hover Gradient Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 duration-300"
        transition={{ duration: 0.4 }}
      />
      
      {/* Content Container */}
      <div className="absolute bottom-0 left-0 right-0 p-3 flex flex-col items-center">
        {/* Text Content */}
        <div className="text-center mb-2">
          <h3 className="text-blue-200 font-extrabold text-[15px] md:text-[19px] mb-1">
            {name}
          </h3>
          <p className="text-white font-medium text-[10px] md:text-[14px]">
            {role}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Speaker;
