import React from "react";
import Details from "../components/Form";
import { Container, Row } from "react-bootstrap";
import ConnectButtons from "../components/ConnectButtons";
import HeaderBanner from "../components/HeaderBanner";

function Connect() {

  return (
  

     
      <>
       

     <HeaderBanner title="Connect Us" description="Reach out to us for any inquiries or support — we are here to help." brochure classname='bgFive'/>
      <div className='bb '>
        <h1 className=" text-center text-6xl font-bold mb-8 ">Contact Us</h1>

            
        <div className='aa  grid grid-cols-1 md:grid-cols-3 gap-8 px-6  md:px-16'>    
          <div className="card-group w-full cards rounded">
              <div className="card card1 pt-4 rounded-2xl fixed-card">
                <div className="icon">
                   <i className="fa-solid fa-location-dot icon-color"></i>
                </div>
               
                <div className="card-body flex flex-col justify-center items-center ">
                  <h6 className="card-title">Our Office Location</h6>
                  <br/>
                  <p className="card-text fw-bold">Kakkanad, Kochi, India</p>
                </div>
                
              </div>
              <div className="card card1 pt-4 fixed-card">
                 <div className="icon">
                   <i className="fa-solid fa-phone icon-color"></i> 
                 </div>
               
                <div className="card-body flex flex-col justify-center items-center">
                  <h6 className="card-title">Phone</h6>
                  <br/>
                  <p className="card-text fw-bold">+91 8078179646</p>
                </div>
              
              </div>
              <div className="card card1 pt-4 fixed-card">
                  <div className="icon">
                     <i className="fa-solid fa-envelope icon-color"></i> 
                  </div>
               
                <div className="card-body flex flex-col justify-center items-center">
                  <h6 className="card-title">E-mail</h6>
                  <br/>
                  <p className="card-text fw-bold">trackpi@gmail.com</p>
                </div>
    
          </div>
        </div>
      </div>
      </div>
      <section className=" w-full px-6 lg:px-20 xl:px-24 2xl:px-32 py-8 mx-auto ">
        <Container fluid className="text-center">
          <Row className="mt-5">
              <h1 className="mb-3 text-7xl fw-bold connect-text-Color ">
                You’re ready to <br /> take the next step
              </h1>
              <p className="mb-5 font-medium text-sm sm:text-lg md:text-2xl xl:text-xl xl-leading-7 2xl:leading-10 2xl:text-3xl">
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
    </>
   
  );
}

export default Connect;
