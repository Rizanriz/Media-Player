import React, { useState } from 'react'
import { Card, Modal } from 'react-bootstrap'


function VidioCard({ displayData }) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card>
        <Card.Img onClick={handleShow} variant="top" style={{ height: "220px" }} src={displayData?.imgURL} />
        <Card.Body>
          <Card.Title className='text-center fw-bold text-success'>{displayData?.caption}</Card.Title>
          <Card.Text className='text-center'>
            <button className='btn'><i class="fa-solid fa-trash text-danger"></i></button>
          </Card.Text>
        </Card.Body>
      </Card>
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <iframe width="100%" height="400" src={`${displayData?.youtubeURL}?autoplay=1`} referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default VidioCard