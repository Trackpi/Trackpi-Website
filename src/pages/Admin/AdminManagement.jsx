import React from 'react';
import { useEffect, useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
// import {
//   addAdmin,
//   deleteAdmin,
//   editAdminData,
//   getAdmins,
// } from '../../Api Services/adminManagement';
// import AdminNavbar from '../components/AdminNavbar';
import { FaRegEdit } from 'react-icons/fa';
import { RiFileCopyLine } from 'react-icons/ri';

const adminid = localStorage.getItem('adminId');

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

  //   useEffect(() => {
  //     getAdmins(adminid)
  //       .then(res => {
  //         setAdmins(res.data);
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       });
  //   }, [refresh]);

  //   const handelEdit = data => {
  //     setEditModalData(data);
  //     handleShow();
  //   };
  //   const handelUpdateAdmin = () => {
  //     editAdminData(editModalData, adminid)
  //       .then(res => {
  //         console.log(res.data);
  //         setEditModalData({});
  //         setRefresh(!refresh);
  //         handleClose();
  //       })
  //       .catch(err => {
  //         setEditModalData({});
  //         handleClose();
  //         console.log(err);
  //       });
  //   };
  //   const handelActiveStatus = data => {
  //     editAdminData(data, adminid)
  //       .then(res => {
  //         setRefresh(!refresh);
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       });
  //   };

  //   const handeldelete = data => {
  //     deleteAdmin(data, adminid)
  //       .then(res => {
  //         setRefresh(!refresh);
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       });
  //   };
  //   const handelAdminAdd = () => {
  //     addAdmin(addAminData, adminid)
  //       .then(res => {
  //         setRefresh(!refresh);
  //         setAddAdminData({ username: '', password: '', adminType: '' });
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       });
  //   };

  const toggleStatus = index => {
    console.log('Toggling row:', index); // This logs the index of the row being toggled
    setRows(prevRows =>
      prevRows.map((row, rowIndex) => {
        if (rowIndex === index) {
          // Log the current status before toggling
          console.log(
            `Current status of admin at index ${index}:`,
            row.isActive ? 'DeActivate' : 'Activate'
          );

          // Toggle the status
          return { ...row, isActive: !row.isActive };
        }
        return row;
      })
    );
  };

  //   // Handle adding admin
  //   const handelAdminAdd = () => {
  //     // Add admin logic here
  //     setRefresh(!refresh);
  //     setAddAdminData({ username: '', password: '', adminType: '' });
  //     handleClose(); // Close modal after adding
  //   };
  //     // Handle editing admin
  //     const handelUpdateAdmin = () => {
  //         // Update admin logic here
  //         setRefresh(!refresh);
  //         handleClose();
  //       };

  //   const handleEditClick = index => {
  //     console.log(index,"row_edit");
  //     setEditIndex(index);
  //     setEditModalData(data);
  //     handleShow();
  //     // Perform any additional logic (e.g., open an edit modal, show a form, etc.)
  //   };

  const handelAdminAdd = () => {
    // Add admin logic here
    const newAdmin = {
      sl_no: rows.length + 1, // Generate a unique sl_no
      ...addAdminData,
      isActive: false, // Set default status
    };
    setRows([...rows, newAdmin]); // Add the new admin to the table
    setAddAdminData({ username: '', password: '', adminType: '' });
    handleClose(); // Close modal after adding
  };

  const handleEditClick = index => {
    const adminData = rows[index]; // Get the admin data to edit
    setEditModalData(adminData);
    handleShow(); // Open modal in edit mode
    setEditIndex(index);
  };

  const handelUpdateAdmin = () => {
    // Update admin logic here
    const updatedRows = [...rows];
    updatedRows[editIndex] = { ...updatedRows[editIndex], ...editModalData };
    setRows(updatedRows); // Update the rows state with the updated data
    setEditModalData({});
    handleClose(); // Close modal after update
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
                    <td className={`px-6 py-3 border-r-2 text-center`}>
                      {row.username}
                    </td>
                    <td className={`px-6 py-3 border-r-2 text-center`}>
                      {row.email}
                    </td>
                    <td className={`px-6 py-3 border-r-2 text-center`}>
                      <div className="flex justify-center items-center gap-2 ">
                        {row.password} <RiFileCopyLine />{' '}
                      </div>
                    </td>
                    <td className={`px-6 py-3 border-r-2 text-center`}>
                      {row.admin_type}
                    </td>
                    <td className={`px-6 py-3 border-r-2 text-center`}>
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
              <Col sm={6} className="mb-5">
                <label htmlFor="username" className="d-block font-semibold">
                  User Name
                </label>
                <input
                  type="text"
                  id="username"
                  className="form-control form-control-lg border-gray-500  my-2 border-2   shadow-md"
                  placeholder="user name"
                  value={editModalData.username || ''}
                  onChange={e =>
                    setEditModalData({
                      ...editModalData,
                      username: e.target.value,
                    })
                  }
                  style={{ fontSize: '16px' }} // Adjust the font size of the input text
                />
              </Col>

              <Col sm={6} className="mb-5">
                <label htmlFor="emailid" className="d-block font-semibold">
                  Email ID
                </label>
                <input
                  type="email"
                  id="emailid"
                  className="form-control form-control-lg border-gray-500  my-2 border-2   shadow-md"
                  placeholder="Email ID"
                  value={editModalData.email || ''}
                  onChange={e =>
                    setEditModalData({
                      ...editModalData,
                      email: e.target.value,
                    })
                  }
                  style={{ fontSize: '16px' }} // Adjust the font size of the input text
                />
              </Col>

              <Col sm={6} className="mb-5">
                <label htmlFor="password" className="d-block font-semibold">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="form-control form-control-lg border-gray-500  my-2 border-2   shadow-md"
                  placeholder="password"
                  value={editModalData.password || ''}
                  onChange={e =>
                    setEditModalData({
                      ...editModalData,
                      password: e.target.value,
                    })
                  }
                  style={{ fontSize: '16px' }} // Adjust the font size of the input text
                />
              </Col>

              <Col sm={6} className="mb-5">
                <label htmlFor="adminType" className="d-block font-semibold">
                  admin Type
                </label>
                <select
                  className="form-select form-select-lg  border-gray-500  my-2 border-2   shadow-md"
                  aria-label="Default select example"
                  id="password"
                  value={editModalData.adminType || ''}
                  onChange={e => setEditModalData({ ...editModalData, adminType: e.target.value })}
                  style={{ fontSize: '16px' }} // Adjust the font size of the input text
                >
                  <option defaultChecked value={null}>
                    Admin Type
                  </option>
                  <option value="admin">admin</option>
                  <option value="superadmin">Superadmin</option>
                </select>
              </Col>

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

      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
      >
        <Modal.Body>
          <h4 className="text-center m-5 font-bold">Admin Details</h4>
          <Row className="mx-3 my-2">
            <Col sm={6} className="mb-4">
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
                style={{ fontSize: '16px' }} // Adjust the font size of the input text
              />
            </Col>
            <Col sm={6} className="mb-4">
              <label htmlFor="emailid" className="d-block font-semibold">
                Email ID
              </label>
              <input
                type="text"
                id="emailid"
                className="form-control form-control-lg border-gray-500  my-2 border-2   shadow-md"
                placeholder="Email ID"
                defaultValue={editModalData.email}
                onChange={e =>
                  setEditModalData({ ...editModalData, email: e.target.value })
                }
                style={{ fontSize: '16px' }} // Adjust the font size of the input text
              />
            </Col>
            <Col sm={6} className="mb-4">
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
                style={{ fontSize: '16px' }} // Adjust the font size of the input text
              />
            </Col>

            <Col sm={6} className="mb-4">
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
                style={{ fontSize: '16px' }} // Adjust the font size of the input text
              >
                <option defaultValue disabled>
                  Admin Type
                </option>
                <option value="admin">admin</option>
                <option value="superadmin">Superadmin</option>
              </select>
            </Col>
            <Col sm={12} className="d-flex justify-content-center my-4">
              <Button
                variant="dark"
                className="w-25 py-2 rounded-3"
                style={{ fontWeight: 'bolder' }}
                onClick={handelUpdateAdmin}
              >
                Submit
              </Button>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default AdminManagement;