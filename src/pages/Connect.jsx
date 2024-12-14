
import React from 'react'
import Details from '../components/Form';
import { Container, Row} from 'react-bootstrap';
import ConnectButtons from '../components/ConnectButtons';

function Connect() {
  return (
    <div className="first">
      <section className="flex justify-center items-center p-3 w-full h-screen connect_section bg1 relative">
        <div className="flex flex-col items-center z-10 text-center">
          <h1 className="text-5xl md:text-7xl working_heading mb-5">
            Connect with us
          </h1>
      
          <p className="font-semibold text-md md:text-2xl working_subheading">
            Reach out to us for any inquiries or support — we are here to help.
          </p>
        </div>
      </section>
      <div className='bb pt-3'>
        <h1 className='text-center text-3xl font-bold'>Contact Us</h1>
            
        <div className='aa grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-16'>    
          <div className="card-group cards rounded">
              <div className="card card1 pt-4 rounded-2xl">
                <div className="icon">
                   <i className="fa-solid fa-location-dot icon-color"></i>
                </div>
               
                <div className="card-body">
                  <h6 className="card-title">Our Office Location</h6>
                  <p className="card-text fw-bold">Kakkanad, Kochi, India</p>
                </div>
                
              </div>
              <div className="card card1 pt-4 ">
                 <div className="icon">
                   <i className="fa-solid fa-phone icon-color"></i> 
                 </div>
               
                <div className="card-body">
                  <h6 className="card-title">Phone</h6>
                  <p className="card-text fw-bold">+91 8078179646</p>
                </div>
              
              </div>
              <div className="card card1 pt-4">
                  <div className="icon">
                     <i className="fa-solid fa-envelope icon-color"></i> 
                  </div>
               
                <div className="card-body">
                  <h6 className="card-title">E-mail</h6>
                  <p className="card-text fw-bold">trackpi@gmail.com</p>
                </div>
    
          </div>
        </div>
      </div>
      </div>
      <section className=" w-full">
        <Container className="text-center">
          <Row className="mt-5">
              <h1 className="mb-3 fw-bold connect-text-Color ">
                You’re ready to <br /> take the next step
              </h1>
              <p className="mb-5">
                We’re all wrestling with complexity. Every company, work function,
                and team now faces a tall order: to be more adaptive, strategic,
                effective, human, and equitable amidst growing uncertainty.
              </p>
              </Row>
              </Container>
              <Container className='flex flex-col items-center'>
              <div className='w-full md:w-1/2 '>
              <Details/>
              </div>
              </Container>
      </section>
      <ConnectButtons/>
    </div>
  );
}

export default Connect;
