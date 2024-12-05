import React, { useState } from 'react';
import { FaExpandArrowsAlt } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";



const CustomStreamPlayer = () => {
  const [isMinimized, setIsMinimized] = useState(false);

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <div
      className={`fixed right-0 top-1/4  ${isMinimized ? 'w-20' :'w-25'} ${isMinimized ? 'bg-yellow-500' :'bg-transparent'} p-2 ${isMinimized ? 'h-8' : 'h-72'} transition-all duration-300`}
    >
      <button
        className="absolute right-4 top-2 bg-transparent text-white font-semibold"
        onClick={toggleMinimize}
      >
        {isMinimized ? <FaExpandArrowsAlt color='black'/> : <IoCloseSharp color='white'/>}
      </button>

      {/* YouTube Video Player */}
      {!isMinimized && (
        <div className="flex justify-center">
          <iframe
            width="360"
            height="215"
            src="https://www.youtube.com/embed/iEpJwprxDdk?autoplay=1&mute=1&si=M1OPkGrXk0AWiNZ2"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      )}
    </div>
  );
};

export default CustomStreamPlayer;
