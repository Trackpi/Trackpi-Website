import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import logo from '../../images/trackpi_logo_one.png';
import { useNavigate } from 'react-router-dom';
import baseURL from '../../Api Services/baseURL';
import { jwtDecode } from 'jwt-decode';

function AdminLogin() {
  const [data, setData] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const onLogin = async () => {
    if (!data.username || !data.password) {
      alert('Please fill in both fields.');
      return;
    }
    try {
      const response = await baseURL.post('/adminlogin', data);
      console.log(response, 'responseLogin');

      // Extract the token from the response
      const token = response.data.token;
      console.log(token, 'token');

      // Decode the token to get the user ID
      const decodedToken = jwtDecode(token);
      console.log(decodedToken, 'decodedToken');
      const adminId = decodedToken._id; // Adjust based on the token structure

      // Save token and adminId to localStorage
      localStorage.setItem('adminToken', token);
      localStorage.setItem('adminId', adminId);

      console.log('Token and Admin ID saved to localStorage:', {
        token,
        adminId,
      });

      // Navigate to the admin dashboard
      navigate('/admin/admin-management');
    } catch (e) {
      console.error(e);
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <div
      className="bg-white d-flex justify-content-center align-items-center"
      style={{ height: '100vh' }}
    >
      <Row className="px-3 py-2">
        <Col sm={12} className="d-flex justify-content-center">
          <img src={logo} alt="logo" className="img-fluid" width={200} />
        </Col>
        <Col sm={12}>
          <h3 className="font-bold text-center mt-5 mb-4">Login</h3>
        </Col>
        <Col sm={12} className="d-flex justify-content-center">
          <form
            onSubmit={e => {
              e.preventDefault();
              onLogin();
            }}
          >
            <Row>
              <Col sm={12} className="mb-3">
                <label htmlFor="username" className="d-block font-semibold">
                  User Name/ Email id
                </label>
                <input
                  type="text"
                  id="username"
                  className="form-control form-control-lg border-gray-500 my-2 border-2 shadow-md"
                  placeholder="Username/Email"
                  value={data.username}
                  onChange={e => setData({ ...data, username: e.target.value })}
                  style={{ fontSize: '16px' }}
                  autoComplete="current-username"
                />
              </Col>
              <Col sm={12} className="mb-3">
                <label htmlFor="password" className="d-block font-semibold">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="form-control form-control-lg border-gray-500 my-2 border-2 shadow-md"
                  placeholder="Password"
                  value={data.password}
                  onChange={e => setData({ ...data, password: e.target.value })}
                  style={{ fontSize: '16px' }}
                  autoComplete="current-password"
                />
              </Col>
              <Col sm={12} className="d-flex justify-content-center mt-3">
                <Button
                  variant="dark"
                  className="w-50 py-2"
                  style={{ fontWeight: 'bolder' }}
                  type="submit"
                >
                  Login
                </Button>
              </Col>
            </Row>
          </form>
        </Col>
      </Row>
    </div>
  );
}

export default AdminLogin;
