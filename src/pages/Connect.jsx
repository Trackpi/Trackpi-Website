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
        noButton={true}
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
                title: "Office Location",
                text: "Kakkanad, Kochi, India",
              },
              {
                icon: "fa-phone",
                title: "Phone Number",
                text: "+91 8078179646",
              },
              {
                icon: "fa-envelope",
                title: "E-mail Id",
                text: "trackpi@gmail.com",

              },
            ].map((card, index) => (
              <div
                key={index}
                className="card card1 pt-4 rounded-2xl fixed-card sm:w-[410px] h-[230px] p-[30px] flex flex-col justify-between items-center gap-5 text-center shadow-lg"
              >

                <div className="flex flex-col items-center gap-1 space-y-2.5 space-y-2.5 sm:space-y-3 md:space-y-3 lg:space-y-5">
                <div className="icon mt-2 text-lg lg:text-4xl text-amberCustom mb-4">
                  <i className={`fa-solid ${card.icon}`}></i>
                </div>
                <h6 className="text-sm md:text-xl lg:text-2xl xl:text-2xl font-medium">
                  {card.title}
                </h6>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl font-bold">
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
            <h1 className="mb-3 text-xl sm:text-xl md:text-xl lg:text-3xl xl:text-7xl font-bold connect-text-Color ">
              You’re ready to <br /> take the next step
            </h1>

            <p className="mb-5 text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-2xl leading-6 sm:leading-7 md:leading-8 lg:leading-9 xl:leading-10 font-medium">
              We’re all wrestling with complexity. Every company, work function,
              and team now faces a tall order: to be more adaptive, strategic,
              effective, human, and equitable amidst growing uncertainty.
            </p>
          </Row>
        </Container>
        <Container className="flex flex-col items-center">
          <div className="w-full ">
            <Details />
          </div>
        </Container>
      </section>
      <ConnectButtons />
    </>
  );
}

export default Connect;
