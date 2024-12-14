import React from 'react';
import SalesTrainingStrategies from './SalesTrainingStrategies';
import OperationsTrainingStrategies from './OperationsTrainingStrategies';
import MarketPositioning from './MarketPositioning';
import Hiring from './Hiring';
import Procurement from './Procurement';
import SalesOutsourcing from './SalesOutsourcing';
import PopUp from '../components/PopUp';
import ConnectButtons from '../components/ConnectButtons';

function OurServices() {
  return (
    <div>
      <PopUp />
      <div className="overflow-x-hidden">
        {/* Hero Section */}
        <section className="flex justify-center items-center p-3 w-full h-screen services_section bg1 relative">
          <div className="flex flex-col items-center z-10">
            <h1 className="text-5xl md:text-7xl working_heading mb-5">
              Working Together
            </h1>
            <p className="font-semibold text-md md:text-2xl working_subheading text-center">
              We help organizations navigate and thrive in the face of complexity.
            </p>
          </div>
        </section>

        {/* Content Sections */}
        <section id="hiring" className="mt-5 w-full">
          <Hiring />
        </section>
        <section id="sales-training" className="mt-5 w-full">
          <SalesTrainingStrategies />
        </section>
        <section id="operations-training" className="mt-5 w-full">
          <OperationsTrainingStrategies />
        </section>
        <section id="market-positioning" className="mt-5 w-full">
          <MarketPositioning />
        </section>
        <section id="procurement" className="mt-5 w-full">
          <Procurement />
        </section>
        <section id="sales-outsourcing" className="mt-5 w-full">
          <SalesOutsourcing />
        </section>

        {/* Contact Section */}
      </div>
      <ConnectButtons/>
    </div>
  );
}

export default OurServices;