import React, { useState } from 'react'
import { Card, Modal } from 'react-bootstrap'


function VidioCard() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
        <Card >
      <Card.Img onClick={handleShow} variant="top" style={{height:"180px"}} src="https://upload.wikimedia.org/wikipedia/en/4/4c/Deadpool_%26_Wolverine_poster.jpg" />
      <Card.Body>
        <Card.Title>Caption</Card.Title>
        <Card.Text>
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