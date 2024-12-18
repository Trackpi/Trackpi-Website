import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function Header() {
  const [showNavbar, setShowNavbar] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); 

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 0) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavigation = (path, hash) => {
    navigate(path); 
    setTimeout(() => {
      const section = document.querySelector(hash);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' }); 
      }
    }, 0);
  };

  const isActive = (path) => location.pathname === path; 
  

  return (
    <>
      <Navbar expand="lg" className={`navbar px-md-5 font-bold text-base navbar-dark`} fixed="top">
        <Container fluid>
          <Navbar.Brand href="" className="ms-md-3">
            <Link to={'/'} className="flex items-center text-decoration-none p-1">
              <img
                src="src/images/trackpi_logo_one.png"
                alt="TrackPi Logo"
                style={{ width: "110px" }}
              />
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                as={Link}
                to="/"
                className={`me-2.5 ${isActive('/') ? 'active' : ''}`}
                id="navlink"
              >
                HOME
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/about"
                className={`me-2.5 ${isActive('/about') ? 'active' : ''}`} 
                id="navlink"
              >
                ABOUT
              </Nav.Link>

              <NavDropdown
                 title="OUR SERVICES" id='navlink'
                 className={`me-2.5 ${isActive('/our-services') ? 'active' : ''}`} 
                
              >
                <NavDropdown
                  title="Business Consulting"
                  className="custom-dropdown  "
                  drop="end"
                >
                  <NavDropdown.Item
                    className="me-3"
                    onClick={() => handleNavigation('/our-services', '#hiring')}
                  >
                    Hiring & Retention
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="me-3"
                    onClick={() =>
                      handleNavigation('/our-services', '#sales-training')
                    }
                  >
                    Sales Training & Strategies
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="me-3"
                    onClick={() =>
                      handleNavigation('/our-services', '#operations-training')
                    }
                  >
                    Operation Training & Strategies
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="me-3"
                    onClick={() =>
                      handleNavigation('/our-services', '#market-positioning')
                    }
                  >
                    Market Positioning & Branding
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="me-3"
                    onClick={() => handleNavigation('/our-services', '#procurement')}
                  >
                    Procurement & Risk Management
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown.Item
                  onClick={() =>
                    handleNavigation('/our-services', '#sales-outsourcing')
                  }
                  className="me-1 dropdown-sales"
                >
                  Sales Outsourcing
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link
                as={Link}
                className={`me-2.5 ${isActive('/employee-verification') ? 'active' : ''}`} 
                id="navlink"
                to="/employee-verification"
                target="_blank"
              >
                EMPLOYEE VERIFICATION
                <i className="fa-arrow-up-right-from-square fa-solid ms-1"></i>
              </Nav.Link>
              <Nav.Link
                as={Link}
                id="navlink"
                to="/connect-us"
                className={`${isActive('/connect-us') ? 'active' : ''}`} 
              >
                CONNECT US
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
