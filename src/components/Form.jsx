import FloatingLabel from 'react-bootstrap/FloatingLabel';
//import { Row, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';


function Details() {
  return (
    <div className="w-full mx-auto px-4">
    <Form  className="flex flex-col max-w-full sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-4xl mx-auto text-sm sm:text-lg md:text-lg xl:text-lg xl-leading-7 2xl:leading-10 2xl:text-2xl ">
    
      <FloatingLabel controlId="floatingInput" label="Full Name" r className="mb-3">
        <Form.Control
          type="text"
          id='fullname'
          placeholder=""
          className="bg-transparent border "
          required
        />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        
        label=" Contact Number"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        className="mb-3"
      >
        <Form.Control
          type="tel"
          id='contactnumber'
          placeholder="123-456-7890"
          className="bg-transparent border "
          required
        />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput"
        label=" Email address"
        className="mb-3"
      >
        <Form.Control
          type="email"
          id='email'
          placeholder="name@example.com"
          className="bg-transparent border"
          required
        />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput"
        label=" Where Are You Located? "
        className="mb-3"
      >
        <Form.Control
          type="text"
          id='location'
          placeholder=""
          className="bg-transparent border"
          required
        />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput"
        // label="How Did You Hear About Us?"
        className="mb-3"
      >
          <Form.Select
            className="bg-transparent border w-full text-black  "
            style={{
              fontSize: "inherit",
              borderRadius: "0.35rem", // Match border radius
              height:"76px",
              appearance: "none", // Standardize appearance across browsers
              WebkitAppearance: "none", // Specific for Safari
              MozAppearance: "none", // Specific for Firefox
            }}
            required
          >
          <option value=""  disabled selected >How Did You Hear About Us?</option>
          <option value="socialMedia" >Social Media</option>
          <option  value="searchEngine" >Search Engine</option>
          <option  value="friendFamily" >Friend or Family</option>
          <option value="advertisement">Advertisement</option>
          <option value="other" >Other</option>
        </Form.Select>
      </FloatingLabel>

      <FloatingLabel controlId="floatingTextarea" label="Message">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          id='message'
          style={{ height: '150px' }}
          className="bg-transparent mb-3 border"
        />
      </FloatingLabel>

      <div className="text-center ">
      <button
            type="submit"
            className="mt-3 transform hover:scale-105 hover:bg-blue-700 bg-gradient-to-r from-[#FF9D00] via-[#FFC100] to-[#FF9D00]  px-6 py-2 rounded-md font-semibold text-black "
      > Submit
      </button>
       </div>
<div className='pt-3 mb-5 '>
        <h6 className="text-center text-sm sm:text-lg md:text-xl xl:text-lg xl-leading-7 2xl:leading-10 2xl:text-xl">
          Or email hello@trackpi.com to get in touch with our team.
        </h6>
        </div>
    </Form>
    </div>
  );
}

export default Details;
