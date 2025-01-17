import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { GoUpload } from 'react-icons/go';
import { Link } from 'react-router-dom';

const FormNewProject = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    contactnumber: '',
    email: '',
    userType: '',
    qualification: '',
    institute_company: '',
    project_idea: '',
    problem_solve: '',
    benefit_idea: '',
    idea_success: '',
    summary: '',
  });
console.log(formData,"formDataa")
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Handle input change
  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  // Handle radio button selection
  const handleRadioChange = e => {
    setFormData({
      ...formData,
      userType: e.target.value,
    });
  };
  // Handle file selection
  const handleFileChange = event => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFileName(selectedFile.name);
    }
  };

  // Handle file removal
  const handleRemoveFile = () => {
    setFile(null);
    setFileName('');
    document.getElementById('fileInput').value = ''; // Reset file input
  };

  // Handle form submission
  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    const formDataToSend = new FormData();
    Object.keys(formData).forEach(key => {
      formDataToSend.append(key, formData[key]);
    });

    if (file) {
      formDataToSend.append('file', file);
    }

    try {
      const response = await fetch('http://your-backend-url/api/submit-form', {
        method: 'POST',
        body: formDataToSend,
      });

      const result = await response.json();

      if (response.ok) {
        setMessage('Form submitted successfully!');
        setFormData({
          fullname: '',
          contactnumber: '',
          email: '',
          userType: '',
          qualification: '',
          institute_company: '',
          project_idea: '',
          problem_solve: '',
          benefit_idea: '',
          idea_success: '',
          summary: '',
        });
        setFile(null);
        setFileName('');
      } else {
        setMessage(result.error || 'Something went wrong!');
      }
    } catch (error) {
      setMessage('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className=" bg-white md:px-12 lg:px-0 py-3 ">
        <Form
          onSubmit={handleSubmit}
          className="flex flex-col  max-w-[712px] mx-auto sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-4xl mx-auto text-sm sm:text-lg md:text-lg xl:text-lg xl-leading-7 2xl:leading-10 2xl:text-2xl"
        >
          <div className="mb-4">
            <Form.Control
              style={{
                borderRadius: '11.55px',
                border: '0.2px solid rgba(10, 10, 10, 0.82)',
                height: '53.4px',
              }}
              onFocus={e => {
                e.target.style.borderColor = 'rgba(10, 10, 10, 0.82)';
                e.target.style.boxShadow =
                  '0 0 0 0.2rem rgba(131, 133, 134, 0.25)';
              }}
              onBlur={e => {
                e.target.style.borderColor = 'rgba(10, 10, 10, 0.82)';
                e.target.style.boxShadow = 'none';
              }}
              type="text"
              id="fullname"
              placeholder="Full Name"
              className="rounded-lg placeholder-black p-3 place"
              value={formData.fullname}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <Form.Control
              style={{
                borderRadius: '11.55px',
                border: '0.2px solid rgba(10, 10, 10, 0.82)',
                height: '53.4px',
              }}
              onFocus={e => {
                e.target.style.borderColor = 'rgba(10, 10, 10, 0.82)';
                e.target.style.boxShadow =
                  '0 0 0 0.2rem rgba(131, 133, 134, 0.25)';
              }}
              onBlur={e => {
                e.target.style.borderColor = 'rgba(10, 10, 10, 0.82)';
                e.target.style.boxShadow = 'none';
              }}
              type="tel"
              id="contactnumber"
              placeholder="Contact Number"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              value={formData.contactnumber}
              onChange={handleChange}
              className="border-black text-black placeholder-black p-3 place"
              required
            />
          </div>

          <div className="mb-4">
            <Form.Control
              style={{
                borderRadius: '11.55px',
                border: '0.2px solid rgba(10, 10, 10, 0.82)',
                height: '53.4px',
              }}
              onFocus={e => {
                e.target.style.borderColor = 'rgba(10, 10, 10, 0.82)';
                e.target.style.boxShadow =
                  '0 0 0 0.2rem rgba(131, 133, 134, 0.25)';
              }}
              onBlur={e => {
                e.target.style.borderColor = 'rgba(10, 10, 10, 0.82)';
                e.target.style.boxShadow = 'none';
              }}
              type="email"
              id="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="  border-black text-black placeholder-[#0A0A0A] p-3 place"
              required
            />
          </div>

          <div className="mb-4">
            <div className="flex px-2 justify-between mr-0 lg:mr-96">
              {['Student', 'Fresher', 'Working'].map(option => (
                <label key={option} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="userType"
                    value={option}
                    checked={formData.userType === option}
                    onChange={handleRadioChange}
                    required
                  />
                  <span className="text-sm text-[#0A0A0A]">{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <Form.Select
              id="qualification"
              className=" p-3  placeholder-black place"
              style={{
                border: '0.2px solid rgba(10, 10, 10, 0.82)',
                borderRadius: '11.55px',
                color: 'rgba(0, 0, 0, 0.985)',
                height: '53.4px',
              }}
              onFocus={e => {
                e.target.style.borderColor = 'rgba(10, 10, 10, 0.82)';
                e.target.style.boxShadow =
                  '0 0 0 0.2rem rgba(131, 133, 134, 0.25)';
              }}
              onBlur={e => {
                e.target.style.borderColor = 'rgba(10, 10, 10, 0.82)';
                e.target.style.boxShadow = 'none';
              }}
              value={formData.qualification}
              onChange={handleChange}
              required
            >
              <option value="" disabled selected>
                Qualification{' '}
              </option>
              <option value="MCA">MCA</option>
              <option value="MBA">MBA</option>
              <option value="Bcom">Bcom</option>
              <option value="Btech">BTech</option>
              <option value="Other">Other</option>
            </Form.Select>
          </div>

          <div className="mb-4 overflow-x-auto">
            <Form.Select
              id="institute_company"
              className=" p-3 max-w-full  placeholder-black place"
              style={{
                border: '0.2px solid rgba(10, 10, 10, 0.82)',
                borderRadius: '11.55px',
                color: 'rgba(0, 0, 0, 0.985)',
                height: '53.4px',
              }}
              onFocus={e => {
                e.target.style.borderColor = 'rgba(10, 10, 10, 0.82)';
                e.target.style.boxShadow =
                  '0 0 0 0.2rem rgba(131, 133, 134, 0.25)';
              }}
              onBlur={e => {
                e.target.style.borderColor = 'rgba(10, 10, 10, 0.82)';
                e.target.style.boxShadow = 'none';
              }}
              value={formData.institute_company}
              onChange={handleChange}
              required
            >
              <option value="" disabled selected>
                Institute/Company Name
              </option>
              <option value="socialMedia">Social Media</option>
              <option value="searchEngine">Search Engine</option>
              <option value="friendFamily">Friend or Family</option>
              <option value="advertisement">Advertisement</option>
              <option value="other">Other</option>
            </Form.Select>
          </div>

          {/* <div className="mb-4">
            <Form.Control
              style={{
                borderRadius: '11.55px',
                border: '0.2px solid rgba(10, 10, 10, 0.82)',
                height: '53.4px',
              }}
              onFocus={e => {
                e.target.style.borderColor = 'rgba(10, 10, 10, 0.82)';
                e.target.style.boxShadow =
                  '0 0 0 0.2rem rgba(131, 133, 134, 0.25)';
              }}
              onBlur={e => {
                e.target.style.borderColor = 'rgba(10, 10, 10, 0.82)';
                e.target.style.boxShadow = 'none';
              }}
              type="text"
              id="project_idea"
              placeholder="Project/Idea Name"
              className="  border-black text-black placeholder-black p-3 place"
            />
          </div>

          <div className="mb-4">
            <Form.Control
              style={{
                borderRadius: '11.55px',
                border: '0.2px solid rgba(10, 10, 10, 0.82)',
                height: '53.4px',
              }}
              onFocus={e => {
                e.target.style.borderColor = 'rgba(10, 10, 10, 0.82)';
                e.target.style.boxShadow =
                  '0 0 0 0.2rem rgba(131, 133, 134, 0.25)';
              }}
              onBlur={e => {
                e.target.style.borderColor = 'rgba(10, 10, 10, 0.82)';
                e.target.style.boxShadow = 'none';
              }}
              type="text"
              id="problem_solve"
              placeholder="What problem does your Idea Solve?"
              className="  border-black text-black placeholder-black p-3 place"
            />
          </div>

          <div className="mb-4">
            <Form.Control
              style={{
                borderRadius: '11.55px',
                border: '0.2px solid rgba(10, 10, 10, 0.82)',
                height: '53.4px',
              }}
              onFocus={e => {
                e.target.style.borderColor = 'rgba(10, 10, 10, 0.82)';
                e.target.style.boxShadow =
                  '0 0 0 0.2rem rgba(131, 133, 134, 0.25)';
              }}
              onBlur={e => {
                e.target.style.borderColor = 'rgba(10, 10, 10, 0.82)';
                e.target.style.boxShadow = 'none';
              }}
              type="text"
              id="benefit_idea"
              placeholder="Who would benefit from this idea?"
              className="  border-black text-black placeholder-black p-3 place"
            />
          </div>

          <div className="mb-4">
            <Form.Control
              style={{
                borderRadius: '11.55px',
                border: '0.2px solid rgba(10, 10, 10, 0.82)',
                height: '53.4px',
              }}
              onFocus={e => {
                e.target.style.borderColor = 'rgba(10, 10, 10, 0.82)';
                e.target.style.boxShadow =
                  '0 0 0 0.2rem rgba(131, 133, 134, 0.25)';
              }}
              onBlur={e => {
                e.target.style.borderColor = 'rgba(10, 10, 10, 0.82)';
                e.target.style.boxShadow = 'none';
              }}
              type="text"
              id="idea_success"
              placeholder="Why do you think this idea will succeed?"
              className="  border-black text-black placeholder-black p-3 place"
            />
          </div> */}
          {/* Text Fields */}
          {[
            'project_idea/Idea Name',
            'What Problem Does Your Idea Solve?',
            'Who would benefit from this idea?',
            'Why Do You Think This Idea Will Succeed?',
            'Do You Have Any Business or Technical Skills?',
          ].map(field => (
            <div key={field} className="mb-4">
              <Form.Control
                type="text"
                id={field}
                placeholder={field.replace('_', ' ')}
                value={formData[field]}
                onChange={handleChange}
                className="  border-black text-black placeholder-black p-3 place"
                style={{
                  borderRadius: '11.55px',
                  border: '0.2px solid rgba(10, 10, 10, 0.82)',
                  height: '53.4px',
                }}
                onFocus={e => {
                  e.target.style.borderColor = 'rgba(10, 10, 10, 0.82)';
                  e.target.style.boxShadow =
                    '0 0 0 0.2rem rgba(131, 133, 134, 0.25)';
                }}
                onBlur={e => {
                  e.target.style.borderColor = 'rgba(10, 10, 10, 0.82)';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>
          ))}

          {/* <div className="mb-4">
            <Form.Control
              style={{
                borderRadius: '11.55px',
                border: '0.2px solid rgba(10, 10, 10, 0.82)',
                height: '53.4px',
              }}
              onFocus={e => {
                e.target.style.borderColor = 'rgba(10, 10, 10, 0.82)';
                e.target.style.boxShadow =
                  '0 0 0 0.2rem rgba(131, 133, 134, 0.25)';
              }}
              onBlur={e => {
                e.target.style.borderColor = 'rgba(10, 10, 10, 0.82)';
                e.target.style.boxShadow = 'none';
              }}
              type="text"
              id="message"
              placeholder="Do you have any business or teachnical skills?"
              className="  border-black text-black placeholder-black p-3 place"
            />
          </div> */}

          <div className="mb-4">
            <Form.Control
              style={{
                borderRadius: '11.55px',
                border: '0.2px solid rgba(10, 10, 10, 0.82)',
                height: '150px',
              }}
              onFocus={e => {
                e.target.style.borderColor = 'rgba(10, 10, 10, 0.82)';
                e.target.style.boxShadow =
                  '0 0 0 0.2rem rgba(131, 133, 134, 0.25)';
              }}
              onBlur={e => {
                e.target.style.borderColor = 'rgba(10, 10, 10, 0.82)';
                e.target.style.boxShadow = 'none';
              }}
              as="textarea"
              id="summarize"
              value={formData.summary}
              onChange={handleChange}
              placeholder="Summarize your project Ideas"
              className="  border-red text-black placeholder-black p-3 place"
            />
          </div>

          <div className="flex flex-col items-center mediaUploadDiv">
            <input
              type="file"
              id="fileInput"
              className="hidden"
              onChange={handleFileChange}
            />
            <label
              htmlFor="fileInput"
              className="flex items-center justify-center text-[#FF9D00] rounded-lg px-2 py-3 cursor-pointer xl:text-lg custom-file-label"
              style={{ border: '1px solid #FF9D00' }}
            >
              {fileName ? (
                <>
                  <span>{fileName}</span>
                  <button
                    onClick={handleRemoveFile}
                    className="ml-2 text-red-500 hover:text-red-700"
                  >
                    ✕
                  </button>
                </>
              ) : (
                <>
                  <p className="mb-0 font-semibold">
                    Upload Supporting Documents or Files
                  </p>
                  <GoUpload className="inline-block mx-1.5" />
                </>
              )}
              {/* Message Display */}
              {message && (
                <p className="mt-4 text-center text-red-500">{message}</p>
              )}
            </label>
          </div>

          <div className="flex justify-center items-center mt-3">
            <input
              type="checkbox"
              id="terms"
              className="form-checkbox border-gray-300"
              required
            />
            <label htmlFor="terms" className="text-sm">
              <Link
                to="/termsconditions-submit-new-project"
                className="text-[#212529] items-center text-[14px] no-underline mx-2 cursor-pointor"
              >
                Agreement to Terms & Conditions
              </Link>
              <span className="text-[12px] learnMore">Learn more</span>
            </label>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="mt-4 transform hover:scale-105 hover:bg-blue-700 bg-gradient-to-r from-[#FFC100] to-[#FF9D00] px-16 py-2 rounded-md font-bold text-white"
            >
              Submit
            </button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default FormNewProject;
