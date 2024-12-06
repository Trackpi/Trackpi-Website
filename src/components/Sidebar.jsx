import React from 'react'
import './sidebar.css'
import { NavLink } from 'react-router-dom';

function Sidebar() {
      
  return (
    <>
            <div className="sidebar">
      <nav >
        <ul>
            <li><NavLink to="#" onClick={() => window.open("https://www.facebook.com/profile.php?id=61565947096778", "_blank")}>
                <i className="fab fa-facebook-f"></i>
                <span>Facebook</span>
            </NavLink>
            </li>
            <li><NavLink to="#" onClick={() => window.open("https://www.instagram.com/trackpi_official", "_blank")}>
                <i className="fab fa-instagram"></i>
                <span>Instagram</span>
            </NavLink>
            </li>
            <li><NavLink to="#" onClick={() => window.open("https://www.linkedin.com/company/trackpi-private-limited/", "_blank")}>
                <i className="fab fa-linkedin-in"></i>
                <span>Linkedin</span>
            </NavLink>
            </li>
            <li><NavLink to="#" onClick={() => window.open("https://www.youtube.com/@trackpi", "_blank")}>
                <i className="fab fa-youtube"></i>
                <span>Youtube</span>
            </NavLink>
            </li>
        </ul>
      </nav>
    </div>
    </>
  )
}

export default Sidebar