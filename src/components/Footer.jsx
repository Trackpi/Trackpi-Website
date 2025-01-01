import React, { useState, useRef } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Form, Button, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../CSS/footer.css";
import fbIcon from "../images/fb.svg";
import quoraIcon from "../images/quora.svg";
import youtubeIcon from "../images/yout.svg";
import linkedinIcon from "../images/linkedin.svg";
import bloggerIcon from "../images/blogger.svg";
import mediumIcon from "../images/medium.svg";
import instagramIcon from "../images/insta.svg";
import phoneIcon from "../images/phone.svg";
import mailIcon from "../images/mail.svg";
import footerBanner from "../images/footerbanner.jpg";

function Footer() {
    const videoRefs = useRef([]);

    const videoData = [
        {
            platform: "Instagram",
            previewUrl: "https://www.instagram.com/reel/DDKOzyzionq/embed",
            isYouTube: false,
        },
        {
            platform: "Facebook",
            previewUrl: "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/share/r/1AjiMx1emU/",
            isYouTube: false,
        },
        {
            platform: "YouTube",
            previewUrl: "https://www.youtube.com/embed/Z2jiF9w-srU",
            isYouTube: true,
        },
    ];

    const platformURLs = {
        instagram: "https://www.instagram.com/trackpi_official/",
        youtube: "https://www.youtube.com/@trackpi/featured",
        facebook:
            "https://www.facebook.com/people/Trackpi-Ernakulam/pfbid0HC2UMFfh9G88BVNaogmJdQZ4cAGVtX7kvaeRw295PaHr1FdapXL6RtMftBb6PCBWl/",
    };

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
        <div>
            <Container fluid className="footer-container text-white" style={{ backgroundColor: "#0A0A0A" }}>
                {/* <Row className="p-4 text-center text-md-start">
          <Col sm={12} md={4} className="text-center mb-3">
            <img
              src="src/images/trackpi_logo.png"
              className="w-50 mb-3"
              alt="TrackPi Logo"
            />
          </Col>
        </Row> */}

                <div className="text-center w-full pt-5 px-2">
                    <h1 className="slogen text-6xl " style={{ fontWeight: "400" }}>
                        Begin Your Journey With
                        <span style={{ color: "#FFC100" }} className="ms-2">
                            TRACK
                        </span>
                        <span className="text-light">PI</span>
                    </h1>
                    <h1 className="slogen text-3xl mt-4" style={{ fontWeight: "700" }}>
                        we are here to help.
                    </h1>
                    <Link to={'/connect-us'}>
                    <button
                        className="btn text-light py-2 mt-4 mb-3 px-5 rounded-4"
                        style={{
                            fontSize: "1.9rem",
                            border: "2px solid transparent",
                            borderRadius: "8px",
                            backgroundImage: "linear-gradient(black, black), linear-gradient(90deg, #FFDF41, #FF8800)",
                            backgroundOrigin: "border-box",
                            backgroundClip: "padding-box, border-box",
                            color: "white",
                            cursor: "pointer",
                        }}
                    >
                        Join with us
                    </button>
                    </Link>
                </div>
                <hr className="mt-3" />
                <div className="p-md-5">
                    <h1 className="slogen text-center  text-5xl" style={{ fontWeight: "600", color: "#ffc100" }}>
                        Discover Winning Business Strategies
                    </h1>

                    <Row className=" " style={{ padding: "50px" }}>
                        {videoData.map((video, index) => (
                            <Col
                                key={index}
                                sm={12}
                                md={4}
                                className="text-center mb-5 p-md-5"
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
                                    href={platformURLs[video.platform.toLowerCase()]}
                                    target="_blank"
                                    className="slogen pb-2   rounded-none text-warning border-bottom border-warning "
                                    style={{ textDecoration: "none", fontSize: "24px" }} // Removed text decoration
                                >
                                    View More
                                </a>
                            </Col>
                        ))}
                    </Row>
                </div>
                <div className=" text-center container-fluid">
                     <h1 className="slogen text-5xl mb-5" style={{ fontWeight: "600", color: "#ffc100" }}>
                        Want To Learn More
                    </h1>
                    <img src={footerBanner} className="w-100 " alt="banner" />
                    {/* <h1 className="slogen text-5xl mb-5" style={{ fontWeight: "600", color: "#ffc100" }}>
                        Want To Learn More
                    </h1>

                    <div
                        className="contianer d-flex justify-content-center align-items-center"
                        style={{ minHeight: "380px", backgroundColor: "#d9d9d9" }}
                    >
                        <h4 className="text-black text-start container w-50 ">
                            Coming Soon! Unlock proven strategies, sharpen your skills, and take your career to new heights
                            stay tuned for launch updates and early bird registration!
                        </h4>
                    </div> */}
                </div>
                <h1> ‎ </h1>
            </Container>

            <footer className="px-6  text-dark pt-1 mx-auto lg:px-[25px] lg:pt-[50px] ">
                <div className="row flex gap-[25px] sm:gap-[32px] md:gap-[38px] lg:gap-[42px] xl:gap-[50px] ">
                    <div className=" xl:!max-w-[423px] grid gap-[25px]">
                        <div className="">
                            <img
                                src="src/images/trackpi_logo.png"
                                alt="TrackPi Logo"
                                className="img-fluid mx-auto w-[195px] sm:w-[215px] md:w-[235px] lg:w-[252px] xl:w-[270px] 2xl:w-[290px]"
                            />
                            <p className="text-[12px] sm:text-[13.5px] md:text-[15px] lg:text-[16.5px] xl:text-[18px] 2xl:text-[20px] text-justify font-medium">
                                Empowering businesses to succeed through expert guidance and personalized solutions.
                                Unlocking potential and achieving success.
                            </p>
                        </div>
                        <div className="grid gap-[15px] sm:gap-[18px] md:gap-[20px] lg:22px] xl:gap-[25px]">
                            <h5 className=" font-semibold text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] 2xl:text-[26px]">Follow Us</h5>
                            <div className="flex my-auto gap-[25px] flex-row footer_smedia">
                                <Link to={"#"}>
                                    <img src={fbIcon} alt="" />
                                </Link>
                                <Link to={"#"}>
                                    <img src={youtubeIcon} alt="" />
                                </Link>
                                <Link to={"#"}>
                                    <img src={instagramIcon} alt="" />
                                </Link>
                                <Link to={"#"}>
                                    <img src={mediumIcon} alt="" />
                                </Link>
                                <Link to={"#"}>
                                    <img src={linkedinIcon} alt="" />
                                </Link>
                                <Link to={"#"}>
                                    <img src={quoraIcon} alt="" />
                                </Link>
                                <Link to={"#"}>
                                    <img src={bloggerIcon} alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col my-auto h-max w-full">
                        <div className=" flex flex-wrap  justify-between items-center" >
                            <div className="w-max  mb-0  grid gap-[10px] sm:gap-[12px] md:gap-[15px] lg:gap-[18px] xl:gap-[20px]">
                                <h5 className=" font-bold  text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] 2xl:text-[26px] mb-0">Resources</h5>
                                <ul className="list-unstyled font-medium  text-[12px] sm:text-[13.5px] md:text-[15px] lg:text-[16.5px] xl:text-[18px] 2xl:text-[20px] grid gap-[14px] mb-0">
                                    <li>
                                        <a href="/about" className="text-dark text-decoration-none">
                                            About
                                        </a>
                                    </li>
                                    <li >
                                        <a href="#" className="text-dark text-decoration-none ">
                                            Blogs
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-dark text-decoration-none ">
                                            Careers
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-dark text-decoration-none">
                                            Help Center
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-dark text-decoration-none">
                                            Terms & Conditions
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="sm:w-max w-[140px] mb-0 grid gap-[10px] sm:gap-[12px] md:gap-[15px] lg:gap-[18px] xl:gap-[20px] mb-auto">
                                <h5 className=" font-bold text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] 2xl:text-[26px]  mb-0 lg:text-center text-left">Services</h5>
                                <ul className="list-unstyled font-medium text-[12px] sm:text-[13.5px] md:text-[15px] lg:text-[16.5px] xl:text-[18px] 2xl:text-[20px] grid gap-[14px] mb-0 lg:grid-cols-2">
    <li>
        <a href="/about" className="text-dark text-decoration-none">Software development</a>
    </li>
    <li>
        <a href="#" className="text-dark text-decoration-none">Sales training</a>
    </li>
    <li>
        <a href="#" className="text-dark text-decoration-none">Operations training</a>
    </li>
    <li>
        <a href="#" className="text-dark text-decoration-none">Business consulting</a>
    </li>
    <li>
        <a href="#" className="text-dark text-decoration-none">Sales outsourcing </a>
    </li>
    <li>
        <a href="/about" className="text-dark text-decoration-none">Market Positioning</a>
    </li>
</ul>

                            </div>
                            <div className="w-full lg:w-[250px] sm:w-max sm:mt-0 mt-[25px]">
                                <div  className="sm:grid sm:gap-[25px] md:gap-[50px] flex justify-between" >
                                    <div className="grid gap-2 sm:w-max w-50">
                                        <h5 className="font-bold text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] 2xl:text-[26px]">Join With Us</h5>
                                        <div>
    <div class="sm:flex hidden rounded-lg shadow-sm sm:w-[250px] w-[180px] footerForm ">
      <input placeholder="Your Email Address" type="text" style={{border:"1px solid #FFC100 ", outline:"none"}} className="px-2 block w-full border-[#FFC100] shadow-sm rounded-s-lg text-sm text-[10px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px]"/>
      <button type="button" className="text-white gradient-button hover:scale-105  duration-300 px-[10px] py-[10px] text-[14px] !font-normal ">
        Submit
      </button>
    </div>
    <div class="sm:hidden block rounded-lg   footerForm ">
        <div>
      <input placeholder="Your Email Address" type="text" style={{border:"1px solid #FFC100 ", outline:"none"}} className=" px-2 block w-full border-[#FFC100] shadow-sm rounded-s-lg text-sm text-[10px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px]"/></div>
      <div className="text-center mt-2">
      <button type="button" className="text-white gradient-button hover:scale-105  duration-300 px-[10px] py-[10px] text-[14px] !font-normal ">
        Submit
      </button></div>
    </div>
  </div>
                                    
                                    </div>
                                    <div className="grid gap-2 sm:w-max w-[140px] text-[12px] sm:text-[13.5px] md:text-[15px] lg:text-[16.5px] xl:text-[18px] 2xl:text-[20px]">
                                        <h5 className=" font-bold text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] 2xl:text-[26px]">Contact</h5>
                                        <div className="d-flex footer_smedia">
                                            <img src={phoneIcon} alt="" />
                                            <span className="ms-3 font-medium">+91 9538610745</span>
                                        </div>
                                        <div className="d-flex">
                                            <img src={mailIcon} alt="" />
                                            <span className="ms-3 font-medium">TrackPi@gmail.com</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <hr  />
            <Row className=" my-[10px] sm:my-[12px] md:my-[13px] lg:my-[14px] xl:my-[15px]">
                <Col className="text-center font-medium text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px]">
                © 2024 TrackPi Private Limited. All rights reserved.
                </Col>
            </Row>
        </div>
    );
}

export default Footer;