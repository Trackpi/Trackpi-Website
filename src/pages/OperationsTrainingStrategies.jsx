import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import sales from '../images/sale.jpg';

const OperationsTrainingStrategies = () => {
  // Animation variants
  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  // Intersection Observers for different sections
  const [introRef, introInView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  const [whyChooseRef, whyChooseInView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  const [benefitsRef, benefitsInView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  const [ctaRef, ctaInView] = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <div>
      {/* Introduction Section */}
      <section className="flex flex-col items-center justify-center p-5 w-full text-black">
        <motion.div
          className="text-center"
          ref={introRef}
          variants={animationVariants}
          initial="hidden"
          animate={introInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <h1
            className="text-4xl md:text-6xl font-bold text-amber-500"
            style={{ textShadow: '2px 2px black' }}
          >
            Operations Training & Strategies
          </h1>
          <p
            style={{ textAlign: 'justify' }}
            className="text-xl mt-4 max-w-3xl mx-auto"
          >
            Transform your operations with our tailored strategies. Our training
            programs focus on optimizing processes, enhancing efficiency, and
            empowering your team to excel in dynamic environments.
          </p>
        </motion.div>
      </section>

      {/* Why Choose Us Section */}
      <section className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            ref={whyChooseRef}
            variants={animationVariants}
            initial={{ opacity: 0, x: 50 }}
            animate={whyChooseInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            <h2 className="text-3xl font-bold text-amber-500 mb-4 p-2 fw-bold display-6">
              Why Choose Us?
            </h2>
            <ul className="list-disc list-inside text-xl md:text-lg">
              <li>
                Process Optimization: Streamline operations for maximum
                efficiency.
              </li>
              <li>
                Leadership Development: Equip leaders with practical tools for
                success.
              </li>
              <li>
                Change Management: Foster adaptability and resilience in your
                workforce.
              </li>
              <li>
                Custom Solutions: Tailored training to address your unique
                challenges.
              </li>
            </ul>
          </motion.div>
          <motion.div
            ref={whyChooseRef}
            variants={animationVariants}
            initial={{ opacity: 0, x: -50 }}
            animate={whyChooseInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="flex justify-center p-4 w-100"
          >
            <img
              src={sales}
              alt="Operations Training"
              className="w-full rounded-lg shadow-lg "
            />
          </motion.div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="p-10 text-center">
        <h2 className="text-3xl font-bold text-amber-500 fw-bold display-6">
          Key Benefits of Our Training
        </h2>
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6"
          ref={benefitsRef}
        >
          {[
            {
              title: 'Enhanced Productivity',
              description:
                'Empower your team to work smarter and achieve more in less time.',
            },
            {
              title: 'Improved Communication',
              description:
                'Strengthen collaboration and create a cohesive team environment.',
            },
            {
              title: 'Increased Profitability',
              description:
                'Leverage efficient processes to maximize revenue and minimize waste.',
            },
          ].map((benefit, index) => (
            <motion.div
              key={index}
              className="p-4 bg-yellow-100 shadow-lg rounded-lg transition-all duration-300 hover:shadow-2xl transform hover:scale-105"
              variants={animationVariants}
              initial="hidden"
              animate={benefitsInView ? 'visible' : 'hidden'}
              transition={{
                duration: 0.6,
                ease: 'easeInOut',
                delay: index * 0.2,
              }}
            >
              <h3 className="font-bold text-lg text-amber-500">
                {benefit.title}
              </h3>
              <p className="mt-2 text-black-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OperationsTrainingStrategies;
