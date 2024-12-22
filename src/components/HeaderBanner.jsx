import React, { useEffect, useState } from 'react';
import { LuCirclePlus } from 'react-icons/lu';
import Brochure from './Brochure';
import { Link } from 'react-router-dom';
import { RiDownload2Fill } from 'react-icons/ri';


function HeaderBanner({
  title,
  description,
  brochure,
  learn,
  classname,
  titleTwo,
  noButton,
  brochureMain
}) {
  const [currentTitle, setCurrentTitle] = useState(title);

  const pdfPath = "/images/Technical_Round_Assignment.pdf"; 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle(prevTitle => (prevTitle === title ? titleTwo : title));
    }, 10000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [title, titleTwo]);

  return (
    <>
      <section className={`w-full h-screen home_section relative ${classname}`}>
        {noButton?null:<div className="headerbuttons flex justify-end items-center space-x-5 relative px-4">
          {brochure ? (
                        <Link to="/new-project-form" className='no-underline'>

            <button className="bg-gradient-to-r from-[#FFC100] to-[#FF9D00]  text-white rounded-lg py-2 px-6 mx-3 font-bold flex items-center space-x-2">
              <LuCirclePlus />
              <span>Submit New Project</span>
            </button>
            </Link>
          ) : null}
          {<Brochure />}
        </div>}

        <div className="flex justify-center items-center h-screen ">
          <div
            className={`flex flex-col max-w-[846px] text-center items-center z-2 ${
              learn ? '' : 'mb-16'
            }`}
          >
            <h1 className="text-yellow-400 font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[62px]">
              {titleTwo ? currentTitle : title}
            </h1>

            <p className="text-sm  md:text-lg lg:text-xl xl:text-[20px]  leading-8 sm:p-5 text-white ">
              {description}
            </p>

            {learn ? (
              <div className="flex justify-center items-center">
                <Link to={'/our-services'} className='text-black'>               
                <button className="header_button">Learn How We Can Help</button>
                </Link>
              </div>
            ) : null}
            {brochureMain ? (
                <a href={pdfPath} download="Technical_Round_Assignment.pdf" style={{ textDecoration: "none" ,color:"black"}}> 
                                <button className="header_button flex items-center space-x-2">
                                    <span>Company Brochure</span>
                                    <RiDownload2Fill />
                                </button>
                            </a>
            ) : null}
          </div>
        </div>
      </section>
    </>
  );
}

export default HeaderBanner;
