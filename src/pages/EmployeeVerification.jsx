import React, { useState, useEffect } from "react";
import { Verify } from "react-puzzle-captcha";
import "react-puzzle-captcha/dist/react-puzzle-captcha.css";
import { toast, ToastContainer } from "react-toastify";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import HeaderBanner from "../components/HeaderBanner";

function EmployeeVerification() {
    const [formData, setFormData] = useState({
        employeeId: "",
    });
    const [errors, setErrors] = useState({});
    const [searchResults, setSearchResults] = useState([]);
    const [captchaVerified, setCaptchaVerified] = useState(false);
    // const [captchaMessage, setCaptchaMessage] = useState('');
    const [isTouched, setIsTouched] = useState(false);
    const [loading, setLoading] = useState(false);
    const [modalShow, setModalShow] = useState(false);

    const navigate=useNavigate()

    // Dummy data (simulate a backend response)
    const dummyData = [
        { employeeId: "EMP001", fullName: "John Doe", department: "HR" },
        { employeeId: "EMP002", fullName: "Jane Smith", department: "IT" },
        { employeeId: "EMP003", fullName: "Alice Johnson", department: "Finance" },
        { employeeId: "EMP004", fullName: "Bob Brown", department: "IT" },
        { employeeId: "EMP005", fullName: "Charlie White", department: "HR" },
    ];

    // Handle input changes
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    // Validation function
    const validate = () => {
      const { employeeId } = formData;
  
      if (!employeeId) {
          toast.error("Please fill the Employee ID field."); // Show toast for empty field
          return false;
      }
  
      if (!/^[a-zA-Z0-9]+$/.test(employeeId)) {
          toast.error("Employee ID must be alphanumeric."); // Show toast for invalid characters
          return false;
      }
  
      return true;
  };
  

    // Handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      setLoading(true);
  
      // Validate input and show relevant toast errors
      if (!validate()) {
          setLoading(false);
          return;
      }
  
      // Show CAPTCHA modal if not verified
      if (!captchaVerified) {
          setModalShow(true);
          setLoading(false);
          return;
      }
  
      // Proceed with submission after CAPTCHA
      setTimeout(() => {
          const { employeeId } = formData;
          const filteredResults = dummyData.filter((employee) =>
              employee.employeeId.includes(employeeId)
          );
  
          if (filteredResults.length === 0) {
              setSearchResults([]);
              toast.info("No matching employee found."); // Show toast for no results
          } else {
              setSearchResults(filteredResults);
              toast.success("Employee found!"); // Show toast for success
          }
  
          setLoading(false);
          resetForm();
      }, 2000);
  };
  

    // Handle CAPTCHA success
    const handleCaptchaSuccess = () => {
        setCaptchaVerified(true);
        setModalShow(false); // Close the modal

        // Proceed with form submission after CAPTCHA verification
        if (validate()) {
            const { employeeId } = formData;
            const filteredResults = dummyData.filter((employee) => employee.employeeId.includes(employeeId));

            if (filteredResults.length === 0) {
                setSearchResults([]);
                setLoading(true)
                setTimeout(()=>{
                  setLoading(false)
                  toast.info("No matching employee found.");
                },2000)
            } else {
                setLoading(true)
                setTimeout(()=>{
                  setLoading(false)
                  navigate('/personel')
                },2000)
            }
            resetForm();
        }
    };


    // Mark the input as touched when the user interacts with it
    const handleTouched = (e) => {
        setIsTouched(true); // Mark the field as touched
        handleChange(e); // Update the form data
    };

    const resetForm = () => {
        setFormData({ employeeId: "" });
        setCaptchaVerified(false);
        // setCaptchaMessage('');
        setIsTouched(false);
    };

    // Show toast notification when there's a general error
    useEffect(() => {
        if (errors.general) {
            toast.info(errors.general);
        }
    }, [errors.general]);

    return (
        <>
            {/* Hero Section */}
            <HeaderBanner title="Employee Verification" description="Verify employee credentials and details securely and efficiently."  classname='bg4'  />

            {/* Verification Form Section */}
            <section className="bg-gray-50 px-6 py-16">
                <div className="bg-white shadow-lg mx-auto p-8 rounded-lg max-w-3xl">
                    <h2 className="mb-6 font-bold text-3xl text-amber-600 text-center">Employee Verification Form</h2>
                    <form>
                        {/* Employee ID */}
                        <div className="mb-4">
    <label className="block mb-2 font-medium text-gray-700" htmlFor="employeeId">
        Employee ID
    </label>
    <input
        type="text"
        id="employeeId"
        aria-label="Enter Employee ID"
        value={formData.employeeId}
        onChange={handleTouched}
        className="border-gray-300 p-2 border rounded-md w-full"
        placeholder="Enter Employee ID"
    />
</div>


                        {/* Submission Button */}
                        <div className="text-center">
                            <button
                                type="submit"
                                onClick={handleSubmit}
                                disabled={loading} // Disable button when loading
                                className="mt-3 transform hover:scale-105 hover:bg-blue-700 bg-gradient-to-r from-amber-200 via-amber-500 to-yellow-300 px-6 py-2 rounded-md font-semibold text-black"
                            >
                                {loading ? "Verifying..." : "Verify Employee"}
                            </button>
                        </div>
                    </form>
                </div>
            </section>
            {loading && (
                <div className="flex justify-center items-center fixed inset-0 bg-opacity-50 bg-yellow-500 z-50">
                    <div className="spinner"></div> {/* Show the loader spinner */}
                </div>
            )}

            {/* Modal for Captcha  */}
            <Modal size="sm" aria-labelledby="captcha-modal" centered show={modalShow} onHide={() => setModalShow(false)}>
                <Modal.Header className="text-center">
                <h5 className="w-100 text-black font-semibold m-0">Are you a robot?</h5> 
                </Modal.Header>
                <Modal.Body>
                    <Verify id="captcha" width={250} height={120} onSuccess={handleCaptchaSuccess} />
                </Modal.Body>
            </Modal>

            {/* {searchResults.length > 0 && (
                <section className="bg-white px-6 py-16">
                    <h2 className="mb-6 font-semibold text-center text-gray-800">Search Results</h2>
                    <div className="mx-auto max-w-5xl">
                        <table className="bg-yellow-100 min-w-full text-black table-auto">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2 border">Employee ID</th>
                                    <th className="px-4 py-2 border">Full Name</th>
                                    <th className="px-4 py-2 border">Department</th>
                                </tr>
                            </thead>
                            <tbody>
                                {searchResults.map((employee, index) => (
                                    <tr key={index}>
                                        <td className="px-4 py-2 border">{employee.employeeId}</td>
                                        <td className="px-4 py-2 border">{employee.fullName}</td>
                                        <td className="px-4 py-2 border">{employee.department}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            )} */}

            {/* Benefits of Verification Section */}
            <section className="py-16 px-6 bg-white">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold mb-6 text-black">Why Verify Employees?</h2>
                    <p className="text-black mb-8">
                        Ensuring that employee information is accurate helps maintain a trustworthy workplace environment
                        and reduces the risk of fraudulent activities.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="hover:shadow-2xl transform hover:scale-105 p-6 bg-gradient-to-r from-amber-200 via-amber-500 to-yellow-300 rounded-md shadow-lg">
                            <h3 className="text-xl font-medium text-black mb-2">Authenticity</h3>
                            <p className="text-black">
                                Verify the authenticity of employee credentials and background details.
                            </p>
                        </div>
                        <div className="p-6 hover:shadow-2xl transform hover:scale-105 bg-gradient-to-r from-amber-200 via-amber-500 to-yellow-300 rounded-md shadow-lg">
                            <h3 className="text-xl font-medium text-black mb-2">Security</h3>
                            <p className="text-black">Protect your organization from unauthorized individuals.</p>
                        </div>
                        <div className="p-6 hover:shadow-2xl transform hover:scale-105 bg-gradient-to-r from-amber-200 via-amber-500 to-yellow-300 rounded-md shadow-lg hover:bg-blue-500">
                            <h3 className="text-xl font-medium text-black mb-2">Efficiency</h3>
                            <p className="text-black">Streamline the hiring and employee verification process.</p>
                        </div>
                    </div>
                </div>
            </section>

            <ToastContainer />
        </>
    );
}

export default EmployeeVerification;
