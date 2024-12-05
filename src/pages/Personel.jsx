//import React from 'react';

import PersonnelDetailBlk from '../components/personnelDetailBlk';

function Personel() {
  return (
    <>
      <section className="flex justify-center items-center p-3 w-full h-screen personel_section bg1 relative">

        <div className="flex flex-col items-center z-10">
          <h1 className="text-5xl md:text-7xl  home-text working_heading mb-5">
          PAUL WALKER
          </h1>
          <p className="font-semibold text-md md:text-2xl working_subheading text-center">
          Chief Executive Officer
          </p>
        </div>
        </section>

      <section className="mt-12">
      <PersonnelDetailBlk/>
        
      </section>
     
    </>
  );
}

export default Personel;
