import React, { useState, useRef } from "react";
import '../CSS/addsales.css'

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
    profileImage: null,
    certificate: null,
  });
  
  const [uploadedImage, setUploadedImage] = useState(null);
  const [uploadedCertificate, setUploadedCertificate] = useState(null);
  
  const certificateInputRef = useRef(null);
  const fileInputRef = useRef(null);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedImage(URL.createObjectURL(file))
    }
  };

  const handleCertificateFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedCertificate(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
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
              {uploadedImage ? (
                <img
                  src={uploadedImage}
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

        <div className="col-md-4 border-en">
          <h4>Personal Information</h4>
          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              className="form-control"
              placeholder="Number"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Full Address</label>
            <input
              type="text"
              name="fullAddress"
              className="form-control"
              placeholder="House name, city, district"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Gender</label>
            <select name="gender" className="form-select" onChange={handleInputChange}>
              <option value="">Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Date of Birth</label>
            <input
              type="date"
              name="dob"
              className="form-control"
              placeholder="MM/DD/YYYY"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Blood Group</label>
            <select name="bloodGroup" className="form-select"  onChange={handleInputChange}>
              <option value="">A+</option>
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

        <div className="col-md-4 border-en">
          <h4>Employment Overview</h4>
          <div className="mb-3">
            <label className="form-label">Date of Joining</label>
            <input
              type="date"
              name="dateOfJoining"
              className="form-control"
              placeholder="MM/DD/YYYY"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Job Role</label>
            <select name="jobRole" className="form-select"  onChange={handleInputChange}>
              <option value="">Business Development Executive</option>
              <option value="Deleveopment Manager">Business Development Manager</option>
              <option value="Business Manger">Area Business Manager</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Employee Status</label>
            <select name="employeeStatus" className="form-select" onChange={handleInputChange}>
              <option value="">Full time</option>
              <option value="Part time">Part time</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Job Level</label>
            <select name="jobLevel" className="form-select" onChange={handleInputChange}>
              <option value="">Manager Level</option>
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
            {uploadedCertificate ? (
              <img
                src={uploadedCertificate}
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
