import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    // footer section
    <Container fluid className='fixed-bottom' style={{ position: 'relative' }}>
      <Row className='flex justify-center bg-black p-3'>
        {/* quick links */}
        <Col className='flex flex-col sm:items-center md:items-start' md={4}>
          <h4 className='text-danger'>Quick Links</h4>
          <Link className='text-white text-decoration-none' to={'/'}>
            Home
          </Link>
          <Link className='text-white text-decoration-none' to={'/about'}>
             About
          </Link>
          <Link className='text-white text-decoration-none' to={'/connect-us'}>
             Connect Us
          </Link>
        </Col>

        {/* logo & social media icons */}
        <Col className='flex flex-col justify-center items-center' md={4}>
          <img src='src/images/trackpi_logo.png' className='w-60' alt='' />
          <div className='flex gap-5 py-2'>
            <Link
              className='text-blue-800 text-decoration-none'
              to={'https://www.linkedin.com'}
            >
              <i className='fa-brands fa-linkedin fa-xl'></i>
            </Link>
            <Link
              className='text-blue-800 text-decoration-none'
              to={'https://www.facebook.com'}
            >
              <i className='fa-brands fa-facebook fa-xl'></i>
            </Link>
            <Link
              className='text-rose-600 text-decoration-none'
              to={'https://www.instagram.com'}
            >
              <i className='fa-brands fa-instagram fa-xl'></i>
            </Link>
            <Link
              className='text-blue-300 text-decoration-none'
              to={'https://www.twitter.com'}
            >
              {' '}
              <i className='fa-brands fa-twitter fa-xl'></i>
            </Link>
          </div>
        </Col>

        {/* Contact section */}
        <Col className='flex flex-col sm:items-center md:items-end' md={4}>
          <h4 className='text-danger'>Contact</h4>
          <div className='text-white'>
            <i className='fa-location-dot fa-solid me-2'></i> Kakkanad, Kochi, India
          </div>
          <div className='text-white'>
            <i className='fa-phone fa-solid me-2'></i> +91 8078179646
          </div>
          <div className='text-white'>
            <i className='fa-envelope fa-solid me-2'></i> trackpi@gmail.com
          </div>
        </Col>
      </Row>

      {/* copyrights */}
      <Row className='bg-black text-center text-white'>
        <p>
          © {new Date().getFullYear()} TrackPi Private Limited. All rights
          reserved.
        </p>
      </Row>
    </Container>
  )
}

export default Footer
