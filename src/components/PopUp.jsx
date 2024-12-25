import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import "./popup.css";
import fbIcon from "../images/fb.svg";
import quoraIcon from "../images/quora.svg";
import youtubeIcon from "../images/yout.svg";
import linkedinIcon from "../images/linkedin.svg";
import bloggerIcon from "../images/blogger.svg";
import mediumIcon from "../images/medium.svg";
import instagramIcon from "../images/insta.svg";
import { Link } from "react-router-dom";

function PopUp() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <Modal backdrop='static' dialogClassName="custom-modal" show={show} onHide={handleClose} size="lg" centered>
                <div className="grid gap-8 pb-8">
                    <div>
                        <Modal.Header className="px-5  mx-auto" closeButton style={{ borderBottom: "none" }}>
                            <Modal.Title className="w-100 text-center">
                                <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#FF9D00]">Connect With Us</span>
                            </Modal.Title>
                        </Modal.Header>
                    </div>
                    <div className="popupForm">
                        <form className=" grid gap-4">
                            <input required type="text" placeholder="Name" />
                            <input required type="email" placeholder="Email" />
                            <input required type="number" placeholder="Contact Number" />
                            <input required type="text" placeholder="Where are you located?" />
                            <select required name="" id="">
                                <option disabled selected hidden>
                                    How Did You Hear About Us?
                                </option>
                                <option value="socialMedia">Social Media</option>
                                <option value="searchEngine">Search Engine</option>
                                <option value="friendFamily">Friend or Family</option>
                                <option value="advertisement">Advertisement</option>
                                <option value="other">Other</option>
                            </select>
                            <textarea required name="" placeholder="Message"></textarea>
                            <div className="max-w-[244px] mx-auto">
                                <button className="bg-gradient-to-r from-[#FFC100] to-[#FF9D00] font-bold text-2xl text-white rounded-lg py-3.5 px-20  font-bold">
                                    <span>Submit</span>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="px-4 text-center mx-auto text-xl">
                        {" "}
                        Or email <span className="text-[#FF9D00] font-bold">hello@trackpi.com</span> to get in touch with
                        our team.
                    </div>
                    <div className="px-4  mx-auto">
                        <div className="flex gap-12  flex-row popupIcons">
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
            </Modal>
        </div>
    );
}

export default PopUp;
