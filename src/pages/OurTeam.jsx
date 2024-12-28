//import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import TeamListMemberCrd from '../components/teamListMemberCrd';
import "./ourTeam.css";
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
          <h1 className="text-5xl md:text-6xl lg:text-7xl text-[#FFC100] hiring_heading">
            Who We Are?
          </h1>
        </div>
      </section>
      <section
        ref={refFirstSection}
        className="md:mt-20 w-full px-6 lg:px-20 xl:px-24 2xl:px-32 mx-auto section1"
      >
        <motion.div
          className="flex flex-col md:flex-row gap-12 lg:gap-20 xl:gap-20 2xl:gap-32 items-center"
          initial={{ opacity: 0, x: -50 }}
          animate={inViewFirstSection ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="md:w-1/2">
            <motion.h1
              className="firsth1 fw-bold text-[#FFC100] text-3xl xl:text-5xl 2xl:text-6xl pb-3"
              initial={{ opacity: 0, x: -50 }}
              animate={inViewFirstSection ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              We’re The Ready
            </motion.h1>
            <motion.img
              src="https://cdn.prod.website-files.com/63f64214650d1272fb21690d/64ecb80f6f19b2addac4e0f1_image_WeAreTheReady1-p-800.webp"
              alt="Team Image"
              className="rounded-lg w-full h-[200px] md:h-[390px] 2xl:h-[490px] md:hidden object-cover "
              initial={{ opacity: 0, x: -50 }}
              animate={inViewFirstSection ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            />
            <motion.p
              className="firstp text-justify text-sm sm:text-lg md:text-2xl xl:text-xl xl:leading-7 2xl:leading-10 2xl:text-2xl text-[#0A0A0A]"
              initial={{ opacity: 0, x: -50 }}
              animate={inViewFirstSection ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              We’re here to change how the world works—from business as usual to
              brave new work. It takes an unusual person to disrupt decades of
              tradition and guide hundreds or thousands of people through an
              experience that demands their bravery, vulnerability, and
              curiosity. It takes conviction to join a decentralized,
              self-managing, public benefit corporation where reputation matters
              more than position.
            </motion.p>
          </div>
          <div className="md:w-1/2 flex md:justify-end hidden md:block">
            <motion.img
              src="https://cdn.prod.website-files.com/63f64214650d1272fb21690d/64ecb80f6f19b2addac4e0f1_image_WeAreTheReady1-p-800.webp"
              alt="Team Image"
              className="shadow-lg rounded-lg w-full h-[300px] md:h-[390px] 2xl:h-[490px] flex object-cover"
              initial={{ opacity: 0, x: -50 }}
              animate={inViewFirstSection ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            />
          </div>
        </motion.div>
      </section>
      <section className="section3 md:mt-20 flex flex-col items-center gap-10 w-full h-full">
        <div className="flex flex-col items-center ">
          <h1 className="fw-bold text-3xl lg:text-5xl xl:text-5xl 2xl:text-6xl text-amber-500  hiring_heading">
            OUR CLIENTS
          </h1>
          <h5 className="paras text-bold text-black text-sm sm:text-lg md:text-2xl xl:text-xl xl-leading-7 2xl:leading-10 2xl:text-3xl ">
            We're fortunate to work with the best!
          </h5>
        </div>
        <Clients />
      </section>

      <section
        ref={refSecondSection}
        className="mt-28 w-full px-6 lg:px-20 xl:px-24 2xl:px-32 mx-auto py-20 bg-gradient-to-r from-[#FF9D00] via-[#FFC100] to-[#FF9D00] text-black bgg11 section2"
      >
        <motion.div
          className="flex flex-col md:flex-row gap-12 lg:gap-20 xl:gap-20 2xl:gap-32 items-center"
          initial={{ opacity: 0, x: -50 }}
          animate={inViewSecondSection ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="md:w-1/2 flex md:justify-start hidden md:block">
            <motion.img

               src="https://cdn.prod.website-files.com/63f64214650d1272fb21690d/64495b02c779ff9ad9a7990f_image_OurPeopleForeground%402x-p-1080.webp"
                alt="Team Image"
              className="shadow-lg rounded-lg w-full h-[300px] md:h-[390px] 2xl:h-[490px] object-cover"
              initial={{ opacity: 0, x: -50 }}
              animate={inViewSecondSection ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            />
          </div>
          <div className="md:w-1/2">
            <motion.h1
              className="firsth1 font-bold text-3xl xl:leading-tight xl:text-5xl 2xl:text-6xl pb-3"
              initial={{ opacity: 0, x:  -50 }}
              animate={inViewSecondSection ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              Our people
            </motion.h1>
            <div className='md:hidden flex justify-center '>
            <motion.img

            src="https://cdn.prod.website-files.com/63f64214650d1272fb21690d/64495b02c779ff9ad9a7990f_image_OurPeopleForeground%402x-p-1080.webp"
            alt="Team Image"
            className="our  rounded-lg w-[277px]  md:w-full h-[180px] md:h-[390px] 2xl:h-[490px] object-cover"
            initial={{ opacity: 0, x: -50 }}
            animate={inViewSecondSection ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            />
            </div>
            <motion.p
              className="firstp text-justify text-sm sm:text-lg md:text-2xl xl:text-xl xl:leading-7 2xl:leading-10 2xl:text-2xl text-[#0A0A0A]"
              initial={{ opacity: 0, x: -50 }}
              animate={inViewSecondSection ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              The people who make up The Ready are specialists in the ways of
              organizational culture and transformation. Yet within that world
              we are generalists drawing freely from the principles and
              practices of dozens of theories and hundreds of iconoclastic
              firms. We are coaches, facilitators, academics, psychologists,
              technologists, and corporate veterans who have found each other in
              our quest to make work better. Our backgrounds are varied but our
              ambition is united.
            </motion.p>
          </div>
        </motion.div>
      </section>

      <section
        ref={refThirdSection}
        className="section4 px-6 lg:px-20 xl:px-24 2xl:px-32 mx-auto w-full h-full mt-28 section3"
      >
        <motion.div
          className="flex flex-col md:flex-row gap-12 lg:gap-20 xl:gap-20 2xl:gap-32 items-center"
          initial={{ opacity: 0, x: -50 }}
          animate={inViewThirdSection ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col w-full md:w-1/2">
            <motion.h1
              className="firsth1 fw-bold text-yellow-500 text-3xl lg:text-5xl xl:text-5xl 2xl:text-6xl"
              initial={{ opacity: 0, x: -50 }}
              animate={inViewThirdSection ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              Join our team
            </motion.h1>
            <motion.img
              src="https://cdn.prod.website-files.com/63f64214650d1272fb21690d/64495b2e1589c13e25e8db88_image_OurTeamForeground%402x-p-1080.webp"

                alt=""
              className="rounded-lg w-full h-[180px] md:h-[390px] 2xl:h-[490px] object-cover"

           

              initial={{ opacity: 0, x: -50 }}
              animate={inViewThirdSection ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            />
            <motion.p
              className="firstp text-base md:text-xl 2xl:text-2xl mt-8 mb-3 text-justify"
              initial={{ opacity: 0, x: -50 }}
              animate={inViewThirdSection ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              We are always on the lookout for our next stunning colleague. If
              you either have experience working closely with organizations to
              help them think and act differently or are hoping to apply your
              unique skillset toward changing how the world works and
              participating in a self-managing environment,{' '}
              <span className="underline">
                please learn about our hiring process and consider applying with
                us!
              </span>
            </motion.p>
            <motion.p
              className="secondp text-base md:text-xl 2xl:text-2xl mt-8 mb-3 text-justify"
              initial={{ opacity: 0, x: -50 }}
              animate={inViewThirdSection ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              The Trackpi's hiring team reviews all applications anonymously and
              will be in touch if there is a fit. If you need to get in touch
              with them, please email{' '}
              <span className="underline">hr@trackpi.in.</span>
              <br />
              <div className='flex justify-center md:justify-start'>
              <Button
                className=" mt-4 bg-transparent  text-black fw-bold  rounded-pill  hover:bg-gray-800 
                 px-8 py-2 md:px-10 md:py-3 lg:py-4   xl:py-12 2xl:px-12   
                  text-sm  md:text-lg  lg:text-xl  xl:text-xl  2xl:text-2xl 
                   transition duration-300  ff  "
              >
                JOIN OUR TEAM <i className="fa-arrow-right fa-solid "></i>
              </Button>
              </div>
            </motion.p>
          </div>
          <div className="w-full hidden md:block  md:w-1/2 flex justify-center justify-end">
            <motion.img
              src="https://cdn.prod.website-files.com/63f64214650d1272fb21690d/64495b2e1589c13e25e8db88_image_OurTeamForeground%402x-p-1080.webp"

                alt=""
              className="shadow-lg rounded-lg w-full h-[300px] md:h-[390px] 2xl:h-[490px] object-cover"

           

              initial={{ opacity: 0, x: -50 }}
              animate={inViewThirdSection ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            />
          </div>
        </motion.div>
      </section>
      <section className="section4 md:mt-5 mb-5 w-full px-6 lg:px-20 xl:px-24 2xl:px-32 py-8 mx-auto">
        <Container fluid>
          <Row>
            <h1 className="fw-bold text-center text-amber-500 text-3xl lg:text-5xl xl:text-5xl 2xl:text-6xl pb-2  flex justify-center">
              The Ready from A–Z
            </h1>
          </Row>
          <TeamListMemberCrd />
        </Container>
      </section>
    </>
  );
}

export default OurTeam;
