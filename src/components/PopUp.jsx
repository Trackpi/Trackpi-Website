import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function PopUp() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 45000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
            <Modal.Title className="w-100 text-center fw-bold">Connect With Us</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer> */}
      </Modal>
    </div>
  );
}

export default PopUp;
