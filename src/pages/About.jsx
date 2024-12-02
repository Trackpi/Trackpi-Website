import React from 'react';
import OurTeam from './OurTeam';

function About() {
  return (
    <>
      <section className="flex justify-center items-center p-3 w-full h-screen about-section ">
        <div className="about-section-overlay"></div>
        <div className="flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl  hover:text-sky-500 home-text">
            About Us
          </h1>
          <h2 className="text-lg md:text-2xl mt-4">
            Learn more about our journey and what drives us forward.
          </h2>
        </div>
      </section>

      <section className="mt-12">
        <OurTeam />
      </section>
    </>
  );
}

export default About;
