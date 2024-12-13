
import React from 'react'
import Details from '../components/Form';
import { Container, Row} from 'react-bootstrap';
import ConnectButtons from '../components/ConnectButtons';

function Connect() {
  return (
    <div class="first">
      <section className="flex justify-center items-center p-3 w-full h-screen connect_section bg1 relative">
        <div className="flex flex-col items-center z-10">
          <h1 className="text-5xl md:text-7xl working_heading mb-5">
            Connect with us
          </h1>
          <p className="font-semibold text-md md:text-2xl working_subheading text-center">
            Reach out to us for any inquiries or support — we are here to help.
          </p>
        </div>
      </section>
      <div className='bb'>
        <h1>Contact Us</h1>
            
        <div className='aa'>    
          <div class="card-group cards">
              <div class="card card1">
                <div class="icon">
                   <i className="fa-solid fa-location-dot me-2"></i>
                </div>
                {/* <img src="..." class="card-img-top" alt="..."> */}
                <div class="card-body">
                  <h5 class="card-title">Our Office Location</h5>
                  <p class="card-text">Kakkanad, Kochi, India</p>
                </div>
                
              </div>
              <div class="card card1">
                 <div class="icon">
                   <i className="fa-solid fa-phone me-2"></i> 
                 </div>
                {/* <img src="..." class="card-img-top" alt="..."> */}
                <div class="card-body">
                  <h5 class="card-title">Phone</h5>
                  <p class="card-text">+91 8078179646</p>
                </div>
              
              </div>
              <div class="card card1">
                  <div class="icon">
                     <i className="fa-solid fa-envelope me-2"></i> 
                  </div>
                {/* <img src="..." class="card-img-top" alt="..."> */}
                <div class="card-body">
                  <h5 class="card-title">E-mail</h5>
                  <p class="card-text">trackpi@gmail.com</p>
                </div>
    
          </div>
        </div>
      </div>
      </div>
      <section className="mt-32 w-full">
        <Container className="flex flex-col items-center text-justify">
          <Row className="mt-5 md:w-1/2">
              <h1 className="mb-3 fw-bold display-5">
                You’re ready to <br /> take the next step
              </h1>
              <p className="mb-5 text-xl md:text-justify md:text-lg">
                We’re all wrestling with complexity. Every company, work function,
                and team now faces a tall order: to be more adaptive, strategic,
                effective, human, and equitable amidst growing uncertainty.
              </p>
              <Details/>
          </Row>
        </Container>
      </section>
      <ConnectButtons/>
    </div>
  );
}

export default Connect;
