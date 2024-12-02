import React from 'react';
import { FaBullhorn, FaChartLine, FaRegHandshake } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
      <section className="flex flex-col items-center justify-center p-8 w-full">
        <motion.div
          className="text-center"
          ref={introRef}
          variants={animationVariants}
          initial="hidden"
          animate={introInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-amber-500 hover:text-sky-500">
            Market Positioning & Branding
          </h1>
          <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto text-gray-700">
            Our customized market positioning strategies will elevate your brand and carve a unique identity in the
            marketplace. We focus on the power of differentiation, ensuring your products stand out and resonate with
            your target audience.
          </p>
        </motion.div>
      </section>

      {/* Cards Section */}
      <section className="flex flex-wrap justify-center items-center p-8 bg-yellow-100">
        <div ref={cardsRef} className="flex flex-wrap justify-center items-center">
          {[
            {
              icon: <FaBullhorn className="text-5xl text-yellow-500 mx-auto mb-4" />,
              title: 'Tailored Strategy',
              description:
                'We design personalized strategies that cater specifically to your market\'s needs, ensuring that your brand\'s message is impactful and long-lasting.',
            },
            {
              icon: <FaChartLine className="text-5xl text-yellow-500 mx-auto mb-4" />,
              title: 'Data-Driven Insights',
              description:
                'Our approach integrates in-depth market research and analytics to guide decision-making, helping you understand your target audience and market trends.',
            },
            {
              icon: <FaRegHandshake className="text-5xl text-yellow-500 mx-auto mb-4" />,
              title: 'Building Brand Loyalty',
              description:
                'We focus on building long-term relationships with your customers by consistently delivering valuable experiences that enhance customer loyalty and trust in your brand.',
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              className="max-w-sm bg-white p-6 m-4 rounded-lg transition-all duration-300 hover:shadow-2xl transform hover:scale-105"
              variants={animationVariants}
              initial="hidden"
              animate={cardsInView ? 'visible' : 'hidden'}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {card.icon}
              <h3 className="text-2xl font-semibold text-black-600 text-center w-100">{card.title}</h3>
              <p className="text-gray-700 text-center mt-3">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="flex justify-center items-center p-8 bg-yellow-50">
        <motion.div
          ref={ctaRef}
          className="max-w-4xl mx-auto text-center"
          variants={animationVariants}
          initial="hidden"
          animate={ctaInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold text-yellow-600">Building a Stronger Brand Identity</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-700">
            Our comprehensive branding techniques focus on visual storytelling and establishing a consistent brand
            presence across all channels. The goal is to foster brand loyalty while positioning you as a thought leader
            in your industry.
          </p>

          <div className="md:w-1/2 p-4 w-100">
          <img
            src="https://via.placeholder.com/800x400"
            alt="Branding Image"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          </div>
          
        </motion.div>
      </section>
    </div>
  );
};

export default MarketPositioning;
