import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

function KeyBenefitServices() {

    const options = { threshold: 0.1, triggerOnce: true };
    const [refFirstSection, inViewFirstSection] = useInView(options);

    const features = [
        {
            name: "Enhanced Productivity",
            description: "Empower your team to work smarter and achieve more in less time.",
        },
        {
            name: "Improved Communication",
            description: "Strengthen collaboration and create a cohesive team environment.",
        },
        {
            name: "Increased Profitability",
            description: "Leverage efficient processes to maximize revenue and minimize waste.",
        },
    ];
    return (
        <section className="pb-24 px-6 lg:px-20 xl:px-24 2xl:px-32 grid gap-10">
            <div className="w-full px-6 lg:px-20 xl:px-24 2xl:px-32 mt-10 mx-auto ">
                <h1 style={{ color: "#FFC100" }} className=" mb-4 text-3xl xl:text-5xl 2xl:text-6xl text-center font-bold">
                    Key Benefits of Our Training
                </h1>
            </div>
            <div ref={refFirstSection} className="flex flex-wrap gap-10 justify-center lg:justify-between">
                {features.map((card,index)=>(
                    <motion.div initial={{ opacity: 0, x: -20 }}
                    animate={inViewFirstSection ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: .5 }} className="w-full sm:w-[calc(50%-20px)] lg:w-[calc(30%)]   text-center rounded w-max-[410px] p-10 grid gap-3 bg-gradient-to-r from-[#FFD152] via-[#FFC100] to-[#FFD152]" key={index}>
                        <div className="font-semibold text-lg md:text-xl lg:text-3xl">
                            {card.name}
                        </div>
                        <div className="font-medium text-base md:text-xl lg:text-2xl px-2">
                            {card.description}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default KeyBenefitServices;
