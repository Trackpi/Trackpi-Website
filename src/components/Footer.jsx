import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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
import FooterSecondary from "./FooterSecondary";

function Footer() {
   

    return (
        <div>
            <FooterSecondary/>
            <footer className="px-6  text-dark pt-1 mx-auto lg:px-[25px] lg:pt-[50px] ">
                <div className="row flex gap-[25px] sm:gap-[32px] md:gap-[38px] lg:gap-[42px] xl:gap-[50px] ">
                    <div className=" xl:!max-w-[423px] grid gap-[25px]">
                        <div className="">
                            <img
                                src="src/images/trackpi_logo.png"
                                alt="TrackPi Logo"
                                className="img-fluid mx-auto w-[195px] sm:w-[215px] md:w-[235px] lg:w-[252px] xl:w-[270px] 2xl:w-[290px]"
                            />
                            <p className="text-[12px] sm:text-[13.5px] md:text-[15px] lg:text-[16.5px] xl:text-[18px] 2xl:text-[20px] text-justify font-medium footerParagraph">
                                Empowering businesses to succeed through expert guidance and personalized solutions.
                                Unlocking potential and achieving success.
                            </p>
                        </div>
                        <div className="grid gap-[15px] sm:gap-[18px] md:gap-[20px] lg:22px] xl:gap-[25px] follow_us_footer">
                            <h5 className=" font-semibold text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] 2xl:text-[26px] ">
                                Follow Us
                            </h5>
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
                        <div className=" flex flex-wrap  justify-between items-center">
                            <div className="w-max mb-0 grid gap-[10px] sm:gap-[12px] md:gap-[15px] lg:gap-[18px] xl:gap-[20px]">
                                <h5 className=" font-bold  text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] 2xl:text-[26px] mb-0">
                                    Resources
                                </h5>
                                <ul className="list-unstyled font-medium  text-[12px] sm:text-[13.5px] md:text-[15px] lg:text-[16.5px] xl:text-[18px] 2xl:text-[20px] grid gap-[14px] mb-0">
                                    <li>
                                        <a href="/about" className="text-dark text-decoration-none">
                                            About
                                        </a>
                                    </li>
                                    <li>
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
                                <h5 className=" font-bold text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] 2xl:text-[26px]  mb-0 lg:text-center text-left">
                                    Services
                                </h5>
                                <ul className="list-unstyled font-medium text-[12px] sm:text-[13.5px] md:text-[15px] lg:text-[16.5px] xl:text-[18px] 2xl:text-[20px] grid gap-y-[14px] gap-x-[30px]   mb-0 lg:grid-cols-2 ">
                                    <li>
                                        <a href="/about" className="text-dark text-decoration-none">
                                            Software development
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-dark text-decoration-none">
                                            Sales training
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-dark text-decoration-none">
                                            Operations training
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-dark text-decoration-none">
                                            Business consulting
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-dark text-decoration-none">
                                            Sales outsourcing{" "}
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/about" className="text-dark text-decoration-none">
                                            Market Positioning
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full lg:w-[250px] sm:w-max sm:mt-0 mt-[25px] join_us_div">
                                <div className="sm:grid sm:gap-[25px] md:gap-[50px] flex justify-between joinInput">
                                    <div className="grid gap-2 sm:w-max w-50">
                                        <h5 className="font-bold text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] 2xl:text-[26px]">
                                            Join With Us
                                        </h5>
                                        <div>
                                            <div className="sm:flex hidden rounded-lg shadow-sm sm:w-[250px] w-[180px] footerForm footerInput1 ">
                                                <input
                                                    placeholder="Your Email Address"
                                                    type="text"
                                                    style={{ border: "1px solid #FFC100 ", outline: "none" }}
                                                    className="px-2 block w-full border-[#FFC100] shadow-sm rounded-s-lg text-[10px] md:text-[12px] lg:text-[14px]"
                                                />
                                                <button
                                                    type="button"
                                                    className="text-white gradient-button hover:scale-105  duration-300 px-[10px] py-[10px] text-[10px] md:text-[12px] lg:text-[14px] !font-normal "
                                                >
                                                    Submit
                                                </button>
                                            </div>
                                            <div className="sm:hidden block rounded-lg   footerForm footerInput2 ">
                                                <div>
                                                    <input
                                                        placeholder="Your Email Address"
                                                        type="text"
                                                        style={{ border: "1px solid #FFC100 ", outline: "none" }}
                                                        className=" px-2 block w-full border-[#FFC100] shadow-sm rounded-s-lg text-[10px] md:text-[12px] lg:text-[14px]"
                                                    />
                                                </div>
                                                <div className="text-center mt-2">
                                                    <button
                                                        type="button"
                                                        className="text-white gradient-button hover:scale-105  duration-300 px-[10px] py-[10px] text-[10px] md:text-[12px] lg:text-[14px] !font-normal "
                                                    >
                                                        Submit
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid gap-2 sm:w-max w-[140px] text-[12px] sm:text-[13.5px] md:text-[15px] lg:text-[16.5px] xl:text-[18px] 2xl:text-[20px]">
                                        <h5 className=" font-bold text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] 2xl:text-[26px]">
                                            Contact
                                        </h5>
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
            <hr className="mb-0 " />
            <Row className=" ">
                <Col className="text-center font-medium text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px] !my-[5px] !sm:my-[7px] !md:my-[10px] !lg:my-[12px] !xl:my-[15px]">
                    © 2024 TrackPi Private Limited. All rights reserved.
                </Col>
            </Row>
        </div>
    );
}

export default Footer;
