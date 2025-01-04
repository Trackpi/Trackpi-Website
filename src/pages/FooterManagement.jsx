
import React from 'react'
import AdminNavbar from '../components/AdminNavbar'
import { Col, Row } from 'react-bootstrap'

const FooterManagement = () => {
  return (
    <div className=' bg-white'>
      <AdminNavbar />
      <div className='p-5'>
        <h4 className='font-bold my-4'>Footer Management</h4>
        <div className='shadow-md border-2 border-grey h-96 rounded-3xl p-5'>
          <Row>
            <Col sm={12}>
              <label htmlFor="Heading" className="d-block font-semibold">Heading</label>
              <Row>
                <Col>
                  <input
                    type="text"
                    id="Heading"
                    className='form-control form-control-lg border-gray-500  my-2 border-2 text-black   shadow-md'
                    placeholder="Heading"
                    style={{ fontSize: '18px', fontWeight: 'bolder' }}  // Adjust the font size of the input text

                  />
                </Col>
                <Col className='d-flex align-items-center'>
                  <button className='px-3 py-2 bg-amber-500 rounded-md'><i className='fa-regular fa-pen-to-square text-white'></i></button>
                </Col>
              </Row>
            </Col>

            <Col className='py-5'>

              {/* video 1 */}
              <Row>
                <Col sm={1} className='d-flex align-items-center  justify-content-center'>
                  <button className='btn btn-outline-dark w-100'>Video 1</button>
                </Col>
                <Col sm={6} className='d-flex align-items-center'>
                  <input
                    type="text"
                    className='form-control form-control-lg border-gray-500  my-2 border-2   shadow-md'
                    placeholder="Video Link"
                    style={{ fontSize: '14px' }}  // Adjust the font size of the input text

                  />
                </Col>
                <Col sm={2} className='d-flex align-items-center  justify-content-center'>
                  <button className='btn btn-outline-warning w-100'>Upload Video <i class="ms-2 fa-solid fa-arrow-up-from-bracket"></i></button>
                </Col>
                <Col className='d-flex align-items-center justify-content-end'>
                  <button className='px-3 py-2 bg-amber-500 rounded-md '><i className='fa-regular fa-pen-to-square text-white'></i></button>
                </Col>
              </Row>

              {/* video 2 */}
              <Row>
                <Col sm={1} className='d-flex align-items-center  justify-content-center'>
                  <button className='btn btn-outline-dark w-100'>Video 2</button>
                </Col>
                <Col sm={6} className='d-flex align-items-center'>
                  <input
                    type="text"
                    className='form-control form-control-lg border-gray-500  my-2 border-2  shadow-md'
                    placeholder="Video Link"
                    style={{ fontSize: '14px' }}  // Adjust the font size of the input text  
                  />
                </Col>
                <Col sm={2} className='d-flex align-items-center  justify-content-center'>
                  <button className='btn btn-outline-warning w-100'>Upload Video <i class="ms-2 fa-solid fa-arrow-up-from-bracket"></i></button>
                </Col>
                <Col className='d-flex align-items-center justify-content-end'>
                  <button className='px-3 py-2 bg-amber-500 rounded-md '><i className='fa-regular fa-pen-to-square text-white'></i></button>
                </Col>
              </Row>


              {/* video 3 */}
              <Row>
                <Col sm={1} className='d-flex align-items-center  justify-content-center'>
                  <button className='btn btn-outline-dark w-100'>Video 3</button>
                </Col>
                <Col sm={6} className='d-flex align-items-center'>
                  <input
                    type="text"
                    className='form-control form-control-lg border-gray-500  my-2 border-2   shadow-md'
                    placeholder="Video Link"
                    style={{ fontSize: '14px' }}  // Adjust the font size of the input text

                  />
                </Col>
                <Col sm={2} className='d-flex align-items-center  justify-content-center'>
                  <button className='btn btn-outline-warning w-100'>Upload Video <i class="ms-2 fa-solid fa-arrow-up-from-bracket"></i></button>
                </Col>
                <Col className='d-flex align-items-center justify-content-end'>
                  <button className='px-3 py-2 bg-amber-500 rounded-md '><i className='fa-regular fa-pen-to-square text-white'></i></button>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>

      </div>
    </div>
  )
}

export default FooterManagement

