import React, { useState, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Form, Button, InputGroup } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { SiMedium } from "react-icons/si";
import { SiQuora } from "react-icons/si";
import { RiBloggerLine } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io5";
import { SlSocialYoutube } from "react-icons/sl";
import { RiFacebookCircleLine } from "react-icons/ri";
import { TbBrandLinkedin } from "react-icons/tb";
import { IoMail } from "react-icons/io5";
import { FaSquarePhone } from "react-icons/fa6";
import './footer.css'

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
      previewUrl:
        "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/share/r/1AjiMx1emU/",
      isYouTube: false,
    },
    {
      platform: 'YouTube',
      previewUrl: 'https://www.youtube.com/embed/Z2jiF9w-srU',
      isYouTube: true,
    },
  ];

  const platformURLs = {
    instagram: 'https://www.instagram.com/trackpi_official/',
    youtube: 'https://www.youtube.com/@trackpi/featured',
    facebook: 'https://www.facebook.com/people/Trackpi-Ernakulam/pfbid0HC2UMFfh9G88BVNaogmJdQZ4cAGVtX7kvaeRw295PaHr1FdapXL6RtMftBb6PCBWl/',
  };

  const handleHover = (index) => {
    const video = videoRefs.current[index];
    if (video && videoData[index].isYouTube) {
      video.contentWindow.postMessage(
        '{"event":"command","func":"playVideo","args":""}',
        "*"
      );
      setTimeout(() => {
        video.contentWindow.postMessage(
          '{"event":"command","func":"pauseVideo","args":""}',
          "*"
        );
      }, 20000);
    }
  };

  const handleMouseLeave = (index) => {
    const video = videoRefs.current[index];
    if (video && videoData[index].isYouTube) {
      video.contentWindow.postMessage(
        '{"event":"command","func":"pauseVideo","args":""}',
        "*"
      );
    }
  };

  return (
    <div>
      <Container fluid className="footer-container text-white" style={{ backgroundColor: '#0A0A0A' }}>
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
          <h1 className='slogen text-6xl ' style={{ fontWeight: '400' }} >
            Begin Your Journey With
            <span style={{ color: '#FFC100' }} className='ms-1'>TRACK <span className='text-light'>PI</span></span>
          </h1>
          <h1 className='slogen text-3xl mt-4' style={{ fontWeight: '700' }}>we are here to help.</h1>
          <button className='btn text-light py-2 mt-4 mb-3  px-5 slogen joinbtn rounded-4 ' style={{ fontSize: '1.9rem' }}>
            Join with us
          </button>
        </div>
        <hr className='mt-3' />
        <div className='p-md-5'>
          <h1 className='slogen text-center  text-5xl' style={{ fontWeight: '600', color: '#ffc100' }} >Discover Winning Business Strategies</h1>

          <Row className=" " style={{ padding: '50px' }}>
            {videoData.map((video, index) => (
              <Col
                key={index}
                sm={12}
                md={4}
                className="text-center mb-5 p-md-5"
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <div className="relative w-full mb-2" style={{ paddingTop: '177.77%' }}>
                  <iframe
                    ref={(el) => (videoRefs.current[index] = el)}
                    src={video.isYouTube ? `${video.previewUrl}?autoplay=1&loop=1&mute=1` : video.previewUrl}
                    className="absolute top-0 left-0 w-full h-full"
                    allow="autoplay; encrypted-media"
                    frameBorder="0"
                    scrolling="no"
                    allowFullScreen
                    loop
                    style={{
                      borderRadius: '15px',
                      border: '4px solid white',
                      objectFit: 'cover' // Ensures proper scaling of content inside iframe
                    }}
                    title={`${video.platform} Video`}
                  ></iframe>
                </div>

                <a
                  href={platformURLs[video.platform.toLowerCase()]}
                  target="_blank"
                  className="slogen pb-2   rounded-none text-warning border-bottom border-warning "
                  style={{ textDecoration: 'none', fontSize: '24px' }} // Removed text decoration
                >
                  View More
                </a>
              </Col>
            ))}
          </Row>
        </div>
        <div className='container text-center ' >
          <h1 className='slogen text-5xl mb-5' style={{ fontWeight: '600', color: '#ffc100' }} >Want To Learn More</h1>

          <div className='contianer d-flex justify-content-center align-items-center' style={{ minHeight: '380px', backgroundColor: '#d9d9d9' }}>
            <h4 className='text-black text-start container w-50 '>Coming Soon! Unlock proven strategies, sharpen your
              skills, and take your career to new heights stay tuned
              for launch updates and early bird registration!</h4>
          </div>
        </div>
        <h1> ‎ </h1>
      </Container>


      <footer className=" text-dark py-4 mx-3">
        
          <Row>
            <Col md={3} lg={4}>
      

              <Row>
                <Col sm={12} className='ms-5'>
                  <img
                    src="src/images/trackpi_logo_one.png"
                    alt="TrackPi Logo"
                    style={{ width: "150px" }}
                    className='img-fluid'
                  />
                </Col>
                <Col sm={12}>
                  <p className="mt-3 text-lg font-normal">
                    Empowering businesses to succeed through expert guidance and
                    personalized solutions. Unlocking potential and achieving
                    success.
                  </p>
                </Col>
                <Col sm={12}>
                  <Row className=" mb-3">
                    <Col>
                      <h5 className='mb-3 font-bold text-2xl'>Follow Us</h5>
                      <div className="d-flex flex-row ">
                        <Link to={"#"}>
                          <RiFacebookCircleLine
                            style={{ color: "#FFD43B" }}
                            size={30}
                            className="mx-2"                          />
                        </Link>
                        <Link to={"#"}>
                          <SlSocialYoutube
                            style={{ color: "#FFD43B" }}
                            size={30}
                            className="mx-2"                          />
                        </Link>
                        <Link to={"#"}>
                          <IoLogoInstagram
                            style={{ color: "#FFD43B" }}
                            size={30}
                            className="mx-2"                          />
                        </Link>
                        <Link to={"#"}>
                          <SiMedium
                            style={{ color: "#FFD43B" }}
                            size={30}
                            className="mx-2"                          />
                        </Link>
                        <Link to={"#"}>
                          <TbBrandLinkedin
                            style={{ color: "#FFD43B" }}
                            size={30}
                            className="mx-2"                          />
                        </Link>
                        <Link to={"#"}>
                          <SiQuora
                            style={{ color: "#FFD43B" }}
                            size={30}
                            className="mx-2"                          />
                        </Link>
                        <Link to={"#"}>
                          <RiBloggerLine
                            style={{ color: "#FFD43B" }}
                            size={30}
                            className="mx-2"                          />
                        </Link>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col md={3} lg={2} className='mx-auto'>
              <h5 className='mb-3 font-bold text-2xl'>Resources</h5>
              <ul className="list-unstyled ">
                <li className='mb-2'>
                  <a href="/about" className="text-dark text-decoration-none  font-normal text-lg" >
                    About
                  </a>
                </li>
                <li className='mb-2'>
                  <a href="#" className="text-dark text-decoration-none font-normal text-lg">
                    Blogs
                  </a>
                </li>
                <li className='mb-2'>
                  <a href="#" className="text-dark text-decoration-none font-normal text-lg">
                    Careers
                  </a>
                </li>
                <li className='mb-2'>
                  <a href="#" className="text-dark text-decoration-none font-normal text-lg">
                    Help Center
                  </a>
                </li>
                <li className='mb-2'>
                  <a href="#" className="text-dark text-decoration-none font-normal text-lg">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </Col>
            <Col md={3} lg={2} className='mx-auto'>
              <h5 className='mb-3 font-bold text-2xl'>Services</h5>
              <ul className="list-unstyled">
                <li className='mb-2'>
                  <a href="#" className="text-dark text-decoration-none font-normal text-lg">
                    Business consulting
                  </a>
                </li>
                <li className='mb-2'>
                  <a href="#" className="text-dark text-decoration-none font-normal text-lg">
                    Sales outsourcing
                  </a>
                </li>
                <li className='mb-2'>
                  <a href="#" className="text-dark text-decoration-none font-normal text-lg">
                    Software development
                  </a>
                </li>
                <li className='mb-2'>
                  <a href="#" className="text-dark text-decoration-none font-normal text-lg">
                    Sales training
                  </a>
                </li>
              </ul>
            </Col>

            <Col md={3} lg={2} >

              <h5 className='mb-3 font-bold text-2xl'>Join With Us</h5>
              {/* <div className='d-flex'>
                  <input type="email" className='form-control' placeholder="Your Email Address"  style={{width:"200px"}}/>
                <div/>
                <button  type="submit" className='btn btn-warning ms-3' >
                  Submit
                </button>
              </div> */}
              <InputGroup className='w-100'>
                <Form.Control
                  type="email"
                  placeholder="Your Email Address"
                  className="border-warning"
                />
                <Button
                  variant="warning"
                  className="text-white gradient-button"
                  type="submit"
                >
                  Submit
                </Button>
              </InputGroup>
              <h5 className="mt-5 mb-3 font-bold  text-2xl">Contact</h5>
              <div className='d-flex my-4'>
                <FaSquarePhone style={{ color: "#FFD43B" }} size={25}  className='rounded-pill'/><span className="ms-3 font-semibold  text-lg ">+91 9538610745</span>
              </div>
              <div className='d-flex my-4'>
                <IoMail style={{ color: "#FFD43B" }} size={25} /><span className='ms-3 font-semibold  text-lg'>TrackPi@gmail.com <br /></span>
              </div>
            </Col>
          </Row>


      </footer>
      <hr />
      <Row>
        <Col className="text-center mb-3">
          &copy; 2024 TrackPi Private Limited. All rights reserved.
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
