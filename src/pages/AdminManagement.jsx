import  { useEffect, useState } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';
import { addAdmin, deleteAdmin, editAdminData, getAdmins } from '../Api Services/adminManagement';

const adminid = localStorage.getItem('admin')



function AdminManagement() {

    const [admins, setAdmins] = useState([])
    const [addAminData, setAddAdminData] = useState({username:'',password:'',adminType:''})
    const [editModalData, setEditModalData] = useState({})

    //modal handeler
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [refresh,setRefresh]=useState(true)


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
        editAdminData(editModalData,adminid).then(res=>{
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
   const handelActiveStatus=(data)=>{
    editAdminData(data,adminid).then(res=>{
        setRefresh(!refresh)
    })
    .catch(err => {
      
        console.log(err)
    })
   }

   const handeldelete=(data)=>{
    deleteAdmin(data,adminid).then(res=>{
        setRefresh(!refresh)
    })
    .catch(err => {
      
        console.log(err)
    })
    
   }
   const handelAdminAdd=()=>{
    addAdmin(addAminData,adminid).then(res=>{
        setRefresh(!refresh)
        setAddAdminData({username:'',password:'',adminType:''})
    })
    .catch(err => {
      
        console.log(err)
    })
}

    return (
        <div className='p-5 bg-white'>
            <h4 className='font-bold'>Admin Management</h4>
            <table className="table table-bordered border-2 border-dark    rounded-md my-5 align-middle mb-0 bg-white rounded-5 ">
                <thead className="bg-dark text-center" >
                    <tr>
                        <th className='text-white '>Username</th>
                        <th className='text-white'>Password</th>
                        <th className='text-white'>Admin Type</th>
                        <th className='text-white'>Edit</th>
                        <th className='text-white'>Delete</th>
                        <th className='text-white'>Status</th>
                    </tr>
                </thead>
                <tbody className="bg-white text-center">
                    {
                        admins.map((obj, key) => (
                            <tr key={key}>
                                <td>{obj?.username}</td>
                                <td>{obj?.password}</td>
                                <td>{obj?.adminType}</td>
                                <td><i className="fa-regular fa-pen-to-square fa-xl text-dark" onClick={() => { handelEdit(obj) }}></i></td>
                                <td><i className="fa-regular fa-trash-can fa-xl text-dark" onClick={() => { handeldelete(obj._id) }}></i></td>
                                <td className=''>
                                    <div className="d-flex justify-content-center " >
                                        {
                                            obj?.isActive ?
                                                <div className=' d-flex  border-slate-950 border-1 shadow rounded-2xl ' style={{ maxWidth: "max-content" }}>
                                                    <div className='bg-dark text-light  px-2 py-1 rounded-2xl  text-xs font-medium text-center' style={{ maxWidth: "max-content", cursor: 'pointer' }} onClick={() => handelActiveStatus({...obj,isActive:true})}>Activate</div>
                                                    <div className='bg-white   text-xs px-2 py-1 rounded-2xl font-medium' style={{ maxWidth: "max-content", cursor: 'pointer' }} onClick={() => handelActiveStatus({...obj,isActive:false})}>Deactivate</div>
                                                </div>
                                                :
                                                <div className=' d-flex  border-slate-950 border-1 shadow rounded-2xl ' style={{ maxWidth: "max-content" }}>
                                                    <div className='bg-white   text-xs px-2 py-1 rounded-2xl font-medium' style={{ maxWidth: "max-content", cursor: 'pointer' }} onClick={() => handelActiveStatus({...obj,isActive:true})}>Activate</div>
                                                    <div className='bg-dark text-light  px-2 py-1 rounded-2xl  text-xs font-medium text-center' style={{ maxWidth: "max-content", cursor: 'pointer' }} onClick={() =>  handelActiveStatus({...obj,isActive:false})}>Deactivate</div>
                                                </div>
                                        }
                                    </div>
                                </td>

                            </tr>
                        ))
                    }
                </tbody>
            </table>


            <div className='d-flex justify-content-center align-items-center my-5 '>
                <div className='border  m-5 shadow rounded-4'>
                    <h3 className='text-center m-5 font-bold'>Add Admin</h3>
                    <Row className='m-5'>
                        <Col sm={6} className='mb-3'>
                            <label htmlFor="username" className="d-block font-semibold">User Name</label>
                            <input
                                type="text"
                                id="username"
                                className='form-control form-control-lg border-light drop-shadow-lg my-2'
                                placeholder="user name"
                                onChange={e=>setAddAdminData({...addAminData,username:e.target.value})}

                            />
                        </Col>
                        <Col sm={6} className='mb-3'>
                            <label htmlFor="password" className="d-block font-semibold">Password</label>
                            <input
                                type="password"
                                id="password"
                                className='form-control form-control-lg border-light drop-shadow-lg my-2'
                                placeholder="password"
                                onChange={e=>setAddAdminData({...addAminData,password:e.target.value})}
                            />
                        </Col>
                        <Col sm={3}></Col>

                        <Col sm={6} className='mb-3 '>
                            <label htmlFor="adminType" className="d-block font-semibold">admin Type</label>
                            <select
                                className="form-select form-select-lg  border-light drop-shadow-lg my-2"
                                aria-label="Default select example"
                                id="password"
                                onChange={e=>setAddAdminData({...addAminData,adminType:e.target.value})}
                            >
                                <option defaultValue disabled>Admin Type</option>
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



            {/* edit modal */}

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Admin</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row className='mx-3 my-2'>
                        <Col sm={12} className='mb-3'>
                            <label htmlFor="username" className="d-block font-semibold">User Name</label>
                            <input
                                type="text"
                                id="username"
                                className='form-control form-control-lg border-light drop-shadow-lg my-2'
                                placeholder="user name"
                                defaultValue={editModalData.username}
                                onChange={e => setEditModalData({ ...editModalData, username: e.target.value })}
                            />
                        </Col>
                        <Col sm={12} className='mb-3'>
                            <label htmlFor="password" className="d-block font-semibold">Password</label>
                            <input
                                type="password"
                                id="password"
                                className='form-control form-control-lg border-light drop-shadow-lg my-2'
                                placeholder="password"
                                defaultValue={editModalData.password}
                                onChange={e => setEditModalData({ ...editModalData, password: e.target.value })}
                            />
                        </Col>

                        <Col sm={12} className='mb-3 '>
                            <label htmlFor="password" className="d-block font-semibold">Password</label>
                            <select
                                className="form-select form-select-lg  border-light drop-shadow-lg my-2"
                                aria-label="Default select example"
                                id="password"
                                defaultValue={editModalData.adminType}
                                onChange={e => setEditModalData({ ...editModalData, adminType: e.target.value })}


                            >
                                <option defaultValue disabled>Admin Type</option>
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
    )
}

export default AdminManagement
