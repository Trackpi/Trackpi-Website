import React from 'react';
import { Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const SalesTrainingStrategies = () => {
  const options = { threshold: 0.1 };

  const [refSalesTraining, inViewSalesTraining] = useInView(options);
  const [refFeatures, inViewFeatures] = useInView(options);
  const [refCTA, inViewCTA] = useInView(options);

  const features = [
    {
      title: 'Customized Training',
      description:
        'Our customized training programs are tailored to meet the unique challenges and objectives of your business. We work closely with your team to identify skill gaps, improve communication, and build confidence. Through hands-on sessions and real-life scenarios, your team learns practical sales techniques that are immediately applicable. Our goal is to ensure that each training session contributes to measurable improvements in your sales performance.',
      imageUrl: "",
    },
    {
      title: 'Expert Guidance',
      description:
        'Led by industry professionals with years of experience in sales and management, our training sessions offer insights that go beyond textbooks. We focus on instilling a strategic mindset, teaching negotiation tactics, and sharpening problem-solving skills. With interactive workshops and individual coaching, participants learn from experts who have a proven track record of success. This guidance ensures your team is equipped to handle high-stakes deals with confidence and professionalism.',
      imageUrl: "",
    },
    {
      title: 'Measurable Results',
      description:
        'Our training is designed with a results-oriented approach, so you can track your team’s progress and see tangible outcomes. We provide tools and techniques that help in measuring success, setting achievable targets, and analyzing performance improvements over time. By focusing on measurable results, we ensure that every participant understands the impact of their growth, enabling your organization to maintain a continuous upward trajectory in sales performance.',
      imageUrl: "",
    },
  ];

  return (
    <div>
      <section
        ref={refSalesTraining}
        className="flex justify-center items-center  p-5 w-full"
      >
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inViewSalesTraining ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-5xl md:text-7xl hover:text-sky-500 home-text">
            Sales Training Strategies
          </h1>
          <p className="text-lg text-center mt-3 max-w-3xl">
            Our sales training strategies are designed to equip your team with
            the skills and insights they need to succeed in a competitive
            market. With expert guidance and interactive sessions, we focus on
            practical solutions and growth-oriented techniques.
          </p>
        </motion.div>
      </section>

      <section ref={refFeatures} className="bg-gray-100 py-10">
        {features.map((feature, index) => {
          const [ref, inView] = useInView({ threshold: 0.1 });

          return (
            <motion.div
              key={index}
              ref={ref}
              className={`flex flex-col md:flex-row items-center p-8 ${
                index % 2 === 0 ? '' : 'md:flex-row-reverse'
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={
                inView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }
              }
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="md:w-1/2 p-4">
                <img
                  src="https://via.placeholder.com/500x300"
                  alt={feature.title}
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2 p-4">
                <h2 className="text-2xl font-bold">{feature.title}</h2>
                <p className="mt-3 text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          );
        })}
      </section>

      <section ref={refCTA} className="bg-yellow-300 p-3 text-black py-10">
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inViewCTA ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-4">
            Ready to Elevate Your Sales Team?
          </h2>
          <Button className="bg-black mt-5 p-3 rounded-pill btn btn-lg">
            Get in Touch
          </Button>
        </motion.div>
      </section>
    </div>
  );
};

export default SalesTrainingStrategies;