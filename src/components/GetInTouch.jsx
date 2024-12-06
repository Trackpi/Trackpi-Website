import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

function GetInTouch() {
  const toTopRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        toTopRef.current.classList.add('active');
      } else {
        toTopRef.current.classList.remove('active');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="wrapper">
      <NavLink to="/connect-us" className="button to-top" ref={toTopRef}>
        <div className="icon">
          <i className="fas fa-handshake"></i>
        </div>
        <span style={{color:"black"}}>Get In Touch</span>
      </NavLink>
    </div>
  );
}

export default GetInTouch;
