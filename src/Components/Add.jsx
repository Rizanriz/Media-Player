import React, { useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap'


function Add() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className='d-flex p-5'>
        <h5>Upload new vidio</h5>
        <button className='btn bg-warning rounded-circle ms-3 fw-bolder' onClick={handleShow}>+</button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Vidio Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <FloatingLabel
              controlId="floatingInput" label="Email address" className="mb-3">   <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput" label="Email address" className="mb-3">   <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput" label="Email address" className="mb-3">   <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add