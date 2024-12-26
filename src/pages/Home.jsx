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
import './CSS/Home.css';

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
  const [cardsPerGroup, setCardsPerGroup] = useState(
    window.innerWidth < 768 ? 1 : 4
  );
  const [isPaused, setIsPaused] = useState(false);

  // Function to group cards based on the current cardsPerGroup value
  const groupCards = () => {
    const groups = [];
    for (let i = 0; i < cards.length; i += cardsPerGroup) {
      groups.push(cards.slice(i, i + cardsPerGroup));
    }
    setGroupedCards(groups);
  };

  // Initial grouping and on resize update
  useEffect(() => {
    groupCards(); // Initial grouping
  }, []);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const newCardsPerGroup = window.innerWidth < 768 ? 1 : 4;
      if (newCardsPerGroup !== cardsPerGroup) {
        setCardsPerGroup(newCardsPerGroup);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [cardsPerGroup]);

  // Bulge interval logic
  useEffect(() => {
    if (isPaused) return; // Pause interval when hovering

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
  }, [groupedCards.length, cardsPerGroup, isPaused]);

  const handleNextSlide = () => {
    setCurrentIndex(prev => (prev === groupedCards.length - 1 ? 0 : prev + 1));
    setBulgingCard(0);
  };

  const handleDotClick = index => {
    setCurrentIndex(index);
    setBulgingCard(0); // Reset bulging card on dot click
  };

  const handleMouseEnter = cardIndex => {
    setBulgingCard(cardIndex);
    setIsPaused(true); // Pause the interval on hover
  };

  const handleMouseLeave = () => {
    setBulgingCard(0);
    setIsPaused(false); // Resume the interval
  };

  const handleTouchStart = cardIndex => {
    setBulgingCard(cardIndex); // Mimic hover on touch devices
  };

  return (
    <>
      <HeaderBanner
        titleTwo="People's Interest, Our Interest"
        description="Trackpi is your business's growth partner, turning insights into action. With tailored strategies and expert guidance, we help you navigate challenges, streamline operations, and unlock new opportunities for success."
        brochure
        learn
        classname="bgOne"
        title="Your Strategic Growth Partner"
      />
      <section>
        <div className="text-center py-12  animate-fade-in">
          <h1 className="text-5xl  font-bold text-[#FFC100]">
            Real-Time Business News Updates?
          </h1>
        </div>

        <div className="relative bg-gradient-to-r from-[#FFC100] to-[#FF9D00]">
  {/* Carousel */}
  <div className="overflow-x-auto md:overflow-hidden touch-pan-x carousel-container">
    <Carousel
      interval={null} // Disable auto-scroll as we control it manually
      indicators={false}
      controls={false}
      activeIndex={currentIndex}
      onSelect={() => {}}
    >
      {groupedCards.map((group, slideIndex) => (
        <Carousel.Item key={slideIndex}>
          <div
            className={`grid carousel-grid ${cardsPerGroup === 1 ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-4'} place-content-center gap-10 py-3 px-20`}
          >
            {group.map((card, cardIndex) => (
              <div
                key={card.id}
                className={`carousel-card flex-shrink-0 w-full 2xl:h-[490px] bg-black p-6 rounded-lg shadow-lg text-center transform transition-transform duration-500 cursor-pointer ${
                  cardIndex === bulgingCard ? 'scale-110 2xl:scale-105' : 'scale-95'
                }`}
                onMouseEnter={() => handleMouseEnter(cardIndex)}
                onMouseLeave={handleMouseLeave}
                onTouchStart={() => handleTouchStart(cardIndex)}
              >
                {/* Inner wrapper for scaling contents */}
                <div
                  className={`transform transition-transform duration-500 ${
                    cardIndex === bulgingCard ? 'md:scale-105' : 'scale-100'
                  }`}
                >
                  <img
                    src={card.logo}
                    alt="Card_logo"
                    className={`mx-auto transition-transform ${
                      cardIndex === bulgingCard ? 'md:scale-110' : 'scale-100'
                    }`}
                  />
                  <h3
                    className={`mt-4 font-bold text-amber-500 transition-transform ${
                      cardIndex === bulgingCard ? 'md:text-xl' : 'text-lg'
                    }`}
                  >
                    {card.title}
                  </h3>
                  <p
                    className={`mt-2 text-white transition-transform ${
                      cardIndex === bulgingCard ? 'md:text-base' : 'text-sm'
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
          style={{
            marginTop: '3rem',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
          }}
        >
          <div className="flex animate-scroll">
            {clients.concat(clients).map((client, index) => (
              <Col xs={6} md={2} key={index}>
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
          animate={{ y: isInView1 ? 10 : 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <div className="md:w-1/2">
            <motion.h1
              className="font-bold text-[#FFC100] text-3xl xl:text-5xl 2xl:text-6xl pb-3"
              animate={{ x: isInView1 ? 10 : 0 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            >
              We see the challenge
            </motion.h1>
            <motion.p
              className="text-justify text-sm sm:text-lg md:text-2xl xl:text-xl xl:leading-7 2xl:leading-10 2xl:text-2xl text-[#0A0A0A]"
              animate={{ x: isInView1 ? 5 : 0 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            >
              Without a consultant, businesses often face challenges like
              inefficient operations, poor decision making, and missed
              opportunities. Limited expertise can lead to stagnant growth and
              difficulty adapting to market changes. Teams may lack clear
              direction, and risks or compliance issues can go unnoticed,
              resulting in costly mistakes. A consultant’s guidance will help a
              businesses to overcome these obstacles and unlock their full
              potential. we are here for you Trackpi is the best Business
              Consulting Firms in Kerala. contact us
            </motion.p>
          </div>
          <div className="md:w-1/2 flex justify-end">
            <motion.img
              src={home1}
              alt="Strategic Procurement"
              className="shadow-lg rounded-lg w-full h-[300px] md:h-[390px] 2xl:h-[490px] object-cover"
              animate={{ scale: isInView1 ? 1.02 : 1 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </section>

      <section className="mt-28 w-full px-6 lg:px-20 xl:px-24 2xl:px-32 mx-auto py-20 bg-[#FFC100] text-black bg2 section2">
        <motion.div
          className="flex flex-col md:flex-row gap-12 lg:gap-20 xl:gap-20 2xl:gap-32 items-center"
          animate={{ x: isInView2 ? 10 : 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <div className="md:w-1/2 flex justify-start">
            <motion.img
              src={home1}
              alt="Strategic Procurement"
              className="shadow-lg rounded-lg w-full h-[300px] md:h-[390px] 2xl:h-[490px] object-cover"
              animate={{ scale: isInView2 ? 1.02 : 1 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            />
          </div>
          <div className="md:w-1/2">
            <motion.h1
              className="font-bold text-3xl xl:leading-tight xl:text-5xl 2xl:text-6xl pb-3"
              animate={{ y: isInView2 ? 10 : 0 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            >
              We need to shift our thinking
            </motion.h1>
            <motion.p
              className="text-justify text-sm sm:text-lg md:text-2xl xl:text-xl xl:leading-7 2xl:leading-10 2xl:text-2xl text-[#0A0A0A]"
              animate={{ y: isInView2 ? 5 : 0 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            >
              Business are always made up of people, with a wealth ofideas,
              potential to address issues,find new ways and make genuine
              headway. But unlocking that potential requires new thinking.
              Businesses are not machines; they are living systen that grow and
              evolve. That’s where it’s so vital to have a consultant. A
              consultant adds new perspectives, supports your stepping outside
              of old patterns, and assists you in creating capacities and
              capabilities for the future. Properly done, your business will
              emerge stronger, more innovative, and prepared for anything{' '}
            </motion.p>
          </div>
        </motion.div>
      </section>
      <section className="relative z-20"></section>
      <section className="px-6 lg:px-20 xl:px-24 2xl:px-32 mx-auto w-full h-full mt-28 section3">
        <motion.div
          className="flex flex-col md:flex-row gap-12 lg:gap-20 xl:gap-20 2xl:gap-32 items-center"
          animate={{ y: isInView3 ? 10 : 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <div className="flex flex-col w-full md:w-1/2">
            <motion.h1
              className="font-bold text-[#FFC100] text-5xl 2xl:text-7xl"
              animate={{ y: isInView3 ? 5 : 0 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            >
              The old ways of working aren’t the only ways of working
            </motion.h1>
            <motion.p
              className="text-base md:text-xl 2xl:text-2xl mt-8 mb-3 text-justify"
              animate={{ x: isInView3 ? 5 : 0 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            >
              The old ways of working are the only ways of working Transform
              from the outdated business strategies and step into the cutting
              edge Business era has changed rapidly, get updated with the
              futuristic strategies One solution for all to tailored one to one
              business strategies to success Business strategy at your
              fingertips with TrackPi’ expert panel of consultants{' '}
            </motion.p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <motion.img
              src={home2}
              alt="Strategic Procurement"
              className="shadow-lg rounded-lg w-full h-[300px] md:h-[390px] 2xl:h-[490px] object-cover"
              animate={{ scale: isInView3 ? 1.02 : 1 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </section>

      {/* <section className="px-6 lg:px-20 xl:px-24 2xl:px-32 mx-auto w-full h-full mt-28 section3">
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
    </section> */}
      <div className="shadow-bottom">
        <section className="flex justify-center px-6 lg:px-20 xl:px-24 2xl:px-32 mx-auto pt-24 pb-16 h-full w-full relative mt-20 mb-12 bg-[#FFC100] bgSection">
          <div className="flex flex-col gap-2 justify-center items-center text-center">
            <h1 className="text-black font-bold text-3xl xl:leading-tight xl:text-5xl 2xl:text-6xl pb-2">
              We're Ready to Help
            </h1>
            <p className="text-center text-sm sm:text-lg md:text-2xl xl:text-xl xl:leading-7 2xl:leading-10 2xl:text-3xl text-black">
              At Trackpi, we’re committed to your success. Our expert solutions
              and strategies are designed to drive growth, enhance efficiency,
              and help your business thrive in a competitive world. Let’s
              achieve your goals together.
            </p>
            <Link to="/our-services">
              <button
                className=" mt-3 bg-white no-underline text-black font-semibold  rounded-full shadow-lg hover:bg-gray-800 
                 px-8 py-2 md:px-10 md:py-3 lg:py-4   xl:py-12 2xl:px-12   
                  text-sm  md:text-lg  lg:text-xl  xl:text-xl  2xl:text-2xl 
                   transition duration-300"
              >
                Our Services
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
