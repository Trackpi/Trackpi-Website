import React, { useState, useRef,useEffect } from "react";
import "../../CSS/addsales.css";
// import { addSalesEmployee,updateSalesEmployee } from "../../Api Services/salesManagemntApi";
import { useNavigate, useParams,useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { RiImageAddLine } from "react-icons/ri";
import baseURL from '../../Api Services/baseURL';
function AddSales() {
const location = useLocation();
  const adminToken = localStorage.getItem('adminToken');  
  const [refresh, setRefresh] = useState('');
  const { employeeData } = location.state || { employeeData: {} }
  const [formData, setFormData] = useState({
    name: employeeData.name || "",
    eID: employeeData.eID ||  "",
    empID: employeeData.empID ||  "",
    email:employeeData.email || "",
    phone:employeeData.phone ||  "",
    fullAddress:employeeData.fullAddress ||  "",
    gender:employeeData.gender||  "",
    dob:employeeData.dob||  "",
    bloodGroup:employeeData.bloodGroup||  "",
    dateOfJoining:employeeData.dateOfJoining||  "",
    jobRole:employeeData.jobRole||  "",
    employeeStatus: employeeData.employeeStatus|| "",
    jobLevel:employeeData.jobLevel||  "",
    instagram:employeeData.instagram ||  "",
    linkedin:employeeData.linkedin || "",
    twitter: employeeData.twitter || "",
    
  });

const [profileImage, setProfileImage] = useState(null);
  

  const fileInputRef = useRef(null);
  const [businessCard, setBusinessCard] = useState(null);
const businessCardInputRef = useRef(null);
  const { id } = useParams();  // For editing, we'll get the intern ID from URL params
  const navigate = useNavigate();


const handleBusinessCardFileChange = (e) => {
  setBusinessCard(e.target.files[0]);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Dynamically update the input value
    }));
  };
  const handleFileChange = (e) => {
    setProfileImage(e.target.files[0]);
  };

// Update form data when employeeData changes
useEffect(() => {
  if (id && employeeData) {
    setFormData({
      name: employeeData.name || "",
      eID: employeeData.eID ||  "",
      empID: employeeData.empID || "",
      email: employeeData.email || "",
      phone: employeeData.phone || "",
      fullAddress: employeeData.fullAddress || "",
      gender: employeeData.gender || "",
      dob: employeeData.dob || "",
      bloodGroup: employeeData.bloodGroup || "",
      dateOfJoining: employeeData.dateOfJoining || "",
      jobRole: employeeData.jobRole || "",
      employeeStatus: employeeData.employeeStatus || "",
      jobLevel: employeeData.jobLevel || "",
      instagram: employeeData.instagram || "",
      linkedin: employeeData.linkedin || "",
      twitter: employeeData.twitter || "",
     
    });
  }
}, [id, employeeData]); // Only trigger when id or employeeData changes


useEffect(() => {
  // Fetch the image only if it changes and is valid
  if (employeeData.image) {
    const imageUrl = `${baseURL}${employeeData.image}`;
    fetch(imageUrl)
      .then((res) => res.blob())
      .then((blob) => {
        const file = new File([blob], "image.jpg", { type: blob.type });
        setProfileImage(file);
      })
      .catch((error) => console.error("Failed to fetch image:", error));
  }
}, [employeeData.image]);

 

  const handleAddSales = async (e) => {
    e.preventDefault();

    // Check required fields
    if 
    (!formData.name ||
       !formData.empID ||
        !formData.email ||
        !formData.phone ||
        !formData.fullAddress ||
        !formData.gender||
        !formData.dob||
        !formData.bloodGroup ||
        !formData.dateOfJoining||
        !formData.jobRole||
        !formData.employeeStatus||
        !formData.jobLevel
      
      ) {
      alert('All fields are required!');
      return;
    }
  
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('empID', formData.ID);
      formDataToSend.append('empID', formData.empID);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('fullAddress', formData.fullAddress);
      formDataToSend.append('gender', formData.gender);
      formDataToSend.append('dob', formData.dob);
      formDataToSend.append('bloodGroup', formData.bloodGroup);
      formDataToSend.append('dateOfJoining', formData.dateOfJoining);
      formDataToSend.append('jobRole', formData.jobRole);
      formDataToSend.append('employeeStatus', formData.employeeStatus);
      formDataToSend.append('jobLevel', formData.jobLevel);
      
  
      if (profileImage) {
        formDataToSend.append('image', profileImage); // Add image file
      }
      if (businessCard) {
        formDataToSend.append('businessCard', businessCard); // Add image file
      }
  
      // Check if this is an update or create operation
      if (id) {
        // Update operation
        const response = await baseURL.put(`/api/sales/${id}`, formDataToSend, {
          headers: {
            Authorization: `Bearer ${adminToken}`,
           
          },
        });
  
        if (response.status === 200) {
          toast.success('Sales Details Updated Successfully!');
          navigate('/admin/employee-management');
        }
      } else {
        // Create operation
        const response = await baseURL.post('/api/sales/', formDataToSend, {
          headers: {
            Authorization: `Bearer ${adminToken}`,
            "Content-Type": "multipart/form-data",
          },
        });
  
        if (response.status === 201) {
          toast.success('Sales Details Added Successfully!');
          navigate('/admin/employee-management');
        }
      }
  
      // Reset form
      setFormData({
        id: '',
        name: '',
        empID: '',
        email: '',
        phone: '',
        fullAddress: '',
        gender: '',
        dob: '',
        bloodGroup: '',
        dateOfJoining: '',
        jobRole: '',
        employeeStatus: '',
        jobLevel: '',
       
      });
      setProfileImage(null);
      setBusinessCard(null);
    } catch (error) {
      console.error('Error submitting sales data:', error);
      if (error.response) {
        console.error('Error response:', error.response.data);
        alert(error.response.data.message || 'An error occurred');
      } else {
        alert('Network error or server is unreachable');
      }
    }
    
};

const handleCancel = () => {
  navigate(-1);
 } // Go back to previous page

  return (
    <div className="container mx-auto mt-0 my-5 px-5  pb-5 bg-white shadow rounded-md">
      <form onSubmit={handleAddSales} className="row g-5">
        {/* Profile Picture Section */}
        <div className=" d-flex align-items-center mb-4">
          <div className="me-4 r pt-10">
          <h2 className="mb-4 text-[22px]">{id ? "Edit Sales Details" : "Add Sales Details"}</h2>
            <div
              className="d-flex justify-content-center align-items-center border border-secondary rounded-2xl position-relative"
              style={{ width: "150px", height: "120px" }}
            >
                  {profileImage instanceof File && (
  <img
    src={URL.createObjectURL(profileImage)}
    alt="Uploaded"
    style={{
      width: "150px",
      height: "120px",
      borderRadius: "12%",
      objectFit: "cover",
    }}
  />
)}
               <div
                className="position-absolute bottom-2 end-2 bg-warning rounded-circle d-flex justify-content-center align-items-center"
                style={{ width: "25px", height: "25px" }}
              >
              <button
                type="button"
                className="btn btn-sm p-0  text-white"
                onClick={() => fileInputRef.current.click()}
                style={{background: "none" , border: "none" }}
              >
               <RiImageAddLine />
              </button>
            </div>
            </div>
            <input
              type="file"
              name="image"
              ref={fileInputRef}
              style={{ display: "none" }}
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>
          {/* Personal Information */}
          <div className="mt-3 flex-grow-1 row justify-evenly">
            <div className="col-md-4">
              <label className="form-label font-bold text-[15px]">Name</label>
              <input
                type="text"
                name="name"
                 placeholder="Name"
                className="form-control rounded-2xl plac"
                value={formData.name ||'' } 
              onChange={handleInputChange}  
                // value={formData.name}
                style={{fontSize: '12px',border:'1px solid whie',boxShadow:'-2px 2px 4px 0px rgba(10, 10, 10, 0.15),2px 1px 4px 0px rgba(10, 10, 10, 0.15),0px -2px 4px 0px rgba(10, 10, 10, 0.15)'}}
                onFocus={ e => {
                  
                  e.target.style.borderColor = 'white';
                  e.target.style.boxShadow = '-2px 2px 4px 0px rgba(10, 10, 10, 0.15),2px 1px 4px 0px rgba(10, 10, 10, 0.15),0px -2px 4px 0px rgba(10, 10, 10, 0.15)';
                }}
                onBlur={e => {
                  
                  e.target.style.borderColor = 'white';
                  e.target.style.boxShadow = '-2px 2px 4px 0px rgba(10, 10, 10, 0.15),2px 1px 4px 0px rgba(10, 10, 10, 0.15),0px -2px 4px 0px rgba(10, 10, 10, 0.15)';
                }}
                
              />
            </div>
            <div className="col-md-4">
              <label className="form-label  font-bold text-[15px]">Employee ID</label>
              <input
                type="text"
                name="empID"
                className="form-control rounded-2xl plac"
                placeholder="Employee ID"
                value={formData.empID ||'' } 
              onChange={handleInputChange}
                // value={formData.empID}
                
                style={{fontSize: '12px' ,border:'1px solid whie',boxShadow:'-2px 2px 4px 0px rgba(10, 10, 10, 0.15),2px 1px 4px 0px rgba(10, 10, 10, 0.15),0px -2px 4px 0px rgba(10, 10, 10, 0.15)'}}
                onFocus={ e => {
                  
                  e.target.style.borderColor = 'white';
                  e.target.style.boxShadow = '-2px 2px 4px 0px rgba(10, 10, 10, 0.15),2px 1px 4px 0px rgba(10, 10, 10, 0.15),0px -2px 4px 0px rgba(10, 10, 10, 0.15)';
                }}
                onBlur={e => {
                  
                  e.target.style.borderColor = 'white';
                  e.target.style.boxShadow = '-2px 2px 4px 0px rgba(10, 10, 10, 0.15),2px 1px 4px 0px rgba(10, 10, 10, 0.15),0px -2px 4px 0px rgba(10, 10, 10, 0.15)';
                }}
              />
            </div>
            <div className="col-md-4 ">
              <label className="form-label  font-bold text-[15px]">Email ID</label>
              <input
                type="email"
                name="email"
                className="form-control rounded-2xl plac"
                placeholder="Email-ID"
                value={formData.email ||'' } 
              onChange={handleInputChange}
                // value={formData.email}
              
                style={{fontSize: '12px' ,border:'1px solid whie',boxShadow:'-2px 2px 4px 0px rgba(10, 10, 10, 0.15),2px 1px 4px 0px rgba(10, 10, 10, 0.15),0px -2px 4px 0px rgba(10, 10, 10, 0.15)'}}
                onFocus={ e => {
                  
                  e.target.style.borderColor = 'white';
                  e.target.style.boxShadow = '-2px 2px 4px 0px rgba(10, 10, 10, 0.15),2px 1px 4px 0px rgba(10, 10, 10, 0.15),0px -2px 4px 0px rgba(10, 10, 10, 0.15)';
                }}
                onBlur={e => {
                  
                  e.target.style.borderColor = 'white';
                  e.target.style.boxShadow = '-2px 2px 4px 0px rgba(10, 10, 10, 0.15),2px 1px 4px 0px rgba(10, 10, 10, 0.15),0px -2px 4px 0px rgba(10, 10, 10, 0.15)';
                }}
              />
            </div>
          </div>
        </div>

    {/* Personal Information Section */}
    <div className="flex justify-between ">
          <div className=" flex flex-col w-[310px]">
          <h4 className="mb-4 text-[22px]">Personal Information</h4>
          <div className="mb-3">
            <label className="form-label text-[15px] font-md text-[15px]" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              className="form-control plac"
              placeholder="Phone Number"
              value={formData.phone ||'' } 
              onChange={handleInputChange}
              // value={formData.phoneNumber}
              style={{fontSize: '12px' ,border:'1px solid whie',boxShadow:'-2px 2px 4px 0px rgba(10, 10, 10, 0.15),2px 1px 4px 0px rgba(10, 10, 10, 0.15),0px -2px 4px 0px rgba(10, 10, 10, 0.15)'}}
              onFocus={ e => {
                
                e.target.style.borderColor = 'white';
                e.target.style.boxShadow = '-2px 2px 4px 0px rgba(10, 10, 10, 0.15),2px 1px 4px 0px rgba(10, 10, 10, 0.15),0px -2px 4px 0px rgba(10, 10, 10, 0.15)';
              }}
              onBlur={e => {
                  
                e.target.style.borderColor = 'white';
                e.target.style.boxShadow = '-2px 2px 4px 0px rgba(10, 10, 10, 0.15),2px 1px 4px 0px rgba(10, 10, 10, 0.15),0px -2px 4px 0px rgba(10, 10, 10, 0.15)';
              }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label text-[15px]" htmlFor="address">
              Full Address
            </label>
            <input
              type="text"
              id="address"
              name="fullAddress"
              className="form-control plac"
              placeholder="Address"
              value={formData.fullAddress || ''} 
              onChange={handleInputChange}
             
              style={{fontSize: '12px' ,border:'1px solid whie',boxShadow:'-2px 2px 4px 0px rgba(10, 10, 10, 0.15),2px 1px 4px 0px rgba(10, 10, 10, 0.15),0px -2px 4px 0px rgba(10, 10, 10, 0.15)'}}
              onFocus={ e => {
                
                e.target.style.borderColor = 'white';
                e.target.style.boxShadow = '-2px 2px 4px 0px rgba(10, 10, 10, 0.15),2px 1px 4px 0px rgba(10, 10, 10, 0.15),0px -2px 4px 0px rgba(10, 10, 10, 0.15)';
              }}
              onBlur={e => {
                  
                e.target.style.borderColor = 'white';
                e.target.style.boxShadow = '-2px 2px 4px 0px rgba(10, 10, 10, 0.15),2px 1px 4px 0px rgba(10, 10, 10, 0.15),0px -2px 4px 0px rgba(10, 10, 10, 0.15)';
              }}
            />
          </div>
          <div className="flex gap-5">
          <div className="mb-3 w-[100px]">
            <label className="form-label  text-[15px]" htmlFor="gender">
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              className="form-select rounded-lg plac"
              value={formData.gender ||'' } 
              onChange={handleInputChange} 
              style={{fontSize: '12px' ,border:'1px solid whie',boxShadow:'-2px 2px 4px 0px rgba(10, 10, 10, 0.15),2px 1px 4px 0px rgba(10, 10, 10, 0.15),0px -2px 4px 0px rgba(10, 10, 10, 0.15)'}}
              onFocus={ e => {
                
                e.target.style.borderColor = 'white';
                e.target.style.boxShadow = '-2px 2px 4px 0px rgba(10, 10, 10, 0.15),2px 1px 4px 0px rgba(10, 10, 10, 0.15),0px -2px 4px 0px rgba(10, 10, 10, 0.15)';
              }}
              onBlur={e => {
                  
                e.target.style.borderColor = 'white';
                e.target.style.boxShadow = '-2px 2px 4px 0px rgba(10, 10, 10, 0.15),2px 1px 4px 0px rgba(10, 10, 10, 0.15),0px -2px 4px 0px rgba(10, 10, 10, 0.15)';
              }}
              // value={formData.gender}
            >
              <option value="">Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="mb-3 w-[170px]">
            <label className="form-label text-[15px]" htmlFor="dob">
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              className="form-control rounded-lg plac"
              style={{fontSize: '12px' ,border:'1px solid whie',boxShadow:'-2px 2px 4px 0px rgba(10, 10, 10, 0.15),2px 1px 4px 0px rgba(10, 10, 10, 0.15),0px -2px 4px 0px rgba(10, 10, 10, 0.15)'}}
              onFocus={ e => {
                
                e.target.style.borderColor = 'white';
                e.target.style.boxShadow = '-2px 2px 4px 0px rgba(10, 10, 10, 0.15),2px 1px 4px 0px rgba(10, 10, 10, 0.15),0px -2px 4px 0px rgba(10, 10, 10, 0.15)';
              }}
              onBlur={e => {
                  
                e.target.style.borderColor = 'white';
                e.target.style.boxShadow = '-2px 2px 4px 0px rgba(10, 10, 10, 0.15),2px 1px 4px 0px rgba(10, 10, 10, 0.15),0px -2px 4px 0px rgba(10, 10, 10, 0.15)';
              }}
              value={formData.dob ||'' } 
              onChange={handleInputChange} 
              // value={formData.dob}
              
            />
          </div>
          </div>
          <div className="mb-3  w-[100px]">
            <label className="form-label text-[15px]" htmlFor="bloodgroup">
              Blood Group
            </label>
            <select
              id="bloodgroup"
              name="bloodGroup"
              className="form-select plac"
              style={{fontSize: '12px' ,border:'1px solid whie',boxShadow:'-2px 2px 4px 0px rgba(10, 10, 10, 0.15),2px 1px 4px 0px rgba(10, 10, 10, 0.15),0px -2px 4px 0px rgba(10, 10, 10, 0.15)'}}
              onFocus={ e => {
                
                e.target.style.borderColor = 'white';
                e.target.style.boxShadow = '-2px 2px 4px 0px rgba(10, 10, 10, 0.15),2px 1px 4px 0px rgba(10, 10, 10, 0.15),0px -2px 4px 0px rgba(10, 10, 10, 0.15)';
              }}
              onBlur={e => {
                  
                e.target.style.borderColor = 'white';
                e.target.style.boxShadow = '-2px 2px 4px 0px rgba(10, 10, 10, 0.15),2px 1px 4px 0px rgba(10, 10, 10, 0.15),0px -2px 4px 0px rgba(10, 10, 10, 0.15)';
              }}
              value={formData.bloodGroup ||'' } 
              onChange={handleInputChange} 
              // value={formData.bloodGroup}
            >
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
          </div>
        </div>
        <div className="vertical-line w-[1px] h-[400px] bg-gray-400"></div>
        {/* Employment Overview Section */}
        <div className="flex flex-col w-[310px]">
          <h4 className="mb-4 text-[22px]">Employment Overview</h4>
          <div className="mb-3">
            <label className="form-label text-[15px]" htmlFor="doj">
              Date of Joining
            </label>
            <input
              type="date"
              id="doj"
              name="dateOfJoining"
              className="form-control plac"
              style={{fontSize: '12px' ,border:'1px solid whie',boxShadow:'-2px 2px 4px 0px rgba(10, 10, 10, 0.15),2px 1px 4px 0px rgba(10, 10, 10, 0.15),0px -2px 4px 0px rgba(10, 10, 10, 0.15)'}}
              onFocus={ e => {
                
                e.target.style.borderColor = 'white';
                e.target.style.boxShadow = '-2px 2px 4px 0px rgba(10, 10, 10, 0.15),2px 1px 4px 0px rgba(10, 10, 10, 0.15),0px -2px 4px 0px rgba(10, 10, 10, 0.15)';
              }}
              onBlur={e => {
                  
                e.target.style.borderColor = 'white';
                e.target.style.boxShadow = '-2px 2px 4px 0px rgba(10, 10, 10, 0.15),2px 1px 4px 0px rgba(10, 10, 10, 0.15),0px -2px 4px 0px rgba(10, 10, 10, 0.15)';
              }}
              value={formData.dateOfJoining ||'' } 
              onChange={handleInputChange} 
              // value={formData.dateOfJoining}
            />
          </div>
          <div className="mb-3">
            <label className="form-label text-[15px]" htmlFor="jobrole">
              Job Role
            </label>
            <select
              id="jobrole"
              name="jobRole"
              className="form-select plac"
              style={{fontSize: '12px' ,border:'1px solid whie',boxShadow:'-2px 2px 4px 0px rgba(10, 10, 10, 0.15),2px 1px 4px 0px rgba(10, 10, 10, 0.15),0px -2px 4px 0px rgba(10, 10, 10, 0.15)'}}
              onFocus={ e => {
                
                e.target.style.borderColor = 'white';
                e.target.style.boxShadow = '-2px 2px 4px 0px rgba(10, 10, 10, 0.15),2px 1px 4px 0px rgba(10, 10, 10, 0.15),0px -2px 4px 0px rgba(10, 10, 10, 0.15)';
              }}
              onBlur={e => {
                  
                e.target.style.borderColor = 'white';
                e.target.style.boxShadow = '-2px 2px 4px 0px rgba(10, 10, 10, 0.15),2px 1px 4px 0px rgba(10, 10, 10, 0.15),0px -2px 4px 0px rgba(10, 10, 10, 0.15)';
              }}
              value={formData.jobRole ||'' } 
              onChange={handleInputChange} 
              // value={formData.jobRole}
            >
              <option value="Business Development Executive">
                Business Development Executive
              </option>
              <option value="Business Development Manager">
                Business Development Manager
              </option>
              <option value="Area Business Manager">
                Area Business Manager
              </option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label text-[15px]" htmlFor="empsatus">
              Employee Status
            </label>
            <select
              id="empsatus"
              name="employeeStatus"
              className="form-select plac"
              value={formData.employeeStatus ||'' } 
              onChange={handleInputChange} 
              
              style={{fontSize: '12px' ,border:'1px solid whie',boxShadow:'-2px 2px 4px 0px rgba(10, 10, 10, 0.15),2px 1px 4px 0px rgba(10, 10, 10, 0.15),0px -2px 4px 0px rgba(10, 10, 10, 0.15)'}}
              onFocus={ e => {
                
                e.target.style.borderColor = 'white';
                e.target.style.boxShadow = '-2px 2px 4px 0px rgba(10, 10, 10, 0.15),2px 1px 4px 0px rgba(10, 10, 10, 0.15),0px -2px 4px 0px rgba(10, 10, 10, 0.15)';
              }}
              onBlur={e => {
                  
                e.target.style.borderColor = 'white';
                e.target.style.boxShadow = '-2px 2px 4px 0px rgba(10, 10, 10, 0.15),2px 1px 4px 0px rgba(10, 10, 10, 0.15),0px -2px 4px 0px rgba(10, 10, 10, 0.15)';
              }}
              // value={formData.employeeStatus}
            >
              <option value="Full time">Full time</option>
              <option value="Part time">Part time</option>
              <option value="Freelancer">Freelancer (Work from home)</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label text-[15px]" htmlFor="joblevel">
              Job Level
            </label>
            <select
              id="joblevel"
              name="jobLevel"
              className="form-select plac"
              style={{fontSize: '12px' ,border:'1px solid whie',boxShadow:'-2px 2px 4px 0px rgba(10, 10, 10, 0.15),2px 1px 4px 0px rgba(10, 10, 10, 0.15),0px -2px 4px 0px rgba(10, 10, 10, 0.15)'}}
              onFocus={ e => {
                
                e.target.style.borderColor = 'white';
                e.target.style.boxShadow = '-2px 2px 4px 0px rgba(10, 10, 10, 0.15),2px 1px 4px 0px rgba(10, 10, 10, 0.15),0px -2px 4px 0px rgba(10, 10, 10, 0.15)';
              }}
              onBlur={e => {
                  
                e.target.style.borderColor = 'white';
                e.target.style.boxShadow = '-2px 2px 4px 0px rgba(10, 10, 10, 0.15),2px 1px 4px 0px rgba(10, 10, 10, 0.15),0px -2px 4px 0px rgba(10, 10, 10, 0.15)';
              }}
              value={formData.jobLevel ||'' } 
              onChange={handleInputChange} 
              // value={formData.jobRole}
            >
              <option value="Manager Level">
              Manager Level
              </option>
              <option value="Executive Level">
                Executive Level
              </option>
             
            </select>
          </div>
        </div>
        <div className="vertical-line w-[1px] h-[400px] bg-gray-400"></div>
        {/* Social Media Section */}
        <div className="flex flex-col">
          <h4 className="mb-4 text-[22px]">Social Media</h4>
          <div className="flex gap-5">
                <div className="mb-3">
                  <label className="form-label text-[15px]" htmlFor="gender">
                    Select Platform 1
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    className="form-select rounded-lg plac"
                    style={{fontSize: '12px' ,  width:'140px',border:'1px solid whie',boxShadow:'-2px 2px 4px 0px rgba(10, 10, 10, 0.15),2px 1px 4px 0px rgba(10, 10, 10, 0.15),0px -2px 4px 0px rgba(10, 10, 10, 0.15)'}}
                    onFocus={ e => {
                      
                      e.target.style.borderColor = 'white';
                      e.target.style.boxShadow = '-2px 2px 4px 0px rgba(10, 10, 10, 0.15),2px 1px 4px 0px rgba(10, 10, 10, 0.15),0px -2px 4px 0px rgba(10, 10, 10, 0.15)';
                    }}
                    onBlur={e => {
                  
                      e.target.style.borderColor = 'white';
                      e.target.style.boxShadow = '-2px 2px 4px 0px rgba(10, 10, 10, 0.15),2px 1px 4px 0px rgba(10, 10, 10, 0.15),0px -2px 4px 0px rgba(10, 10, 10, 0.15)';
                    }}
                    onChange={handleInputChange}
                    
                    // value={formData.gender}
                  >
                    <option value="">Instagram</option>
                    <option value="">Facebook</option>
                    <option value="">LinkedIn</option>
                    <option value="">Twitter</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label text-[15px]" htmlFor="gender">
                  Platform 1 Link
                  </label>
                  <input
                type="url"
                name="website"
                id="website"
                className="form-control rounded-2xl plac"
                placeholder="URL Link"
                // value={formData.email}
                onChange={handleInputChange}
                style={{fontSize: '12px' ,  width:'170px',border:'1px solid whie',boxShadow:'-2px 2px 4px 0px rgba(10, 10, 10, 0.15),2px 1px 4px 0px rgba(10, 10, 10, 0.15),0px -2px 4px 0px rgba(10, 10, 10, 0.15)'}}
                onFocus={ e => {
                  
                  e.target.style.borderColor = 'white';
                  e.target.style.boxShadow = '-2px 2px 4px 0px rgba(10, 10, 10, 0.15),2px 1px 4px 0px rgba(10, 10, 10, 0.15),0px -2px 4px 0px rgba(10, 10, 10, 0.15)';
                }}
                onBlur={e => {
                  
                  e.target.style.borderColor = 'white';
                  e.target.style.boxShadow = '-2px 2px 4px 0px rgba(10, 10, 10, 0.15),2px 1px 4px 0px rgba(10, 10, 10, 0.15),0px -2px 4px 0px rgba(10, 10, 10, 0.15)';
                }}
              />
                    
                </div>
          </div>
          <div className="flex gap-5">
                <div className="mb-3">
                  <label className="form-label text-[15px]" htmlFor="gender">
                  Select Platform 2
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    className="form-select rounded-lg plac"
                    style={{fontSize: '12px' ,  width:'140px',border:'1px solid whie',boxShadow:'-2px 2px 4px 0px rgba(10, 10, 10, 0.15),2px 1px 4px 0px rgba(10, 10, 10, 0.15),0px -2px 4px 0px rgba(10, 10, 10, 0.15)'}}
                    onFocus={ e => {
                      
                      e.target.style.borderColor = 'white';
                      e.target.style.boxShadow = '-2px 2px 4px 0px rgba(10, 10, 10, 0.15),2px 1px 4px 0px rgba(10, 10, 10, 0.15),0px -2px 4px 0px rgba(10, 10, 10, 0.15)';
                    }}
                    onBlur={e => {
                  
                      e.target.style.borderColor = 'white';
                      e.target.style.boxShadow = '-2px 2px 4px 0px rgba(10, 10, 10, 0.15),2px 1px 4px 0px rgba(10, 10, 10, 0.15),0px -2px 4px 0px rgba(10, 10, 10, 0.15)';
                    }}
                    onChange={handleInputChange}
                    
                    // value={formData.gender}
                  >
                   <option value="">Instagram</option>
                    <option value="">Facebook</option>
                    <option value="">LinkedIn</option>
                    <option value="">Twitter</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label text-[15px]" htmlFor="gender">
                  Platform 2 Link
                  </label>
                  <input
                type="url"
                name="website"
                id="website"
                className="form-control rounded-2xl plac"
                placeholder="URL Link"
                // value={formData.email}
                onChange={handleInputChange}
                style={{fontSize: '12px' ,  width:'170px',border:'1px solid whie',boxShadow:'-2px 2px 4px 0px rgba(10, 10, 10, 0.15),2px 1px 4px 0px rgba(10, 10, 10, 0.15),0px -2px 4px 0px rgba(10, 10, 10, 0.15)'}}
                onFocus={ e => {
                  
                  e.target.style.borderColor = 'white';
                  e.target.style.boxShadow = '-2px 2px 4px 0px rgba(10, 10, 10, 0.15),2px 1px 4px 0px rgba(10, 10, 10, 0.15),0px -2px 4px 0px rgba(10, 10, 10, 0.15)';
                }}
                onBlur={e => {
                  
                  e.target.style.borderColor = 'white';
                  e.target.style.boxShadow = '-2px 2px 4px 0px rgba(10, 10, 10, 0.15),2px 1px 4px 0px rgba(10, 10, 10, 0.15),0px -2px 4px 0px rgba(10, 10, 10, 0.15)';
                }}
              />
                </div>
          </div>
          <div className="flex gap-5">
                <div className="mb-3">
                  <label className="form-label text-[15px]" htmlFor="gender">
                  Select Platform 3
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    className="form-select rounded-lg plac"
                    style={{fontSize: '12px' , width:'140px',border:'1px solid whie',boxShadow:'-2px 2px 4px 0px rgba(10, 10, 10, 0.15),2px 1px 4px 0px rgba(10, 10, 10, 0.15),0px -2px 4px 0px rgba(10, 10, 10, 0.15)'}}
                    onFocus={ e => {
                      
                      e.target.style.borderColor = 'white';
                      e.target.style.boxShadow = '-2px 2px 4px 0px rgba(10, 10, 10, 0.15),2px 1px 4px 0px rgba(10, 10, 10, 0.15),0px -2px 4px 0px rgba(10, 10, 10, 0.15)';
                    }}
                    onBlur={e => {
                  
                      e.target.style.borderColor = 'white';
                      e.target.style.boxShadow = '-2px 2px 4px 0px rgba(10, 10, 10, 0.15),2px 1px 4px 0px rgba(10, 10, 10, 0.15),0px -2px 4px 0px rgba(10, 10, 10, 0.15)';
                    }}
                    onChange={handleInputChange}
                    
                    // value={formData.gender}
                  >
                  <option value="">Instagram</option>
                    <option value="">Facebook</option>
                    <option value="">LinkedIn</option>
                    <option value="">Twitter</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label text-[15px]" htmlFor="gender">
                  Platform 3 Link
                  </label>
                  <input
                type="url"
                name="website"
                id="website"
                className="form-control rounded-2xl plac"
                placeholder="URL Link"
                // value={formData.email}
                onChange={handleInputChange}
                style={{fontSize: '12px' ,  width:'170px',border:'1px solid whie',boxShadow:'-2px 2px 4px 0px rgba(10, 10, 10, 0.15),2px 1px 4px 0px rgba(10, 10, 10, 0.15),0px -2px 4px 0px rgba(10, 10, 10, 0.15)'}}
                onFocus={ e => {
                  
                  e.target.style.borderColor = 'white';
                  e.target.style.boxShadow = '-2px 2px 4px 0px rgba(10, 10, 10, 0.15),2px 1px 4px 0px rgba(10, 10, 10, 0.15),0px -2px 4px 0px rgba(10, 10, 10, 0.15)';
                }}
                onBlur={e => {
                  
                  e.target.style.borderColor = 'white';
                  e.target.style.boxShadow = '-2px 2px 4px 0px rgba(10, 10, 10, 0.15),2px 1px 4px 0px rgba(10, 10, 10, 0.15),0px -2px 4px 0px rgba(10, 10, 10, 0.15)';
                }}
              />
                </div>
          </div>
          <div className="flex gap-5">
                <div className="mb-3">
                  <label className="form-label text-[15px]" htmlFor="gender">
                  Select Platform 4
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    className="form-select rounded-lg plac"
                    style={{fontSize: '12px' ,  width:'140px',border:'1px solid whie',boxShadow:'-2px 2px 4px 0px rgba(10, 10, 10, 0.15),2px 1px 4px 0px rgba(10, 10, 10, 0.15),0px -2px 4px 0px rgba(10, 10, 10, 0.15)'}}
                    onFocus={ e => {
                      
                      e.target.style.borderColor = 'white';
                      e.target.style.boxShadow = '-2px 2px 4px 0px rgba(10, 10, 10, 0.15),2px 1px 4px 0px rgba(10, 10, 10, 0.15),0px -2px 4px 0px rgba(10, 10, 10, 0.15)';
                    }}
                    onBlur={e => {
                  
                      e.target.style.borderColor = 'white';
                      e.target.style.boxShadow = '-2px 2px 4px 0px rgba(10, 10, 10, 0.15),2px 1px 4px 0px rgba(10, 10, 10, 0.15),0px -2px 4px 0px rgba(10, 10, 10, 0.15)';
                    }}
                    onChange={handleInputChange}
                    
                    // value={formData.gender}
                  >
                 <option value="">Instagram</option>
                    <option value="">Facebook</option>
                    <option value="">LinkedIn</option>
                    <option value="">Twitter</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label text-[15px]" htmlFor="gender">
                    Platform 4 Link
                  </label>
                  <input
               type="url"
               name="website"
               id="website"
                className="form-control rounded-2xl plac"
                placeholder="URL Link"
                // value={formData.email}
                onChange={handleInputChange}
                style={{fontSize: '12px' ,  width:'170px',border:'1px solid whie',boxShadow:'-2px 2px 4px 0px rgba(10, 10, 10, 0.15),2px 1px 4px 0px rgba(10, 10, 10, 0.15),0px -2px 4px 0px rgba(10, 10, 10, 0.15)'}}
                onFocus={ e => {
                  
                  e.target.style.borderColor = 'white';
                  e.target.style.boxShadow = '-2px 2px 4px 0px rgba(10, 10, 10, 0.15),2px 1px 4px 0px rgba(10, 10, 10, 0.15),0px -2px 4px 0px rgba(10, 10, 10, 0.15)';
                }}
                onBlur={e => {
                  
                  e.target.style.borderColor = 'white';
                  e.target.style.boxShadow = '-2px 2px 4px 0px rgba(10, 10, 10, 0.15),2px 1px 4px 0px rgba(10, 10, 10, 0.15),0px -2px 4px 0px rgba(10, 10, 10, 0.15)';
                }}
              />
                    
                 
                </div>
          </div>
        </div>
        
        </div>
      
        {/* Business Card Section */}
        <div className="flex flex-col ">
          <div className="w-[300px] self-center">
          
          <h6 className="mb-3  text-[18px]">Business Card</h6></div>
          <div
            className="border border-secondary self-center rounded p-4 text-center position-relative"
            style={{
              width: "300px",
              height: "150px",
              overflow: "hidden",
            
            }}
          >
            {businessCard ? (
              <div>
                  <p>{businessCard.name}</p>
                  <a
          
          href={URL.createObjectURL(businessCard)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-link text-black"
        >
          View
        </a>
              </div>
              // <iframe
              //   src={URL.createObjectURL(businessCard)}
              //   alt="Uploaded Business Card"
              //   style={{
              //     width: "100%",
              //     height: "100%",
              //     border:"none"
              //   }}
              //      sandbox="allow-same-origin"
              // />
            ) : (
              <p>Upload the file</p>
            )}
            <button
              onClick={() => businessCardInputRef.current.click()}
              className="btn btn-link"
              aria-label="Upload Business Card"
            >
              <i
                className="fa-solid fa-arrow-up-from-bracket"
                style={{ fontSize: "20px", color: "black" }}
              />
            </button>
          </div>
          <input
            type="file"
            name="businessCard"
            ref={businessCardInputRef}
            style={{ display: "none" }}
            accept=".pdf,.doc,.docx"
            onChange={handleBusinessCardFileChange}
          />
        </div>




        {/* Submit and Cancel Buttons */}
        <div className=" flex justify-center gap-4 mt-4">
                                    <button type="submit" onClick={handleAddSales}  className="px-14 py-2 text-white bg-[#FF9D00] rounded-xl flex justify-center items-center me-3">
                                    {id ? "Update" : "Save"}
                                    </button>
                                    <button type="button"  onClick={handleCancel} className=" px-14 py-2 text-white bg-[#FF9D00] rounded-xl flex justify-center items-center">
                                      Cancel
                                    </button>
                      </div>
      </form>
    </div>
  );
}

export default AddSales;
