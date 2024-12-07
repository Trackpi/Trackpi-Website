import React, { useState, useRef } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

function Footer() {
  // State to track the video currently being hovered
  const [hoveredVideo, setHoveredVideo] = useState(null);
  const videoRefs = useRef([]);
  // List of video URLs
  const videoData = [
    {
      platform: "Instagram",
      previewUrl: "https://www.instagram.com/reel/DDKOzyzionq/embed",
    },
    {
      platform: "Facebook",
      previewUrl: "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/share/r/1AjiMx1emU/",
    },
    {
      platform: "YouTube",
      previewUrl: "https://www.youtube.com/embed/Z2jiF9w-srU",
    },
  ];
 // Handle video autoplay and stop after 20 seconds
 const handleHover = (index) => {
  const video = videoRefs.current[index];
  if (video) {
    video.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*"); // Play video
    setTimeout(() => {
      video.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*"); // Pause video after 20 seconds
    }, 20000);
  }
};

const handleMouseLeave = (index) => {
  const video = videoRefs.current[index];
  if (video) {
    video.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*"); // Pause video on mouse leave
  }
};
  return (
    <Container fluid className="footer-container bg-black text-white">
      {/* Footer Main Section */}
      <Row className="bg-black p-4 text-center text-md-start">
        {/* Quick Links */}
        <Col sm={12} md={4} className="mb-3">
          <h4 className="text-danger">Quick Links</h4>
          <Link className="text-white text-decoration-none d-block mb-2" to="/">
            Home
          </Link>
          <Link className="text-white text-decoration-none d-block mb-2" to="/about">
            About
          </Link>
          <Link className="text-white text-decoration-none d-block" to="/connect-us">
            Connect Us
          </Link>
        </Col>

        {/* Logo & Social Media Links */}
        <Col sm={12} md={4} className="text-center mb-3">
          <img src="src/images/trackpi_logo.png" className="w-50 mb-3" alt="TrackPi Logo" />
          <div className="d-flex justify-content-center gap-3">
            <a href="https://www.linkedin.com" className="text-blue-800" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin fa-xl"></i>
            </a>
            <a href="https://www.facebook.com" className="text-blue-800" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-facebook fa-xl"></i>
            </a>
            <a href="https://www.instagram.com" className="text-danger" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-instagram fa-xl"></i>
            </a>
            <a href="https://www.youtube.com" className="text-danger" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-youtube fa-xl"></i>
            </a>
          </div>
        </Col>

        {/* Contact Section */}
        <Col sm={12} md={4} className="text-md-end mb-3">
          <h4 className="text-danger">Contact</h4>
          <p>
            <i className="fa-solid fa-location-dot me-2"></i> Kakkanad, Kochi, India
          </p>
          <p>
            <i className="fa-solid fa-phone me-2"></i> +91 8078179646
          </p>
          <p>
            <i className="fa-solid fa-envelope me-2"></i> trackpi@gmail.com
          </p>
        </Col>
      </Row>

      {/* Social Media Tiles with Hover Previews */}
      <Row className="bg-dark p-4">
        {videoData.map((video, index) => (
          <Col
            key={index}
            sm={12}
            md={4}
            className="text-center mb-3 video-container"
            onMouseEnter={() => handleHover(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <iframe
              ref={(el) => (videoRefs.current[index] = el)}
              src={`${video.previewUrl}?enablejsapi=1`} // Enable JavaScript API for control
              width="100%"
              height="250"
              allow="autoplay; encrypted-media"
              frameBorder="0"
              style={{ borderRadius: "8px", border: "2px solid white" }}
              title={`${video.platform} Video`}
            ></iframe>
          </Col>
        ))}
      </Row>
     
      {/* Copyright Section */}
      <Row className="bg-black text-center py-3">
        <Col>
          <p className="mb-0">© {new Date().getFullYear()} TrackPi Private Limited. All rights reserved.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;