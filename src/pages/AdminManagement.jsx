
import React from 'react'
import { useEffect, useState } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';
import { addAdmin, deleteAdmin, editAdminData, getAdmins } from '../Api Services/adminManagement';
import AdminNavbar from '../components/AdminNavbar';

const adminid = localStorage.getItem('admin')



function AdminManagement() {

    const [admins, setAdmins] = useState([])
    const [addAminData, setAddAdminData] = useState({ username: '', password: '', adminType: '', email: '' })
    const [editModalData, setEditModalData] = useState({})
    const [copied, setCopied] = useState({status:false , username:''});

    //modal handeler
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [refresh, setRefresh] = useState(true)


    useEffect(() => {
        getAdmins(adminid).then(res => {
            setAdmins(res.data)
        })
            .catch(err => {
                console.log(err)
            })
    }, [refresh])


    const handelEdit = (data) => {
        setEditModalData(data)
        handleShow()
    }


    const handelUpdateAdmin = () => {
        editAdminData(editModalData, adminid).then(res => {
            console.log(res.data)
            setEditModalData({})
            setRefresh(!refresh)
            handleClose()
        })
            .catch(err => {
                setEditModalData({})
                handleClose()
                console.log(err)
            })
    }


    const handelActiveStatus = (data) => {
        editAdminData(data, adminid).then(res => {
            setRefresh(!refresh)
        })
            .catch(err => {

                console.log(err)
            })
    }


    const handeldelete = (data) => {
        deleteAdmin(data, adminid).then(res => {
            setRefresh(!refresh)
        })
            .catch(err => {

                console.log(err)
            })

    }


    const handelAdminAdd = () => {
        addAdmin(addAminData, adminid).then(res => {
            setAddAdminData({ username: '', password: '', adminType: '',email:'' })
            setRefresh(!refresh)
        })
            .catch(err => {

                console.log(err)
            })
    }


    const handleCopy = (text,username) => {
        navigator.clipboard.writeText(text)
        .then(() => {
            setCopied({status:true,username});
            // Reset copied status after 2 seconds
            setTimeout(() => setCopied({status:false,username:''}), 3000);
          })
          .catch((error) => {
            console.error("Failed to copy: ", error);
          });
    };


    return (
        <div className=' bg-white'>
            <AdminNavbar />
            <div className='p-5'>
                <h4 className='font-bold my-4'>Admin Management</h4>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg  border-dark border-2">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
                        <thead className="text-md font-bold text-black uppercase border-b-2 border-dark ">
                            <tr>
                                <th scope="col" className="px-6 py-3 border-r-2  text-center">
                                    Sl No
                                </th>
                                <th scope="col" className="px-6 py-3 border-r-2  text-center">
                                    Username
                                </th>
                                <th scope="col" className="px-6 py-3 border-r-2  text-center">
                                    Email ID
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
                            {
                                admins.map((obj, key) => (

                                    <tr key={key} className="bg-white text-md  font-semibold text-black dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600 ">
                                        <td className="px-6 py-4  border-r-2   text-center">
                                            {key + 1}</td>
                                        <td className="px-6 py-4  border-r-2   text-center">
                                            {obj?.username}</td>
                                        <td className="px-6 py-4  border-r-2   text-center">
                                            {obj?.email}</td>
                                        <td className="px-6 py-4 border-r-2  text-center">
                                            {obj?.password}
                                            <i className={` fa-copy ms-3 cursor-pointer ${(copied.status && obj.username===copied.username) ? 'text-warning fa-solid' : 'fa-regular'}`} onClick={() => handleCopy(obj.password,obj.username)}></i>
                                        </td>
                                        <td className="px-6 py-4 border-r-2  text-center">
                                            {obj?.adminType}</td>
                                        <td className="px-6 py-4 border-r-2  text-center">
                                            <i className="fa-regular fa-pen-to-square fa-xl text-dark" onClick={() => { handelEdit(obj) }}></i></td>
                                        <td className="px-6 py-4 border-r-2  text-center">
                                            <i className="fa-regular fa-trash-can fa-xl text-dark" onClick={() => { handeldelete(obj._id) }}></i></td>
                                        <td className='  text-center'>
                                            <div className="d-flex justify-content-center " >
                                                {
                                                    obj?.isActive ?
                                                        <div className=' d-flex  border-slate-950 border-1 shadow rounded-2xl ' style={{ maxWidth: "max-content" }}>
                                                            <div className='bg-dark text-light  px-2 py-1 rounded-2xl  text-xs font-medium text-center' style={{ maxWidth: "max-content", cursor: 'pointer' }} onClick={() => handelActiveStatus({ ...obj, isActive: true })}>Activate</div>
                                                            <div className='bg-white   text-xs px-2 py-1 rounded-2xl font-medium' style={{ maxWidth: "max-content", cursor: 'pointer' }} onClick={() => handelActiveStatus({ ...obj, isActive: false })}>Deactivate</div>
                                                        </div>
                                                        :
                                                        <div className=' d-flex  border-slate-950 border-1 shadow rounded-2xl ' style={{ maxWidth: "max-content" }}>
                                                            <div className='bg-white   text-xs px-2 py-1 rounded-2xl font-medium' style={{ maxWidth: "max-content", cursor: 'pointer' }} onClick={() => handelActiveStatus({ ...obj, isActive: true })}>Activate</div>
                                                            <div className='bg-dark text-light  px-2 py-1 rounded-2xl  text-xs font-medium text-center' style={{ maxWidth: "max-content", cursor: 'pointer' }} onClick={() => handelActiveStatus({ ...obj, isActive: false })}>Deactivate</div>
                                                        </div>
                                                }
                                            </div>
                                        </td>
                                    </tr>
                                ))}

                        </tbody>
                    </table>
                </div>

                <div className='d-flex justify-content-center align-items-center my-5 '>
                    <div className='border  m-5 shadow rounded-4'>
                        <h3 className='text-center m-5 font-bold'>Add Admin</h3>
                        <Row className='m-5'>
                            <Col sm={6} className='mb-5'>
                                <label htmlFor="username" className="d-block font-semibold">User Name</label>
                                <input
                                    type="text"
                                    id="username"
                                    className='form-control form-control-lg border-gray-500  my-2 border-2   shadow-md'
                                    placeholder="user name"
                                    value={addAminData.username}
                                    onChange={e => setAddAdminData({ ...addAminData, username: e.target.value })}
                                    style={{ fontSize: '16px' }}  // Adjust the font size of the input text


                                />
                            </Col>

                            <Col sm={6} className='mb-5'>
                                <label htmlFor="emailid" className="d-block font-semibold">Email ID</label>
                                <input
                                    type="email"
                                    id="emailid"
                                    className='form-control form-control-lg border-gray-500  my-2 border-2   shadow-md'
                                    placeholder="Email ID"
                                    value={addAminData.email}
                                    onChange={e => setAddAdminData({ ...addAminData, email: e.target.value })}
                                    style={{ fontSize: '16px' }}  // Adjust the font size of the input text

                                />
                            </Col>

                            <Col sm={6} className='mb-5'>
                                <label htmlFor="password" className="d-block font-semibold">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    className='form-control form-control-lg border-gray-500  my-2 border-2   shadow-md'
                                    placeholder="password"
                                    value={addAminData.password}
                                    onChange={e => setAddAdminData({ ...addAminData, password: e.target.value })}
                                    style={{ fontSize: '16px' }}  // Adjust the font size of the input text

                                />
                            </Col>

                            <Col sm={6} className='mb-5'>
                                <label htmlFor="adminType" className="d-block font-semibold">admin Type</label>
                                <select
                                    className="form-select form-select-lg  border-gray-500  my-2 border-2   shadow-md"
                                    aria-label="Default select example"
                                    id="password"
                                    value={addAminData.adminType}
                                    onChange={e => setAddAdminData({ ...addAminData, adminType: e.target.value })}
                                    style={{ fontSize: '16px' }}  // Adjust the font size of the input text

                                >
                                    <option defaultChecked  value={null}>Admin Type</option>
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
                onHide={handleClose}>

                <Modal.Body>
                    <h4 className='text-center m-5 font-bold'>Admin Details</h4>
                    <Row className='mx-3 my-2'>
                        <Col sm={6} className='mb-4'>
                            <label htmlFor="username" className="d-block font-semibold">User Name</label>
                            <input
                                type="text"
                                id="username"
                                className='form-control form-control-lg border-gray-500  my-2 border-2   shadow-md'
                                placeholder="user name"
                                defaultValue={editModalData.username}
                                onChange={e => setEditModalData({ ...editModalData, username: e.target.value })}
                                style={{ fontSize: '16px' }}  // Adjust the font size of the input text
                            />
                        </Col>
                        <Col sm={6} className='mb-4'>
                            <label htmlFor="emailid" className="d-block font-semibold">Email ID</label>
                            <input
                                type="text"
                                id="emailid"
                                className='form-control form-control-lg border-gray-500  my-2 border-2   shadow-md'
                                placeholder="Email ID"
                                defaultValue={editModalData.email}
                                onChange={e => setEditModalData({ ...editModalData, email: e.target.value })}
                                style={{ fontSize: '16px' }}  // Adjust the font size of the input text
                            />
                        </Col>
                        <Col sm={6} className='mb-4'>
                            <label htmlFor="password" className="d-block font-semibold">Password</label>
                            <input
                                type="password"
                                id="password"
                                className='form-control form-control-lg border-gray-500  my-2 border-2   shadow-md'
                                placeholder="password"
                                defaultValue={editModalData.password}
                                onChange={e => setEditModalData({ ...editModalData, password: e.target.value })}
                                style={{ fontSize: '16px' }}  // Adjust the font size of the input text
                            />
                        </Col>

                        <Col sm={6} className='mb-4'>
                            <label htmlFor="admintype" className="d-block font-semibold">Admin Type</label>
                            <select
                                className="form-select form-select-lg  border-gray-500  my-2 border-2   shadow-md"
                                aria-label="admintype"
                                id="admintype"
                                defaultValue={editModalData.adminType}
                                onChange={e => setEditModalData({ ...editModalData, adminType: e.target.value })}
                                style={{ fontSize: '16px' }}  // Adjust the font size of the input text
                            >
                                <option defaultValue disabled>Admin Type</option>
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
    )
}

export default AdminManagement

