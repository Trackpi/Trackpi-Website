import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

function Home() {
  return (
    <>
      <section className='flex justify-center items-center p-3 w-full h-screen bg1'>
        <div className='flex flex-col items-center'>
          <h1 className='text-5xl md:text-7xl hover:text-sky-500 home-text'>
            Reinvent Your <br />
            Organization
          </h1>
          <div className='font-semibold text-md md:text-2xl'>
            The Ready is a future-of-work consultancy committed to changing <br /> how
            the world works from business as usual to brave new work.
            <div />
            <div className='flex justify-center items-center'>
              <Button className='bg-black mt-5 p-3 rounded-pill fw-bold'>
                LEARN HOW WE CAN HELP
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className='mt-36 w-full h-screen'>
        <Container>
          <Row>
            <Col md={6} className='flex flex-col'>
              <h1 className='fw-bold display-5'>We see the challenge</h1>
              <p className='text-xl md:text-justify md:text-lg'>We’re all wrestling with complexity. Every company, work function, and team now faces a tall order: to be more adaptive, strategic, effective, human, and equitable amidst growing uncertainty.</p>
            </Col>
            <Col md={6}>
              <img src="https://cdn.prod.website-files.com/63f64214650d1272fb21690d/63fe133956f1ef78ea26b9d2_home-2-col-2-p-800.webp" alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className='mt-36 w-full h-screen bg2'>
        <Container>
          <Row >
            <Col md={6} className='p-5'>
              <img  src="https://cdn.prod.website-files.com/63f64214650d1272fb21690d/63fe133956f1ef78ea26b9d2_home-2-col-2-p-800.webp" alt="" />
            </Col>
            <Col md={6} className='flex flex-col p-5'>
              <h1 className='fw-bold display-5'>We need to shift <br /> our thinking</h1>
              <p className='text-justify text-sm md:text-lg'>Organizations are human systems full of potential to navigate complexity, design human processes, and make meaningful change. But tapping into that potential requires a mindset shift, one that accepts that organizations aren't machines. It requires having the courage to say no to the status quo and yes to building future-ready capabilities.</p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='flex justify-center items-center bg-gradient-to-r from-yellow-500 to-gray-400 mt-36 w-full h-screen'>

        <Container >

          <Row className='flex flex-col justify-center items-center'>

            <Col className='flex justify-center item-center'>
              <h1 className='text-4xl md:text-7xl home-text'>
                We're Ready to Help
              </h1>
            </Col>

            <Col className='flex justify-center item-center font-semibold text-2xl text-slate-800 sm:text-lg'>

              <p className='text-justify'>How we work is broken, dehumanizing, and held back by bureaucracy. But it can be reinvented in service of human flourishing even joy. These changes aren't at the expense of business outcomes. Instead, they're fuel for even greater ambitions. The Ready helps organizations accelerate that change as fast, far, and wide as possible.</p>

            </Col>

            <Col className='flex justify-center item-center'>

              <Button className='btn-block bg-black mt-5 p-3 rounded-pill btn btn-lg'>
                OUR SERVICES
              </Button>

            </Col>

          </Row>
        </Container>
      </section>
    </>
  )
}

export default Home
