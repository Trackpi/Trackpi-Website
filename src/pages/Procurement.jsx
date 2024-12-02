import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Procurement() {
  const options = { threshold: 0.1 };

  // Hooks for intersection observers
  const [refHeader, inViewHeader] = useInView(options);
  const [refFirstSection, inViewFirstSection] = useInView(options);
  const [refSecondSection, inViewSecondSection] = useInView(options);

  return (
    <div>
      <section
        ref={refHeader}
        className="flex justify-center items-center bg-white-300 p-5 w-full h-full"
      >
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inViewHeader ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl text-amber-500 hover:text-sky-500 home-text">
            Procurement & Risk Management
          </h1>
        </motion.div>
      </section>

      <section ref={refFirstSection} className="w-full h-full pb-10 px-10">
        {/* <Container> */}
          <Row className="flex flex-col md:flex-row items-center ">
            <Col  className="p-4 w-100">
              <motion.img
                src="https://media.istockphoto.com/id/1347197740/photo/business-people-having-casual-discussion-during-meeting.jpg?s=612x612&w=0&k=20&c=HSnFzyuwUDZFCehBv0W0jjRfwY1eKjGV1Lkek8lXY2Q="
                alt="Strategic Procurement"
                className="w-full rounded-lg shadow-lg"
                initial={{ opacity: 0, x: -50 }}
                animate={inViewFirstSection ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              />
            </Col>
            <Col className="p-4 w-100">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={inViewFirstSection ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-2xl font-bold text-amber-500">
                  Strategic Procurement Solutions
                </h2>
                <p className="text-xl md:text-justify md:text-lg">
                  Our Strategic Procurement Solutions focus on optimizing your
                  supply chain and procurement processes to drive
                  cost-efficiency, enhance supplier relationships, and ensure
                  value for money. We assist businesses in sourcing high-quality
                  goods and services through data-driven strategies, market
                  analysis, and vendor management.
                </p>
              </motion.div>
            </Col>
          </Row>
        {/* </Container> */}
      </section>

      {/* Second Section */}
      <section
        ref={refSecondSection}
        className="w-full h-full pb-10 px-10 bg-gray-100"
      >
        {/* <Container> */}
          <Row className="flex flex-col md:flex-row-reverse items-center">
            <Col className="p-4 w-100">
              <motion.img
                src="https://media.istockphoto.com/id/1347652268/photo/group-of-colleagues-celebrating-success.jpg?s=612x612&w=0&k=20&c=dojtkf9ItX21j3jtlGOGpbKDs320TTAuofoGnNSZD8Y="
                alt="Risk Management Advisory"
                className="w-full rounded-lg shadow-lg"
                initial={{ opacity: 0, x: 50 }}
                animate={inViewSecondSection ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              />
            </Col>
            <Col className="p-4 w-100">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={inViewSecondSection ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-2xl font-bold text-amber-500">
                  Comprehensive Risk Management Advisory
                </h2>
                <p className="text-xl md:text-justify md:text-lg">
                  At the heart of our Comprehensive Risk Management Advisory, we
                  provide robust strategies to identify, assess, and mitigate
                  risks across your entire organization. From financial,
                  operational, and regulatory risks to supply chain and
                  cybersecurity threats, our experts help safeguard your
                  business by creating proactive risk management frameworks.
                </p>
              </motion.div>
            </Col>
          </Row>
        {/* </Container> */}
      </section>
    </div>
  );
}

export default Procurement;
