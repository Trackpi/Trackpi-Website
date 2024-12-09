import React, { useState, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
  const videoRefs = useRef([]);

  const videoData = [
    {
      platform: 'Instagram',
      previewUrl: 'https://www.instagram.com/reel/DDKOzyzionq/embed',
      isYouTube: false,
    },
    {
      platform: 'Facebook',
      previewUrl: 'https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/share/r/1AjiMx1emU/',
      isYouTube: false,
    },
    {
      platform: 'YouTube',
      previewUrl: 'https://www.youtube.com/embed/Z2jiF9w-srU?autoplay=1',
      isYouTube: true,
    },
  ];

  const handleHover = index => {
    const video = videoRefs.current[index];
    if (video && videoData[index].isYouTube) {
      video.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
      setTimeout(() => {
        video.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
      }, 20000);
    }
  };

  const handleMouseLeave = index => {
    const video = videoRefs.current[index];
    if (video && videoData[index].isYouTube) {
      video.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
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
        <Row className="p-4">
          {videoData.map((video, index) => (
            <Col
              key={index}
              sm={12}
              md={4}
              className="text-center mb-3"
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <div className="relative w-full" style={{ paddingTop: '177.77%' }}>
                <iframe
                  ref={el => (videoRefs.current[index] = el)}
                  src={video.previewUrl}
                  className="absolute top-0 left-0 w-full h-full"
                  allow="autoplay; encrypted-media"
                  frameBorder="0"
                  style={{ borderRadius: '8px', border: '2px solid white' }}
                  title={`${video.platform} Video`}
                ></iframe>
              </div>
            </Col>
          ))}
        </Row>
        <div className="text-md-start mb-3">
          <i className="fa-solid fa-location-dot me-6"></i>
          <i className="fa-solid fa-phone me-6"></i>
          <i className="fa-solid fa-envelope me-6"></i>
        </div>
        <Row className="text-center py-1 bg-slate-400 text-black">
          <Col>
            <p className="mb-0 text-sm">
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
