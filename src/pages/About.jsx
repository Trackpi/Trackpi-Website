import React from 'react';
import OurTeam from './OurTeam';

function About() {
  return (
    <>
      <section className="flex justify-center items-center p-3 w-full h-screen bg1">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl hover:text-sky-500 home-text">
            About Us
          </h1>
        </div>
      </section>

      <section className="mt-5">
        <OurTeam />
      </section>
    </>
  );
}

export default About;
