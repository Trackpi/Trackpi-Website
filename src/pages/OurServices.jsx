import React from 'react'
import { Button } from 'react-bootstrap'

function OurServices() {
  return (
    <div>
      <section className='flex justify-center items-center p-3 w-full h-screen bg1'>
        <div className='flex flex-col items-center'>
          <h1 className='text-5xl md:text-7xl hover:text-sky-500 home-text'>
            Working Together
          </h1>
          <div className='font-semibold text-md md:text-2xl'>
            We help organizations thrive in complexity
            <div />
            <div className='flex justify-center items-center'>
              <Button className='btn-block bg-black mt-5 p-3 rounded-pill btn btn-lg'>
                LEARN HOW
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OurServices