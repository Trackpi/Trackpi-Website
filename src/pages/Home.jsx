// Created by Shalu
import React, { useState } from 'react';
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

  const groupedCards = [];
  for (let i = 0; i < cards.length; i += 4) {
    groupedCards.push(cards.slice(i, i + 4));
  }
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = index => {
    setCurrentIndex(index);
  };

  return (
    <>
      <HeaderBanner
        title="People's Interest, Our Interest"
        description="TrackPi is a future-of-work consultancy committed to changing how the world works from business as usual to brave new work."
        brochure
        learn
        classname="bgOne"
      />
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
        <Row className="flex gap-4 justify-center items-center bg-gradient-to-r from-[#FF9D00] via-[#FFC100] to-[#FF9D00] py-2">
          <div className="flex  animate-scroll">
            {clients.map((client, index) => (
              <Col xs={6} md={2} key={client.id} className="client-logo">
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
                  src={home2}
                  alt="Strategic Procurement"
                  className="shadow-lg rounded-lg"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section
        className="mt-0 w-full h-full  flex items-center  relative bg2"
        style={{ backgroundColor: '#FFC100' }}
      >
        <Container>
          <Row>
            <Col md={6} className="flex flex-col items-center p-5">
              <img
                src={home2}
                alt="Strategic Procurement"
                className="shadow-lg rounded-lg w-full"
              />
            </Col>

            <Col
              md={6}
              className="flex flex-col justify-center items-center p-12"
            >
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
              src={home2}
              alt="Strategic Procurement"
              className="shadow-lg rounded-lg w-full"
            />
          </Col>
        </Row>
      </section>

      <section className="flex justify-center items-center  pb-8 h-full w-full relative mb-14 bg-yellow-500 bg3">
        <Container className="relative z-10">
          <Row className="flex flex-col justify-center items-center">
            <Col className="flex justify-center items-center">
              <h1 className="text-black font-bold">We're Ready to Help</h1>
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
