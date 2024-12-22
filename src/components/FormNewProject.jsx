import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { GoUpload } from 'react-icons/go';

const FormNewProject = () => {
  const [fileName, setFileName] = useState('');

  // Handle file selection
  const handleFileChange = event => {
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
        {' '}
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            id="fullname"
            placeholder="Full Name"
            className="bg-transparent border border-gray-300 p-2 focus:border-[#FF9D00] focus:ring-[#FF9D00]"
            required
            style={{
                outline: 'rgb(187, 190, 192)',
                border: '2px solid rgb(187, 190, 192)',
              }}
              onFocus={e => {
                e.target.style.borderColor = '#FF9D00';
                e.target.style.boxShadow = '0 0 4px rgb(20, 20, 20)';
              }}
              onBlur={e => {
                e.target.style.borderColor = '#ced4da'; // Default border color on blur
                e.target.style.boxShadow = 'none';
              }}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="tel"
            id="contactnumber"
            placeholder="Contact Number"
            className="bg-transparent border border-gray-300 p-2"
            required
            style={{
                outline: 'rgb(187, 190, 192)',
                border: '2px solid rgb(187, 190, 192)',
              }}
              onFocus={e => {
                e.target.style.borderColor = '#FF9D00';
                e.target.style.boxShadow = '0 0 4px rgb(20, 20, 20)';
              }}
              onBlur={e => {
                e.target.style.borderColor = '#ced4da'; // Default border color on blur
                e.target.style.boxShadow = 'none';
              }}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="email"
            id="email"
            placeholder="Email Address"
            className="bg-transparent border border-gray-300 p-2"
            required
            style={{
              outline: 'rgb(187, 190, 192)',
              border: '2px solid rgb(187, 190, 192)',
            }}
            onFocus={e => {
              e.target.style.borderColor = '#FF9D00';
              e.target.style.boxShadow = '0 0 4px rgb(20, 20, 20)';
            }}
            onBlur={e => {
              e.target.style.borderColor = '#ced4da'; // Default border color on blur
              e.target.style.boxShadow = 'none';
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            id="project_name"
            placeholder="Project/Idea Name"
            className="bg-transparent border border-gray-300 p-2"
            required
            style={{
                outline: 'rgb(187, 190, 192)',
                border: '2px solid rgb(187, 190, 192)',
              }}
              onFocus={e => {
                e.target.style.borderColor = '#FF9D00';
                e.target.style.boxShadow = '0 0 4px rgb(20, 20, 20)';
              }}
              onBlur={e => {
                e.target.style.borderColor = '#ced4da'; // Default border color on blur
                e.target.style.boxShadow = 'none';
              }}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            id="problem_idea"
            placeholder="What Problem Does Your Idea Solve?"
            className="bg-transparent border border-gray-300 p-2"
            required
            style={{
                outline: 'rgb(187, 190, 192)',
                border: '2px solid rgb(187, 190, 192)',
              }}
              onFocus={e => {
                e.target.style.borderColor = '#FF9D00';
                e.target.style.boxShadow = '0 0 4px rgb(20, 20, 20)';
              }}
              onBlur={e => {
                e.target.style.borderColor = '#ced4da'; // Default border color on blur
                e.target.style.boxShadow = 'none';
              }}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            id="idea_benefit"
            placeholder="Who Would Benefit from This Idea?"
            className="bg-transparent border border-gray-300 p-2"
            required
            style={{
                outline: 'rgb(187, 190, 192)',
                border: '2px solid rgb(187, 190, 192)',
              }}
              onFocus={e => {
                e.target.style.borderColor = '#FF9D00';
                e.target.style.boxShadow = '0 0 4px rgb(20, 20, 20)';
              }}
              onBlur={e => {
                e.target.style.borderColor = '#ced4da'; // Default border color on blur
                e.target.style.boxShadow = 'none';
              }}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            id="thought_ideaSuccess"
            placeholder="Why Do You Think This Idea Will Succeed?"
            className="bg-transparent border border-gray-300 p-2"
            required
            style={{
                outline: 'rgb(187, 190, 192)',
                border: '2px solid rgb(187, 190, 192)',
              }}
              onFocus={e => {
                e.target.style.borderColor = '#FF9D00';
                e.target.style.boxShadow = '0 0 4px rgb(20, 20, 20)';
              }}
              onBlur={e => {
                e.target.style.borderColor = '#ced4da'; // Default border color on blur
                e.target.style.boxShadow = 'none';
              }}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            id="technical_skills"
            placeholder="Do You Have Any Business or Technical Skills?"
            className="bg-transparent border border-gray-300 p-2"
            required
            style={{
                outline: 'rgb(187, 190, 192)',
                border: '2px solid rgb(187, 190, 192)',
              }}
              onFocus={e => {
                e.target.style.borderColor = '#FF9D00';
                e.target.style.boxShadow = '0 0 4px rgb(20, 20, 20)';
              }}
              onBlur={e => {
                e.target.style.borderColor = '#ced4da'; // Default border color on blur
                e.target.style.boxShadow = 'none';
              }}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            as="textarea"
            id="projectIdeas"
            placeholder="Summarize Your Project Ideas"
            className="bg-transparent border border-gray-300 p-2"
            style={{
                outline: 'rgb(187, 190, 192)',
                border: '2px solid rgb(187, 190, 192)',
                height: '100px'
              }}
              onFocus={e => {
                e.target.style.borderColor = '#FF9D00';
                e.target.style.boxShadow = '0 0 4px rgb(20, 20, 20)';
              }}
              onBlur={e => {
                e.target.style.borderColor = '#ced4da'; // Default border color on blur
                e.target.style.boxShadow = 'none';
              }}
              
          />
        </Form.Group>
        <div className="flex flex-col items-center p-4 rounded-md  ">
          <input
            type="file"
            id="fileInput"
            className="hidden"
            onChange={handleFileChange}
          />
          <label
            htmlFor="fileInput"
            className="flex items-center justify-center text-[#FF9D00] rounded px-4 py-2 cursor-pointer  xl:text-lg"
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
              className="text-[#212529] items-center text-[12px] no-underline mx-2"
            >
              Learn more
            </a>
          </label>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="mt-4 transform hover:scale-105 hover:bg-blue-700 bg-gradient-to-r from-[#FFC100] to-[#FF9D00] px-12 py-2 rounded-md font-semibold text-white"
          >
            Submit
          </button>
        </div>
      </Form>
    </div>
  );
};

export default FormNewProject;
