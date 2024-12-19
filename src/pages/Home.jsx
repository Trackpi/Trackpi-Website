// Created by Shalu
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useInView } from '../components/UseInView';
import { Link } from 'react-router-dom';
import home1 from '../images/home1.png';
import home2 from '../images/home2.png';
import ConnectButtons from '../components/ConnectButtons';

import logo from '../images/trackpi_logo.png';
import { Carousel } from 'react-bootstrap';
import clientLogo1 from '../images/growthfactor.png';
import clientLogo2 from '../images/trademax.png';
import HeaderBanner from '../components/HeaderBanner';

function Home() {
  const isInView1 = useInView({ selector: '.section1' });
  const isInView2 = useInView({ selector: '.section2' });
  const isInView3 = useInView({ selector: '.section3' });

  const cards = [
    {
      id: 1,
      title: 'We See The Challenge',
      description:
        "We're all wrestling with complexity.Every company, work function, and team now facesa tall order",
      logo: logo,
    },
    {
      id: 2,
      title: 'We See The Challenge',
      description:
        "We're all wrestling with complexity.Every company, work function, and team now facesa tall order",
      logo: logo,
    },
    {
      id: 3,
      title: 'We See The Challenge',
      description:
        "We're all wrestling with complexity.Every company, work function, and team now facesa tall order",
      logo: logo,
    },
    {
      id: 4,
      title: 'We See The Challenge',
      description:
        "We're all wrestling with complexity.Every company, work function, and team now facesa tall order",
      logo: logo,
    },
    {
      id: 5,
      title: 'We See The Challenge',
      description:
        "We're all wrestling with complexity.Every company, work function, and team now facesa tall order",
      logo: logo,
    },
    {
      id: 6,
      title: 'We See The Challenge',
      description:
        "We're all wrestling with complexity.Every company, work function, and team now facesa tall order",
      logo: logo,
    },
    {
      id: 7,
      title: 'We See The Challenge',
      description:
        "We're all wrestling with complexity.Every company, work function, and team now facesa tall order",
      logo: logo,
    },
    {
      id: 8,
      title: 'We See The Challenge',
      description:
        "We're all wrestling with complexity.Every company, work function, and team now facesa tall order",
      logo: logo,
    },
    {
      id: 9,
      title: 'We See The Challenge',
      description:
        "We're all wrestling with complexity.Every company, work function, and team now facesa tall order",
      logo: logo,
    },
    {
      id: 10,
      title: 'We See The Challenge',
      description:
        "We're all wrestling with complexity.Every company, work function, and team now facesa tall order",
      logo: logo,
    },
    {
      id: 11,
      title: 'We See The Challenge',
      description:
        "We're all wrestling with complexity.Every company, work function, and team now facesa tall order",
      logo: logo,
    },
    {
      id: 12,
      title: 'We See The Challenge',
      description:
        "We're all wrestling with complexity.Every company, work function, and team now facesa tall order",
      logo: logo,
    },
  ];
  const clients = [
    { id: 1, logo: clientLogo1 },
    { id: 2, logo: clientLogo2 },
    { id: 3, logo: clientLogo1 },
    { id: 4, logo: clientLogo2 },
    { id: 5, logo: clientLogo1 },
    { id: 6, logo: clientLogo2 },
    { id: 7, logo: clientLogo1 },
    { id: 8, logo: clientLogo2 },
    { id: 9, logo: clientLogo1 },
    { id: 10, logo: clientLogo2 },
    { id: 11, logo: clientLogo1 },
    { id: 12, logo: clientLogo2 },
    { id: 13, logo: clientLogo1 },
    { id: 14, logo: clientLogo2 },
  ];

  // const groupedCards = [];
  // for (let i = 0; i < cards.length; i += 4) {
  //   groupedCards.push(cards.slice(i, i + 4));
  // }
  // const [currentIndex, setCurrentIndex] = useState(0);

  // const handleDotClick = index => {
  //   setCurrentIndex(index);
  // };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [bulgingCard, setBulgingCard] = useState(0);
  const [groupedCards, setGroupedCards] = useState([]);
  const cardsPerGroup = window.innerWidth < 768 ? 1 : 4; // Responsive: 1 card for mobile, 4 for desktop
  useEffect(() => {
    const groups = [];
    for (let i = 0; i < cards.length; i += cardsPerGroup) {
      groups.push(cards.slice(i, i + cardsPerGroup));
    }
    setGroupedCards(groups);
  }, []);

  useEffect(() => {
    const bulgeInterval = setInterval(() => {
      setBulgingCard(prev => {
        if (prev === cardsPerGroup - 1) {
          // Move to the next slide after the last card bulges
          setCurrentIndex(prevIndex =>
            prevIndex === groupedCards.length - 1 ? 0 : prevIndex + 1
          );
          return 0;
        }
        return prev + 1;
      });
    }, 2000); // Bulge interval (2 seconds)

    return () => clearInterval(bulgeInterval);
  }, [groupedCards.length, cardsPerGroup]);

  const handleNextSlide = () => {
    setCurrentIndex(prev => (prev === groupedCards.length - 1 ? 0 : prev + 1));
    setBulgingCard(0);
  };

  const handleDotClick = index => {
    setCurrentIndex(index);
    setBulgingCard(0); // Reset bulging card on dot click
  };

  return (
    <>
      <HeaderBanner
        title="People's Interest, Our Interest"
        description="TrackPi is a future-of-work consultancy committed to changing how the world works from business as usual to brave new work."
        brochure
        learn
        classname="bgOne"
        titleTwo="Your Strategic Growth Partner"
      />
      <section>
        <div className="text-center py-12  animate-fade-in">
          <h1 className="text-5xl  font-bold text-[#FFC100]">
            Real-Time Business News Updates?
          </h1>
        </div>
        <div className="relative bg-gradient-to-r from-[#FFC100]  to-[#FF9D00]">
          {/* Carousel */}
          <div className="overflow-x-auto md:overflow-hidden touch-pan-x">
            <Carousel
              interval={null}
              indicators={false}
              controls={false}
              activeIndex={currentIndex}
              onSelect={() => {}} // No-op to prevent React-Bootstrap interference
            >
              {groupedCards.map((group, slideIndex) => (
                <Carousel.Item key={slideIndex}>
                  <div
                    className={`grid ${
                      cardsPerGroup === 1
                        ? 'grid-cols-1'
                        : 'grid-cols-1 md:grid-cols-4'
                    } place-content-center gap-12 py-3 px-10  `}
                  >
                    {group.map((card, cardIndex) => (
                      <div
                        key={card.id}
                        className={`flex-shrink-0 w-full 2xl:h-[490px] bg-black p-6 rounded-lg shadow-lg text-center transform transition-transform duration-500 cursor-pointer ${
                          cardIndex === bulgingCard
                            ? 'md:scale-110'
                            : 'scale-100'
                        }`}
                      >
                        {/* Inner wrapper for scaling contents */}
                        <div
                          className={`transform transition-transform duration-500 ${
                            cardIndex === bulgingCard
                              ? 'md:scale-105 '
                              : 'scale-100 '
                          }`}
                        >
                          <img
                            src={card.logo}
                            alt="Card_logo"
                            className={`mx-auto transition-transform ${
                              cardIndex === bulgingCard
                                ? 'md:scale-110'
                                : 'scale-100'
                            }`}
                          />
                          <h3
                            className={`mt-4 font-bold text-amber-500 transition-transform ${
                              cardIndex === bulgingCard
                                ? 'md:text-xl '
                                : 'text-lg'
                            }`}
                          >
                            {card.title}
                          </h3>
                          <p
                            className={`mt-2 text-white transition-transform ${
                              cardIndex === bulgingCard
                                ? 'md:text-base'
                                : 'text-sm'
                            }`}
                          >
                            {card.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>

          {/* Slide Dots */}
          <div className="absolute top-[110%] left-1/2 transform -translate-x-1/2 hidden md:flex justify-center items-center space-x-2">
            {groupedCards.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'bg-yellow-500 w-4' : 'bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-right sm:text-right mt-4 mx-8">
          <button className="bg-black text-white py-2 px-4 rounded-lg hover:bg-amber-400 transition duration-300">
            View More
          </button>
        </div>
      </section>

      <section className="w-full h-full mt-20">
        <Row className="mt-5 text-center">
          <h1 className="text-[#FFC100] font-extrabold">OUR CLIENTS</h1>
          <h4 className="fw-bold text-[#0A0A0A]">
            We’re fortunate to work with the best
          </h4>
        </Row>

        {/* Client Logos Section */}
        <Row
          className="flex justify-center items-center bg-gradient-to-r from-[#FF9D00] via-[#FFC100] to-[#FF9D00] py-2"
          style={{ marginTop: '3rem' }}
        >
          <div className="flex  animate-scroll">
            {clients.map((client, index) => (
              <Col xs={6} md={2} key={client.id}>
                <img
                  className="sm:w-50 w-full h-[85px] object-contain"
                  src={client.logo}
                  alt={`Client ${index + 1}`}
                />
              </Col>
            ))}
          </div>
        </Row>
      </section>

      <section className="mt-28 w-full px-6 lg:px-20 xl:px-24 2xl:px-32 mx-auto section1">
        <motion.div
          className="flex flex-col md:flex-row gap-12 lg:gap-20 xl:gap-20 2xl:gap-32 items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView1 ? 1 : 0, y: isInView1 ? 0 : 50 }}
          transition={{ duration: 1 }}
        >
          {/* Text and Image Content */}
          <div className="md:w-1/2">
            <motion.h1
              className="font-bold text-[#FFC100] text-3xl xl:text-5xl 2xl:text-6xl pb-2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: isInView1 ? 1 : 0, x: isInView1 ? 0 : -50 }}
              transition={{ duration: 1 }}
            >
              We see the challenge
            </motion.h1>
            <motion.p
              className="text-justify text-sm sm:text-lg md:text-2xl xl:text-xl xl:leading-7 2xl:leading-10 2xl:text-3xl text-[#0A0A0A]"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: isInView1 ? 1 : 0, x: isInView1 ? 0 : -50 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              We’re all wrestling with complexity. Every company, work function,
              and team now faces a tall order: to be more adaptive, strategic,
              effective, human, and equitable amidst growing uncertainty.
            </motion.p>
          </div>
          <div className="md:w-1/2 flex justify-end">
            <motion.img
              src={home1}
              alt="Strategic Procurement"
              className="shadow-lg rounded-lg w-full h-[300px] md:h-[390px] 2xl:h-[690px] object-cover"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: isInView1 ? 1 : 0,
                scale: isInView1 ? 1 : 0.9,
              }}
              transition={{ duration: 1 }}
            />
          </div>
        </motion.div>
      </section>

      <section className="mt-28 w-full px-6 lg:px-20 xl:px-24 2xl:px-32 mx-auto py-20 bg-[#FFC100] text-black bg2 section2">
        <motion.div
          className="flex flex-col md:flex-row gap-12 lg:gap-20 xl:gap-20 2xl:gap-32 items-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: isInView2 ? 1 : 0, x: isInView2 ? 0 : 50 }}
          transition={{ duration: 1 }}
        >
          {/* Image and Text Content */}
          <div className="md:w-1/2 flex justify-start">
            <motion.img
              src={home1}
              alt="Strategic Procurement"
              className="shadow-lg rounded-lg w-full h-[300px] md:h-[390px] 2xl:h-[690px] object-cover"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: isInView2 ? 1 : 0,
                scale: isInView2 ? 1 : 0.9,
              }}
              transition={{ duration: 1 }}
            />
          </div>
          <div className="md:w-1/2">
            <motion.h1
              className="font-bold text-3xl xl:leading-tight xl:text-5xl 2xl:text-6xl pb-2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: isInView2 ? 1 : 0, x: isInView2 ? 0 : 50 }}
              transition={{ duration: 1 }}
            >
              We need to shift our thinking
            </motion.h1>
            <motion.p
              className="text-justify text-sm sm:text-lg md:text-2xl xl:text-xl xl:leading-7 2xl:leading-10 2xl:text-3xl text-[#0A0A0A]"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: isInView2 ? 1 : 0, x: isInView2 ? 0 : 50 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Organizations are human systems full of potential to navigate
              complexity, design human processes, and make meaningful change.
              But tapping into that potential requires a mindset shift, one that
              accepts that organizations aren't machines. It requires having the
              courage to say no to the status quo and yes to building
              future-ready capabilities.
            </motion.p>
          </div>
        </motion.div>
      </section>


      <section className="relative z-20"></section>

      <section className="px-6 lg:px-20 xl:px-24 2xl:px-32 mx-auto w-full h-full mt-28 section3">
      <motion.h1
        className="font-bold text-[#FFC100] text-5xl 2xl:text-7xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: isInView3 ? 1 : 0, y: isInView3 ? 0 : -50 }}
        transition={{ duration: 1 }}
      >
        The old ways of working aren’t the <br /> only ways of working
      </motion.h1>

      <motion.div
        className="flex flex-col md:flex-row gap-12 lg:gap-20 xl:gap-20 2xl:gap-32 items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isInView3 ? 1 : 0, y: isInView3 ? 0 : 50 }}
        transition={{ duration: 1 }}
      >
        {/* Text Content */}
        <div className="flex flex-col w-full md:w-1/2">
          <motion.p
            className="font-bold text-lg md:text-2xl 2xl:text-4xl mb-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isInView3 ? 1 : 0, x: isInView3 ? 0 : -50 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            We help organizations evolve new practices:
          </motion.p>

          <motion.p
            className="text-base md:text-xl 2xl:text-3xl mb-3"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isInView3 ? 1 : 0, x: isInView3 ? 0 : -50 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            From struggling to attract and retain top talent To giving
            everyone a voice in shaping the organization
          </motion.p>

          <motion.p
            className="text-base md:text-xl 2xl:text-3xl mb-3"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isInView3 ? 1 : 0, x: isInView3 ? 0 : -50 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            From hoarding information To making nearly all information
            transparent and accessible
          </motion.p>

          <motion.p
            className="text-base md:text-xl 2xl:text-3xl mb-3"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isInView3 ? 1 : 0, x: isInView3 ? 0 : -50 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            From being bombarded with meetings and email To shedding status
            meetings and bureaucratic theater
          </motion.p>

          <motion.p
            className="text-base md:text-xl 2xl:text-3xl mb-3"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isInView3 ? 1 : 0, x: isInView3 ? 0 : -50 }}
            transition={{ duration: 1, delay: 1 }}
          >
            From hitting bottlenecks in decision-making To enabling
            safe-to-try decisions at the edge
          </motion.p>

          <motion.p
            className="text-base md:text-xl 2xl:text-3xl mb-3"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isInView3 ? 1 : 0, x: isInView3 ? 0 : -50 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            From obsessing over short-term results To choosing strategic
            priorities and explicit tradeoffs
          </motion.p>
        </div>

        {/* Image Content */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <motion.img
            src={home2}
            alt="Strategic Procurement"
            className="shadow-lg rounded-lg w-full h-[300px] md:h-[390px] 2xl:h-[690px] object-cover"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isInView3 ? 1 : 0, scale: isInView3 ? 1 : 0.9 }}
            transition={{ duration: 1 }}
          />
        </div>
      </motion.div>
    </section>

      <div className="shadow-bottom">
        <section className="flex justify-center px-6 lg:px-20 xl:px-24 2xl:px-32 mx-auto py-16 h-full w-full relative mt-20 mb-12 bg-[#FFC100] bg3">
          <div className="flex flex-col gap-2 justify-center items-center text-center">
            <h1 className="text-black font-bold text-3xl xl:leading-tight xl:text-5xl 2xl:text-6xl pb-2">
              We're Ready to Help
            </h1>
            <p className="text-center text-sm sm:text-lg md:text-2xl xl:text-xl xl:leading-7 2xl:leading-10 2xl:text-3xl text-black">
              How we work is broken, dehumanizing, and held back by bureaucracy.
              But it can be reinvented in service of human flourishing even joy.
              These changes aren't at the expense of business outcomes. Instead,
              they're fuel for even greater ambitions. The Ready helps
              organizations accelerate that change as fast, far, and wide as
              possible.
            </p>
            <Link to="/our-services">
              <button
                className="bg-black no-underline text-white font-semibold mt-3 px-4 py-2 text-sm 
        md:px-6 md:py-3 md:text-base lg:px-8 lg:py-4 lg:text-lg xl:px-10 xl:py-5 xl:text-xl 
        2xl:px-12 2xl:py-6 2xl:text-2xl rounded-full shadow-lg hover:bg-gray-800 
        transition duration-300"
              >
                OUR SERVICES
              </button>
            </Link>
          </div>
        </section>
      </div>

      <ConnectButtons />
    </>
  );
}

export default Home;
