
import React, { useState } from 'react';
import { FaAngleRight } from 'react-icons/fa6';
import { FaAngleLeft } from 'react-icons/fa6';

function Clients (){
    const [currentIndex, setCurrentIndex] = useState(0);
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
      ];
      const cardsPerSlide = 3;
      const handlePrev = () => {
        setCurrentIndex(prevIndex =>
          prevIndex > 0 ? prevIndex - 1 : Math.floor(clients.length / cardsPerSlide)
        );
      };
      const handleNext = () => {
        setCurrentIndex(prevIndex =>
          prevIndex < Math.floor(clients.length / cardsPerSlide) ? prevIndex + 1 : 0
        );
      };
      const handleDotClick = index => {
        setCurrentIndex(index);
      };

    return(
        <>
         <section className=' py-8 px-8 w-full '>
          
            <div
              className="flex transition-transform duration-500 flex justify-between"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {clients.map(card => (
                <div
                  key={card.id}
                  className="w-100 bg-gradient-to-r from-[#FF9D00] via-[#FFC100] to-[#FF9D00] p-6 rounded-lg shadow-lg text-center transform transition-transform duration-300 mx-4 hover:scale-110 cursor-pointer"
                >
                  <img src={card.logo} height="200px"width="200px" alt="" className="mx-auto" />
                  <h3 className="text-lg text-center font-bold text-black mt-4">
                    {card.name}
                  </h3>
                  <p className="text-black text-left mt-2">{card.description}</p>
                </div>
              ))}
            </div>
          
          <div className="flex justify-between items-center  mt-4 mx-4">
            <div className="flex gap-5">
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
            </div>
  
            {/* Slider Dots */}
            <div className="flex justify-center items-center">
              {clients.map((_, index) => (
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
  
            <div className="text-right">
              <button className="bg-black text-white py-2 px-4 rounded-lg hover:bg-amber-400 transition duration-300">
                View More
              </button>
            </div>
          </div>
        
          </section>
          </>          
                  
       
      
    );
}

export default Clients;