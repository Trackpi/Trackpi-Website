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

  // Intersection Observers
  const [introRef, introInView] = useInView({ triggerOnce: false, threshold: 0.2 });
  const [cardsRef, cardsInView] = useInView({ triggerOnce: false, threshold: 0.2 });
  const [ctaRef, ctaInView] = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <div>
      {/* Intro Section */}
      <section className="flex flex-col items-center justify-center p-8 w-full bg-black text-white">
        <motion.div
          className="text-center"
          ref={introRef}
          variants={animationVariants}
          initial="hidden"
          animate={introInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.8 ,ease:"easeInOut"}}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-amber-500 " style={{ textShadow: '2px 2px white' }}>
            Market Positioning & Branding
          </h1>
          <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto text-white">
            Our customized market positioning strategies will elevate your brand and carve a unique identity in the marketplace.
          </p>
        </motion.div>
      </section>

      {/* Cards Section */}
      <section className="flex flex-wrap justify-center items-center p-8 bg-black text-white">
        <div ref={cardsRef} className="flex flex-wrap justify-center items-center">
          {[
            {
              icon: <FaBullhorn className="text-5xl text-yellow-500 mx-auto mb-4" />,
              title: 'Tailored Strategy',
              description: "We design personalized strategies that cater to your market's needs, ensuring impactful messaging.",
            },
            {
              icon: <FaChartLine className="text-5xl text-yellow-500 mx-auto mb-4" />,
              title: 'Data-Driven Insights',
              description: 'In-depth market research and analytics guide your decision-making effectively.',
            },
            {
              icon: <FaRegHandshake className="text-5xl text-yellow-500 mx-auto mb-4" />,
              title: 'Building Brand Loyalty',
              description: 'We focus on fostering customer loyalty and trust through valuable experiences.',
            },
          ].map((card, index) => (
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
          ))}
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
