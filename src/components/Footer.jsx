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
      video.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
      setTimeout(() => {
        video.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
      }, 20000);
    }
  };

  const handleMouseLeave = (index) => {
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

        <div className="text-center w-full">
          <span style={{ fontSize: '16px', fontWeight: '500' }} className="text-warning">Ready to start?</span>
          <br />
          <h1 style={{ fontSize: '5.5vw' }}>We’ll Show You How</h1>
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
                <div className="relative w-full" style={{ paddingTop: '177.77%' }}>
                  <iframe
                    ref={(el) => (videoRefs.current[index] = el)}
                    src={video.isYouTube ? `${video.previewUrl}?autoplay=1&mute=1` : video.previewUrl}
                    className="absolute top-0 left-0 w-full h-full"
                    allow="autoplay; encrypted-media"
                    frameBorder="0"
                    allowFullScreen
                    style={{ borderRadius: '8px', border: '2px solid white' }}
                    title={`${video.platform} Video`}
                  ></iframe>
                </div>
                <a
                  href={platformURLs[video.platform.toLowerCase()]}
                  target="_blank"
                  className="btn btn-warning my-4"
                  style={{ textDecoration: 'none' }} // Removed text decoration
                >
                  See More
                </a>
              </Col>
            ))}
          </Row>

          <div className="text-center">
            <a
              href="https://maps.app.goo.gl/iyiRhsk6zCTBK7AE6"
              target="_blank"
              style={{ textDecoration: 'none' }} // Removed text decoration
            >
              <abbr title="location">
                <i className="fa-solid fa-location-dot mx-4 fa-xl text-white"></i>
              </abbr>
            </a>
            <a
              href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=vinupsvinayak@gmail.com"
              target="_blank"
              style={{ textDecoration: 'none' }} // Removed text decoration
            >
              <abbr title="vinupsvinayak@gmail.com">
                <i className="fa-solid fa-envelope mx-4 fa-xl text-white"></i>
              </abbr>
            </a>
            <a
              href="tel:+918078179646"
              target="_blank"
              style={{ textDecoration: 'none' }} // Removed text decoration
            >
              <abbr title="+91 8078179646">
                <i className="fa-solid fa-phone mx-4 fa-xl text-white"></i>
              </abbr>
            </a>
          </div>
        </div>

        <Row className="text-center py-2" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: 'rgba(255, 255, 255, 0.4)' }}>
          <Col>
            <p className="mb-0 text-sm">
              © {new Date().getFullYear()} TrackPi Private Limited. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
