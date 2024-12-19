import React, { useEffect, useState } from "react";
import { LuCirclePlus } from "react-icons/lu";
import Brochure from "./Brochure";

function HeaderBanner({ title, description, brochure, learn, classname, titleTwo }) {

    const [currentTitle, setCurrentTitle] = useState(title);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTitle((prevTitle) => (prevTitle === title ? titleTwo : title));
        }, 10000);

        return () => clearInterval(interval); // Cleanup the interval on component unmount
    }, [title, titleTwo]);

    return (
        <>
            <section className={`w-full h-screen home_section relative ${classname}`}>
                <div className="headerbuttons flex justify-end items-center space-x-5 relative px-4">
                    {brochure ?  <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-lg py-2 px-6 mx-3 font-bold flex items-center space-x-2">
                        <LuCirclePlus />
                        <span>Submit New Project</span>
                    </button>
                    : null}
                     <Brochure />
                </div>

                <div className="flex justify-center items-center h-screen ">
                    <div className={`flex flex-col max-w-[846px] text-center items-center z-2 ${learn ? "" : "mb-16"}`}>
                        <h1 className="text-yellow-400 font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[62px]">
                            {titleTwo?currentTitle:title}
                        </h1>

                        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[26px] sm:p-5 text-white text-center">
                            {description}
                        </p>

                        {learn ? (
                            <div className="flex justify-center items-center">
                                <button class="header_button">Learn How We Can Help</button>
                            </div>
                        ) : null}
                    </div>
                </div>
            </section>
        </>
    );
}

export default HeaderBanner;
