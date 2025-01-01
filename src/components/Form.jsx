import Form from 'react-bootstrap/Form';
import "../pages/connect.css";

function Details() {
  return (
    <div className=" w-full mx-auto md:px-4">
      <Form className="flex flex-col  max-w-[712px] mx-auto sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-4xl mx-auto text-sm sm:text-lg md:text-lg xl:text-lg xl-leading-7 2xl:leading-10 2xl:text-2xl">
        <div className="mb-3  flex justify-center  items-center">
          <Form.Control

           
          style={{
                 outline: 'rgb(187, 190, 192)',
                 border: '0.89px solid  #0A0A0ACC',
                 height:'53.4px',
                 width: '100%',
                 maxWidth: '712px',
                 color:'rgba(0, 0, 0, 0.74)',
                        
                      }}
                      onFocus={e => {
                        e.target.style.borderColor = 'black';
                        e.target.style.boxShadow = '0 0 1px black';
                      
                      }}
                      onBlur={e => {
                        e.target.style.borderColor = '#0A0A0ACC'; // Default border color on blur
                        e.target.style.boxShadow = 'none';
                        
                      }}


            type="text"
            id="fullname"
            placeholder="Full Name"
            className="bg-white   text-black placeholder-black p-3 place"
            required
          />
        </div>

        <div className="mb-3 flex justify-center items-center">
          <Form.Control

           style={{
            outline: 'rgb(187, 190, 192)',
            height:'53.4px',
             border: '0.89px solid  #0A0A0ACC',
                width: '100%',
                maxWidth: '712px',
                color:'rgba(0, 0, 0, 0.74)',
            
            
          }}
          onFocus={e => {
            e.target.style.borderColor = 'black';
            e.target.style.boxShadow = '0 0 1px black';
          }}
          onBlur={e => {
            e.target.style.borderColor = '#0A0A0ACC'; // Default border color on blur
            e.target.style.boxShadow = 'none';
          }}


            type="tel"
            id="contactnumber"
            placeholder="Contact Number"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            className="bg-white   text-black placeholder-black p-3 place"
            required
          />
        </div>

        <div className="mb-3 flex justify-center items-center">
          <Form.Control

           style={{
            outline: 'rgb(187, 190, 192)',
            height:'53.4px',
            border: '0.89px solid  #0A0A0ACC',
                width: '100%',
                maxWidth: '712px',
                color:'rgba(0, 0, 0, 0.74)',
            
          }}
          onFocus={e => {
            e.target.style.borderColor = 'black';
            e.target.style.boxShadow = '0 0 1px black';
          }}
          onBlur={e => {
            e.target.style.borderColor = '#0A0A0ACC'; // Default border color on blur
            e.target.style.boxShadow = 'none';
          }}


            type="email"
            id="email"
            placeholder="Email"
            className="bg-white   text-black placeholder-black p-3 place"
            required
          />
        </div>

        <div className="mb-3 flex justify-center items-center">
          <Form.Control

           style={{
            outline: 'rgb(187, 190, 192)',
            height:'53.4px',
            border: '0.89px solid  #0A0A0ACC',
            width: '100%',
            maxWidth: '712px',
            color:'rgba(0, 0, 0, 0.74)',
            
          }}
          onFocus={e => {
            e.target.style.borderColor = 'black';
            e.target.style.boxShadow = '0 0 1px black';
          }}
          onBlur={e => {
            e.target.style.borderColor = '#0A0A0ACC'; // Default border color on blur
                e.target.style.boxShadow = 'none';
          }}

            
            type="text"
            id="location"
            placeholder="Where Are You Located?"
            className="bg-white text-black placeholder-black p-3 place"
            required
          />
        </div>

        <div className="mb-3 flex justify-center items-center">
          <Form.Select
            id="howDidYouHear"
           
            className="bg-white   placeholder-black p-3 place"
            
            style={{
              
              borderRadius: "0.35rem",
              outline: 'rgb(187, 190, 192)',
              height:'53.4px',
                border: '0.89px solid  #0A0A0ACC',
                width: '100%',
                maxWidth: '712px',
                color: 'rgba(10, 10, 10, 0.82)',
    
            }}
            // style={{
            //   border: '0.2px solid rgba(10, 10, 10, 0.82)',
            //   borderRadius: '0.35rem',
            //   color: 'rgba(170, 167, 167, 0.82)',
            //   width: '100%',
            //   maxWidth: '712px',
            // }}
            onFocus={e => {
              e.target.style.borderColor = 'black';
              e.target.style.boxShadow = '0 0 1px black';

            }}
            onBlur={e => {
              e.target.style.borderColor = '#0A0A0ACC'; // Default border color on blur
              e.target.style.boxShadow = 'none';
            }}
            required
          >
            <option value="" disabled selected hidden >
            How Did You Hear About Us?
            </option>
            <option value="socialMedia" >Social Media</option>
            <option value="searchEngine">Search Engine</option>
            <option value="friendFamily">Friend or Family</option>
            <option value="advertisement">Advertisement</option>
            <option value="other">Other</option>
          </Form.Select>
        </div>

        <div className="mb-3 flex justify-center items-center ">
          <Form.Control

           style={{
            outline: 'rgb(187, 190, 192)',
            border: '0.89px solid  #0A0A0ACC',
               
                width: '100%',
                maxWidth: '712px',
                color:'rgba(0, 0, 0, 0.74)',
            height: '150px'
          }}
          onFocus={e => {
            e.target.style.borderColor = 'black';
            e.target.style.boxShadow = '0 0 1px black';
          }}
          onBlur={e => {
            e.target.style.borderColor = '#0A0A0ACC'; // Default border color on blur
                e.target.style.boxShadow = 'none';

            }}
            as="textarea"
            id="message"
            placeholder="Message"


            
            className="bg-white   text-black placeholder-black p-3 place"

        


          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className=" mt-3 text-white transform hover:scale-105 hover:bg-blue-700 bg-gradient-to-r from-[#FF9D00] via-[#FFC100] to-[#FF9D00] px-8 py-2 rounded-md md:font-semibold md:text-black"
          >
            Submit
          </button>
        </div>

        <div className="pt-3 mb-5">
          <h6 className="team text-center text-sm  md:text-xl xl:text-lg xl-leading-7 2xl:leading-10 2xl:text-xl">
            Or email <span className='connect-text-Color'>hello@trackpi.com </span> to get in touch with our team.
          </h6>
        </div>
      </Form>
    </div>
  );
}

export default Details;
