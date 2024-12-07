import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import "./popup.css";

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
                    <Modal.Title className="w-100 text-center fw-bold">Connect With Us</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <form>
                        <div class="form-group popup_form text-center">
                            <input required type="text" class="form-control" placeholder="Name" />
                            <input required type="number" class="form-control" placeholder="Contact Number" />
                            <input required type="email" class="form-control" placeholder="Email Address" />
                            <input required type="password" class="form-control" placeholder="Where Are You Located" />
                            <select class="form-select custom-select" id="floatingInput" required>
                                <option value="" selected>
                                    How Did You Hear About Us?
                                </option>
                                <option value="socialMedia">Social Media</option>
                                <option value="searchEngine">Search Engine</option>
                                <option value="friendFamily">Friend or Family</option>
                                <option value="advertisement">Advertisement</option>
                                <option value="other">Other</option>
                            </select>

                            <textarea required type="password" class="form-control" placeholder="Message" />
                            <button type="submit" class="btn px-5 rounded-pill  text-uppercase" >
                                Connect
                            </button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default PopUp;
