//import React from 'react';
import OurTeam from './OurTeam';
import PopUp from '../components/PopUp';
import Brochure from '../components/Brochure';
import ConnectButtons from '../components/ConnectButtons';

function About() {
  return (
    <>
        <PopUp/>
      <section className="flex justify-center items-center p-3 w-full h-screen about_section bg1 relative">
        <div className="flex flex-col items-center z-10">
          <h1 className="text-5xl md:text-7xl  working_heading mb-5">
            About Us
          </h1>
          <p className="font-semibold text-md md:text-2xl working_subheading text-center">
            Learn more about our journey and what drives us forward.
          </p>
          <Brochure />
        </div>
      </section>

      <section className="mt-12">
        <OurTeam />
      </section>

      <section className='mb-28'>
    
      </section>
     <ConnectButtons/>
    </>
  );
}

export default About;
