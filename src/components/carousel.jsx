
import React, { useState,useEffect } from 'react';
// import { FaAngleRight } from 'react-icons/fa6';
// import { FaAngleLeft } from 'react-icons/fa6';
import "../pages/ourTeam.css";
function Clients (){
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false); // Track hover state
    const [cardsPerSlide, setCardsPerSlide] = useState(3);
    const [filteredClients, setFilteredClients] = useState([]);
    
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
          id: 4,
          name: 'Growth Father',
          description:'credentials and background details Verify the authenticity of employee credentials and background details.',

          logo: '/src/images/growthfactor.png',
        },
        {
          id: 5,
          name: 'Trade Max Academy',
          description:'credentials and background details Verify the authenticity of employee credentials and background details.',
          logo: '/src/images/trademax.png',
        },
        {
          id: 6,
          name: 'Growth Father',
          description:'credentials and background details Verify the authenticity of employee credentials and background details.',

          logo: '/src/images/growthfactor.png',
        },
        {
          id: 7,
          name: 'Growth Father',
          description:'credentials and background details Verify the authenticity of employee credentials and background details.',

          logo: '/src/images/growthfactor.png',
        },
        {
          id: 8,
          name: 'Trade Max Academy',
          description:'credentials and background details Verify the authenticity of employee credentials and background details.',
          logo: '/src/images/trademax.png',
        },
        {
          id: 9,
          name: 'Growth Father',
          description:'credentials and background details Verify the authenticity of employee credentials and background details.',

          logo: '/src/images/growthfactor.png',
        },
      ];

      
    
      
      
      const totalSlides = Math.ceil(filteredClients.length / cardsPerSlide);
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
            setFilteredClients(clients.filter(client => client.id === 1 || client.id === 2));
          } else {
            setCardsPerSlide(3); // Show 3 cards on larger screens
            setFilteredClients(clients); // Show all clients
          }
        };
    
        updateCardsPerSlide();
        window.addEventListener("resize", updateCardsPerSlide);
        return () => window.removeEventListener("resize", updateCardsPerSlide);
      }, []);

    return(
        <>
         <section className=' py-7 px-2 md:px-9 w-full '
         onMouseEnter={() => setIsHovered(true)} // Stop auto-sliding
         onMouseLeave={() => setIsHovered(false)} // Resume auto-sliding
         >
          
            <div
              className="flex transition-transform duration-500 flex justify-evenly gap-100 md:gap-1"
              style={{ transform: `translateX(-${currentIndex  * (100 / totalSlides)}%)` ,width: `${totalSlides * 100}%`, }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                  <div
                  key={slideIndex}
                  className="flex gap-4 md:gap-4 justify-evenly w-full px-2"
                  style={{ flex: "0 0 100%" }}
                >
              {filteredClients.slice().map(card => (
                <div
                  key={card.id}
                  className="lg:w-[10%] xl:w-[10%] w-[300px] md:w-[40%] h-[200px] md:h-[384px] lg:h-[500px] xl:h-[400px] 2xl:h-[420px]  lg:text-xl flex flex-col justify-center items-center  gap-1 lg:gap-4 md:gap-3 bg-gradient-to-r from-[#FF9D00] via-[#FFC100] to-[#FF9D00]  p-6 rounded-lg shadow-lg text-center transform transition-all duration-300  lg:mx-2 md:mx-4 hover:scale-110 hover:shadow-[0_10px_30px_rgba(255,100,0,0.7)] hover:shadow-4xl cursor-pointer car "
                >
                  <img src={card.logo}  alt="" className="h-[55px] w-[120px] md:h-[130px] md:w-[200px] lg:h-[130px] lg:w-[200px] 2xl:h-[130px] 2xl:w-[200px] mx-auto" />
                  <h3 className=" text-center font-bold text-black mt-2 md:mt-4 text-[16px] sm:text-[18px] md:text-[22px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px] ">
                    {card.name}
                  </h3>
                  <p className="text-black font-medium text-justify md:mt-2 text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px]  ">{card.description}</p>
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