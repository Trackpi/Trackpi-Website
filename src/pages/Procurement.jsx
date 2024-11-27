import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Procurement() {
  return (
    <div>
      <section className="flex justify-center items-center bg-white-300 p-3 w-full h-full ">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl hover:text-sky-500 home-text">
            Procurement & Risk Management
          </h1>
        </div>
      </section>
      <section className="mt-36 w-full h-full">
        <Container>
          <Row>
            <Col md={6} className="flex flex-col">
              <h1 className="fw-bold display-5">
                Strategic Procurement Solutions
              </h1>
              <p className="text-xl md:text-justify md:text-lg">
                Our Strategic Procurement Solutions focus on optimizing your
                supply chain and procurement processes to drive cost-efficiency,
                enhance supplier relationships, and ensure value for money. We
                assist businesses in sourcing high-quality goods and services
                through data-driven strategies, market analysis, and vendor
                management. Our team works closely with you to develop
                customized procurement frameworks, enabling you to achieve
                long-term sustainability while mitigating risks associated with
                supply chain disruptions, price volatility, and vendor
                dependency.
              </p>
            </Col>
            <Col md={6}>
              <img
                src="https://media.istockphoto.com/id/1347197740/photo/business-people-having-casual-discussion-during-meeting.jpg?s=612x612&w=0&k=20&c=HSnFzyuwUDZFCehBv0W0jjRfwY1eKjGV1Lkek8lXY2Q="
                alt=""
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="mt-36 w-full h-full ">
        <Container>
          <Row>
            <Col md={6}>
              <img
                src="https://media.istockphoto.com/id/1347652268/photo/group-of-colleagues-celebrating-success.jpg?s=612x612&w=0&k=20&c=dojtkf9ItX21j3jtlGOGpbKDs320TTAuofoGnNSZD8Y="
                alt=""
              />
            </Col>
            <Col md={6} className="flex flex-col">
              <h1 className="fw-bold display-5">
                Comprehensive Risk Management Advisory
              </h1>
              <p className="text-xl md:text-justify md:text-lg">
                At the heart of our Comprehensive Risk Management Advisory, we
                provide robust strategies to identify, assess, and mitigate
                risks across your entire organization. From financial,
                operational, and regulatory risks to supply chain and
                cybersecurity threats, our experts help safeguard your business
                by creating proactive risk management frameworks. Through
                detailed risk assessments, scenario planning, and mitigation
                strategies, we empower your company to navigate uncertainties,
                ensure business continuity, and protect your reputation,
                allowing you to make informed decisions and drive growth
                securely.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Procurement;
