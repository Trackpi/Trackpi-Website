import React from 'react'
import { Button } from 'react-bootstrap'
import SalesTrainingStrategies from './SalesTrainingStrategies';
import OperationsTrainingStrategies from './OperationsTrainingStrategies';
import MarketPositioning from './MarketPositioning';
import Hiring  from "./Hiring"
import Procurement from "./Procurement"
import SalesOutsourcing from "./SalesOutsourcing"

function OurServices() {
  return (
    <div>
      <section className="flex justify-center items-center p-3 w-full h-screen bg1">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl hover:text-sky-500 home-text">
            Working Together
          </h1>
          <div className="font-semibold text-md md:text-2xl">
            We help organizations thrive in complexity
            <div />
            <div className="flex justify-center items-center">
              <Button className="btn-block bg-black mt-5 p-3 rounded-pill btn btn-lg">
                LEARN HOW
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className='mt-28 w-100'>
        <Hiring/>
      </section>
      <section className='mt-28 w-100'>
        <SalesTrainingStrategies/>
      </section>
      <section className='mt-28 w-100'>
        <OperationsTrainingStrategies/>
      </section>
      <section className='mt-28 w-100'>
        <MarketPositioning/>
      </section>
      <section className='mt-28 w-100'>
        <Procurement/>
      </section>
      <section className='mt-28 w-100'>
        <SalesOutsourcing/>
      </section>
    </div>
  );
}

export default OurServices;
