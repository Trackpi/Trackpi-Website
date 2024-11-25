import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


function Connect() {
  return (
    <div>
      <section className='flex justify-center items-center p-3 w-full h-screen bg1'>
        <div className='flex flex-col items-center'>
          <h1 className='text-5xl md:text-7xl hover:text-sky-500 home-text'>
            Connect With Us
          </h1>
        </div>
      </section>

      <section className='mt-32 w-full'>
        <Container className='flex flex-col w-50'>
          <Row>
            <h1 className='fw-bold display-5'>You’re ready to <br /> take the next step</h1>
            <p className='text-xl md:text-justify md:text-lg'>We’re all wrestling with complexity. Every company, work function, and team now faces a tall order: to be more adaptive, strategic, effective, human, and equitable amidst growing uncertainty.</p>
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
           
          </Row>

          <Row className='flex justify-center items-center'>

          </Row>


        </Container>
      </section>

    </div>
  )
}

export default Connect