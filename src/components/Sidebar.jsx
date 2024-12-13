import React, { useState, useEffect } from 'react';
import './sidebar.css';
import { NavLink } from 'react-router-dom';
import { SiMedium } from 'react-icons/si';

function Sidebar() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const sidebar = document.querySelector('.sidebar');
      const footer = document.querySelector('.footer-container');

      if (!sidebar || !footer) return;

      // Get the bounding rect of the footer
      const footerRect = footer.getBoundingClientRect();

      // If the bottom of the footer is in the viewport, hide the sidebar
      if (footerRect.top <= window.innerHeight) {
        setIsSidebarVisible(false); // Hide sidebar
      } else {
        setIsSidebarVisible(true); // Show sidebar
      }
    };

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`sidebar ${isSidebarVisible ? '' : 'hidden'}`}>
      <nav>
        <ul>
          <li>
            <NavLink
              onClick={() =>
                window.open('https://www.instagram.com/trackpi_official', '_blank')
              }
            >
              <i className="fab fa-instagram"></i>
              <span>Instagram</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() =>
                window.open('https://www.facebook.com/profile.php?id=61565947096778', '_blank')
              }
            >
              <i className="fab fa-facebook-f"></i>
              <span>Facebook</span>
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => window.open('https://www.youtube.com/@trackpi', '_blank')}>
              <i className="fab fa-youtube"></i>
              <span>YouTube</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() =>
                window.open('https://www.linkedin.com/company/trackpi-private-limited/', '_blank')
              }
            >
              <i className="fab fa-linkedin-in"></i>
              <span>LinkedIn</span>
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => window.open('https://www.quora.com/profile/Trackpi-Private-Limited?q=trackpi', '_blank')}>
              <i className="fab fa-quora"></i>
              <span>Quora</span>
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => window.open('https://trackpi.blogspot.com/', '_blank')}>
              <i className="fab fa-blogger-b"></i>
              <span>Blogger</span>
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => window.open('', '_blank')}>
              <i>
                <SiMedium style={{ color: 'black', background: 'white', borderRadius: '50px', border: 'none', scale: '1.3' }} />
              </i>
              <span>Medium</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
