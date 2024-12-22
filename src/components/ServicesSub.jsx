import React from "react";
import { motion } from 'framer-motion';

function ServicesSub({
    heading,
    subHeading,
    classname,
    title1,
    description1,
    img1,
    title2,
    description2,
    img2,
    title3,
    description3,
    img3,
    isPointWise,
}) {
    return (
        <div className={`${classname}`}>
            <div className="container ">
                <div className="mx-auto pt-20 pb-12 grid gap-[1.875rem] max-w-[1048px]">
                    <div
                        style={{ textShadow: "2px 4px  4px #0A0A0A33", color: classname ? "white" : "#FF9D00" }}
                        className="text-center text-6xl font-bold"
                    >
                        {heading}
                    </div>
                    {subHeading ? (
                        <div
                            style={{ color: classname ? "white" : "black" }}
                            className="font-semibold text-2xl text-center"
                        >
                            {subHeading}
                        </div>
                    ) : null}
                </div>
                <div className="flex flex-col md:flex-row justify-between gap-20 my-12">
                    {/* Text Section */}
                    <div
                    className="w-full md:w-1/2 my-auto ">
                        <h1 style={{ color: classname ? "black" : "#FFC100" }} className=" mb-4 text-[2.75rem] font-bold">
                            {title1}
                        </h1>
                        <p className="text-normal text-2xl leading-relaxed">
                            {isPointWise ? (
                                <div className=" mt-4">
                                    {description1
                                        .split(". ")
                                        .filter((sentence) => sentence.trim() !== "")
                                        .map((sentence, index) => (
                                            <div key={index}>{sentence.endsWith(".") ? sentence : sentence + "."}</div>
                                        ))}
                                </div>
                            ) : (
                                <p className="text-normal text-2xl leading-relaxed">{description1}</p>
                            )}
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className="w-full md:w-1/2  aspect-[6/5] m-auto">
                        <img className="object-cover w-full h-full rounded-lg shadow-lg" src={img1} alt={title1} />
                    </div>
                </div>

                {title2 && description2 && img2 ? (
                    <div className="flex flex-col md:flex-row justify-between ">
                        <div className="w-full md:w-1/2 p-10 aspect-[6/5] m-auto">
                            <img className="object-cover w-full h-full rounded-lg shadow-lg" src={img2} alt={title2} />
                        </div>
                        <div className="w-full md:w-1/2 my-auto">
                            <h1
                                style={{ color: classname ? "black" : "#FFC100" }}
                                className=" mb-4 text-[2.75rem] font-bold"
                            >
                                {title2}
                            </h1>
                            <p className="text-normal text-2xl leading-relaxed">{description2}</p>
                        </div>
                    </div>
                ) : null}

                {title3 && description3 && img3 ? (
                    <div className="flex flex-col md:flex-row justify-between ">
                        <div className="w-full md:w-1/2 my-auto">
                            <h1
                                style={{ color: classname ? "black" : "#FFC100" }}
                                className=" mb-4 text-[2.75rem] font-bold"
                            >
                                {title3}
                            </h1>
                            <p className="text-normal text-2xl leading-relaxed">{description3}</p>
                        </div>

                        <div className="w-full md:w-1/2 p-10 aspect-[6/5] m-auto">
                            <img className="object-cover w-full h-full rounded-lg shadow-lg" src={img3} alt={title3} />
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
}

export default ServicesSub;
