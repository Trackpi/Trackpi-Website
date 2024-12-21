import React, { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
//import { Row, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { GoUpload } from 'react-icons/go';

const FormNewProject = () => {
  const [fileName, setFileName] = useState('');


    // Handle file selection
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
          setFileName(file.name);
        }
      };
    
      // Handle file removal
      const handleRemoveFile = () => {
        setFileName(null);
        document.getElementById('fileInput').value = ''; // Reset the input value
      };
  return (
    <div className="w-full mx-auto px-4">
      <Form className="flex flex-col max-w-full sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-4xl mx-auto text-sm sm:text-lg md:text-lg xl:text-lg xl-leading-7 2xl:leading-10 2xl:text-2xl ">
        <FloatingLabel label="Full Name" className="mb-3">
          <Form.Control
            type="text"
            id="fullname"
            placeholder=""
            className="bg-transparent border "
            required
          />
        </FloatingLabel>
        <FloatingLabel
          label=" Contact Number"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          className="mb-3"
        >
          <Form.Control
            type="tel"
            id="contactnumber"
            placeholder="123-456-7890"
            className="bg-transparent border "
            required
          />
        </FloatingLabel>

        <FloatingLabel label=" Email address" className="mb-3">
          <Form.Control
            type="email"
            id="email"
            placeholder="name@example.com"
            className="bg-transparent border"
            required
          />
        </FloatingLabel>

        <FloatingLabel label="Project/Idea Name " className="mb-3">
          <Form.Control
            type="text"
            id="Project_name"
            placeholder=""
            className="bg-transparent border"
            required
          />
        </FloatingLabel>
        <FloatingLabel
          label="What Problem Does Your Idea Solve?"
          className="mb-3"
        >
          <Form.Control
            type="text"
            id="problem_idea"
            placeholder=""
            className="bg-transparent border"
            required
          />
        </FloatingLabel>

        <FloatingLabel
          label="What would benefit from this idea?"
          className="mb-3"
        >
          <Form.Control
            type="text"
            id="idea_benefit"
            placeholder=""
            className="bg-transparent border"
            required
          />
        </FloatingLabel>
        <FloatingLabel
          label="Why Do You Think This Idea Will Succeed?"
          className="mb-3"
        >
          <Form.Control
            type="text"
            id="thought_ideaSuccess"
            placeholder=""
            className="bg-transparent border"
            required
          />
        </FloatingLabel>
        <FloatingLabel
          label="Do You Have Any Business or Technical Skills ? "
          className="mb-3"
        >
          <Form.Control
            type="text"
            id="technical_skills"
            placeholder=""
            className="bg-transparent border"
            required
          />
        </FloatingLabel>

        <FloatingLabel label="Summarize your project Ideas.">
          <Form.Control
            as="textarea"
            placeholder="Summarize your project Ideas."
            id="projectIdeas"
            style={{ height: '150px' }}
            className="bg-transparent mb-3 border"
          />
        </FloatingLabel>
        {/* <div className="flex flex-col items-center p-2 rounded-md">
          <input
            type="file"
            id="fileInput"
            className="hidden"
            onChange={handleFileChange}
          />
          <label
            for="fileInput"
            className="text-[#FF9D00] rounded px-4 py-2"
            style={{ border: '1px solid #FF9D00' }}
          >
            Upload Supporting Documents or Files{' '}
            <GoUpload className="inline-block mx-2 items" />{' '}
          </label>
          {fileName && (
            <p className="mt-2 text-gray-700">Uploaded File: {fileName}</p>
          )}{' '}
        </div> */}
          <div className="flex flex-col items-center p-4 rounded-md">
      {/* Hidden File Input */}
      <input
        type="file"
        id="fileInput"
        className="hidden"
        onChange={handleFileChange}
      />

      {/* Label for File Upload */}
      <label
        htmlFor="fileInput"
        className="flex items-center justify-center text-[#FF9D00] rounded px-4 py-2 cursor-pointer"
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
            Upload Supporting Documents or Files
            <GoUpload className="inline-block mx-2" />
          </>
        )}
      </label>
    </div>

        <div className="flex justify-center items-center mt-3">
          <input
            type="checkbox"
            id="terms"
            className="form-checkbox border-gray-300 mx-2"
            required
          />
          <label htmlFor="terms" className="text-sm">
            Agreement to Terms & Conditions{' '}
            <a
              href="#"
              className="text-[#212529]  items-center text-[12px] no-underline mx-2"
            >
              Learn more
            </a>
          </label>
        </div>
        <div className="text-center ">
          <button
            type="submit"
            className="mt-4 transform hover:scale-105 hover:bg-blue-700 bg-gradient-to-r from-[#FFC100]  to-[#FF9D00]  px-12 py-2 rounded-md font-semibold text-white "
          >
            {' '}
            Submit
          </button>
        </div>
      </Form>
    </div>
  );
};

export default FormNewProject;
