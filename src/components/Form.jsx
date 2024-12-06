
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import {Row,Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'


function Details(){
    
    return(
        <Form className='flex flex-col'>
              <FloatingLabel
                controlId="floatingInput"
                label=" Name" r
                className="mb-3"
                
              >
                <Form.Control type="text" placeholder="" className="bg-transparent border border-black" required/>
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label=" Contact Number"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
                className="mb-3"
                
              >
                <Form.Control type="tel" placeholder="123-456-7890" className="bg-transparent border border-black" required />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label=" Email address"
                className="mb-3"
                
              >
                <Form.Control type="email" placeholder="name@example.com" className="bg-transparent border border-black" required />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label=" Where Are You Located? "
                className="mb-3"
              >
                <Form.Control type="text" placeholder="" className="bg-transparent border border-black" required/>
              </FloatingLabel>

              

              <FloatingLabel
                controlId="floatingInput"
                // label="How Did You Hear About Us?"
                className="mb-3"
              >
                 <Form.Select  
                 className="bg-transparent border border-black   " 
                 style={{ padding:'15px' ,  outline: 'none',
                    transition: 'border-color 0.3s ease-in-out',                           
                  }}  
                 
                  
                                           
                 
                 required >
                      <option value="">How Did You Hear About Us?</option>
                      <option value="socialMedia">Social Media</option>
                      <option value="searchEngine">Search Engine</option>
                      <option value="friendFamily">Friend or Family</option>
                      <option value="advertisement">Advertisement</option>
                      <option value="other">Other</option>
                  </Form.Select>
              </FloatingLabel>

              <FloatingLabel controlId="floatingTextarea" label="Message">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: '150px' }}
                  className="bg-transparent mb-3 border border-black"
                />
              </FloatingLabel>

              <Row className='flex flex-col items-center gap-5 mt-5 mb-5'>

                <Button type='submit' className='bg-black mb- p-3 rounded-pill w-50 text-yellow-300 btn md:btn-lg'>
                  CONNECT WITH US
                </Button>

                <h6 className='text-center'>Or email hello@trackpi.com to get in touch with our team.</h6>
              </Row>

            </Form>


    );
}

export default Details;