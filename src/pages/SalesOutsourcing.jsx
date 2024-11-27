import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function SalesOutsourcing() {
  return (
    <div>
      <section className="flex justify-center items-center bg-white-300 p-3 w-full h-full ">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl hover:text-sky-500 home-text">
            Sales Outsourcing
          </h1>
        </div>
      </section>
      <section className="mt-36 w-full h-full">
        <Container>
          <Row>
            <Col md={6} className="flex flex-col">
              <h1 className="fw-bold display-5">
                End-to-End Sales Outsourcing Solutions
              </h1>
              <p className="text-xl md:text-justify md:text-lg">
                Our End-to-End Sales Outsourcing Solutions provide a
                comprehensive approach to managing your entire sales process,
                from lead generation to closing deals. We offer specialized
                teams that seamlessly integrate with your business, helping you
                expand market reach, increase revenue, and reduce operational
                costs. By leveraging our expertise in sales strategy, customer
                engagement, and performance analytics, we deliver tailored sales
                solutions that drive growth and optimize your sales force's
                productivity, allowing you to focus on your core business
                functions while we handle the sales execution.
              </p>
            </Col>
            <Col md={6}>
              <img
                src="https://thumbs.dreamstime.com/b/corporate-team-following-international-sales-process-client-feedback-using-interactive-board-to-present-resources-profit-333111286.jpg"
                alt=""
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="mt-36 w-full h-screen ">
        <Container>
          <Row>
            <Col md={6}>
              <img
                src="https://media.istockphoto.com/id/950986656/photo/business-finance-accounting-contract-advisor-investment-consulting-marketing-plan-for-the.jpg?s=612x612&w=0&k=20&c=U-y6cADCby4QwENFptPrVcK_MplesqZmnDxUMMkJZvM="
                alt=""
              />
            </Col>
            <Col md={6} className="flex flex-col">
              <h1 className="fw-bold display-5">
                Sales Performance Enhancement Services
              </h1>
              <p className="text-xl md:text-justify md:text-lg">
                With our Sales Performance Enhancement Services, we empower your
                business to achieve higher sales productivity and improved
                bottom-line results. We provide flexible outsourcing models
                where our experienced sales professionals take on key sales
                responsibilities, from prospecting to closing, ensuring
                consistency and performance excellence. By optimizing sales
                processes, implementing effective sales methodologies, and
                utilizing advanced tools for tracking and reporting, we help you
                accelerate revenue generation, improve conversion rates, and
                enhance customer satisfaction—allowing your business to stay
                ahead in a competitive market.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default SalesOutsourcing;
