// Created by Shalu
import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Wavify from 'react-wavify';
import ConnectButtons from '../components/ConnectButtons';
import { FaAngleRight } from 'react-icons/fa6';
import { FaAngleLeft } from 'react-icons/fa6';
import logo from '../images/trackpi_logo.png';
import { Carousel } from 'react-bootstrap';

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
  ];
  const clients = [
    {
      id: 1,
      name: 'Growth Partners',
      logo: 'https://cdn.prod.website-files.com/63fce6fc122b4d8b036757a0/63ff1b392159be09bdd1f1a6_airbnb.svg',
    },
    {
      id: 2,
      name: 'Talent Boosters',
      logo: 'https://cdn.prod.website-files.com/63fce6fc122b4d8b036757a0/64075cdef7a9a07a16cc0818_arcadis-logo.svg',
    },
    {
      id: 3,
      name: 'Strategic Thinkers',
      logo: 'https://cdn.prod.website-files.com/63fce6fc122b4d8b036757a0/64076123e7fd47d10ab57ad6_bloomin%20(1).png',
    },
  ];
  const cardsPerSlide = 4; // Number of cards to display per slide

  // const options = { threshold: 0.1 };

  // const [refFirstSection, inViewFirstSection] = useInView(options);
  // const [refSecondSection, inViewSecondSection] = useInView(options);
  // const [refThirdSection, inViewThirdSection] = useInView(options);
  // const [refLast, inViewLast] = useInView(options);

  // const TypingEffect = ({ text, delay = 0.1 }) => {
  //   // Split text into individual characters
  //   const splitText = text.split('').map((char, index) => (
  //     <span
  //       key={index}
  //       initial={{ opacity: 0 }}
  //       animate={{ opacity: 1 }}
  //       transition={{
  //         delay: index * delay,
  //         repeat: Infinity,
  //         repeatType: 'reverse',
  //         duration: 1.5,
  //       }}
  //     >
  //       {char}
  //     </span>
  //   ));

  //   return (
  //     <h1 className="text-5xl md:text-7xl  home-text working_heading mb-5">
  //       {splitText}
  //     </h1>
  //   );
  // };

  const groupedCards = [];
  for (let i = 0; i < cards.length; i += 4) {
    groupedCards.push(cards.slice(i, i + 4));
  }
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle dot click
  const handleDotClick = index => {
    setCurrentIndex(index); // Set the current slide index when a dot is clicked
  };

  return (
    <>
      <section className="flex justify-center items-center p-3 w-full h-screen home_section bg1 relative">
        <div className="flex flex-col items-center z-10">
          {/* <TypingEffect text="Reinvent Your Organization" delay={0.05} /> */}

          <h1 className="text-5xl md:text-7xl  home-text working_heading mb-5">
            Reinvent Your Organization
          </h1>
          <p
            className="font-semibold text-md md:text-2xl working_subheading text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          >
            TrackPi is a future-of-work consultancy committed to changing <br />{' '}
            how the world works from business as usual to brave new work.
          </p>
          <div
            className="flex justify-center items-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button className="bg-black mt-5 p-3 rounded-pill fw-bold ">
              LEARN HOW WE CAN HELP
            </Button>
          </div>
        </div>
      </section>
      {/* <section>
        <div className="text-center pt-12 pb-6">
          <h1
            className="text-4xl font-bold text-yellow-400"
            style={{ textShadow: '#c3c5c7 2px 2px' }}
          >
            Real-Time Business News Updates?
          </h1>
        </div>
        <div className="bg-yellow-500 py-8">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {cards.map(card => (
              <div
                key={card.id}
                className="w-80 bg-black p-6 rounded-lg shadow-lg text-center transform transition-transform duration-300 mx-4 hover:scale-110 cursor-pointer"
              >
                <img src={card.logo} alt="Trackpi_logo" className="mx-auto" />
                <h3 className="text-lg font-bold text-amber-500 mt-4">
                  {card.title}
                </h3>
                <p className="text-white mt-2">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center mt-4 mx-4">
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

          <div className="flex justify-center items-center">
            {cards.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-2.5 h-2.5 mx-1 rounded-full ${
                  currentIndex === index ? 'bg-yellow-500  w-4' : 'bg-gray-400'
                }`}
              />
            ))}
          </div>

          <div className="text-right">
            <button className="bg-black text-white py-2 px-4 rounded-lg hover:bg-amber-400 transition duration-300">
              View More
            </button>
          </div>
        </div>
      </section> */}
      <section>
        <div className="text-center pt-12 pb-6">
          <h1
            className="text-4xl font-bold text-yellow-400"
            style={{ textShadow: '#c3c5c7 2px 2px' }}
          >
            Real-Time Business News Updates?
          </h1>
        </div>

        <div className="relative bg-yellow-500">
          {/* Carousel */}
          <Carousel
            interval={null}
            indicators={false}
            controls={false}
            activeIndex={currentIndex}
            onSelect={selectedIndex => setCurrentIndex(selectedIndex)} // Update currentIndex on carousel change
          >
            {groupedCards.map((group, slideIndex) => (
              <Carousel.Item key={slideIndex}>
                <div className="grid grid-cols-1 md:grid-cols-4  place-content-center gap-4 px-4 py-4">
                  {group.map(card => (
                    <div
                      key={card.id}
                      className="bg-black p-6 rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:scale-110 cursor-pointer"
                    >
                      <img
                        src={card.logo}
                        alt="Trackpi_logo"
                        className="mx-auto"
                      />
                      <h3 className="text-lg font-bold text-amber-500 mt-4">
                        {card.title}
                      </h3>
                      <p className="text-white mt-2">{card.description}</p>
                    </div>
                  ))}
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
          <div className="flex">
            {/* Custom Arrows */}

            <div className="flex justify-between items-center mt-4">
              <button
                className="absolute  right-[75rem] top-[110%]  transform -translate-y-1/2 z-10  p-2 rounded-full "
                onClick={() =>
                  setCurrentIndex(prev =>
                    prev === groupedCards.length - 1 ? 0 : prev + 1
                  )
                }
              >
                <FaAngleRight size={24} color="grey" />
              </button>
              <button
                className="absolute  left-12 top-[110%] transform -translate-y-1/2 z-10  p-2 rounded-full "
                onClick={() =>
                  setCurrentIndex(prev =>
                    prev === 0 ? groupedCards.length - 1 : prev - 1
                  )
                }
              >
                <FaAngleLeft size={24} color="grey" />
              </button>
            </div>
            {/* Dots */}
            <div className="absolute top-[110%] left-1/2 transform -translate-x-1/2 flex justify-center items-center space-x-2">
              {groupedCards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)} // Change to the corresponding slide
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === index ? 'bg-yellow-500 w-4' : 'bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* View More Button */}
        <div className="text-right mt-4 mx-8">
          <button className="bg-black text-white py-2 px-4 rounded-lg hover:bg-amber-400 transition duration-300">
            View More
          </button>
        </div>
      </section>

     

      <section className="w-full h-full">
        <Row className="text-yellow-500 mt-5 p-5">
          <h1>OUR CLIENTS</h1>
          <h4 className="fw-bold text-black">
            We’re fortunate to work with the best
          </h4>
        </Row>

        {/* Client Logos Section */}
        <Row className="flex justify-center items-center bg-yellow-500 py-5">
          <Col xs={6} md={2} className="client-logo">
            <img
              className="sm:w-50"
              src="https://cdn.prod.website-files.com/63fce6fc122b4d8b036757a0/63ff1b392159be09bdd1f1a6_airbnb.svg"
              alt="Client 1"
            />
          </Col>
          <Col xs={6} md={2} className="client-logo">
            <img
              className="sm:w-50"
              src="https://cdn.prod.website-files.com/63fce6fc122b4d8b036757a0/64075cdef7a9a07a16cc0818_arcadis-logo.svg"
              alt="Client 2"
            />
          </Col>
          <Col xs={6} md={2} className="client-logo">
            <img
              className="sm:w-50"
              src="https://cdn.prod.website-files.com/63fce6fc122b4d8b036757a0/64076123e7fd47d10ab57ad6_bloomin%20(1).png"
              alt="Client 3"
            />
          </Col>
          <Col xs={6} md={2} className="client-logo">
            <img
              className="sm:w-50"
              src="https://cdn.prod.website-files.com/63fce6fc122b4d8b036757a0/63ff1b71cbd31d5c483a603f_Charity%20Water.svg"
              alt="Client 4"
            />
          </Col>
          <Col xs={6} md={2} className="client-logo">
            <img
              src="https://cdn.prod.website-files.com/63fce6fc122b4d8b036757a0/63ff1ba4a10c05870d2569d0_fidelity-investments-3%201.svg"
              alt="Client 5"
            />
          </Col>
          <Col xs={6} md={2} className="client-logo">
            <img
              src="https://cdn.prod.website-files.com/63fce6fc122b4d8b036757a0/63ff1bc8339a977f1114c45d_fresh%20direct.svg"
              alt="Client 6"
            />
          </Col>
        </Row>
      </section>


      <section className="mt-2 w-full h-full">
        <Container>
          <Row>
            <Col className="flex flex-col  justify-center items-center pt-12">
              <div initial={{ opacity: 0, y: 20 }} className="mb-5 md:mb-0">
                <h1 className="fw-bold text-yellow-500">
                  We see the challenge
                </h1>
                <p
                  initial={{ opacity: 0, y: 30 }}
                  className="text-justify text-md md:text-xl"
                >
                  We’re all wrestling with complexity. Every company, work
                  function, and team now faces a tall order: to be more
                  adaptive, strategic, effective, human, and equitable amidst
                  growing uncertainty.
                </p>
              </div>
            </Col>
            <Col md={6} className="flex flex-col items-center p-5">
              <div>
                <img
                  src="https://cdn.prod.website-files.com/63f64214650d1272fb21690d/63fe133956f1ef78ea26b9d2_home-2-col-2-p-800.webp"
                  alt="Strategic Procurement"
                  className="shadow-lg rounded-lg"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="mt-0 w-full h-full bg2 flex items-center">
        <Container>
          <Row>
            <Col md={6} className="flex flex-col items-center p-5">
              <img
                src="https://cdn.prod.website-files.com/63f64214650d1272fb21690d/63fe133956f1ef78ea26b9d2_home-2-col-2-p-800.webp"
                alt="Strategic Procurement"
                className="shadow-lg rounded-lg w-full"
              />
            </Col>

            <Col md={6} className="flex flex-col justify-center items-center p-12">
              <div
              // initial={{ opacity: 0, x: -50 }}
              // animate={inViewSecondSection ? { opacity: 1, x: 0 } : {}}
              // transition={{ duration: 1.0, ease: 'easeOut' }}
              >
                <h1 className="md:pt-5 fw-bold">
                  We need to shift <br /> our thinking
                </h1>
                <p className="text-justify text-md md:text-xl">
                  Organizations are human systems full of potential to navigate
                  complexity, design human processes, and make meaningful
                  change. But tapping into that potential requires a mindset
                  shift, one that accepts that organizations aren't machines. It
                  requires having the courage to say no to the status quo and
                  yes to building future-ready capabilities.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="relative z-20"></section>

      <section className="px-10 py-10 w-full h-full">
        <Row className="flex items-center">
          <Col md={6} className="flex flex-col items-center pt-12">
            <div>
              <h1 className="pb-3 fw-bold text-yellow-500">
                The old ways of working aren’t <br /> the only ways of working
              </h1>

              <p className="fw-bold text-2xl">
                We help organizations evolve new practices:
              </p>

              <p className="text-xl">
                From struggling to attract and retain top talent To giving
                everyone a voice in shaping the organization
              </p>

              <p className="text-xl">
                From hoarding information To making nearly all information
                transparent and accessible
              </p>

              <p className="text-xl">
                From being bombarded with meetings and email To shedding status
                meetings and bureaucratic theater
              </p>

              <p className="text-xl">
                From hitting bottlenecks in decision-making To enabling
                safe-to-try decisions at the edge
              </p>

              <p className="text-xl">
                From obsessing over short-term results To choosing strategic
                priorities and explicit tradeoffs
              </p>
            </div>
          </Col>

          <Col md={6} className="flex flex-col items-center">
            <img
              src="https://cdn.prod.website-files.com/63f64214650d1272fb21690d/63fe1e6665d1761c0f0a082c_home-about-1-p-800.webp"
              alt="Strategic Procurement"
              className="shadow-lg rounded-lg w-full"
            />
          </Col>
        </Row>
      </section>

      <section className="flex justify-center items-center  pb-8 h-full w-full relative  bg-yellow-500 bg3">
     
        <Container className="relative z-10">
          <Row className="flex flex-col justify-center items-center">
            <Col className="flex justify-center items-center">
              <h1 className='text-black font-bold'>We're Ready to Help</h1>
            </Col>

            <Col className="flex justify-center items-center font-semibold text-md md:text-xl text-black">
              <p className="text-justify">
                How we work is broken, dehumanizing, and held back by
                bureaucracy. But it can be reinvented in service of human
                flourishing even joy. These changes aren't at the expense of
                business outcomes. Instead, they're fuel for even greater
                ambitions. The Ready helps organizations accelerate that change
                as fast, far, and wide as possible.
              </p>
            </Col>

            <Col className="flex justify-center items-center">
              <Button
                as={Link}
                to={'/our-services'}
                className="btn-block bg-black mt-3 px-4 p-2 rounded-pill btn btn-lg text"
              >
                OUR SERVICES
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      <ConnectButtons />
    </>
  );
}

export default Home;
