import React, { useRef } from "react";
import footerBanner from "../../images/footerbanner1.jpg";
import "../../CSS/footer.css";
import { Link } from "react-router-dom";
import { link } from "framer-motion/client";

function FooterSecondary() {
     const videoRefs = useRef([]); 
    
        const videoData = [
            {
                platform: "YouTube",
                previewUrl: "https://www.youtube.com/embed/Z2jiF9w-srU",
                isYouTube: true,
                link:"https://youtube.com/playlist?list=PLooudDpkO1P_3QSsRvL2ujchiryjLHtB_&si=7C3DQ8aY8gLfK5pa"
            },
            {
                platform: "YouTube",
                previewUrl: "https://www.youtube.com/embed/Z2jiF9w-srU",
                isYouTube: true,
                link:"https://www.instagram.com/trackpi_official?igsh=YmwyaHpzYXBueWJz"
            },
            {
                platform: "YouTube",
                previewUrl: "https://www.youtube.com/embed/Z2jiF9w-srU",
                isYouTube: true,
                link:"https://www.facebook.com/profile.php?id=61565947096778"
            },
        ];
    
        // const platformURLs = {
        //     youtube: "https://youtube.com/playlist?list=PLooudDpkO1P_3QSsRvL2ujchiryjLHtB_&si=7C3DQ8aY8gLfK5pa",
        //     youtube: "https://www.instagram.com/trackpi_official?igsh=YmwyaHpzYXBueWJz",
        //     youtube: "https://www.facebook.com/profile.php?id=61565947096778",
        // };
    
        const handleHover = (index) => {
            const video = videoRefs.current[index];
            if (video && videoData[index].isYouTube) {
                video.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
                setTimeout(() => {
                    video.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
                }, 20000);
            }
        };
    
        const handleMouseLeave = (index) => {
            const video = videoRefs.current[index];
            if (video && videoData[index].isYouTube) {
                video.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
            }
        };
  return (
    <>
                    <div className="footer-container text-white" style={{ backgroundColor: "#0A0A0A" }}>
                        <div className="text-center w-full grid gap-[20px] sm:gap-[22px] md:gap-[25px] lg:gap-[28px] xl:gap-[30px] py-[20px] sm:py-[22px] md:py-[25px] lg:py-[28px] xl:py-[30px]">
                            <div className="grid gap-[10px]">
                                <div className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[40px] xl:text-[60px] 2xl:text-[72px] font-normal">
                                Begin Your Journey With
                                <span style={{ color: "#FFC100" }} className="ms-2">
                                    TRACK
                                </span>
                                <span className="text-light">PI</span>
                            </div>
                            <div className="text-[14px] sm:text-[16px] md:text-[20px] lg:text-[28px] xl:text-[42px] 2xl:text-[48px] font-normal">
                                we are here to help.
                            </div>
                            </div>
                            
                            <Link to={"/connect-us"}>
                                <button
                                    className=" join_footer_btn text-light px-[20px] py-[10px] sm:px-[24px] sm:py-[12px] md:px-[30px] md:py-[15px] lg:px-[40px] lg:py-[20px] xl:px-[40px] xl:py-[15px]  text-[12px] sm:text-[14px] md:text-[16px] lg:text-[20px] xl:text-[32px] 2xl:text-[36px]"

                                >
                                    Join with us
                                </button>
                            </Link>
                        </div>
                        <div className="m-0 h-[1px] bg-white w-100"></div>
                        <div className="">
                            <div className=" text-center font-bold text-[#ffc100] text-[18px] sm:text-[20px] md:text-[30px] lg:text-[40px] xl:text-[50px] 2xl:text-[60px] py-[18px] sm:py-[20px] md:py-[30px] lg:py-[40px] xl:py-[50px] 2xl:py-[60px]">
                                Discover Winning Business Strategies
                            </div>
        
                            <div className="w-100 row" style={{ padding: "0 50px" }}>
                                {videoData.map((video, index) => (
                                    <div
                                        key={index}
                                        className="text-center col-lg-4 col-md-6 col-sm-12 m-auto p-3 p-sm-5 p-md-5"
                                        onMouseEnter={() => handleHover(index)}
                                        onMouseLeave={() => handleMouseLeave(index)}
                                    >
                                        <div className="relative w-full mb-2" style={{ paddingTop: "177.77%" }}>
                                            <iframe
                                                ref={(el) => (videoRefs.current[index] = el)}
                                                src={
                                                    video.isYouTube
                                                        ? `${video.previewUrl}?autoplay=1&loop=1&mute=1`
                                                        : video.previewUrl
                                                }
                                                className="absolute top-0 left-0 w-full h-full"
                                                allow="autoplay; encrypted-media"
                                                frameBorder="0"
                                                scrolling="no"
                                                allowFullScreen
                                                loop
                                                style={{
                                                    borderRadius: "15px",
                                                    border: "4px solid white",
                                                    objectFit: "cover", // Ensures proper scaling of content inside iframe
                                                }}
                                                title={`${video.platform} Video`}
                                            ></iframe>
                                        </div>
        
                                        <a
                                            href={video.link}
                                            target="_blank"
                                            className="slogen pb-2   rounded-none text-warning border-bottom border-warning "
                                            style={{ textDecoration: "none", fontSize: "24px" }} 
                                        >
                                            View More
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className=" text-center py-[18px] sm:py-[20px] md:py-[30px] lg:py-[40px] xl:py-[50px] 2xl:py-[60px] grid gap-[18px] sm:gap-[20px] md:gap-[30px] lg:gap-[40px] xl:gap-[50px] 2xl:gap-[60px]">
                            <div className="text-[#ffc100] text-[18px] sm:text-[20px] md:text-[30px] lg:text-[40px] xl:text-[50px] 2xl:text-[60px] font-bold " style={{ fontWeight: "600", color: "#ffc100" }}>
                                Want To Learn More
                            </div>
                            <div>
                            <img src={footerBanner} className="w-100 " alt="banner" />
                            </div>
                           
                        </div>
                    </div>
        
    </>
  )
}

export default FooterSecondary