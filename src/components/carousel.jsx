
import React, { useState,useEffect } from 'react';
// import { FaAngleRight } from 'react-icons/fa6';
// import { FaAngleLeft } from 'react-icons/fa6';
import "../pages/ourTeam.css";
function Clients (){
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false); // Track hover state
    const [cardsPerSlide, setCardsPerSlide] = useState(3);
    
    const clients = [
        {
          id: 1,
          name: 'Growth Father',
          description:'credentials and background details Verify the authenticity of employee credentials and background details.',

          logo: '/src/images/growthfactor.png',
        },
        {
          id: 2,
          name: 'Trade Max Academy',
          description:'credentials and background details Verify the authenticity of employee credentials and background details.',
          logo: '/src/images/trademax.png',
        },
        {
          id: 3,
          name: 'Growth Father',
          description:'credentials and background details Verify the authenticity of employee credentials and background details.',

          logo: '/src/images/growthfactor.png',
        },
        {
          id: 1,
          name: 'Growth Father',
          description:'credentials and background details Verify the authenticity of employee credentials and background details.',

          logo: '/src/images/growthfactor.png',
        },
        {
          id: 2,
          name: 'Trade Max Academy',
          description:'credentials and background details Verify the authenticity of employee credentials and background details.',
          logo: '/src/images/trademax.png',
        },
        {
          id: 3,
          name: 'Growth Father',
          description:'credentials and background details Verify the authenticity of employee credentials and background details.',

          logo: '/src/images/growthfactor.png',
        },
        {
          id: 1,
          name: 'Growth Father',
          description:'credentials and background details Verify the authenticity of employee credentials and background details.',

          logo: '/src/images/growthfactor.png',
        },
        {
          id: 2,
          name: 'Trade Max Academy',
          description:'credentials and background details Verify the authenticity of employee credentials and background details.',
          logo: '/src/images/trademax.png',
        },
        {
          id: 3,
          name: 'Growth Father',
          description:'credentials and background details Verify the authenticity of employee credentials and background details.',

          logo: '/src/images/growthfactor.png',
        },
      ];

      
    
      
      
      const totalSlides = Math.ceil(clients.length / cardsPerSlide);
      // const handlePrev = () => {
      //   setCurrentIndex(prevIndex =>
      //     prevIndex > 0 ? prevIndex - 1 : Math.floor(clients.length / cardsPerSlide)
      //   );
      // };
      // const handleNext = () => {
      //   setCurrentIndex(prevIndex =>
      //     prevIndex < Math.floor(clients.length / cardsPerSlide) ? prevIndex + 1 : 0
      //   );
      // };
      const handleDotClick = index => {
        setCurrentIndex(index);
      };

      
      useEffect(() => {
        if (isHovered) return; // Stop the interval when hovered
    
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
        }, 5000); // 5 seconds interval
    
        return () => clearInterval(interval); // Cleanup interval on unmount or hover
      }, [isHovered, totalSlides]); // Re-run effect when hover state changes
      useEffect(() => {
        const updateCardsPerSlide = () => {
          if (window.innerWidth < 768) {
            setCardsPerSlide(1); // Show 1 card on mobile
          } else {
            setCardsPerSlide(3); // Show 3 cards on larger screens
          }
        };
    
        updateCardsPerSlide();
        window.addEventListener("resize", updateCardsPerSlide);
        return () => window.removeEventListener("resize", updateCardsPerSlide);
      }, []);

    return(
        <>
         <section className=' py-8 px-9 w-full '
         onMouseEnter={() => setIsHovered(true)} // Stop auto-sliding
         onMouseLeave={() => setIsHovered(false)} // Resume auto-sliding
         >
          
            <div
              className="flex transition-transform duration-500 flex justify-evenly gap-4 md:gap-1"
              style={{ transform: `translateX(-${currentIndex * 100}%)` ,width: `${totalSlides * 100}%`, }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                  <div
                  key={slideIndex}
                  className="flex gap-4 md:gap-4 justify-evenly w-full px-2"
                  style={{ flex: "0 0 100%" }}
                >
              {clients.slice().map(card => (
                <div
                  key={card.id}
                  className="lg:w-[10%] xl:w-[10%] w-[500px] md:w-[40%] h-[300px] md:h-[384px] lg:h-[500px] xl:h-[400px] 2xl:h-[420px]  lg:text-xl flex flex-col justify-center items-center  gap-2 lg:gap-4 md:gap-3 bg-gradient-to-r from-[#FF9D00] via-[#FFC100] to-[#FF9D00] p-4 md:p-6 rounded-lg shadow-lg text-center transform transition-all duration-300 lg:mx-2 md:mx-4 hover:scale-110 hover:shadow-[0_10px_30px_rgba(255,100,0,0.7)] hover:shadow-4xl cursor-pointer car "
                >
                  <img src={card.logo} height="200px"width="200px" alt="" className="mx-auto" />
                  <h3 className=" text-center font-bold text-black mt-4 text-lg sm:text-xl md:text-xl lg:text-xl xl:text-2xl xl-leading-7 2xl:leading-10 2xl:text-3xl ">
                    {card.name}
                  </h3>
                  <p className=" text-black font-medium text-justify mt-2 text-lg sm:text-lg md:text-lg lg:text-xl xl:text-xl xl-leading-7 2xl:leading-10 2xl:text-2xl ">{card.description}</p>
                </div>
                  ))}
                  </div>
              ))}
            </div>
          
          <div className="flex justify-center items-center  mt-4 mx-4">
            {/* <div className="flex gap-5">
              <button
                onClick={handlePrev}
                className="text-4xl text-gray-600 hover:text-gray-800 transition duration-300"
              >
                <FaAngleLeft size={18} />
              </button>
              <button
                onClick={handleNext}
                className="text-4xl text-gray-600 hover:text-gray-800 transition duration-300"
              >
                <FaAngleRight size={18} />
              </button>
            </div> */}
  
            {/* Slider Dots */}
            <div className="flex justify-center items-center">
            {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-2.5 h-2.5 mx-1 rounded-full ${
                    currentIndex === index ? 'bg-yellow-500  w-4' : 'bg-gray-400'
                  }`}
                />
              ))}
            </div>
            {/* View More Button */}
  
            {/* <div className="text-right">
              <button className="bg-black text-white py-2 px-4 rounded-lg hover:bg-amber-400 transition duration-300">
                View More
              </button>
            </div> */}
          </div>
        
          </section>
          </>          
                  
       
      
    );
}

export default Clients;