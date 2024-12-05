import React, { useState } from 'react';
import { FaExpandArrowsAlt } from 'react-icons/fa';
import { IoCloseCircleOutline } from 'react-icons/io5';
import live from '../images/live.png';
import { motion } from 'framer-motion';
const CustomStreamPlayer = () => {
  const [isExpanded, setIsExpanded] = useState(false); // Renamed for clarity

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`fixed right-0 top-1/4 transition-all duration-300 ${
        isExpanded
          ? 'w-80 h-72 bg-transparent'
          : 'w-44 h-12 bg-gradient-to-r from-yellow-400 to-amber-500 drop-shadow-lg rounded-md'
      } flex items-center pt-3`}
    >
      {/* Toggle Button */}
      <button
        className={`absolute ${
          isExpanded ? 'top-2 left-2' : 'right-8 top-6'
        } bg-transparent text-white font-semibold`}
        onClick={toggleExpand}
      >
        {isExpanded ? (
          <IoCloseCircleOutline color="black" size={25} />
        ) : (
          <FaExpandArrowsAlt color="black" />
        )}
      </button>

      {/* Title/Description for Minimized State */}
      {!isExpanded && (
        <div className="flex-grow ml-4">
          <p className="text-black font-semibold text-sm">
            <span className=" flex gap-2 block  text-shadow">
              <img src={live} alt="" className="w-5 animate-ping" />
              Live News Stream
            </span>
            <span className="text-xs text-gray-800">Click to expand</span>
          </p>
        </div>
      )}

      {/* YouTube Video Player */}
      {isExpanded && (
        <motion.div
          className="flex justify-center mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <iframe
            width="360"
            height="215"
            src="https://www.youtube.com/embed/iEpJwprxDdk?autoplay=1&mute=1&si=M1OPkGrXk0AWiNZ2"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </motion.div>
      )}
    </div>
  );
};

export default CustomStreamPlayer;
