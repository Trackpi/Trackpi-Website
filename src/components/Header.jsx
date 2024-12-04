import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const [showNavbar, setShowNavbar] = useState(false);
  const navigate = useNavigate();

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
    navigate(path); // Navigate to the page
    setTimeout(() => {
      const section = document.querySelector(hash);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' }); // Scroll to the section
      }
    }, 0);
  };

  return (
    <>
           <Navbar expand='lg' className={`navbar ${showNavbar ? "visible" : "hidden"}`} fixed="top">

        <Container fluid>
          <Navbar.Brand href="">
            <Link to={'/'} className="flex items-center text-decoration-none">
              <h1 className="fw-bold brandname">
                <span className="text-yellow-500">TRACK</span>
                <span className="text-black">PI</span>
              </h1>
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="font-bold ms-auto">
              {/* Use Link for About to navigate normally */}
              <Nav.Link
                as={Link}
                to="/about"
                className="me-3"
                id="navlink"
                href="#about"
              >
                ABOUT
              </Nav.Link>

              <NavDropdown
                title="OUR SERVICES"
                className="custom-dropdown me-3"
                id="navlink"
              >
                <NavDropdown
                  title="Business Consulting"
                  className="custom-dropdown me-3"
                  id="navlink"
                  drop="end"
                >
                  <NavDropdown.Item
                    className="me-3"
                    id="navlink"
                    onClick={() => handleNavigation('/our-services', '#hiring')}
                  >
                    Hiring & Retention
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="me-3"
                    id="navlink"
                    onClick={() =>
                      handleNavigation('/our-services', '#sales-training')
                    }
                  >
                    Sales Training & Strategies
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="me-3"
                    id="navlink"
                    onClick={() =>
                      handleNavigation('/our-services', '#operations-training')
                    }
                  >
                    Operation Training & Strategies
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="me-3"
                    id="navlink"
                    onClick={() =>
                      handleNavigation('/our-services', '#market-positioning')
                    }
                  >
                    Market Positioning & Branding
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="me-3"
                    id="navlink"
                    onClick={() =>
                      handleNavigation('/our-services', '#procurement')
                    }
                  >
                    Procurement & Risk Management
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown.Item
                  onClick={() =>
                    handleNavigation('/our-services', '#sales-outsourcing')
                  }
                  className="me-3"
                  id="navlink"
                >
                  Sales Outsourcing
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link
                as={Link}
                className="me-3"
                id="navlink"
                to="/employee-verification"
                target="_blank"
              >
                EMPLOYEE VERIFICATION
                <i className="fa-arrow-up-right-from-square fa-solid ms-1"></i>
              </Nav.Link>
              <Nav.Link as={Link} id="navlink" to="/connect-us">
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
