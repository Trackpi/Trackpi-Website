import React, { useState, useRef } from "react";
import '../CSS/addsales.css'

function AddSales() {
  const [formData, setFormData] = useState({
    username: "",
    employeeID: "",
    email: "",
    phone: "",
    address: "",
    gender: "",
    dob: "",
    bloodgroup: "",
    doj: "",
    jobrole: "",
    empsatus: "",
    joblevel: "",
    instagram: "",
    linkedin: "",
    twitter: "",
  });

  const [uploadedImage, setUploadedImage] = useState(null);
  const [uploadedBusinessCard, setUploadedBusinessCard] = useState(null);

  const fileInputRef = useRef(null);
  const businessCardInputRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedImage(URL.createObjectURL(file));
    }
  };

  const handleBusinessCardFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedBusinessCard(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="container mx-auto my-5 p-5 bg-white shadow rounded-md">
      <form className="row g-4" onSubmit={handleSubmit}>
        <div className="col-12 d-flex align-items-center mb-4">
          <div className="me-4">
            <h2>Sales Details</h2>
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
                  aria-hidden="true"
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
                  aria-label="Upload Profile Image"
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
              <label className="form-label" htmlFor="userName">
                User Name
              </label>
              <input
                type="text"
                id="userName"
                name="userName"
                className="form-control"
                placeholder="Username"
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="col-md-4">
              <label className="form-label" htmlFor="employeeId">
                Employee Id
              </label>
              <input
                type="text"
                id="employeeId"
                name="employeeId"
                className="form-control"
                placeholder="Employee Id"
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="col-md-4">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                placeholder="Email"
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
        </div>

        {/* Personal Information Section */}
        <div className="col-md-4 border-en">
          <h4>Personal Information</h4>
          <div className="mb-3">
            <label className="form-label" htmlFor="phoneNumber">
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              className="form-control"
              placeholder="Number"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="fullAddress">
              Full Address
            </label>
            <input
              type="text"
              id="fullAddress"
              name="fullAddress"
              className="form-control"
              placeholder="House name, city, district"
              onChange={handleInputChange}
              required
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
              required
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
              placeholder="MM/DD/YYYY"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="bloodGroup">
              Blood Group
            </label>
            <select
              id="bloodGroup"
              name="bloodGroup"
              className="form-select"
              onChange={handleInputChange}
              required
            >
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

        {/* Employment Overview Section */}
        <div className="col-md-4 border-en">
          <h4>Employment Overview</h4>
          <div className="mb-3">
            <label className="form-label" htmlFor="dateOfJoining">
              Date of Joining
            </label>
            <input
              type="date"
              id="dateOfJoining"
              name="dateOfJoining"
              className="form-control"
              placeholder="MM/DD/YYYY"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="jobRole">
              Job Role
            </label>
            <select
              id="jobRole"
              name="jobRole"
              className="form-select"
              onChange={handleInputChange}
              required
            >
              <option value="">Business Development Executive</option>
              <option value="Develper manger">Business Development Manager</option>
              <option value="Busniess Manager">Area Business Manager</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="employeeStatus">
              Employee Status
            </label>
            <select
              id="employeeStatus"
              name="employeeStatus"
              className="form-select"
              onChange={handleInputChange}
              required
            >
              <option value="">Full time</option>
              <option value="Part time">Part time</option>
              <option value="Freelancer">Freelancer (Work frm home)</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="jobLevel">
              Job Level
            </label>
            <select
              id="jobLevel"
              name="jobLevel"
              className="form-select"
              onChange={handleInputChange}
              required
            >
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

        {/* Business Card Section */}
        <div className="row">
          <div className="col-md-6 col-6">
            <h4>Business Card</h4>
            <div
              className="border border-secondary rounded p-4 text-center position-relative"
              style={{
                width: "100%",
                height: "200px",
                overflow: "hidden",
              }}
            >
              {uploadedBusinessCard ? (
                <img
                  src={uploadedBusinessCard}
                  alt="Uploaded Business Card"
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
                onClick={() => businessCardInputRef.current.click()}
                className="btn btn-link"
                aria-label="Upload Business Card"
              >
                <i
                  className="fa-solid fa-arrow-up-from-bracket"
                  style={{ fontSize: "50px", color: "black" }}
                />
              </button>
            </div>
            <input
              type="file"
              ref={businessCardInputRef}
              style={{ display: "none" }}
              accept="image/*"
              onChange={handleBusinessCardFileChange}
            />
          </div>

          {/* Submit and Cancel Buttons */}
          <div className="col-12 d-flex justify-content-end mt-4">
            <button type="submit" className="btn btn-warning me-3">
              Save
            </button>
            <button type="button" className="btn btn-secondary">
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddSales;
