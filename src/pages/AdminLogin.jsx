import React, { useState } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import logo from '../images/trackpi_logo_one.png'
import { adminLogin } from '../Api Services/adminManagement'
import { useNavigate } from 'react-router-dom'


function AdminLogin() {

  const [data, setData] = useState({ username: '', password: '' })
  const navi=useNavigate()

  const login = () => {
    adminLogin(data).then(res => {
      localStorage.setItem('admin',res.data)
      navi('/admin/admin-management')
    })
      .catch(err => {
        console.log(err)
      })
  }

  return (

    <div className='bg-white d-flex justify-content-center align-items-center' style={{ height: "100vh" }}>
      <Row className='px-3 py-2'>
        <Col sm={12} className='d-flex justify-content-center'>
          <img src={logo} alt="logo" className='img-fluid' width={200} />
        </Col>
        <Col sm={12}>
          <h3 className='font-bold text-center mt-5 mb-4'>Login</h3>
        </Col>
        <Col sm={12} className='d-flex justify-content-center'>
          <Row>
            <Col sm={12} className='mb-3'>
              <label htmlFor="username" className="d-block font-semibold">User Name/ Email id</label>
              <input
                type="text"
                id="username"
                className='form-control form-control-lg border-gray-500  my-2 border-2   shadow-md'
                placeholder="Userame/Email"
                value={data.username}
                onChange={e => setData({ ...data, username: e.target.value })}
                style={{ fontSize: '16px' }}  // Adjust the font size of the input text

              />
            </Col>
            <Col sm={12} className='mb-3'>
              <label htmlFor="password" className="d-block font-semibold">Password</label>
              <input
                type="password"
                id="password"
                className='form-control form-control-lg border-gray-500  my-2 border-2   shadow-md'
                placeholder="Password"
                value={data.password}
                onChange={e => setData({ ...data, password: e.target.value })}
                style={{ fontSize: '16px' }}  // Adjust the font size of the input text

              />
            </Col>
            <Col sm={12} className="d-flex justify-content-center mt-3">
              <Button
                variant="dark"
                className="w-50 py-2 "
                style={{ fontWeight: 'bolder' }}
                onClick={login}
              >
                Login
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>

  )
}

export default AdminLogin

