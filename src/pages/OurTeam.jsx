import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';

function OurTeam() {
  return (
    <>
      <section className='flex justify-center items-center p-5 w-full'>
        <div className='flex flex-col items-center'>
          <h1 className='text-5xl md:text-7xl hover:text-sky-500 home-text'>
            Who We Are
          </h1>
        </div>
      </section>

      <section className='mt-36 w-full h-screen'>
        <Container>
          <Row>
            <Col md={6} className='flex flex-col'>
              <h1 className='fw-bold display-5'>We’re The Ready</h1>
              <p className='text-xl md:text-justify md:text-lg'>We’re here to change how the world works—from business as usual to brave new work. It takes an unusual person to disrupt decades of tradition and guide hundreds or thousands of people through an experience that demands their bravery, vulnerability, and curiosity. It takes conviction to join a decentralized, self-managing, public benefit corporation where reputation matters more than position.</p>
            </Col>
            <Col md={6}>
              <img src="https://cdn.prod.website-files.com/63f64214650d1272fb21690d/64ecb80f6f19b2addac4e0f1_image_WeAreTheReady1-p-800.webp" alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className='mt-36 w-full h-screen'>
        <Container>
          <Row>
            <Col md={6}>
              <img src="https://cdn.prod.website-files.com/63f64214650d1272fb21690d/64495b02c779ff9ad9a7990f_image_OurPeopleForeground%402x-p-1080.webp" alt="" />
            </Col>
            <Col md={6} className='flex flex-col'>
              <h1 className='fw-bold display-5'>Our people</h1>
              <p className='text-justify text-xl md:text-lg'>The people who make up The Ready are specialists in the ways of organizational culture and transformation. Yet within that world we are generalists drawing freely from the principles and practices of dozens of theories and hundreds of iconoclastic firms. We are coaches, facilitators, academics, psychologists, technologists, and corporate veterans who have found each other in our quest to make work better. Our backgrounds are varied but our ambition is united.</p>
            </Col>
          </Row>
        </Container>
      </section>


      <section className='mt-36 w-full h-screen'>
        <Container>
          <Row>
            <Col md={6} className='flex flex-col'>
              <h1 className='fw-bold display-5'>Join our team</h1>
              <p className='text-xl md:text-justify md:text-lg'>We are always on the lookout for our next stunning colleague. If you either have experience working closely with organizations to help them think and act differently or are hoping to apply your unique skillset toward changing how the world works and participating in a self-managing environment, <span className='underline'>please learn about our hiring process and consider applying with us!</span></p>
              <p className='text-xl md:text-justify md:text-lg'>The Ready’s hiring team reviews all applications anonymously and will be in touch if there is a fit. If you need to get in touch with them, please email <span className='underline'>hiring@theready.com.</span></p>
              <Button className='bg-white mt-5 p-2 rounded-pill fw-bold text-black'>
                JOIN OUR TEAM <i className="fa-arrow-right fa-solid"></i>
              </Button>
            </Col>
            <Col md={6}>
              <img src="https://cdn.prod.website-files.com/63f64214650d1272fb21690d/64495b2e1589c13e25e8db88_image_OurTeamForeground%402x-p-1080.webp" alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className='mt-32 mb-32 w-full'>
        <Container className='flex flex-col gap-5'>
          <Row>
            <h1 className='fw-bold display-5'>The Ready from A–Z</h1>
          </Row>

          <Row className='flex justify-center items-center'>
            <Col md={4} sm={12}>
              <Card >
                <Card.Img variant="top" src="https://cdn.prod.website-files.com/63fce6fc122b4d8b036757a0/63fce813121cf15b66a4a342_image_SharanBall-p-500.webp" />
                <Card.Body>
                  <Card.Title>Sharan Bal</Card.Title>
                  <Card.Text>
                    Georgia, USA
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} sm={12}>
              <Card >
                <Card.Img variant="top" src="https://cdn.prod.website-files.com/63fce6fc122b4d8b036757a0/65204a533d23e5f0bd75aeb5_image_MattBasford-p-500.webp" />
                <Card.Body>
                  <Card.Title>Matt Basford</Card.Title>
                  <Card.Text>
                    New York, USA
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} sm={12}>
              <Card >
                <Card.Img variant="top" src="https://cdn.prod.website-files.com/63fce6fc122b4d8b036757a0/6733b5ea13122525ab85c122_image_JasonBeck%402x-p-500.webp" />
                <Card.Body>
                  <Card.Title>Jason Beck</Card.Title>
                  <Card.Text>
                    California, USA
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className='flex justify-center items-center'>
            <Col md={4} sm={12}>
              <Card >
                <Card.Img variant="top" src="https://cdn.prod.website-files.com/63fce6fc122b4d8b036757a0/63fce813121cf15b66a4a342_image_SharanBall-p-500.webp" />
                <Card.Body>
                  <Card.Title>Sharan Bal</Card.Title>
                  <Card.Text>
                    Georgia, USA
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} sm={12}>
              <Card >
                <Card.Img variant="top" src="https://cdn.prod.website-files.com/63fce6fc122b4d8b036757a0/65204a533d23e5f0bd75aeb5_image_MattBasford-p-500.webp" />
                <Card.Body>
                  <Card.Title>Matt Basford</Card.Title>
                  <Card.Text>
                    New York, USA
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} sm={12}>
              <Card >
                <Card.Img variant="top" src="https://cdn.prod.website-files.com/63fce6fc122b4d8b036757a0/6733b5ea13122525ab85c122_image_JasonBeck%402x-p-500.webp" />
                <Card.Body>
                  <Card.Title>Jason Beck</Card.Title>
                  <Card.Text>
                    California, USA
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className='flex justify-center items-center'>
            <Col md={4} sm={12}>
              <Card >
                <Card.Img variant="top" src="https://cdn.prod.website-files.com/63fce6fc122b4d8b036757a0/63fce813121cf15b66a4a342_image_SharanBall-p-500.webp" />
                <Card.Body>
                  <Card.Title>Sharan Bal</Card.Title>
                  <Card.Text>
                    Georgia, USA
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} sm={12}>
              <Card >
                <Card.Img variant="top" src="https://cdn.prod.website-files.com/63fce6fc122b4d8b036757a0/65204a533d23e5f0bd75aeb5_image_MattBasford-p-500.webp" />
                <Card.Body>
                  <Card.Title>Matt Basford</Card.Title>
                  <Card.Text>
                    New York, USA
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} sm={12}>
              <Card >
                <Card.Img variant="top" src="https://cdn.prod.website-files.com/63fce6fc122b4d8b036757a0/6733b5ea13122525ab85c122_image_JasonBeck%402x-p-500.webp" />
                <Card.Body>
                  <Card.Title>Jason Beck</Card.Title>
                  <Card.Text>
                    California, USA
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className='flex justify-center items-center'>
            <Col md={4} sm={12}>
              <Card >
                <Card.Img variant="top" src="https://cdn.prod.website-files.com/63fce6fc122b4d8b036757a0/63fce813121cf15b66a4a342_image_SharanBall-p-500.webp" />
                <Card.Body>
                  <Card.Title>Sharan Bal</Card.Title>
                  <Card.Text>
                    Georgia, USA
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} sm={12}>
              <Card >
                <Card.Img variant="top" src="https://cdn.prod.website-files.com/63fce6fc122b4d8b036757a0/65204a533d23e5f0bd75aeb5_image_MattBasford-p-500.webp" />
                <Card.Body>
                  <Card.Title>Matt Basford</Card.Title>
                  <Card.Text>
                    New York, USA
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} sm={12}>
              <Card >
                <Card.Img variant="top" src="https://cdn.prod.website-files.com/63fce6fc122b4d8b036757a0/6733b5ea13122525ab85c122_image_JasonBeck%402x-p-500.webp" />
                <Card.Body>
                  <Card.Title>Jason Beck</Card.Title>
                  <Card.Text>
                    California, USA
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>


        </Container>
      </section>

    </>
  )
}

export default OurTeam