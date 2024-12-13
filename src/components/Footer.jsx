import React, { useRef } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
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
      <Container fluid className="footer-container bg-black text-white">
        <Row className="p-4 text-center text-md-start">
          <Col sm={12} md={4} className="text-center mb-3">
            <img
              src="src/images/trackpi_logo.png"
              className="w-50 mb-3"
              alt="TrackPi Logo"
            />
          </Col>
        </Row>

        <div className="text-center w-full">
          <span
            style={{ fontSize: "16px", fontWeight: "500" }}
            className="text-warning"
          >
            Ready to start?
          </span>
          <br />
          <h1 style={{ fontSize: "5.5vw" }}>We’ll Show You How</h1>
        </div>

        <div className="p-md-5">
          <Row className="p-5 mb-3">
            {videoData.map((video, index) => (
              <Col
                key={index}
                sm={12}
                md={4}
                className="text-center mb-3 p-md-5"
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <div
                  className="relative w-full"
                  style={{ paddingTop: "177.77%" }}
                >
                  <iframe
                    ref={(el) => (videoRefs.current[index] = el)}
                    src={
                      video.isYouTube
                        ? `${video.previewUrl}?autoplay=1&mute=1`
                        : video.previewUrl
                    }
                    className="absolute top-0 left-0 w-full h-full"
                    allow="autoplay; encrypted-media"
                    frameBorder="0"
                    allowFullScreen
                    style={{ borderRadius: "8px", border: "2px solid white" }}
                    title={`${video.platform} Video`}
                  ></iframe>
                </div>
                <a
                  href={platformURLs[video.platform.toLowerCase()]}
                  target="_blank"
                  className="btn btn-warning my-4"
                  style={{ textDecoration: "none" }} // Removed text decoration
                >
                  See More
                </a>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
      <footer className="bg-light text-dark py-4">
        <Container>
          <Row className="mb-4">
            <Col md={3}>
              <img
                src="src/images/trackpi_logo.png"
                alt="TrackPi Logo"
                style={{ width: "150px" }}
              />
              <p className="mt-3">
                Empowering businesses to succeed through expert guidance and
                personalized solutions. Unlocking potential and achieving
                success.
              </p>
            </Col>
            <Col md={3}>
              <h5>Resources</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/about" className="text-dark">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-dark">
                    Blogs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-dark">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-dark">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-dark">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </Col>
            <Col md={3}>
              <h5>Services</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-dark">
                    Business consulting
                  </a>
                </li>
                <li>
                  <a href="#" className="text-dark">
                    Sales outsourcing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-dark">
                    Software development
                  </a>
                </li>
                <li>
                  <a href="#" className="text-dark">
                    Sales training
                  </a>
                </li>
              </ul>
            </Col>
            <Col md={3}>
              <h5>Join With Us</h5>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Your Email Address" />
                </Form.Group>
                <Button variant="warning" type="submit">
                  Submit
                </Button>
              </Form>
              <h5 className="mt-4">Contact</h5>
              <p>
              <IoMail style={{ color: "#FFD43B" }} /><span>TrackPi@gmail.com <br /></span>
                <FaSquarePhone style={{ color: "#FFD43B" }}  />
                +91 9538610745
              </p>
            </Col>
          </Row>
          <Row className=" mb-3">
            <Col>
              <h5>Follow Us</h5>
              <div className="d-flex flex-row ">
                <Link to={"#"}>
                <RiFacebookCircleLine style={{ color: "#FFD43B" }} size={24} className="me-3" />

                </Link>
                <Link to={"#"}>
                <SlSocialYoutube style={{ color: "#FFD43B" }} size={24} className="me-3" />

                </Link>
                <Link to={"#"}>
                <IoLogoInstagram style={{ color: "#FFD43B" }} size={24} className="me-3" />

                </Link>
                <Link to={"#"}>
                  <SiMedium style={{ color: "#FFD43B" }} size={24} className="me-3" />
                </Link>
                <Link to={"#"}>
                  <TbBrandLinkedin style={{ color: "#FFD43B" }} size={24} className="me-3" />
                </Link>
                <Link to={"#"}>
                  <SiQuora style={{ color: "#FFD43B" }} size={24} className="me-3" />
                </Link>
                <Link to={"#"}>
                <RiBloggerLine style={{ color: "#FFD43B" }} size={24} className="me-3" />

                </Link>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              &copy; 2024 TrackPi Private Limited. All rights reserved.
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default Footer;
