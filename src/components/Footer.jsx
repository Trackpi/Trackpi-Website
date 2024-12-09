import React, { useState, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Wavify from 'react-wavify';

function Footer() {
  // State to track the video currently being hovered
  const [hoveredVideo, setHoveredVideo] = useState(null);
  const videoRefs = useRef([]);

  // List of video URLs with unique autoplay behavior
  const videoData = [
    {
      platform: 'Instagram',
      previewUrl: 'https://www.instagram.com/reel/DDKOzyzionq/embed',
      isYouTube: false, // Not YouTube
    },
    {
      platform: 'Facebook',
      previewUrl:
        'https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/share/r/1AjiMx1emU/',
      isYouTube: false, // Not YouTube
    },
    {
      platform: 'YouTube',
      previewUrl: 'https://www.youtube.com/embed/Z2jiF9w-srU?autoplay=1', // YouTube supports autoplay
      isYouTube: true, // YouTube, enable autoplay directly
    },
  ];

  // Handle video autoplay and stop after 20 seconds for YouTube
  const handleHover = index => {
    const video = videoRefs.current[index];
    if (video) {
      if (videoData[index].isYouTube) {
        video.contentWindow.postMessage(
          '{"event":"command","func":"playVideo","args":""}',
          '*'
        ); // Play video for YouTube
        setTimeout(() => {
          video.contentWindow.postMessage(
            '{"event":"command","func":"pauseVideo","args":""}',
            '*'
          ); // Pause video after 20 seconds
        }, 20000);
      } else {
        // For Instagram and Facebook, use autoplay URL (no JavaScript control)
        video.src = `${videoData[index].previewUrl}?autoplay=1`; // Add autoplay parameter
      }
    }
  };

  const handleMouseLeave = index => {
    const video = videoRefs.current[index];
    if (video) {
      if (videoData[index].isYouTube) {
        video.contentWindow.postMessage(
          '{"event":"command","func":"pauseVideo","args":""}',
          '*'
        ); // Pause video for YouTube
      } else {
        // For Instagram and Facebook, just stop autoplay
        video.src = videoData[index].previewUrl; // Reset the URL without autoplay
      }
    }
  };

  return (
    <div>
      {/* <Wavify
        className="wave absolute -0 w-full"
        fill="black"
        paused={false}
        options={{
          height: 100,
          amplitude: 30,
          speed: 0.2,
          points: 2,
        }}
        style={{ zIndex: -1, height: '100vh' }}
      />{' '} */}
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
        <Row className="p-4">
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
                ref={el => (videoRefs.current[index] = el)}
                src={video.previewUrl}
                width="100%"
                height="250"
                allow="autoplay; encrypted-media"
                frameBorder="0"
                style={{ borderRadius: '8px', border: '2px solid white' }}
                title={`${video.platform} Video`}
              ></iframe>
            </Col>
          ))}
        </Row>
        <div  className="text-md-start mb-3">
            <i className="fa-solid fa-location-dot me-6"></i>

            <i className="fa-solid fa-phone me-6"></i>

            <i className="fa-solid fa-envelope me-6"></i>
          </div>
        <Row className="text-center py-3">
         
          <Col>
            <p className="mb-0">
              © {new Date().getFullYear()} TrackPi Private Limited. All rights
              reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
