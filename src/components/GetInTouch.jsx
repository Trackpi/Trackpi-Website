import React, { useEffect, useRef } from 'react'

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
    <>
         <a href="/connect-us" className="to-top" ref={toTopRef}>
         <i className="fa-solid fa-handshake-simple"></i><span> Get In Touch</span>
         </a>
    </>
  )
}

export default GetInTouch