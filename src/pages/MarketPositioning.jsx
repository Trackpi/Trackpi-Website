import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import maketingImg1 from '../images/marketPositioning1.svg'
import maketingImg2 from '../images/marketPositioning2.svg'
import maketingImg3 from '../images/marketPositioning3.svg'

const MarketPositioning = () => {

      const options = { threshold: 0.1, triggerOnce: true };
  
      const [refMainHeading, inViewMainHeading] = useInView(options);
      const [refFirstSection, inViewFirstSection] = useInView(options);
    const cardData = [
        {
            img: maketingImg1,
            title: "Tailored Strategy",
            description:
                "We design personalized strategies that cater to your market's needs, ensuring impactful messaging.",
        },
        {
            img: maketingImg2,
            title: "Data-Driven Insights",
            description: "In-depth market research and analytics guide your decision-making effectively.",
        },
        {
            img: maketingImg3,
            title: "Building Brand Loyalty",
            description: "We focus on fostering customer loyalty and trust through valuable experiences.",
        },
    ];
   
    return (
        <section ref={refMainHeading} className="bgSection py-20 px-6  lg:px-20 xl:px-24 2xl:px-32 grid gap-12">
            <motion.div  initial={{ opacity: 0, y: 5 }}
                animate={inViewMainHeading ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: .5 }}  className="mx-auto grid max-w-[1048px] gap-6">
                <div
                    style={{ textShadow: "2px 4px  4px #0A0A0A33", color: "white" }}
                    className="text-center text-3xl xl:text-5xl 2xl:text-6xl font-bold"
                >
                    Market Positioning & Branding
                </div>
                <div
                    style={{ color: "white" }}
                    className="font-semibold text-sm md:text-base xl:text-2xl 2xl:text-2xl text-justify lg:text-center "
                >
                    Our customized market positioning strategies will elevate your brand and carve a unique identity in the
                    marketplace.
                </div>
            </motion.div>

            <div ref={refFirstSection} className="w-full flex flex-wrap gap-16 justify-center ">
                {cardData.map((card,index)=>(
                  <motion.div  initial={{ opacity: 0}}
                  animate={inViewFirstSection ? { opacity: 1} : {}}
                  transition={{ duration: 1 }}  style={{borderRadius:"20px"}} className="bg-white px-10 py-7 max-w-[520px] text-center grid gap-3  w-full md:w-[calc(45%)] lg:w-[calc(45%)] " key={index}>
                        <div >
                          <img className="mx-auto" src={card.img} alt="" />
                        </div>
                        <div className="grid gap-3">
                            <div className="font-semibold text-black  text-base md:text-xl lg:text-3xl text-center">{card.title}</div>
                            <p className="text-black text-base md:text-xl lg:text-xl font-medium text-center">{card.description}</p>
                        </div>
                </motion.div>))}
            </div>
        </section>
    );
};

export default MarketPositioning;
