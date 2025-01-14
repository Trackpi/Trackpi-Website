import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { GoUpload } from 'react-icons/go';
import { Link } from 'react-router-dom';

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
    <>
      <div className=" bg-white md:px-12 lg:px-0 py-3 ">
        <Form className="flex flex-col  max-w-[712px] mx-auto sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-4xl mx-auto text-sm sm:text-lg md:text-lg xl:text-lg xl-leading-7 2xl:leading-10 2xl:text-2xl">
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
              className="  border-black text-black placeholder-[#0A0A0A] p-3 place"
              required
            />
          </div>

          <div className="mb-4">
            <div className="flex px-2 justify-between mr-0 lg:mr-96">
              <label className="flex items-center space-x-2 text-[#0A0A0A] text-opacity-70">
                <input
                  type="radio"
                  name="options"
                  value="Student"
                  className="form-radio h-5 w-5 text-black checked:bg-black  focus:ring-black "
                />
                <span className="text-sm text-[#0A0A0A]">Student</span>
              </label>
              <label className="flex items-center space-x-2 text-[#0A0A0A] text-opacity-70">
                <input
                  type="radio"
                  name="options"
                  value="Fresher"
                  className="form-radio h-5 w-5 text-black checked:bg-black focus:ring-black"
                />
                <span className="text-sm text-[#0A0A0A]">Fresher</span>
              </label>
              <label className="flex items-center space-x-2 text-[#0A0A0A] text-opacity-70">
                <input
                  type="radio"
                  name="options"
                  value="Working"
                  className="form-radio h-5 w-5 text-black checked:bg-black focus:ring-black"
                />
                <span className="text-sm text-[#0A0A0A]">Working</span>
              </label>
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
              required
            >
              <option value="" disabled selected>
                Qualification{' '}
              </option>
              <option value="socialMedia">MCA</option>
              <option value="searchEngine">MBA</option>
              <option value="friendFamily">Bcom</option>
              <option value="advertisement">BTech</option>
              <option value="other">Other</option>
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
              id="message"
              placeholder="Do you have any business or teachnical skills?"
              className="  border-black text-black placeholder-black p-3 place"
            />
          </div>

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
                  <p className='mb-0 font-semibold'>Upload Supporting Documents or Files</p>
                  <GoUpload className="inline-block mx-1.5" />
                </>
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
