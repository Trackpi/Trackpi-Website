import React from 'react';
import { useEffect, useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { FaEdit } from "react-icons/fa";
import {
  addAdmin,
  deleteAdmin,
  editAdminData,
  getAdmins,
} from '../Api Services/adminManagement';
import AdminNavbar from '../components/AdminNavbar';
import Table from '../components/Table';
const adminid = localStorage.getItem('admin');

const columns = [
  { header: 'Sl No', accessor: 'sl_no' },
  { header: 'Username', accessor: 'username' },
  { header: 'Email ID', accessor: 'email' },
  { header: 'Password', accessor: 'password' },
  { header: 'Admin Type', accessor: 'admin_type' },
  { header: 'Edit', accessor: 'edit' },
  { header: 'Status', accessor: 'status' },
];

const data = [
  {
    sl_no: 1,
    username: 'Name',
    email: 'email@gmail.com',
    password: 'Password',
    admin_type: 'Admin Type',
    edit: <FaEdit />,
    status: (
      <>
        <button
          style={{
            color: 'white',
            backgroundColor: '#FF8C00',
            marginRight: '5px',
          }}
        >
          Activate
        </button>
        <button style={{ color: 'white', backgroundColor: '#FF6347' }}>
          Deactivate
        </button>
      </>
    ),
  },
  {
    sl_no: 2,
    username: 'Name',
    email: 'email@gmail.com',
    password: 'Password',
    admin_type: 'Admin Type',
    edit: <FaEdit />,
    status: (
      <>
        <button
          style={{
            color: 'white',
            backgroundColor: '#FF8C00',
            marginRight: '5px',
          }}
        >
          Activate
        </button>
        <button style={{ color: 'white', backgroundColor: '#FF6347' }}>
          Deactivate
        </button>
      </>
    ),
  },
  {
    sl_no: 3,
    username: 'Name',
    email: 'email@gmail.com',
    password: 'Password',
    admin_type: 'Admin Type',
    edit: <FaEdit />,
    status: (
      <>
        <button
          style={{
            color: 'white',
            backgroundColor: '#FF8C00',
            marginRight: '5px',
          }}
        >
          Activate
        </button>
        <button style={{ color: 'white', backgroundColor: '#FF6347' }}>
          Deactivate
        </button>
      </>
    ),
  },
  {
    sl_no: 4,
    username: 'Name',
    email: 'email@gmail.com',
    password: 'Password',
    admin_type: 'Admin Type',
    edit: <FaEdit />,
    status: (
      <>
        <button
          style={{
            color: 'white',
            backgroundColor: '#FF8C00',
            marginRight: '5px',
          }}
        >
          Activate
        </button>
        <button style={{ color: 'white', backgroundColor: '#FF6347' }}>
          Deactivate
        </button>
      </>
    ),
  },
];

function AdminManagement() {
  const [admins, setAdmins] = useState([]);
  const [addAminData, setAddAdminData] = useState({
    username: '',
    password: '',
    adminType: '',
  });
  const [editModalData, setEditModalData] = useState({});

  //modal handeler
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    getAdmins(adminid)
      .then(res => {
        setAdmins(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [refresh]);

  const handelEdit = data => {
    setEditModalData(data);
    handleShow();
  };
  const handelUpdateAdmin = () => {
    editAdminData(editModalData, adminid)
      .then(res => {
        console.log(res.data);
        setEditModalData({});
        setRefresh(!refresh);
        handleClose();
      })
      .catch(err => {
        setEditModalData({});
        handleClose();
        console.log(err);
      });
  };
  const handelActiveStatus = data => {
    editAdminData(data, adminid)
      .then(res => {
        setRefresh(!refresh);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handeldelete = data => {
    deleteAdmin(data, adminid)
      .then(res => {
        setRefresh(!refresh);
      })
      .catch(err => {
        console.log(err);
      });
  };
  const handelAdminAdd = () => {
    addAdmin(addAminData, adminid)
      .then(res => {
        setRefresh(!refresh);
        setAddAdminData({ username: '', password: '', adminType: '' });
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className=" bg-white">
      <AdminNavbar />
      <div className="p-5">
        <h4 className="font-bold my-4">Admin Management</h4>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg  border-dark border-2">
          {/* <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
            <thead className="text-md font-bold text-black uppercase border-b-2 border-dark ">
              <tr>
                <th scope="col" className="px-6 py-3 border-r-2  text-center">
                  Username
                </th>
                <th scope="col" className="px-6 py-3 border-r-2  text-center">
                  Password
                </th>
                <th scope="col" className="px-6 py-3 border-r-2  text-center">
                  Admin Type
                </th>
                <th scope="col" className="px-6 py-3 border-r-2  text-center">
                  Edit
                </th>
                <th scope="col" className="px-6 py-3 border-r-2  text-center">
                  Delete
                </th>
                <th scope="col" className="px-6 py-3  text-center">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {admins.map((obj, key) => (
                <tr
                  key={key}
                  className="bg-white text-md  font-semibold text-black dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600 "
                >
                  <td className="px-6 py-4  border-r-2   text-center">
                    {obj?.username}
                  </td>
                  <td className="px-6 py-4 border-r-2  text-center">
                    {obj?.password}
                  </td>
                  <td className="px-6 py-4 border-r-2  text-center">
                    {obj?.adminType}
                  </td>
                  <td className="px-6 py-4 border-r-2  text-center">
                    <i
                      className="fa-regular fa-pen-to-square fa-xl text-dark"
                      onClick={() => {
                        handelEdit(obj);
                      }}
                    ></i>
                  </td>
                  <td className="px-6 py-4 border-r-2  text-center">
                    <i
                      className="fa-regular fa-trash-can fa-xl text-dark"
                      onClick={() => {
                        handeldelete(obj._id);
                      }}
                    ></i>
                  </td>
                  <td className="  text-center">
                    <div className="d-flex justify-content-center ">
                      {obj?.isActive ? (
                        <div
                          className=" d-flex  border-slate-950 border-1 shadow rounded-2xl "
                          style={{ maxWidth: 'max-content' }}
                        >
                          <div
                            className="bg-dark text-light  px-2 py-1 rounded-2xl  text-xs font-medium text-center"
                            style={{
                              maxWidth: 'max-content',
                              cursor: 'pointer',
                            }}
                            onClick={() =>
                              handelActiveStatus({ ...obj, isActive: true })
                            }
                          >
                            Activate
                          </div>
                          <div
                            className="bg-white   text-xs px-2 py-1 rounded-2xl font-medium"
                            style={{
                              maxWidth: 'max-content',
                              cursor: 'pointer',
                            }}
                            onClick={() =>
                              handelActiveStatus({ ...obj, isActive: false })
                            }
                          >
                            Deactivate
                          </div>
                        </div>
                      ) : (
                        <div
                          className=" d-flex  border-slate-950 border-1 shadow rounded-2xl "
                          style={{ maxWidth: 'max-content' }}
                        >
                          <div
                            className="bg-white   text-xs px-2 py-1 rounded-2xl font-medium"
                            style={{
                              maxWidth: 'max-content',
                              cursor: 'pointer',
                            }}
                            onClick={() =>
                              handelActiveStatus({ ...obj, isActive: true })
                            }
                          >
                            Activate
                          </div>
                          <div
                            className="bg-dark text-light  px-2 py-1 rounded-2xl  text-xs font-medium text-center"
                            style={{
                              maxWidth: 'max-content',
                              cursor: 'pointer',
                            }}
                            onClick={() =>
                              handelActiveStatus({ ...obj, isActive: false })
                            }
                          >
                            Deactivate
                          </div>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table> */}
          <Table columns={columns} data={data} />
        </div>

        <div className="d-flex justify-content-center align-items-center my-5 ">
          <div className="border  m-5 shadow rounded-4">
            <h3 className="text-center m-5 font-bold">Add Admin</h3>
            <Row className="m-5">
              <Col sm={6} className="mb-3">
                <label htmlFor="username" className="d-block font-semibold">
                  User Name
                </label>
                <input
                  type="text"
                  id="username"
                  className="form-control form-control-lg border-light drop-shadow-lg my-2"
                  placeholder="user name"
                  onChange={e =>
                    setAddAdminData({
                      ...addAminData,
                      username: e.target.value,
                    })
                  }
                  style={{ fontSize: '16px' }} // Adjust the font size of the input text
                />
              </Col>
              <Col sm={6} className="mb-3">
                <label htmlFor="password" className="d-block font-semibold">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="form-control form-control-lg border-light drop-shadow-lg my-2"
                  placeholder="password"
                  onChange={e =>
                    setAddAdminData({
                      ...addAminData,
                      password: e.target.value,
                    })
                  }
                  style={{ fontSize: '16px' }} // Adjust the font size of the input text
                />
              </Col>
              <Col sm={3}></Col>

              <Col sm={6} className="mb-3 ">
                <label htmlFor="adminType" className="d-block font-semibold">
                  admin Type
                </label>
                <select
                  className="form-select form-select-lg  border-light drop-shadow-lg my-2"
                  aria-label="Default select example"
                  id="password"
                  onChange={e =>
                    setAddAdminData({
                      ...addAminData,
                      adminType: e.target.value,
                    })
                  }
                  style={{ fontSize: '16px' }} // Adjust the font size of the input text
                >
                  <option defaultValue disabled>
                    Admin Type
                  </option>
                  <option value="admin">admin</option>
                  <option value="superadmin">Superadmin</option>
                </select>
              </Col>
              <Col sm={3}></Col>

              <Col sm={12} className="d-flex justify-content-center mt-3">
                <Button
                  variant="dark"
                  className="w-25 py-2 rounded-3"
                  style={{ fontWeight: 'bolder' }}
                  onClick={handelAdminAdd}
                >
                  Submit
                </Button>
              </Col>
            </Row>
          </div>
        </div>
      </div>

      {/* edit modal */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Admin</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="mx-3 my-2">
            <Col sm={12} className="mb-3">
              <label htmlFor="username" className="d-block font-semibold">
                User Name
              </label>
              <input
                type="text"
                id="username"
                className="form-control form-control-lg border-gray-500  my-2 border-2   shadow-md"
                placeholder="user name"
                defaultValue={editModalData.username}
                onChange={e =>
                  setEditModalData({
                    ...editModalData,
                    username: e.target.value,
                  })
                }
              />
            </Col>
            <Col sm={12} className="mb-3">
              <label htmlFor="password" className="d-block font-semibold">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="form-control form-control-lg border-gray-500  my-2 border-2   shadow-md"
                placeholder="password"
                defaultValue={editModalData.password}
                onChange={e =>
                  setEditModalData({
                    ...editModalData,
                    password: e.target.value,
                  })
                }
              />
            </Col>

            <Col sm={12} className="mb-3 ">
              <label htmlFor="admintype" className="d-block font-semibold">
                Admin Type
              </label>
              <select
                className="form-select form-select-lg  border-gray-500  my-2 border-2   shadow-md"
                aria-label="admintype"
                id="admintype"
                defaultValue={editModalData.adminType}
                onChange={e =>
                  setEditModalData({
                    ...editModalData,
                    adminType: e.target.value,
                  })
                }
              >
                <option defaultValue disabled>
                  Admin Type
                </option>
                <option value="admin">admin</option>
                <option value="superadmin">Superadmin</option>
              </select>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="dark" onClick={handelUpdateAdmin}>
            Update Admin
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AdminManagement;
