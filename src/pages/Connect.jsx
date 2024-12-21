import React from 'react';
import Details from '../components/Form';
import { Container, Row } from 'react-bootstrap';
import ConnectButtons from '../components/ConnectButtons';
import HeaderBanner from '../components/HeaderBanner';

function Connect() {
  return (
    <>
      <HeaderBanner
        title="Connect Us"
        description="Reach out to us for any inquiries or support — we are here to help."
        brochure
        classname="bgFive"
      />

      <div className="bb">
        <h1 className="text-center text-4xl sm:text-5xl md:text-6xl font-bold mb-8">
          Contact Us
        </h1>

        <div className="aa grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-16">
          <div className="card-group w-full flex flex-wrap justify-between gap-10">
            {[
              {
                icon: "fa-location-dot",
                title: "Our Office Location",
                text: "Kakkanad, Kochi, India",
              },
              {
                icon: "fa-phone",
                title: "Phone",
                text: "+91 8078179646",
              },
              {
                icon: "fa-envelope",
                title: "E-mail",
                text: "trackpi@gmail.com",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="card card1 pt-4 rounded-2xl fixed-card sm:w-[410px] h-[230px] p-[30px] flex flex-col justify-between items-center gap-10 text-center shadow-lg"
              >
                <div className="flex flex-col items-center space-y-2.5 space-y-2.5 sm:space-y-3 md:space-y-4 lg:space-y-5">
                <div className="icon text-lg lg:text-xl text-amberCustom mb-4">
                  <i className={`fa-solid ${card.icon}`}></i>
                </div>
                <h6 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium">
                  {card.title}
                </h6>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold">
                  {card.text}
                </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="w-full px-6 lg:px-20 xl:px-24 2xl:px-32 py-8 mx-auto">
        <Container fluid className="text-center">
          <Row className="mt-5">
            
            <h1 className="mb-3 text-xl sm:text-xl md:text-xl lg:text-xl xl:text-9xl font-bold connect-text-Color ">
              You’re ready to  take the next step
            </h1>
            
            <p className="mb-5 text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-6 sm:leading-7 md:leading-8 lg:leading-9 xl:leading-10 font-medium">

      <div className="bb ">
        <h1 className=" text-center text-6xl font-bold mb-8 ">Contact Us</h1>

        <div className="aa  grid grid-cols-1 md:grid-cols-3 gap-8 px-6  md:px-16">
          <div className="card-group w-full  flex flex-wrap justify-between gap-10 ">
            <div className="card card1 pt-4 rounded-2xl fixed-card sm:w-[410px] h-[230px] p-[30px]">
              <div className="icon">
                <i className="fa-solid fa-location-dot icon-color"></i>
              </div>

              <div className="card-body flex flex-col justify-center items-center ">
                <h6
                  className="card-title text-lg leading-tight"
                  style={{ fontSize: '20px' }}
                >
                  Our Office Location
                </h6>
                <br />
                <p
                  className="card-text fw-bold text-center"
                  style={{ fontSize: '24px', lineHeight: '36px' }}
                >
                  Kakkanad, Kochi, India
                </p>
              </div>
            </div>
            <div className="card card1 pt-4 fixed-card sm:w-[410px] h-[230px] p-[30px]">
              <div className="icon">
                <i className="fa-solid fa-phone icon-color"></i>
              </div>

              <div className="card-body flex flex-col justify-center items-center">
                <h6
                  className="card-title text-lg leading-tight"
                  style={{ fontSize: '20px' }}
                >
                  Phone
                </h6>
                <br />
                <p
                  className="card-text fw-bold text-center"
                  style={{ fontSize: '24px', lineHeight: '36px' }}
                >
                  +91 8078179646
                </p>
              </div>
            </div>
            <div className="card card1 pt-4 fixed-card sm:w-[410px] h-[230px] p-[30px]">
              <div className="icon">
                <i className="fa-solid fa-envelope icon-color"></i>
              </div>

              <div className="card-body flex flex-col justify-center items-center">
                <h6
                  className="card-title text-lg leading-tight"
                  style={{ fontSize: '20px' }}
                >
                  E-mail
                </h6>
                <br />
                <p
                  className="card-text fw-bold text-center"
                  style={{ fontSize: '24px', lineHeight: '36px' }}
                >
                  trackpi@gmail.com
                </p>
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
        <Container className="flex flex-col items-center">

          <div className="w-full ">

          <div className="w-full md:w-1/2 ">

            <Details />
          </div>
        </Container>
      </section>
      <ConnectButtons />
    </>
  );
}

export default Connect;
