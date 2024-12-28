import React from "react";
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";

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

    const options = { threshold: 0.1, triggerOnce: true  };

    const [refMainHeading, inViewMainHeading] = useInView(options);
    const [refFirstSection, inViewFirstSection] = useInView(options);
    const [refSecondSection, inViewSecondSection] = useInView(options);
    const [refThirdSection, inViewThirdSection] = useInView(options);

    return (
        <section  ref={refMainHeading}className={`${classname} px-6 py-12 lg:px-20 xl:px-24 2xl:px-32 mx-auto grid gap-12  `}>
                <motion.div  initial={{ opacity: 0, z: 50 }}
                animate={inViewMainHeading ? { opacity: 1, z: 0 } : {}}
                transition={{ duration: .5 }} className="mx-auto grid max-w-[1048px] gap-12">
                    <div
                        style={{ textShadow: "2px 4px  4px #0A0A0A33", color: classname ? "white" : "#FF9D00" }}
                        className="text-center text-3xl xl:text-5xl 2xl:text-6xl font-bold"
                    >
                        {heading}
                    </div>
                    {subHeading ? (
                        <div
                            style={{ color: classname ? "white" : "black" }}
                            className="font-semibold text-sm md:text-base xl:text-2xl 2xl:text-2xl text-justify lg:text-center "
                        >
                            {subHeading}
                        </div>
                    ) : null}
                </motion.div>
                <div className="grid gap-24 mb-12">
                <div  ref={refFirstSection} className="flex flex-col md:flex-row justify-between gap-20 ">
                    {/* Text Section */}
                    <motion.div initial={{ opacity: 0, x: -50 }}
                animate={inViewFirstSection ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: .5 }}
                    className="w-full md:w-1/2 my-auto ">
                        <h1 style={{ color: classname ? "black" : "#FFC100" }} className=" mb-4 text-2xl xl:text-4xl 2xl:text-5xl font-bold">
                            {title1}
                        </h1>
                        <p className="text-normal text-sm sm:text-lg md:text-2xl xl:text-xl leading-relaxed">
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
                                <p className="text-justify text-sm sm:text-lg md:text-2xl xl:text-xl xl:leading-7 2xl:leading-10 2xl:text-2xl ">{description1}</p>
                            )}
                        </p>
                    </motion.div>

                    {/* Image Section */}
                    <motion.div  initial={{ opacity: 0 }}
                animate={inViewFirstSection ? { opacity: 1} : {}}
                transition={{ duration: 1 }}   className="w-full md:w-1/2  aspect-[6/5] m-auto">
                        <img className="object-cover  h-full rounded-lg shadow-lg" src={img1} alt={title1} />
                    </motion.div>
                </div>

                {title2 && description2 && img2 ? (
                    <div ref={refSecondSection} className="flex flex-col md:flex-row justify-between gap-20 ">
                        <motion.div  initial={{ opacity: 0 }}
                animate={inViewSecondSection ? { opacity: 1} : {}}
                transition={{ duration: 1 }}  className="w-full md:w-1/2 aspect-[6/5] m-auto">
                            <img className="object-cover w-full h-full rounded-lg shadow-lg" src={img2} alt={title2} />
                        </motion.div>
                        <motion.div  initial={{ opacity: 0, x: 50 }}
                animate={inViewSecondSection ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5 }} className="w-full md:w-1/2 my-auto">
                            <h1
                                style={{ color: classname ? "black" : "#FFC100" }}
                                className="mb-4 text-2xl xl:text-4xl 2xl:text-5xl font-bold"
                            >
                                {title2}
                            </h1>
                            <p className="text-justify text-sm sm:text-lg md:text-2xl xl:text-xl xl:leading-7 2xl:leading-10 2xl:text-2xl ">{description2}</p>
                        </motion.div>
                    </div>
                ) : null}

                {title3 && description3 && img3 ? (
                    <div ref={refThirdSection} className="flex flex-col md:flex-row justify-between gap-20">
                        <motion.div  initial={{ opacity: 0, x: -50 }}
                animate={inViewThirdSection ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5 }}  className="w-full md:w-1/2 my-auto">
                            <h1
                                style={{ color: classname ? "black" : "#FFC100" }}
                                className="mb-4 text-2xl xl:text-4xl 2xl:text-5xl font-bold"
                            >
                                {title3}
                            </h1>
                            <p className="text-justify text-sm sm:text-lg md:text-2xl xl:text-xl xl:leading-7 2xl:leading-10 2xl:text-2xl  ">{description3}</p>
                        </motion.div>

                        <motion.div  initial={{ opacity: 0 }}
                animate={inViewThirdSection ? { opacity: 1} : {}}
                transition={{ duration: 1 }}  className="w-full md:w-1/2  aspect-[6/5] m-auto">
                            <img className="object-cover w-full h-full rounded-lg shadow-lg" src={img3} alt={title3} />
                        </motion.div>
                    </div>
                ) : null}
                </div>
        </section>
    );
}

export default ServicesSub;
