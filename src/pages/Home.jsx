// Created by Shalu
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import home1 from '../images/home1.png';
import home2 from '../images/home2.png';
import ConnectButtons from '../components/ConnectButtons';
import { FaAngleRight } from 'react-icons/fa6';
import { FaAngleLeft } from 'react-icons/fa6';
import logo from '../images/trackpi_logo.png';
import { Carousel } from 'react-bootstrap';
import clientLogo1 from '../images/growthfactor.png';
import clientLogo2 from '../images/trademax.png';
import HeaderBanner from '../components/HeaderBanner';

function Home() {
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
    // Group cards into sets of 4 (or 1 for mobile)
    const groups = [];
    for (let i = 0; i < cards.length; i += cardsPerGroup) {
      groups.push(cards.slice(i, i + cardsPerGroup));
    }
    setGroupedCards(groups);
  }, [cards]);

  useEffect(() => {
    // Auto-bulge effect within a slide
    const bulgeInterval = setInterval(() => {
      setBulgingCard(prev => {
        if (prev === cardsPerGroup - 1) {
          // Move to the next slide after the last card bulges
          handleNextSlide();
          return 0;
        }
        return prev + 1;
      });
    }, 2000); // Bulge interval (2 seconds)

    return () => clearInterval(bulgeInterval);
  }, [currentIndex]);

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
        titleTwo="People's Interest, Our Interest"
        description="TrackPi is a future-of-work consultancy committed to changing how the world works from business as usual to brave new work."
        brochure
        learn
        classname="bgOne"
        title="Your Strategic Growth Partner"
      />
      <section>
        <div className="text-center pt-12 pb-6">
          <h1
            className="text-6xl  font-bold text-[#FFC100]"
            style={{ textShadow: '#c3c5c7 2px 4px' }}
          >
            Real-Time Business News Updates?
          </h1>
        </div>
        <div className="relative bg-yellow-500">
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
                        className={`flex-shrink-0 w-full bg-black p-6 rounded-lg shadow-lg text-center transform transition-transform duration-500 cursor-pointer ${
                          cardIndex === bulgingCard
                            ? 'md:scale-110 md:shadow-2xl'
                            : 'scale-100'
                        }`}
                      >
                        {/* Inner wrapper for scaling contents */}
                        <div
                          className={`transform transition-transform duration-500 ${
                            cardIndex === bulgingCard
                              ? 'md:scale-105'
                              : 'scale-100'
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
                                ? 'md:text-xl'
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

      <section className="w-full h-full">
        <Row className="mt-5 px-10">
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
      <section className="my-16 w-full h-full px-10">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          {/* Text Container */}
          <div className="md:w-1/2">
            <h1 className="fw-bold text-[#FFC100] text-5xl pb-2">
              We see the challenge
            </h1>
            <p className="text-justify  text-sm md:text-lg text-[#0A0A0A]">
              We’re all wrestling with complexity. Every company, work function,
              and team now faces a tall order: to be more adaptive, strategic,
              effective, human, and equitable amidst growing uncertainty.
            </p>
          </div>

          {/* Image Container */}
          <div className="md:w-1/2 flex justify-end">
            <img
              src={home1}
              alt="Strategic Procurement"
              className="shadow-lg rounded-lg w-full max-w-[590px] h-[300px] md:h-[490px] object-cover"
            />
          </div>
        </div>
      </section>

      <section
        className=" w-full h-full flex flex-col  md:flex-row items-center px-10  py-12 relative bg2 text-black"
        style={{ backgroundColor: '#FFC100' }}
      >
        <div className="flex flex-col md:flex-row gap-4 items-center">
          {/* Image Container */}
          <div className="md:w-1/2 flex justify-start">
            <img
              src={home1}
              alt="Strategic Procurement"
              className="shadow-lg rounded-lg w-full max-w-[590px] h-[300px] md:h-[490px] object-cover"
            />
          </div>

          {/* Text Container */}
          <div className="md:w-1/2 ">
            <h1 className="md:pt-5 fw-bold text-5xl">
              We need to shift <br /> our thinking
            </h1>
            <p
              className="text-justify text-sm md:text-lg"
              style={{ marginTop: '1.5rem' }}
            >
              Organizations are human systems full of potential to navigate
              complexity, design human processes, and make meaningful change.
              But tapping into that potential requires a mindset shift, one that
              accepts that organizations aren't machines. It requires having the
              courage to say no to the status quo and yes to building
              future-ready capabilities.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-20"></section>

      <section className="px-10 py-10 w-full h-full">
        <h1 className=" font-bold text-[#FFC100] text-5xl">
          The old ways of working aren’t the <br /> only ways of working
        </h1>

        <div className="flex flex-col md:flex-row items-center gap-4">
          {/* Text Content */}
          <div className="flex flex-col  w-full md:w-1/2">
            <p className="font-bold text-lg md:text-2xl mb-4">
              We help organizations evolve new practices:
            </p>

            <p className="text-base md:text-xl mb-3">
              From struggling to attract and retain top talent To giving
              everyone a voice in shaping the organization
            </p>

            <p className="text-base md:text-xl mb-3">
              From hoarding information To making nearly all information
              transparent and accessible
            </p>

            <p className="text-base md:text-xl mb-3">
              From being bombarded with meetings and email To shedding status
              meetings and bureaucratic theater
            </p>

            <p className="text-base md:text-xl mb-3">
              From hitting bottlenecks in decision-making To enabling
              safe-to-try decisions at the edge
            </p>

            <p className="text-base md:text-xl mb-3">
              From obsessing over short-term results To choosing strategic
              priorities and explicit tradeoffs
            </p>
          </div>

          {/* Image Content */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img
              src={home2}
              alt="Strategic Procurement"
              className="shadow-lg rounded-lg w-full max-w-[590px] h-[300px] md:h-[490px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="flex justify-center px-10 py-12 h-full w-full relative mb-14 bg-yellow-500 shadow-[16px_14px_16px_rgba(0,0,0,0.2)]">
        <div className="flex flex-col gap-4 justify-center items-center text-center">
          <h1 className="text-black font-bold text-2xl md:text-3xl">
            We're Ready to Help
          </h1>

          <p className="text-md md:text-xl text-black px-4 md:px-12 text-justify">
            How we work is broken, dehumanizing, and held back by bureaucracy.
            But it can be reinvented in service of human flourishing even joy.
            These changes aren't at the expense of business outcomes. Instead,
            they're fuel for even greater ambitions. The Ready helps
            organizations accelerate that change as fast, far, and wide as
            possible.
          </p>

          <a
            href="/our-services"
            className="bg-black text-white font-semibold mt-3 px-6 py-2 rounded-full shadow-lg hover:bg-gray-800 transition duration-300"
          >
            OUR SERVICES
          </a>
        </div>
      </section>

      <ConnectButtons />
    </>
  );
}

export default Home;
