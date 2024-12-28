import React,{useState, useRef} from "react";

function InternEployee() {

  
    const fileInputRef = useRef(null);
    const internCertificateInputRef = useRef(null)
    const [uploadedImage, setUploadedImage] = useState(null);
    const [uploadedCertificate, setUploadCertificate] = useState(null)
    const handleUploadClick = () => {
      fileInputRef.current.click(); // Trigger the file input click
    };
  
    const handleCertificateUpload = ()=>{
      internCertificateInputRef.current.click();
    }

    const handleFileChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => setUploadedImage(reader.result); // Preview the uploaded image
        reader.readAsDataURL(file);
      }
    };

    const handleCertificateChange = (event)=>{
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => setUploadCertificate(reader.result); // Preview the uploaded certificate
        reader.readAsDataURL(file);
      }
    }

  return (
  
    <div className="container mx-auto my-5 p-5 bg-white shadow rounded-md">
      <form className="row g-4">

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
                   onClick={handleUploadClick}
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
                />
              </div>
              <div className="col-md-4">
                <label className="form-label">Employee Id</label>
                <input
                  type="text"
                  name="employeeId"
                  className="form-control"
                  placeholder="Employee Id"
                />
              </div>
              <div className="col-md-4">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
            </div>
          </div>

        <div className="col-md-4">
          <h4>Personal Information</h4>
          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input type="text" name="phoneNumber" className="form-control" placeholder="Number" />
          </div>
          <div className="mb-3">
            <label className="form-label">Full Address</label>
            <input
              type="text"
              name="fullAddress"
              className="form-control"
              placeholder="House name, city, district"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Gender</label>
            <select name="gender" className="form-select">
              <option value="">Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Date of Birth</label>
            <input type="date" name="dob" className="form-control" placeholder="MM/DD/YYYY" />
          </div>
          <div className="mb-3">
            <label className="form-label">Blood Group</label>
            <select name="bloodGroup" className="form-select">
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

        <div className="col-md-4">
          <h4>Employment Overview</h4>
          <div className="mb-3">
            <label className="form-label">Date of Joining</label>
            <input type="date" name="dateOfJoining" className="form-control" placeholder="MM/DD/YYYY" />
          </div>
          <div className="mb-3">
            <label className="form-label">Job Role</label>
            <select name="jobRole" className="form-select">
              <option value="">Sales Manager</option>
              <option value="Developer">Developer</option>
              <option value="Designer">Designer</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Employee Status</label>
            <select name="employeeStatus" className="form-select">
              <option value="">Full time</option>
              <option value="Part time">Part time</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Job Level</label>
            <select name="jobLevel" className="form-select">
              <option value="">Manager Level</option>
              <option value="Senior Level">Senior Level</option>
              <option value="Entry Level">Entry Level</option>
            </select>
          </div>
        </div>

        <div className="col-md-4">
          <h4>Social Media</h4>
          {Array(4)
            .fill(null)
            .map((_, index) => (
              <div key={index} className="d-flex align-items-center mb-3">
                <select className="form-select me-3">
                  <option value="">Instagram</option>
                  <option value="LinkedIn">LinkedIn</option>
                  <option value="Twitter">Twitter</option>
                </select>
                <input
                  type="url"
                  className="form-control"
                  placeholder="URL link"
                />
              </div>
            ))}
        </div>

        <div className="col-md-6">
          <h4>Feedback</h4>
          <textarea
            className="form-control"
            placeholder="Enter here"
            rows="4"
          ></textarea>
        </div>

        <div className="col-md-6">
          <h4>Internship Certificate</h4>
          <div className="border border-secondary rounded p-4 text-center">
            <p>Upload the file</p>
            <input type="file" className="form-control" />
          </div>
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

export default InternEmployee;
