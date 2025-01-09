import React, { useState, useRef } from "react";
import "../CSS/addsales.css";
// import { addSalesEmployee } from "../Api Services/salesManagemntApi";
import { toast } from "react-toastify";

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

  const [image, setImage] = useState(null);
  

  const fileInputRef = useRef(null);
 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };



  const handleClose = () => {
    setFormData({
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
    setImage(null);
    setBusinessCard(null);
  };

  const handleAddSales = async (e) => {
    e.preventDefault();

    if (
        Object.values(formData).some((value) => !value.trim()) ||
        !image ||
        !businessCard
    ) {
        toast.warning("Please fill all the fields!");
        return;
    }

    const fd = new FormData();
    for (const [key, value] of Object.entries(formData)) {
        fd.append(key, value.trim());
    }
    fd.append("image", image);
    fd.append("businessCard", businessCard);

    const header = {
        Authorization: `token ${localStorage.getItem("admin")}`,
    };

    // console.log("FormData Entries:");
    // for (const pair of fd.entries()) {
    //     console.log(`${pair[0]}: ${pair[1]}`);
    // }

    try {
        const res = await addSalesEmployee(fd, header);
        if (res.status === 200 || res.status === 201) {
            toast.success("Sales Employee Added Successfully");
            handleClose();
        } else {
            toast.error("Failed to Add Sales Employee");
        }
    } catch (error) {
        console.error("Error adding sales employee:", error);
        toast.error("Something went wrong! Please try again.");
    }
};


  return (
    <div className="container mx-auto my-5 p-5 bg-white shadow rounded-md">
      <form onSubmit={handleAddSales} className="row g-5">
        {/* Profile Picture Section */}
        <div className="col-12 d-flex align-items-center mb-4">
          <div className="me-4 text-center">
            <h2>Sales Details</h2>
            <div
              className="d-flex justify-content-center align-items-center border rounded-circle position-relative"
              style={{ width: "100px", height: "100px" }}
            >
              {image ? (
                <img
                  src={URL.createObjectURL(image)}
                  alt="Profile Preview"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                />
              ) : (
                <i
                  className="bi bi-person-circle"
                  style={{ fontSize: "50px", color: "#ffc107" }}
                ></i>
              )}
              <button
                type="button"
                className="btn btn-sm p-0 position-absolute bottom-0 end-0 bg-warning rounded-circle"
                onClick={() => fileInputRef.current.click()}
                style={{ width: "25px", height: "25px", border: "none" }}
              >
                <i className="fa-solid fa-arrow-up-from-bracket" />
              </button>
            </div>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>
          {/* Personal Information */}
          <div className="flex-grow-1 row g-3">
            <div className="col-md-4">
              <label className="form-label">User Name</label>
              <input
                type="text"
                name="username"
                className="form-control"
                onChange={handleInputChange}
                value={formData.username }
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Employee ID</label>
              <input
                type="text"
                name="employeeID"
                className="form-control"
                onChange={handleInputChange}
                value={formData.employeeID}
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                onChange={handleInputChange}
                value={formData.email}
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
              value={formData.phone}
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
              value={formData.address}
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
              value={formData.gender}
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
              value={formData.dob}
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
              value={formData.bloodgroup}
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
              value={formData.doj}
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
              value={formData.jobrole}
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
              value={formData.empsatus}
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
              value={formData.joblevel}
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
              value={formData.instagram}
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
              value={formData.linkedin}
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
              value={formData.twitter}
            />
          </div>
        </div>


        {/* Submit and Cancel Buttons */}
        <div className="col-12 d-flex justify-content-end mt-4">
          <button type="submit" className="btn btn-warning me-3" >
            Save
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleClose}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddSales;
