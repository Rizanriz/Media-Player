import React, { useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addVideoAPI } from '../Services/allAPI';



function Add({ setAddvidioRes }) {

  const [vidioDetail, setVidioDetail] = useState({
    caption: "", imgURL: "", youtubeURL: "",
  })

  const [invalidYTURL, setInvalidYTURL] = useState(false)
  console.log(vidioDetail);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getemdURL = (link) => {
    if (link.includes("v=")) {
      let vidioid = link.split("v=")[1].slice(0, 11)
      console.log(vidioid);
      setVidioDetail({ ...vidioDetail, youtubeURL: `https://www.youtube.com/embed/${vidioid}` })
      setInvalidYTURL(false)
    } else {
      setVidioDetail({ ...vidioDetail, youtubeURL: "" })
      setInvalidYTURL(true)
    }
  }

  const handleUpload = async () => {
    console.log("uploaded");
    const { caption, imgURL, youtubeURL } = vidioDetail
    if (caption && imgURL && youtubeURL) {
      console.log("api");
      try {
        const result = await addVideoAPI(vidioDetail)
        handleClose()
        if (result.status >= 200 && result.status < 300) {
          console.log(result.data);
          setAddvidioRes(result.data)
          setRemoveVidioRes(result.data)
          setVidioDetail({caption: "", imgURL: "", youtubeURL: ""})
          toast.success(`${result.data.caption} added to yor collection`)
        }
      } catch (error) {
        toast.error(result.res.data)
      }
    } else {
      toast.warning("please fill the form")
    }
  }

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
            <FloatingLabel controlId="floatingInput" label="vidio" className="mb-3">
              <Form.Control onChange={e => setVidioDetail({ ...vidioDetail, caption: e.target.value })} type="text" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingInput" label="image url" className="mb-3">
              <Form.Control onChange={e => setVidioDetail({ ...vidioDetail, imgURL: e.target.value })} type="text" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingInput" label="vidio url" className="mb-3">
              <Form.Control onChange={e => getemdURL(e.target.value)} type="text" />
            </FloatingLabel>
            {
              invalidYTURL && <div className='text-danger fw-bolder'>  Invalid youtube link</div>
            }
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpload}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position="top-center" theme="dark" autoclose={3000} />
    </>
  )
}

export default Add