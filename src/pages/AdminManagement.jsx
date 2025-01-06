import React from 'react';
import { useEffect, useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import {
  addAdmin,
  deleteAdmin,
  editAdminData,
  getAdmins,
} from '../Api Services/adminManagement';
// import AdminNavbar from '../components/AdminNavbar';
import { FaRegEdit } from 'react-icons/fa';
import { RiFileCopyLine } from 'react-icons/ri';

const adminid = localStorage.getItem('admin');

const data = [
  {
    sl_no: 1,
    username: 'Name',
    email: 'email@gmail.com',
    password: 'Password',
    admin_type: 'Admin Type',
    isActive: false,
  },
  {
    sl_no: 2,
    username: 'Name',
    email: 'email@gmail.com',
    password: 'Password',
    admin_type: 'Admin Type',
    isActive: false,
  },
  {
    sl_no: 3,
    username: 'Name',
    email: 'email@gmail.com',
    password: 'Password',
    admin_type: 'Admin Type',
    isActive: false,
  },
  {
    sl_no: 4,
    username: 'Name',
    email: 'email@gmail.com',
    password: 'Password',
    admin_type: 'Admin Type',
    isActive: false,
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
  const [rows, setRows] = useState(data);
  const [editIndex, setEditIndex] = useState(null);
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

  const toggleStatus = index => {
    console.log('Toggling row:', index);
    setRows(prevRows =>
      prevRows.map((row, rowIndex) =>
        rowIndex === index ? { ...row, isActive: !row.isActive } : row
      )
    );
  };
  const handleEditClick = index => {
    console.log(index);
    setEditIndex(index);
    // Perform any additional logic (e.g., open an edit modal, show a form, etc.)
  };

  return (
    <div className="w-full bg-white">
      {/* <AdminNavbar /> */}
      <div className="p-5">
        <h4 className="font-bold my-4">Admin Management</h4>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg  border-dark border-2">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-md font-bold text-black uppercase border-b-2 border-dark">
              <tr>
                <th scope="col" className="px-1 py-3 border-r-2 text-center">
                  SL No.
                </th>
                <th scope="col" className="px-6 py-3 border-r-2 text-center">
                  Username
                </th>
                <th scope="col" className="px-6 py-3 border-r-2 text-center">
                  Email ID
                </th>
                <th scope="col" className="px-6 py-3 border-r-2 text-center">
                  Password
                </th>
                <th scope="col" className="px-6 py-3 border-r-2 text-center">
                  Admin Type
                </th>
                <th scope="col" className="px-3 py-3 border-r-2 text-center">
                  Edit
                </th>
                <th scope="col" className="px-10 py-3 border-r-2 text-center">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className="bg-white text-md font-semibold text-black dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600 custom-table"
                >
                  <>
                    <td
                      key={rowIndex}
                      className="px-3 py-3 border-r-2  text-center"
                    >
                      {row.sl_no}
                    </td>
                    <td className={px-6 py-3 border-r-2 text-center}>
                      {row.username}
                    </td>
                    <td className={px-6 py-3 border-r-2 text-center}>
                      {row.email}
                    </td>
                    <td className={px-6 py-3 border-r-2 text-center}>
                      <div className="flex justify-center items-center gap-2 ">
                        {row.password} <RiFileCopyLine />{' '}
                      </div>
                    </td>
                    <td className={px-6 py-3 border-r-2 text-center}>
                      {row.admin_type}
                    </td>
                    <td className={px-6 py-3 border-r-2 text-center}>
                      {/* {row.edit} */}
                      <div className="flex justify-center items-center">
                        <FaRegEdit
                          size={15}
                          onClick={() => handleEditClick(rowIndex)}
                        />
                      </div>
                    </td>

                    <td>
                      <div className="flex justify-center gap-2.5">
                        <button
                          onClick={() => toggleStatus(rowIndex)}
                          className={`${
                            row.isActive
                              ? 'bg-[#FF9D00] text-white'
                              : 'bg-white text-black'
                          } ${
                            row.isActive ? 'py-1 px-2' : 'py-1 pr-7 pl-2'
                          } rounded-full cursor-pointer relative text-xs font-bold ${
                            row.isActive ? 'z-10' : 'z-0'
                          } mr-[-30px]`}
                          style={{
                            border: row.isActive ? 'none' : '1px solid black',
                          }}
                        >
                          Activate
                        </button>
                        <button
                          onClick={() => toggleStatus(rowIndex)}
                          className={`${
                            row.isActive
                              ? 'bg-white text-black'
                              : 'bg-[#FF9D00] text-white'
                          } 
                          ${row.isActive ? 'py-1 pr-2 pl-7' : 'py-1 px-2'}
                           rounded-full cursor-pointer relative text-xs font-bold ${
                             row.isActive ? 'z-0' : 'z-10'
                           }`}
                          style={{
                            border: row.isActive ? '1px solid black' : 'none',
                            display: 'flex',
                            justifyContent: row.isActive
                              ? 'flex-end'
                              : 'center',
                          }}
                        >
                          Deactivate
                        </button>
                      </div>
                    </td>
                  </>
                </tr>
              ))}
            </tbody>
          </table>
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