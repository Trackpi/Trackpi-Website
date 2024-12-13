import React, { useState, useEffect, useRef } from 'react';
import trackpiLogo from '../images/trackpi_logo_one.png'; 
import './loader.css'

function Loader() {
    const [loadingProgress, setLoadingProgress] = useState(0);
  const imageRef = useRef(null);

  // Track image loading progress
  const handleImageLoad = () => {
    let progress = 0;
    const totalDuration = 2000; // 2.5 seconds
    const intervalTime = 25; // Update every 25ms for smooth progress

    const increment = (100 / totalDuration) * intervalTime; // Calculate how much to increment

    const interval = setInterval(() => {
      progress += increment;
      setLoadingProgress(Math.min(progress, 100)); // Ensure progress doesn't exceed 100

      if (progress >= 100) {
        clearInterval(interval); // Stop the interval when progress reaches 100
      }
    }, intervalTime);
  };

  useEffect(() => {
    handleImageLoad(); // Start loading simulation on component mount
  }, []);
  return (
    <>
         <div className="text-center  loader_main">
      <div className=''>
        <img src={trackpiLogo} alt="TrackPi Logo Blured" className='img-overlay' />
        <img
          src={trackpiLogo}
          ref={imageRef}
          className=" mx-auto mb-3 image-animation"
          alt="TrackPi Logo"
          onLoad={handleImageLoad} // Trigger progress update when the image is fully loaded
        />
        <div className="loading-text mb-3">{`Loading ${Math.floor(loadingProgress)}%`}</div>
      </div>
    </div>
    </>
  )
}

export default Loader