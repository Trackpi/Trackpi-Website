import React from 'react';
import SalesTrainingStrategies from './SalesTrainingStrategies';
import OperationsTrainingStrategies from './OperationsTrainingStrategies';
import MarketPositioning from './MarketPositioning';
import Hiring from './Hiring';
import Procurement from './Procurement';
import SalesOutsourcing from './SalesOutsourcing';
import PopUp from '../components/PopUp';
import ConnectButtons from '../components/ConnectButtons';
import HeaderBanner from '../components/HeaderBanner';

function OurServices() {
  return (
    <div>
      <PopUp />
      <div className="overflow-x-hidden">
        {/* Hero Section */}
        <HeaderBanner title="Working Together" description="We help organizations navigate and thrive in the face of complexity."classname='bg3'/>


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