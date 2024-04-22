import React, { useState } from 'react'
import { Card, Modal } from 'react-bootstrap'


function VidioCard() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
        <Card >
      <Card.Img onClick={handleShow} variant="top" style={{height:"180px"}} src="https://pixlr.com/images/index/ai-image-generator-one.webp" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          <p>Coption</p>
          <button className='btn'><i class="fa-solid fa-trash"></i></button>
        </Card.Text>
      </Card.Body>
    </Card>

     <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Caption</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="400" src="https://www.youtube.com/embed/cen0rBKLuYE "  referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default VidioCard