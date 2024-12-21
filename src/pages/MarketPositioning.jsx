import React from 'react';
import { FaBullhorn, FaChartLine, FaRegHandshake } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from 'react-bootstrap';

const MarketPositioning = () => {
  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const cardData=[
    {
      icon: <FaBullhorn className="text-6xl text-[#FFC100] mx-auto mb-4" />,
      title: 'Tailored Strategy',
      description: "We design personalized strategies that cater to your market's needs, ensuring impactful messaging.",
    },
    {
      icon: <FaChartLine className="text-6xl text-[#FFC100] mx-auto mb-4" />,
      title: 'Data-Driven Insights',
      description: 'In-depth market research and analytics guide your decision-making effectively.',
    },
    {
      icon: <FaRegHandshake className="text-6xl text-[#FFC100] mx-auto mb-4" />,
      title: 'Building Brand Loyalty',
      description: 'We focus on fostering customer loyalty and trust through valuable experiences.',
    },
  ]
  // Intersection Observers
  const [introRef, introInView] = useInView({ triggerOnce: false, threshold: 0.2 });
  const [cardsRef, cardsInView] = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <div className='bgSection'>
      {/* Intro Section */}
      <section className="flex flex-col items-center justify-center p-8 w-full ">
      <div className="mx-auto pt-20 pb-12 grid gap-[1.875rem] max-w-[1048px]">
                    <div
                        style={{ textShadow: "2px 4px  4px #0A0A0A33", color: "white" }}
                        className="text-center text-6xl font-bold"
                    >
                        Market Positioning & Branding
                    </div>
                    <div
                            style={{ color: "white"  }}
                            className="font-semibold text-2xl text-center"
                        >
                            Our customized market positioning strategies will elevate your brand and
                            carve a unique identity in the marketplace.
                        </div>
                </div>
      </section>

      {/* Cards Section */}
      <section className="container p-8 text-white">
      <div className="px-[70px] flex flex-wrap justify-center gap-[70px]">
                  {cardData.map((card,index)=>(<div style={{borderRadius:"20px", flex: "0 1 calc(50% - 35px)"}} className=" gap-10 bg-white px-10 py-[1.875rem] " key={index}>
            {card.icon}
          <h3 className="font-medium text-black text-3xl text-center w-100">{card.title}</h3>
          <p className="text-black text-[1.375rem] font-semibold text-center mt-3">{card.description}</p>
          </div>))}
        </div>
        <div ref={cardsRef} className="flex flex-wrap justify-center items-center">
          {/* {.map((card, index) => (
            <motion.div
              key={index}
              className="max-w-sm bg-white p-6 m-4 rounded-lg transition-all duration-300 hover:shadow-2xl transform hover:scale-105"
              variants={animationVariants}
              initial="hidden"
              animate={cardsInView ? 'visible' : 'hidden'}
              transition={{ duration: 0.6,ease:"easeInOut", delay: index * 0.2 }}
            >
              {card.icon}
              <h3 className="text-2xl font-semibold text-black text-center w-100">{card.title}</h3>
              <p className="text-gray-700 text-center mt-3">{card.description}</p>
            </motion.div>
          ))} */}
        </div>
      </section>

      {/* CTA Section */}
      {/* <section ref={ctaRef} className="bg-yellow-300 p-3 text-black py-10">
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl text-center mb-4">
            Ready to Elevate Your Brand?
          </h2>
          <Button className="bg-black mt-5 p-3 rounded-pill btn btn-lg text-white">
            Get in Touch
          </Button>
        </motion.div>
      </section> */}
    </div>
  );
};

export default MarketPositioning;
