import React, { useState, useRef } from "react";
import '../CSS/addsales.css';
import { toast } from "react-toastify";
import { addInternEmployee } from "../Api Services/internsManagementApi";

function AddInterns() {
  const [formData, setFormData] = useState({
    userName: "",
    employeeId: "",
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


    try {
      const response = await addInternEmployee(formDataObj, header);
      if (response.status === 200) {
        toast.success("Intern added successfully!");
      } else {
        toast.error("Failed to add intern.");
      }
    } catch (error) {
      console.error("Error adding intern:", error);
      toast.error("An error occurred while adding the intern.");
    }
  };

  return (
    <div className="container mx-auto my-5 p-5 bg-white shadow rounded-md">
      <form className="row g-4" onSubmit={handleSubmit}>
        <div className="col-12 d-flex align-items-center mb-4">
          <div className="me-4">
            <h2>Intern Details</h2>
            <div
              className="d-flex justify-content-center align-items-center border rounded-circle"
              style={{
                width: "100px",
                height: "100px",
                position: "relative",
              }}
            >
              {profileImage ? (
                <img
                  src={URL.createObjectURL(profileImage)}
                  alt="Uploaded"
                  style={{
                    width: "100px",
                    height: "100px",
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
                className="position-absolute bottom-0 end-0 bg-warning rounded-circle d-flex justify-content-center align-items-center"
                style={{ width: "25px", height: "25px" }}
              >
                <button
                  type="button"
                  onClick={() => fileInputRef.current.click()}
                  className="btn btn-sm p-0"
                  style={{ background: "none", border: "none" }}
                >
                  <i className="fa-solid fa-arrow-up-from-bracket" />
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
          <div className="flex-grow-1 row g-3">
            <div className="col-md-4">
              <label className="form-label">User Name</label>
              <input
                type="text"
                name="userName"
                className="form-control"
                placeholder="Username"
                onChange={handleInputChange}
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Employee Id</label>
              <input
                type="text"
                name="employeeId"
                className="form-control"
                placeholder="Employee Id"
                onChange={handleInputChange}
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Email"
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        
            {/* Personal Information Section */}
            <div className="col-md-4 border-en">
          <h4>Personal Information</h4>
          <div className="mb-3">
            <label className="form-label" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              className="form-control"
              placeholder="Phone Number"
              onChange={handleInputChange}
              // value={formData.phone}
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="address">
              Full Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className="form-control"
              placeholder="Address"
              onChange={handleInputChange}
              // value={formData.address}
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="gender">
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              className="form-select"
              onChange={handleInputChange}
              // value={formData.gender}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="dob">
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              className="form-control"
              onChange={handleInputChange}
              // value={formData.dob}
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="bloodgroup">
              Blood Group
            </label>
            <select
              id="bloodgroup"
              name="bloodgroup"
              className="form-select"
              onChange={handleInputChange}
              // value={formData.bloodgroup}
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

        {/* Employment Overview Section */}
        <div className="col-md-4 border-en">
          <h4>Employment Overview</h4>
          <div className="mb-3">
            <label className="form-label" htmlFor="doj">
              Date of Joining
            </label>
            <input
              type="date"
              id="doj"
              name="doj"
              className="form-control"
              onChange={handleInputChange}
              // value={formData.doj}
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="jobrole">
              Job Role
            </label>
            <select
              id="jobrole"
              name="jobrole"
              className="form-select"
              onChange={handleInputChange}
              // value={formData.jobrole}
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
            <label className="form-label" htmlFor="empsatus">
              Employee Status
            </label>
            <select
              id="empsatus"
              name="empsatus"
              className="form-select"
              onChange={handleInputChange}
              // value={formData.empsatus}
            >
              <option value="Full time">Full time</option>
              <option value="Part time">Part time</option>
              <option value="Freelancer">Freelancer (Work from home)</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="joblevel">
              Job Level
            </label>
            <select
              id="joblevel"
              name="joblevel"
              className="form-select"
              onChange={handleInputChange}
              // value={formData.joblevel}
            >
              <option value="Manager Level">Manager Level</option>
              <option value="Executive Level">Executive Level</option>
            </select>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="col-md-4">
          <h4>Social Media</h4>
          <div className="mb-3">
            <label htmlFor="instagram">Instagram</label>
            <input
              type="url"
              id="instagram"
              name="instagram"
              className="form-control"
              placeholder="Instagram URL"
              onChange={handleInputChange}
              // value={formData.instagram}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="linkedin">LinkedIn</label>
            <input
              type="url"
              id="linkedin"
              name="linkedin"
              className="form-control"
              placeholder="LinkedIn URL"
              onChange={handleInputChange}
              // value={formData.linkedin}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="twitter">Twitter</label>
            <input
              type="url"
              id="twitter"
              name="twitter"
              className="form-control"
              placeholder="Twitter URL"
              onChange={handleInputChange}
              // value={formData.twitter}
            />
          </div>
        </div>

        <div className="col-md-6">
          <h4>Feedback</h4>
          <textarea
            className="form-control"
            placeholder="Enter here"
            rows="4"
            onChange={handleInputChange}
            // value={formData.feedback}
          ></textarea>
        </div>
        
        <div className="col-md-6">
          <h4>Internship Certificate</h4>
          <div
            className="border border-secondary rounded p-4 text-center position-relative"
            style={{
              width: "100%",
              height: "200px",
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
              className="btn btn-link"
              aria-label="Upload Internship Certificate"
            >
              <i
                className="fa-solid fa-arrow-up-from-bracket"
                style={{ fontSize: "50px", color: "black" }}
              />
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

        <div className="col-12 d-flex justify-content-end mt-4">
          <button type="submit" className="btn btn-warning me-3">
            Save
          </button>
          <button type="button" className="btn btn-secondary">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddInterns;
