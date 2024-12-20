//import React from 'react';
import { Container, Row, Col, Button} from 'react-bootstrap';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import TeamListMemberCrd from '../components/teamListMemberCrd';

import Clients from '../components/carousel';
function OurTeam() {
  const options = { threshold: 0.1 };
  
  // Hooks for intersection observers
  const [refFirstSection, inViewFirstSection] = useInView(options);
  const [refSecondSection, inViewSecondSection] = useInView(options);
  const [refThirdSection, inViewThirdSection] = useInView(options);
  return (
    <>
      <section className="flex justify-center items-center  h-full w-full px-4 py-8">
        <div className="  flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl text-amber-500  hiring_heading">
            Who We Are?
          </h1>
        </div>
      </section>

      <section ref={refFirstSection} className=" w-full  px-6 lg:px-20 xl:px-24 2xl:px-32 py-8 mx-auto">
        <Container fluid >
          <Row className="gap-y-8">
            <Col md={6} className="flex flex-col gap-6 justify-center items-center ">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={inViewFirstSection ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                 
                <h1 className="text-yellow-500 fw-bold text-3xl xl:text-5xl 2xl:text-6xl pb-2">
                  We’re The Ready
                </h1>
                <br/>
                <p className="text-justify text-sm sm:text-lg md:text-2xl xl:text-xl xl-leading-7 2xl:leading-10 2xl:text-3xl">
                  We’re here to change how the world works—from business as
                  usual to brave new work. It takes an unusual person to disrupt
                  decades of tradition and guide hundreds or thousands of people
                  through an experience that demands their bravery,
                  vulnerability, and curiosity. It takes conviction to join a
                  decentralized, self-managing, public benefit corporation where
                  reputation matters more than position.
                </p>
                
              </motion.div>
            </Col>
            <Col md={6} className="flex flex-col items-center p-5">
              <motion.img
                src="https://cdn.prod.website-files.com/63f64214650d1272fb21690d/64ecb80f6f19b2addac4e0f1_image_WeAreTheReady1-p-800.webp"
                alt="Team Image"
                className="shadow-lg rounded-lg w-full h-[300px] md:h-[390px] 2xl:h-[690px] object-cover"
                initial={{ opacity: 0, x: 50 }}
                animate={inViewFirstSection ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              />
            </Col>
          </Row>
        </Container>
      </section>
<section>
{/* <Brochure/> */}
</section>

<section  className="mt-0 flex flex-col items-center gap-10 w-full h-full">
       <div className="flex flex-col items-center ">
          <h1 className="text-5xl md:text-7xl text-amber-500  hiring_heading">
            OUR CLIENTS
          </h1>
          <h5 className='text-bold text-black text-sm sm:text-lg md:text-2xl xl:text-xl xl-leading-7 2xl:leading-10 2xl:text-3xl ' >We're fortunate to work with the best!</h5>
          
        </div>
        <Clients/>
</section>
<section
        ref={refSecondSection}
        className="mt-9 w-full lg:mt-28 px-6 lg:px-20 xl:px-24 2xl:px-32 py-8 mx-auto  bg-gradient-to-r from-[#FF9D00] via-[#FFC100] to-[#FF9D00] h-full bgg11 flex items-center"
      >
        <Container fluid >
          <Row>
            <Col md={6} className="flex flex-col items-center p-5">
              <motion.img
                src="https://cdn.prod.website-files.com/63f64214650d1272fb21690d/64495b02c779ff9ad9a7990f_image_OurPeopleForeground%402x-p-1080.webp"
                alt="Team Image"
                className="shadow-lg rounded-lg w-full h-[300px] md:h-[390px] 2xl:h-[690px] object-cover"
                initial={{ opacity: 0, x: 50 }}
                animate={inViewSecondSection ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              />
            </Col>
            <Col md={6} className="flex flex-col justify-center items-center pt-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={inViewSecondSection ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <h1 className="fw-bold text-3xl xl:text-5xl 2xl:text-6xl pb-2 display-5">Our people</h1>
                <br/>
                <p className="text-justify text-sm sm:text-lg md:text-2xl xl:text-xl xl-leading-7 2xl:leading-10 2xl:text-3xl">
                  The people who make up The Ready are specialists in the ways
                  of organizational culture and transformation. Yet within that
                  world we are generalists drawing freely from the principles
                  and practices of dozens of theories and hundreds of
                  iconoclastic firms. We are coaches, facilitators, academics,
                  psychologists, technologists, and corporate veterans who have
                  found each other in our quest to make work better. Our
                  backgrounds are varied but our ambition is united.
                </p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
    
<section ref={refThirdSection} className=" mt-9 lg:mt-28 w-full px-6 lg:px-20 xl:px-24 2xl:px-32 py-8 mx-auto  ">
        <Container fluid>
          <Row>
            <Col md={6} className="  flex flex-col items-center  gap-12 lg:gap-20 xl:gap-20 2xl:gap-32 pt-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={inViewThirdSection ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                
                <h1 className="text-yellow-500 text-3xl xl:text-5xl 2xl:text-6xl font-bold pb-2">
                  Join our team
                </h1>
                <br/>
                <p className="text-justify text-sm sm:text-lg md:text-2xl xl:text-xl xl-leading-7 2xl:leading-10 2xl:text-3xl">
                  We are always on the lookout for our next stunning colleague.
                  If you either have experience working closely with
                  organizations to help them think and act differently or are
                  hoping to apply your unique skillset toward changing how the
                  world works and participating in a self-managing environment,{' '}
                  <span className="underline">
                    please learn about our hiring process and consider applying
                    with us!
                  </span>
                </p>
                <p className="text-justify text-sm sm:text-lg md:text-2xl xl:text-xl xl-leading-7 2xl:leading-10 2xl:text-3xl">
                  The Trackpi's hiring team reviews all applications anonymously
                  and will be in touch if there is a fit. If you need to get in
                  touch with them, please email{' '}
                  <span className="underline">hr@trackpi.in.</span>
                </p>
                <Button className="bg-transparent mt-4 px-4 py-3 text-sm 
                                   md:px-4 md:py-3 md:text-base lg:px-8 lg:py-8 lg:text-xl xl:px-10 xl:py-5 xl:text-xl 
                                   2xl:px-10 2xl:py-6 2xl:text-xl rounded-pill fw-bold text-black  ff   ">
                  JOIN OUR TEAM <i className="fa-arrow-right fa-solid "></i>
                </Button>
              </motion.div>
            </Col>
            <Col md={6} className="flex flex-col items-center p-5 md:w-1/2">
              <motion.img
                src="https://cdn.prod.website-files.com/63f64214650d1272fb21690d/64495b2e1589c13e25e8db88_image_OurTeamForeground%402x-p-1080.webp"
                alt=""
                className="shadow-lg rounded-lg w-full h-[300px] md:h-[390px] 2xl:h-[690px] object-cover"
                // style={{ width: '590px', height: '490px', objectFit: 'cover' }}
                initial={{ opacity: 0, x: 50 }}
                animate={inViewThirdSection ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              />
            </Col>
          </Row>
        </Container>
      </section>
      
      <section className="mt-5 mb-5 w-full px-6 lg:px-20 xl:px-24 2xl:px-32 py-8 mx-auto">
        <Container fluid>
          <Row>
            <h1 className="fw-bold text-center text-amber-500 text-3xl xl:text-5xl 2xl:text-6xl pb-2 display-5 flex justify-center">
              The Ready from A–Z
            </h1>
            
          </Row>
          <TeamListMemberCrd/>
         
        </Container>
      </section>
    </>
  );
}

export default OurTeam;
