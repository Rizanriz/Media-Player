import React, { useState } from 'react'
import { Card, Modal } from 'react-bootstrap'
import { removeVidioAPI, saveHistoryAPI } from '../Services/allAPI';


function VidioCard({ displayData,setRemoveVidioRes,insideCategory }) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = async () =>{
    setShow(true);
    const {caption,youtubeURL} = displayData
    const Time = new Date()
    const formattedDate = Time.toLocaleString('en-US', { timeZoneName: 'short' });
    console.log(formattedDate);

    const vidioHistory = {caption,youtubeURL,timeStamp:formattedDate}
    try {
      const result = await saveHistoryAPI(vidioHistory)
    } catch (error) {
      console.log(error);
    }
  } 

  const handleRemoveVidio = async(videoId)=>{
    try {
      const result = await removeVidioAPI(videoId)
      setRemoveVidioRes(result.data)
    } catch (error) {
      console.log(error);
    }
  }
 
  const dragStarted = (e,videoId)=>{
    console.log("draged");
    e.dataTransfer.setData("vidioId", videoId)
  }

  return (
    <>
      <Card draggable={true} onDragStart={(e)=> dragStarted(e,displayData?.id)}>
        <Card.Img onClick={handleShow} variant="top" style={{ height: "220px" }} src={displayData?.imgURL} />
        <Card.Body>
          <Card.Title className='text-center fw-bold text-success'>{displayData?.caption}</Card.Title>
          <Card.Text className='text-center'>
            { 
              !insideCategory &&
              <button onClick={()=>handleRemoveVidio(displayData?.id)} className='btn' ><i class="fa-solid fa-trash text-danger"></i></button>
            }
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