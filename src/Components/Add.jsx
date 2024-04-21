import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'


function Add() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
       <div className='d-flex p-5'>
        <h5>Upload new vidio</h5>
        <button className='btn bg-warning rounded-circle ms-3 fw-bolder'  onClick={handleShow}>+</button>
    </div>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Vidio Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>Please fill the following detail</p>
            <input className='w-100 mt-2' type="text" placeholder='' form-control />
            <input className='w-100 mt-2 ' type="text" placeholder='' />
            <input className='w-100 mt-2' type="text" placeholder='' />
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