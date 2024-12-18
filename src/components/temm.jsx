import React from 'react'

function temm() {
  return (
    <div>
        <section className="mt-28 w-full px-6 lg:px-20 xl:px-24 2xl:px-32 mx-auto">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20 xl:gap-20  2xl:gap-32 items-center">
          {/* Text Container */}
          <div className="md:w-1/2">
            <h1 className="font-bold text-[#FFC100] text-3xl xl:text-5xl 2xl:text-6xl pb-2">
              We see the challenge
            </h1>
            <p className="text-justify text-sm sm:text-lg md:text-2xl xl:text-xl xl:leading-7 2xl:leading-10 2xl:text-3xl text-[#0A0A0A]">
              We’re all wrestling with complexity. Every company, work function,
              and team now faces a tall order: to be more adaptive, strategic,
              effective, human, and equitable amidst growing uncertainty.
            </p>
          </div>

          {/* Image Container */}
          <div className="md:w-1/2 flex justify-end">
            <img
              src={home1}
              alt="Strategic Procurement"
              className="shadow-lg rounded-lg w-full h-[300px] md:h-[390px] 2xl:h-[690px] object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default temm