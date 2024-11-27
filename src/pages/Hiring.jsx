import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Hiring() {
  return (
    <div>
      <section className="flex justify-center items-center bg-white-300 p-3 w-full h-full ">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl hover:text-sky-500 home-text">
            Hiring & Retention
          </h1>
        </div>
      </section>
      <section className="mt-36 w-full h-full">
        <Container>
          <Row>
            <Col md={6} className="flex flex-col">
              <h1 className="fw-bold display-5">
                About our
                <br />
                Hiring Process
              </h1>
              <p className="text-xl md:text-justify md:text-lg">
                We experiment with our own hiring practice to attract and choose
                people based on demonstrable skills rather than experience,
                identity, or connections. We want to minimize bias as much as
                possible, which is why we won’t ask for your resume. Instead, we
                anonymously review answers to a series of application questions
                and our interviews are designed as experiential working
                sessions—rather than performative Q&As—to give insight into what
                working with The Ready might actually feel like.
              </p>
            </Col>
            <Col md={6}>
              <img
                src="https://media.istockphoto.com/id/1453843862/photo/business-meeting.jpg?s=612x612&w=0&k=20&c=4k9H7agmpn92B7bkUywvkK5Ckwm9Y8f8QrGs4DRDWpE="
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
                src="https://fortune.com/img-assets/wp-content/uploads/2024/10/GettyImages-1365436662-e1729016341906.jpg?w=1440&q=75"
                alt=""
              />
            </Col>
            <Col md={6} className="flex flex-col">
              <h1 className="fw-bold display-5">Transformer Role</h1>
              <p className="text-xl md:text-justify md:text-lg">
                The majority of our members at The Ready are in the Transformer
                role (what we call our “consultants” here). We regularly open
                our Transformer hiring process, as our business is growing and
                expanding.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Hiring;
