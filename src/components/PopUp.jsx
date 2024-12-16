import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import "./popup.css";

import Details from "./Form";


function PopUp() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true);
        }, 60000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <Modal dialogClassName="custom-modal" show={show} onHide={handleClose} size="md" centered>
                <Modal.Header closeButton>
                    <Modal.Title className="w-100 text-center fw-bold">Connect With Us  </Modal.Title>
                 
                </Modal.Header>

                <Modal.Body>
                
                    <Details/>
                      {/* <form>
                        <div className="form-group popup_form text-center">
                            <input required type="text" className="form-control" placeholder="Name" />
                            <input required type="number" className="form-control" placeholder="Contact Number" />
                            <input required type="email" className="form-control" placeholder="Email Address" />
                            <input required type="password" className="form-control" placeholder="Where Are You Located" />
                            <select className="form-select custom-select" id="floatingInput" required>
                                <option value="" selected>
                                    How Did You Hear About Us?
                                </option>
                                <option value="socialMedia">Social Media</option>
                                <option value="searchEngine">Search Engine</option>
                                <option value="friendFamily">Friend or Family</option>
                                <option value="advertisement">Advertisement</option>
                                <option value="other">Other</option>
                            </select>

                            <textarea required type="password" className="form-control" placeholder="Message" />
                            <div className="text-center">
      <button
            type="submit"
            className="mt-3 transform hover:scale-105 hover:bg-blue-700 bg-gradient-to-r from-amber-200 via-amber-500 to-yellow-300 px-6 py-2 rounded-md font-semibold text-black"
      > Submit
      </button>
      <div className='pt-3 mb-5'>
        <h6 className="text-center">
          Or email hello@trackpi.com to get in touch with our team.
        </h6>
        </div>
       </div>
                        </div>
                    </form>   */}
                </Modal.Body>
               
            </Modal>
        </div>
    );
}

export default PopUp;
