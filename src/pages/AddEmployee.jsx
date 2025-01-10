


import React, { useState, useRef,useEffect } from "react";
import { toast } from "react-toastify";
import { RiImageAddLine } from "react-icons/ri";
import { useNavigate, useParams,useLocation } from "react-router-dom";



function AddEmployee ()  {
  const location = useLocation();
  const { employeeData } = location.state || { employeeData: {} }
  const [formData, setFormData] = useState({
    name: employeeData.name || "",
    empID: employeeData.empID || "",
    desig: employeeData.desig || "",
    selfIntroduction: employeeData.selfIntroduction || "",
    instagram: employeeData.instagram || "",
    linkedin: employeeData.linkedin || "",
    twitter: employeeData.twitter || "",
    feedback: employeeData.feedback || "",
  });
  // Update form data when employeeData changes
  useEffect(() => {
    setFormData({
      name: employeeData.name || "",
      empID: employeeData.empID || "",
      desig: employeeData.desig || "",
      selfIntroduction: employeeData.selfIntroduction || "",
      instagram: employeeData.instagram || "",
      linkedin: employeeData.linkedin || "",
      twitter: employeeData.twitter || "",
      feedback: employeeData.feedback || "",
    });
   
  }, [employeeData]);
  useEffect(() => {
    // Fetch the image and convert it to a File object
    if (employeeData.image) {
      fetch(employeeData.image)
        .then((res) => res.blob())
        .then((blob) => {
          const file = new File([blob], "image.jpg", { type: "image/jpeg" });
          setProfileImage(file);
        })
        .catch((error) => console.error("Failed to fetch image:", error));
    }
  }, [employeeData.image]);
    
      const [profileImage, setProfileImage] = useState(null);
      
 
      const fileInputRef = useRef(null);
    
      const { id } = useParams();  // For editing, we'll get the intern ID from URL params
      const navigate = useNavigate();
      
      //  // Fetch existing intern data for editing
      //  useEffect(() => {
      //   if (id) {
      //      // Fetch intern data if editing
      //      getInternEmployeeById(id)
      //      .then((data) => {
      //       console.log("Fetched Data:", data); 
           
      //        setFormData({
      //          userName: data.userName || "",
      //          empID: data.empID || "",
      //          desig: data.desig || "",
      //          selfIntroduction: data.selfIntroduction || "",
      //          instagram: data.instagram || "",
      //          linkedin: data.linkedin || "",
      //          twitter: data.twitter || "",
      //          feedback: data.feedback || "",
      //        });
      //        // Prefill the image and certificate if available
      //        if (data.profileImage) setProfileImage(data.profileImage);
             
      //      })
      //      .catch((error) => toast.error("Failed to fetch employee details"));
       
           
      //   }
      // }, [id]);
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleFileChange = (e) => {
        setProfileImage(e.target.files[0]);
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
    
       
        const header = {
          "content-Type": "multipart/form-data",
          Authorization: `Token ${sessionStorage.getItem("token")}`,
        };
    
        const handleResponse = (response) => {
          if (response.status === 200) {
            toast.success(id ? "Employee updated successfully!" : "Employee added successfully!");
            navigate("/admin/intern-management");  // Redirect to intern management page
          } else {
            toast.error("Something went wrong!");
          }
        };
    
       
        // if (id) {
        //   // Edit intern
        //   updateInternEmployee(id, formDataObj, header)
        //     .then(handleResponse)
        //     .catch((error) => toast.error("Failed to update employee"));
        // } else {
        //   // Add new intern
        //   addInternEmployee(formDataObj, header)
        //     .then(handleResponse)
        //     .catch((error) => toast.error("Failed to add employee"));
        // }
      };
      const handleCancel = () => {
        navigate(-1); // Navigate back to the previous page
      }
  return (
    <div className="container mx-auto my-5 py-5 bg-white shadow rounded-md">
       <form className="row g-4" onSubmit={handleSubmit}>
            <div className=" px-5 d-flex align-items-center   mb-3 ">
                      <div className="me-4  ">
                        <h2 className="mb-4 text-[22px]">{id ? "Edit Employee" : "Add Employee"}</h2>
                        <div
                          className="d-flex justify-content-center align-items-center  border border-secondary rounded-2xl"
                          style={{
                           
                            width: "150px",
                            height: "120px",
                            position: "relative",
                          }}
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
                            name="name"
                            className="form-control rounded-2xl plac"
                            placeholder="Name"
                            value={employeeData.name}
                            // value={formData.name}
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
                       
                        <div className="col-md-4 ">
                          <label className="form-label  font-bold text-[15px]">Designation</label>
                          <input
                            type="text"
                            name="desig"
                            className="form-control rounded-2xl plac"
                            placeholder="Designation"
                            value={employeeData.desig}
                            // value={formData.desig}
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


                    <div className=" flex justify-evenly">
                    <div className="  w-[507px] h-[324px]  ">
                                            <h4 className="text-[22px]">Description</h4>
                                            <textarea
                                              className="form-control  w-[507px] h-[324px] plac"
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
                                                      value={employeeData.selfIntroduction}
                                              // value={formData.selfIntroduction}
                                            ></textarea>
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
        <div className=" flex justify-center gap-4 mt-4">
                                    <button type="submit" className="px-14 py-2 text-white bg-[#FF9D00] rounded-xl flex justify-center items-center me-3">
                                    {id ? "Update" : "Save"}
                                    </button>
                                    <button type="button" onClick={handleCancel} className=" px-14 py-2 text-white bg-[#FF9D00] rounded-xl flex justify-center items-center">
                                      Cancel
                                    </button>
                      </div>

       </form>
      
    </div>
  )
}

export default AddEmployee;
