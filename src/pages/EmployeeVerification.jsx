import React, { useState, useEffect } from 'react';
import { Verify } from 'react-puzzle-captcha';
import 'react-puzzle-captcha/dist/react-puzzle-captcha.css';
import GetInTouch from '../components/GetInTouch';
import { toast, ToastContainer } from 'react-toastify';

function EmployeeVerification() {
  const [formData, setFormData] = useState({
    employeeId: ''
  });
  const [errors, setErrors] = useState({});
  const [searchResults, setSearchResults] = useState([]);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [captchaMessage, setCaptchaMessage] = useState(''); 
  const [isTouched, setIsTouched] = useState(false); 
  const [loading, setLoading] = useState(false);

  // Dummy data (simulate a backend response)
  const dummyData = [
    { employeeId: 'EMP001', fullName: 'John Doe', department: 'HR' },
    { employeeId: 'EMP002', fullName: 'Jane Smith', department: 'IT' },
    { employeeId: 'EMP003', fullName: 'Alice Johnson', department: 'Finance' },
    { employeeId: 'EMP004', fullName: 'Bob Brown', department: 'IT' },
    { employeeId: 'EMP005', fullName: 'Charlie White', department: 'HR' },
  ];

  // Handle input changes
  const handleChange = e => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Validation function
  const validate = () => {
    const validationErrors = {};
    const { employeeId } = formData;

    if (!employeeId) {
      validationErrors.general = 'Please fill the field.';
    } else if (employeeId && !/^[a-zA-Z0-9]+$/.test(employeeId)) {
      validationErrors.general = 'Employee ID must be alphanumeric.';
    } else if (!captchaVerified) {
      validationErrors.general = 'Captcha not verified';
    }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);  // Show loader when form submission starts

    if (validate()) {
      setTimeout(() => {  // Simulate a delay, e.g., for data fetching or processing
        const filteredResults = dummyData.filter(employee => 
          employee.employeeId.includes(formData.employeeId)
        );

        if (filteredResults.length === 0) {
          setErrors({ general: 'No matching employee found.' });
          setSearchResults([]);
        } else {
          setSearchResults(filteredResults);
          setErrors({});
        }

        setLoading(false);  // Hide loader after data is processed
        resetForm();  // Optionally reset form after submission
      }, 2000);  // Simulated delay of 2 seconds
    } else {
      setLoading(false);  // Hide loader if validation fails
    }
  };

  // Handle CAPTCHA success
  const handleCaptchaSuccess = () => {
    setCaptchaVerified(true);
    setCaptchaMessage('CAPTCHA successfully verified!');
  };

  // Handle CAPTCHA failure
  const handleCaptchaFail = () => {
    setCaptchaVerified(false);
    setCaptchaMessage('CAPTCHA verification failed. Please try again.');
  };

  // Mark the input as touched when the user interacts with it
  const handleTouched = (e) => {
    setIsTouched(true); // Mark the field as touched
    handleChange(e); // Update the form data
  };

  const resetForm = () => {
    setFormData({ employeeId: "" });
    setCaptchaVerified(false);
    setCaptchaMessage('');
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
      <section className="flex justify-center items-center p-3 w-full h-screen employ_section bg1 relative">
        <div className="flex flex-col items-center z-10">
          <h1 className="text-5xl md:text-7xl home-text working_heading mb-5">
            Employee Verification
          </h1>
          <p className="font-semibold text-md md:text-2xl working_subheading text-center">
            Verify employee credentials and details securely and efficiently.
          </p>
        </div>
      </section>

      {/* Verification Form Section */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="bg-white shadow-lg mx-auto p-8 rounded-lg max-w-3xl">
          <h2 className="mb-6 font-bold text-3xl text-amber-600 text-center">
            Employee Verification Form
          </h2>
          <form onSubmit={handleSubmit}>
            {/* Employee ID */}
            <div className="mb-4">
              <label
                className="block mb-2 font-medium text-gray-700"
                htmlFor="employeeId"
              >
                Employee ID
              </label>
              <input
                type="text"
                id="employeeId"
                value={formData.employeeId}
                onChange={handleTouched} // Update form data and mark as touched
                className="border-gray-300 p-2 border rounded-md w-full"
                placeholder="Enter Employee ID"
              />
              {errors.employeeId && (
                <p className="text-red-500 text-sm">{errors.employeeId}</p>
              )}
            </div>

            {/* CAPTCHA */}
            {isTouched && !captchaVerified && (
              <>
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="captcha"
                >
                  Captcha
                </label>
                <Verify 
                  id="captcha"
                  width={250}
                  height={120}
                  onSuccess={handleCaptchaSuccess} // Handle success
                  onFail={handleCaptchaFail} // Handle failure
                />
              </>
            )}

            {/* CAPTCHA Message */}
            <p className='fw-bold  text-success'>
              {captchaMessage && (
                <>
                  <i className="fa-solid fa-check fa-beat me-2 fw-bolder"></i>
                  CAPTCHA verification completed successfully!
                </>
              )}
            </p>


            {/* Submission Button */}
            <div className="text-center">
              <button
                type="submit"
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
          <div className="spinner"></div>  {/* Show the loader spinner */}
        </div>
      )}

      {searchResults.length > 0 && (
        <section className="bg-white px-6 py-16">
          <h2 className="mb-6 font-semibold text-center text-gray-800">
            Search Results
          </h2>
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
      )}

      <GetInTouch />
      <ToastContainer />
    </>
  );
}

export default EmployeeVerification;
