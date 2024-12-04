import React, { useState } from 'react';
import { Verify } from 'react-puzzle-captcha';
import 'react-puzzle-captcha/dist/react-puzzle-captcha.css';

function EmployeeVerification() {
  const [formData, setFormData] = useState({
    employeeId: '',
  });

  const [errors, setErrors] = useState({});
  const [searchResults, setSearchResults] = useState([]);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [captchaMessage, setCaptchaMessage] = useState(''); // State for CAPTCHA messages

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
    }

    if (employeeId && !/^[a-zA-Z0-9]+$/.test(employeeId)) {
      validationErrors.employeeId = 'Employee ID must be alphanumeric.';
    }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = e => {
    e.preventDefault();
    if (validate()) {
      // Filter the dummy data based on the form inputs
      const filteredResults = dummyData.filter(employee => {
        const matchesEmployeeId = formData.employeeId
          ? employee.employeeId.includes(formData.employeeId)
          : true;
        return matchesEmployeeId;
      });

      if (filteredResults.length === 0) {
        setErrors({
          general: 'Invalid verification terms: No matching employee found.',
        });
        setSearchResults([]); 
      } else {
        setSearchResults(filteredResults);
        setErrors({}); 
      }
    }
  };

  // Handle CAPTCHA success
  const handleCaptchaSuccess = () => {
    setCaptchaVerified(true);
    setCaptchaMessage('CAPTCHA verified successfully!');
  };

  // Handle CAPTCHA failure
  const handleCaptchaFail = () => {
    setCaptchaVerified(false);
    setCaptchaMessage('CAPTCHA verification failed. Please try again.');
  };

  return (
    <>
      {/* Hero Section */}
      <section className="flex justify-center items-center p-3 w-full h-screen employ_section bg1 relative">
        <div className="flex flex-col items-center z-10">
          <h1 className="text-5xl md:text-7xl  home-text working_heading mb-5">
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
          <h2 className="mb-6 font-semibold text-3xl text-amber-600 text-center">
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
                onChange={handleChange}
                className="border-gray-300 p-2 border rounded-md w-full"
                placeholder="Enter Employee ID"
              />
              {errors.employeeId && (
                <p className="text-red-500 text-sm">{errors.employeeId}</p>
              )}
            </div>
            
            {/* CAPTCHA */}
            {captchaVerified? null:
            <>
            <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="captcha"
              >
                Captcha 
              </label>
            <Verify id="captcha" 
              width={250}
              height={120}
              onSuccess={handleCaptchaSuccess} // Handle success
              onFail={handleCaptchaFail} // Handle failure
            /></>}

            {/* CAPTCHA Message */}
            {captchaMessage && (
              <p
                className={`text-sm text-center ${
                  captchaVerified ? 'text-green-600' : 'text-red-500'
                }`}
              >
                {captchaMessage}
              </p>
            )}

            {/* General Error */}
            {errors.general && (
              <p className="mb-4 text-center text-red-500">{errors.general}</p>
            )}

            {/* Submission Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={!captchaVerified} // Disable submit button until CAPTCHA is verified
                className="transform hover:scale-105 hover:bg-blue-700 bg-gradient-to-r from-amber-200 via-amber-500 to-yellow-300 mt-4 px-6 py-2 rounded-md font-semibold text-black"
              >
                Verify Employee
              </button>
            </div>
          </form>
        </div>
      </section>

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

      {/* Benefits of Verification Section */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mb-6 font-semibold text-3xl text-black">
            Why Verify Employees?
          </h2>
          <p className="mb-8 text-black">
            Ensuring that employee information is accurate helps maintain a
            trustworthy workplace environment and reduces the risk of fraudulent
            activities.
          </p>
          <div className="gap-8 grid grid-cols-1 md:grid-cols-3">
            <div className="hover:shadow-2xl transform hover:scale-105 bg-gradient-to-r from-amber-200 via-amber-500 to-yellow-300 shadow-lg p-6 rounded-md">
              <h3 className="mb-2 font-medium text-black text-xl">
                Authenticity
              </h3>
              <p className="text-black">
                Verify the authenticity of employee credentials and background
                details.
              </p>
            </div>
            <div className="bg-gradient-to-r from-amber-200 via-amber-500 to-yellow-300 shadow-lg hover:shadow-2xl p-6 rounded-md transform hover:scale-105">
              <h3 className="mb-2 font-medium text-black text-xl">Security</h3>
              <p className="text-black">
                Protect your organization from unauthorized individuals.
              </p>
            </div>
            <div className="hover:bg-blue-500 bg-gradient-to-r from-amber-200 via-amber-500 to-yellow-300 shadow-lg hover:shadow-2xl p-6 rounded-md transform hover:scale-105">
              <h3 className="mb-2 font-medium text-black text-xl">
                Efficiency
              </h3>
              <p className="text-black">
                Streamline the hiring and employee verification process.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default EmployeeVerification;
