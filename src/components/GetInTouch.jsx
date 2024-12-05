import React, { useEffect, useRef } from 'react';

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
      <a href="/connect-us" className="button to-top" ref={toTopRef}>
        <div className="icon">
          <i className="fas fa-handshake"></i>
        </div>
        <span style={{color:"black"}}>Get In Touch</span>
      </a>
    </div>
  );
}

export default GetInTouch;
