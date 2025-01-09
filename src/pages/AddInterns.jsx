import React, { useState, useRef,useEffect } from "react";
import '../CSS/addsales.css';
import { toast } from "react-toastify";
import { addInternEmployee,getInternEmployeeById,updateInternEmployee } from "../Api Services/internsManagementApi";
import { useNavigate, useParams } from "react-router-dom";
import { RiImageAddLine } from "react-icons/ri";
import { BsBoxArrowUp } from "react-icons/bs";


function AddInterns() {
  const [formData, setFormData] = useState({
    userName: "",
    empID: "",
    email: "",
    phoneNumber: "",
    fullAddress: "",
    gender: "",
    dob: "",
    bloodGroup: "",
    dateOfJoining: "",
    jobRole: "",
    employeeStatus: "",
    jobLevel: "",
    instagram: "",
    linkedin: "",
    twitter: "",
    feedback: "",
  });
  
  const [profileImage, setProfileImage] = useState(null);
  const [certificate, setCertificate] = useState(null);

  const certificateInputRef = useRef(null);
  const fileInputRef = useRef(null);

  const { id } = useParams();  // For editing, we'll get the intern ID from URL params
  const navigate = useNavigate();
  
   // Fetch existing intern data for editing
   useEffect(() => {
    if (id) {
       // Fetch intern data if editing
       getInternEmployeeById(id)
       .then((data) => {
        console.log("Fetched Data:", data); 
       
         setFormData({
           userName: data.userName || "",
           empID: data.empID || "",
           email: data.email || "",
           phoneNumber: data.phoneNumber || "",
           fullAddress: data.fullAddress || "",
           gender: data.gender || "",
           dob: data.dob || "",
           bloodGroup: data.bloodGroup || "",
           dateOfJoining: data.dateOfJoining || "",
           jobRole: data.jobRole || "",
           employeeStatus: data.employeeStatus || "",
           jobLevel: data.jobLevel || "",
           instagram: data.instagram || "",
           linkedin: data.linkedin || "",
           twitter: data.twitter || "",
           feedback: data.feedback || "",
         });
         // Prefill the image and certificate if available
         if (data.profileImage) setProfileImage(data.profileImage);
         if (data.certificate) setCertificate(data.certificate);
       })
       .catch((error) => toast.error("Failed to fetch intern details"));
   
       
    }
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setProfileImage(e.target.files[0]);
  };

  const handleCertificateFileChange = (e) => {
    setCertificate(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataObj = new FormData();

    // Append form data
    for (const key in formData) {
      formDataObj.append(key, formData[key]);
    }

    // Append files
    if (profileImage) {
      formDataObj.append("profileImage", profileImage);
    }

    if (certificate) {
      formDataObj.append("Certificate", certificate);
    }
    const header = {
      "content-Type": "multipart/form-data",
      Authorization: `Token ${sessionStorage.getItem("token")}`,
    };

    const handleResponse = (response) => {
      if (response.status === 200) {
        toast.success(id ? "Intern updated successfully!" : "Intern added successfully!");
        navigate("/admin/intern-management");  // Redirect to intern management page
      } else {
        toast.error("Something went wrong!");
      }
    };

   
    if (id) {
      // Edit intern
      updateInternEmployee(id, formDataObj, header)
        .then(handleResponse)
        .catch((error) => toast.error("Failed to update intern"));
    } else {
      // Add new intern
      addInternEmployee(formDataObj, header)
        .then(handleResponse)
        .catch((error) => toast.error("Failed to add intern"));
    }
  };
 
  return (
    <div className="container mx-auto my-5 p-5 bg-white shadow rounded-md">
      <form className="row g-4" onSubmit={handleSubmit}>
        <div className="d-flex align-items-center  mb-4 ">
          <div className="me-4  ">
            <h2 className="mb-4 text-[22px]">{id ? "Edit Intern" : "Add Intern"}</h2>
            <div
              className="d-flex justify-content-center align-items-center  border border-secondary rounded-2xl"
              style={{
               
                width: "150px",
                height: "120px",
                position: "relative",
              }}
            >
                
              {profileImage ? (
                <img
                  src={URL.createObjectURL(profileImage)}
                  alt="Uploaded"
                  style={{
                    width: "150px",
                    height: "120px",
                    
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
              ) : (
                <i
                  className="bi bi-person-circle"
                  style={{ fontSize: "50px", color: "#ffc107" }}
                ></i>
              )}
              <div
                className="position-absolute bottom-2 end-2 bg-warning rounded-circle d-flex justify-content-center align-items-center"
                style={{ width: "25px", height: "25px" }}
              >
                <button
                  type="button"
                  onClick={() => fileInputRef.current.click()}
                  className="btn btn-sm p-0 text-white"
                  style={{ background: "none", border: "none" }}
                >
                  <RiImageAddLine />
                </button>
              </div>
            </div>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>
          <div className="mt-4 flex-grow-1 row justify-evenly">
            <div className="col-md-4">
              <label className="form-label font-bold text-[15px]">Name</label>
              <input
                type="text"
                name="userName"
                className="form-control rounded-2xl plac"
                placeholder="Name"
                value={formData.userName}
                onChange={handleInputChange}
                
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
              <label className="form-label  font-bold text-[15px]">Employee Id</label>
              <input
                type="text"
                name="empID"
                className="form-control rounded-2xl plac"
                placeholder="Employee Id"
                value={formData.empID}
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
            <div className="col-md-4 ">
              <label className="form-label  font-bold text-[15px]">Email Id</label>
              <input
                type="email"
                name="email"
                className="form-control rounded-2xl plac"
                placeholder="Email-Id"
                value={formData.email}
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
              name="phoneNumber"
              className="form-control plac"
              placeholder="Phone Number"

              onChange={handleInputChange}
              value={formData.phoneNumber}
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
              onChange={handleInputChange}
              value={formData.fullAddress}
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
            <label className="form-label text-[15px]" htmlFor="gender">
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              className="form-select rounded-lg plac"
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
              value={formData.gender}
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
              onChange={handleInputChange}
              value={formData.dob}
              
            />
          </div>
          </div>
          <div className="mb-3 w-[100px]">
            <label className="form-label text-[15px]" htmlFor="bloodgroup">
              Blood Group
            </label>
            <select
              id="bloodgroup"
              name="bloodGroup"
              className="form-select  plac"
              style={{fontSize: '12px' ,border:'1px solid whie',boxShadow:'-2px 2px 4px 0px rgba(10, 10, 10, 0.15),2px 1px 4px 0px rgba(10, 10, 10, 0.15),0px -2px 4px 0px rgba(10, 10, 10, 0.15)'}}
              onFocus={ e => {
                
                e.target.style.borderColor = 'white';
                e.target.style.boxShadow = '-2px 2px 4px 0px rgba(10, 10, 10, 0.15),2px 1px 4px 0px rgba(10, 10, 10, 0.15),0px -2px 4px 0px rgba(10, 10, 10, 0.15)';
              }}
              onBlur={e => {
                  
                e.target.style.borderColor = 'white';
                e.target.style.boxShadow = '-2px 2px 4px 0px rgba(10, 10, 10, 0.15),2px 1px 4px 0px rgba(10, 10, 10, 0.15),0px -2px 4px 0px rgba(10, 10, 10, 0.15)';
              }}
              onChange={handleInputChange}
              value={formData.bloodGroup}
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
              onChange={handleInputChange}
              value={formData.dateOfJoining}
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
              onChange={handleInputChange}
              value={formData.jobRole}
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
              value={formData.employeeStatus}
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
              name="joblevel"
              className="form-select plac"
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
              value={formData.jobLevel}
            >
              <option value="Manager Level">Manager Level</option>
              <option value="Executive Level">Executive Level</option>
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
                    style={{fontSize: '12px' ,border:'1px solid whie',boxShadow:'-2px 2px 4px 0px rgba(10, 10, 10, 0.15),2px 1px 4px 0px rgba(10, 10, 10, 0.15),0px -2px 4px 0px rgba(10, 10, 10, 0.15)'}}
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
                  <select
                    id="gender"
                    name="gender"
                    className="form-select rounded-lg plac"
                    style={{fontSize: '12px' ,border:'1px solid whie',boxShadow:'-2px 2px 4px 0px rgba(10, 10, 10, 0.15),2px 1px 4px 0px rgba(10, 10, 10, 0.15),0px -2px 4px 0px rgba(10, 10, 10, 0.15)'}}
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
                      <option value="">URL Link</option>
                    <option value="">URL LInk</option>
                    <option value="">URL Link</option>
                    <option value="">URL Link</option>
                    <option value="">URL Link</option>
                  </select>
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
                    style={{fontSize: '12px' ,border:'1px solid whie',boxShadow:'-2px 2px 4px 0px rgba(10, 10, 10, 0.15),2px 1px 4px 0px rgba(10, 10, 10, 0.15),0px -2px 4px 0px rgba(10, 10, 10, 0.15)'}}
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
                  <select
                    id="gender"
                    name="gender"
                    className="form-select rounded-lg plac"
                    style={{fontSize: '12px' ,border:'1px solid whie',boxShadow:'-2px 2px 4px 0px rgba(10, 10, 10, 0.15),2px 1px 4px 0px rgba(10, 10, 10, 0.15),0px -2px 4px 0px rgba(10, 10, 10, 0.15)'}}
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
                    <option value="">URL Link</option>
                    <option value="">URL LInk</option>
                    <option value="">URL Link</option>
                    <option value="">URL Link</option>
                    <option value="">URL Link</option>
                  </select>
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
                    style={{fontSize: '12px' ,border:'1px solid whie',boxShadow:'-2px 2px 4px 0px rgba(10, 10, 10, 0.15),2px 1px 4px 0px rgba(10, 10, 10, 0.15),0px -2px 4px 0px rgba(10, 10, 10, 0.15)'}}
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
                  <select
                    id="gender"
                    name="gender"
                    className="form-select rounded-lg plac"
                    style={{fontSize: '12px' ,border:'1px solid whie',boxShadow:'-2px 2px 4px 0px rgba(10, 10, 10, 0.15),2px 1px 4px 0px rgba(10, 10, 10, 0.15),0px -2px 4px 0px rgba(10, 10, 10, 0.15)'}}
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
                      <option value="">URL Link</option>
                    <option value="">URL LInk</option>
                    <option value="">URL Link</option>
                    <option value="">URL Link</option>
                    <option value="">URL Link</option>
                  </select>
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
                    style={{fontSize: '12px' ,border:'1px solid whie',boxShadow:'-2px 2px 4px 0px rgba(10, 10, 10, 0.15),2px 1px 4px 0px rgba(10, 10, 10, 0.15),0px -2px 4px 0px rgba(10, 10, 10, 0.15)'}}
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
                  <select
                    id="gender"
                    name="gender"
                    className="form-select rounded-lg plac"
                    style={{fontSize: '12px' ,border:'1px solid whie',boxShadow:'-2px 2px 4px 0px rgba(10, 10, 10, 0.15),2px 1px 4px 0px rgba(10, 10, 10, 0.15),0px -2px 4px 0px rgba(10, 10, 10, 0.15)'}}
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
                    <option value="">URL Link</option>
                    <option value="">URL LInk</option>
                    <option value="">URL Link</option>
                    <option value="">URL Link</option>
                    <option value="">URL Link</option>
                  </select>
                </div>
          </div>
        </div>
        
        </div>
                    <div className="mt-5 flex justify-between">
                              <div className="  w-[660px] h-[150px] ">
                                            <h4 className="text-[22px]">Feedback</h4>
                                            <textarea
                                              className="form-control w-[660px] h-[150px] plac"
                                              placeholder="Enter here"
                                              rows="4"
                                              onChange={handleInputChange}
                                              style={{border:'1px solid whie',boxShadow:'-2px 2px 4px 0px rgba(10, 10, 10, 0.15),2px 1px 4px 0px rgba(10, 10, 10, 0.15),0px -2px 4px 0px rgba(10, 10, 10, 0.15)'}}
                                                      onFocus={ e => {
                                                        
                                                        e.target.style.borderColor = 'white';
                                                        e.target.style.boxShadow = '-2px 2px 4px 0px rgba(10, 10, 10, 0.15),2px 1px 4px 0px rgba(10, 10, 10, 0.15),0px -2px 4px 0px rgba(10, 10, 10, 0.15)';
                                                      }}
                                                      onBlur={e => {
                                                    
                                                        e.target.style.borderColor = 'white';
                                                        e.target.style.boxShadow = '-2px 2px 4px 0px rgba(10, 10, 10, 0.15),2px 1px 4px 0px rgba(10, 10, 10, 0.15),0px -2px 4px 0px rgba(10, 10, 10, 0.15)';
                                                      }}
                                              value={formData.feedback}
                                            ></textarea>
                              </div>
                    
                              <div className="">
                                              <h4 className="text-[22px]">Internship Certificate</h4>
                                              <div
                                                    className="border border-secondary rounded p-4 text-center position-relative"
                                                    style={{
                                                      width: "330px",
                                                      height: "150px",
                                                      overflow: "hidden",
                                                    }}
                                                  >
                                                    {certificate ? (
                                                      <img
                                                        src={URL.createObjectURL(certificate)}
                                                        alt="Uploaded Certificate"
                                                        style={{
                                                          width: "100%",
                                                          height: "100%",
                                                          objectFit: "contain",
                                                        }}
                                                      />
                                                    ) : (
                                                      <p>Upload the file</p>
                                                    )}
                                                    <button
                                                      onClick={() => certificateInputRef.current.click()}
                                                      className="btn btn-link text-black "
                                                      aria-label="Upload Internship Certificate"
                                                    >
                                                    <BsBoxArrowUp />
                                                    </button>
                                             </div>
                                            <input
                                            type="file"
                                            ref={certificateInputRef}
                                            style={{ display: "none" }}
                                            accept="image/*"
                                            onChange={handleCertificateFileChange}
                                          />
                               </div>
                          </div>
                      <div className=" flex justify-center gap-4 mt-4">
                                    <button type="submit" className="px-14 py-2 text-white bg-[#FF9D00] rounded-xl flex justify-center items-center me-3">
                                    {id ? "Update" : "Save"}
                                    </button>
                                    <button type="button" className=" px-14 py-2 text-white bg-[#FF9D00] rounded-xl flex justify-center items-center">
                                      Cancel
                                    </button>
                      </div>
         </form>
    </div>
  );
}

export default AddInterns;
