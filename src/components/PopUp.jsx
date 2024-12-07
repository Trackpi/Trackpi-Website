import React, { useEffect, useState } from 'react';
// import { Form } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from "../components/Form"
function PopUp() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 25000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title className="w-100 text-center fw-bold">
            Connect With Us
          </Modal.Title>
        </Modal.Header>

        <Modal.Body></Modal.Body>
        <Form />
      </Modal>
    </div>
  );
}

export default PopUp;
