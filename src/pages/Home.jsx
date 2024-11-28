import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

function Home() {
  return (
    <>
      <section className='flex justify-center items-center p-3 w-full h-screen bg1'>
        <div className='flex flex-col items-center'>
          <h1 className='fw-bold md:text-7xl hover:text-sky-500 display-1 home-text'>
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

      <section className='bg- mt-5 w-full h-full'>
        <Container>
          <Row >
            <Col md={6} className='flex flex-col justify-center items-center'>
              <h1 className='fw-bold text-yellow-500 display-5'>We see the challenge</h1>
              <p className='text-justify text-sm md:text-lg'>We’re all wrestling with complexity. Every company, work function, and team now faces a tall order: to be more adaptive, strategic, effective, human, and equitable amidst growing uncertainty.</p>
            </Col>
            <Col md={6} className='flex flex-col items-center p-5'>
              <img src="https://cdn.prod.website-files.com/63f64214650d1272fb21690d/63fe133956f1ef78ea26b9d2_home-2-col-2-p-800.webp" alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className='bg-yellow-300 md:mt-5 w-full h-full md:bg2'>
        <Container className=''>
          <Row className=''>
            <Col md={6} xs={12} sm={6} className='flex flex-col justify-center items-center md:p-5 pt-5'>
              <img className='md:pt-5' src="https://cdn.prod.website-files.com/63f64214650d1272fb21690d/63fe133956f1ef78ea26b9d2_home-2-col-2-p-800.webp" alt="" />
            </Col>
            <Col md={6} xs={12} sm={12} className='flex flex-col justify-center items-center'>
              <h1 className='md:pt-5 fw-bold display-5 md'>We need to shift <br /> our thinking</h1>
              <p className='text-justify text-sm md:text-lg'>Organizations are human systems full of potential to navigate complexity, design human processes, and make meaningful change. But tapping into that potential requires a mindset shift, one that accepts that organizations aren't machines. It requires having the courage to say no to the status quo and yes to building future-ready capabilities.</p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='mt-24 w-full h-full'>

        <Container className='flex flex-col'>

          <Row>
            <h1 className='fw-bold text-center text-yellow-500 display-4'>
              The old ways of working aren’t <br /> the only ways of working
            </h1>
          </Row>

          <Row>
            <Col md={6} className='flex flex-col p-5 text-xl'>

              <p className='fw-bold'>We help organizations evolve new practices:</p>

              <p>
                From struggling to attract and retain top talent
                To giving everyone a voice in shaping the organization
              </p>

              <p>
                From hoarding information
                To making nearly all information transparent and accessible
              </p>

              <p>
                From being bombarded with meetings and email
                To shedding status meetings and bureaucratic theater
              </p>

              <p>
                From hitting bottlenecks in decision-making
                To enabling safe-to-try decisions at the edge
              </p>

              <p>
                From obsessing over short-term results
                To choosing strategic priorities and explicit tradeoffs
              </p>

            </Col>

            <Col md={6} className='p-5'>
              <img src="https://cdn.prod.website-files.com/63f64214650d1272fb21690d/63fe1e6665d1761c0f0a082c_home-about-1-p-800.webp" alt="" />
            </Col>

          </Row>
        </Container>
      </section>

      <section className='flex justify-center items-center bg-gradient-to-r from-yellow-300 to-white mt-5 w-full h-screen'>

        <Container >

          <Row className='flex flex-col justify-center items-center'>

            <Col className='flex justify-center item-center'>
              <h1 className='text-4xl md:text-7xl hover:text-yellow-500 home-text'>
                We're Ready to Help
              </h1>
            </Col>

            <Col className='flex justify-center item-center font-semibold text-lg text-slate-800 md:text-2xl'>

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

      <section className='mt-5 p-5 w-full h-full'>

        <Row className='text-yellow-500'>
          <h5>OUR CLIENTS</h5>
          <h1 className='fw-bold display-4'>We’re fortunate to <br /> work with the best</h1>
        </Row>

        <Row className='flex justify-center items-center mt-5'>
          <Col xs={6} md={2} ><img className='sm:w-50' src="https://cdn.prod.website-files.com/63fce6fc122b4d8b036757a0/63ff1b392159be09bdd1f1a6_airbnb.svg" alt="" /></Col>
          <Col xs={6} md={2} ><img className='sm:w-50' src="https://cdn.prod.website-files.com/63fce6fc122b4d8b036757a0/64075cdef7a9a07a16cc0818_arcadis-logo.svg" alt="" /></Col>
          <Col xs={6} md={2} ><img className='sm:w-50' src="https://cdn.prod.website-files.com/63fce6fc122b4d8b036757a0/64076123e7fd47d10ab57ad6_bloomin%20(1).png" alt="" /></Col>
          <Col xs={6} md={2} ><img className='sm:w-50' src="https://cdn.prod.website-files.com/63fce6fc122b4d8b036757a0/63ff1b71cbd31d5c483a603f_Charity%20Water.svg" alt="" /></Col>
          <Col xs={6} md={2} ><img className='sm:w-50' src="https://cdn.prod.website-files.com/63fce6fc122b4d8b036757a0/63ff1b61cbd31d488e3a5ff8_Charles%20Schwab.svg" alt="" /></Col>
          <Col xs={6} md={2} ><img className='sm:w-50' src="https://cdn.prod.website-files.com/63fce6fc122b4d8b036757a0/63ff1b88b8a9214280bfccbd_dropbox-3%201.svg" alt="" /></Col>
        </Row>

        <Row className='flex justify-center items-center mt-5'>
          <Col xs={6} md={2}><img src="https://cdn.prod.website-files.com/63fce6fc122b4d8b036757a0/63ff1ba4a10c05870d2569d0_fidelity-investments-3%201.svg" alt="" /></Col>
          <Col xs={6} md={2}><img src="https://cdn.prod.website-files.com/63fce6fc122b4d8b036757a0/63ff1bc8339a977f1114c45d_fresh%20direct.svg" alt="" /></Col>
          <Col xs={6} md={2}><img src="https://cdn.prod.website-files.com/63fce6fc122b4d8b036757a0/63ff1bd520f51d0dc3c7e507_Gitcoin.svg" alt="" /></Col>
          <Col xs={6} md={2}><img src="https://cdn.prod.website-files.com/63fce6fc122b4d8b036757a0/63ff1be3119f35337075f102_hyatt-hotels-1%201.svg" alt="" /></Col>
          <Col xs={6} md={2}><img src="https://cdn.prod.website-files.com/63fce6fc122b4d8b036757a0/63ff1d74f551682172d0889e_macys-logo%201.svg" alt="" /></Col>
          <Col xs={6} md={2}><img src="https://cdn.prod.website-files.com/63fce6fc122b4d8b036757a0/63ff1d925cdbc2b071b705e5_microsoft%201.svg" alt="" /></Col>
        </Row>

        <Row className='flex justify-center items-center mt-5'>
          <Col xs={6} md={2}><img src="https://cdn.prod.website-files.com/63fce6fc122b4d8b036757a0/645abfdcab1afd1257413b3e_TR%2BWebsite%2BLogos.025.png" alt="" /></Col>
          <Col xs={6} md={2}><img src="https://cdn.prod.website-files.com/63fce6fc122b4d8b036757a0/63ff1db4e9d846503ca8fa0d_roche-logo.svg" alt="" /></Col>
          <Col xs={6} md={2}><img src="https://cdn.prod.website-files.com/63fce6fc122b4d8b036757a0/645abfcc75e323605f15a068_TR%2BWebsite%2BLogos.008.png" alt="" /></Col>
          <Col xs={6} md={2}><img src="https://cdn.prod.website-files.com/63fce6fc122b4d8b036757a0/645abfb5b9f0756bc8655367_TR%2BWebsite%2BLogos.005.png" alt="" /></Col>
          <Col xs={6} md={2}><img src="https://cdn.prod.website-files.com/63fce6fc122b4d8b036757a0/63ff1dfebc9839505159dbd7_sweetgreen%20logo.svg" alt="" /></Col>
          <Col xs={6} md={2}><img src="https://cdn.prod.website-files.com/63fce6fc122b4d8b036757a0/63ff1e1843ac9c6bbcfe55d9_teachforamerica-logo.svg" alt="" /></Col>
        </Row>

      </section>


      <section className='mt-36 w-full h-full'>

      </section>

    </>
  )
}

export default Home
