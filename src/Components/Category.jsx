import React, { useEffect, useState } from 'react'
import { Button, Modal, Form, FloatingLabel } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategoryAPI, getCategoryAPI, getVidioAPI, removeCategoryAPI, removeVidioAPI, updateCategoryAPI } from '../Services/allAPI';
import VidioCard from './VidioCard';

function Category({setRemoveCategoryVideoRes,refreshCategory}) {

  const [allCategory,setAllCategory] = useState([])
  const [categoryName,setCategoryName] = useState("")
  const [show, setShow] = useState(false);
  console.log(allCategory);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(()=>{
    getAllCategory()
  },[refreshCategory])

  const getAllCategory = async()=>{
    try {
      const result = await getCategoryAPI()
      setAllCategory(result.data)
    } catch (error) {
      console.log(error);
    }
  }

  const handleCategory = async ()=>{
     if(categoryName){
      try {
        await addCategoryAPI({categoryName,AllVideos:[]})
        setCategoryName()
        handleClose()
        getAllCategory()
      } catch (error) {
        console.log(error);
      }
     }else{
        toast.warning("Fill the form")
     }
  }

  const handleRemove = async(categoryId)=>{
    try {
      await removeCategoryAPI(categoryId)
      getAllCategory()
    } catch (error) {
      console.log(error);
    }
  }

  const dragOverCategory = (e)=>{
    e.preventDefault()
    console.log("overdragged");
  }

  const videoDropped = async (e,categoryId)=>{
    const vidioId = e.dataTransfer.getData("vidioId")
    console.log(`video dropped ${categoryId} `);
    try {
      const {data} = await getVidioAPI(vidioId)
      console.log(data);
      let selectedCategory = allCategory?.find(item=>item.id === categoryId)
      selectedCategory.AllVideos.push(data)
      console.log(selectedCategory);
      await updateCategoryAPI(categoryId,selectedCategory)
      const result = await removeVidioAPI(vidioId)
      setRemoveCategoryVideoRes(result)
      getAllCategory()

    } catch (error) {
      console.log(error);
    }
  }

  const vidioDragStarted = (e,vidioDetail,categoryId)=>{
    console.log("movee" ,vidioDetail,categoryId);
    let dataShare = {vidioDetail,categoryId}
    e.dataTransfer.setData("dataShare",JSON.stringify(dataShare))
  }


  return (
    <>
      <div className="d-flex justify-content-around mb-5">
        <h3 className=''>All Category</h3>
        <button onClick={handleShow} className='btn bg-info rounded-circle fs-5 fw-bolder'>+</button>
      </div>
      <div className="container-fluid">
        {
           allCategory.length>0?
           allCategory?.map(item=>(
            <div droppable={true} onDragOver={e=>dragOverCategory(e)} onDrop={(e)=>videoDropped(e,item?.id)} key={item?.id} className='border rounded p-2 mb-2'>
              <div className='d-flex justify-content-between p-3'>
                <h5>{item?.categoryName}</h5>
                <button onClick={()=>handleRemove(item?.id)} className='btn'><i className="fa-solid fa-trash text-danger"></i></button>
              </div>
              <div className="row mt-2">
                  {
                    item.AllVideos?.length>0 &&
                    item.AllVideos?.map(video=>(
                      <div draggable={true} onDragStart={e=>vidioDragStarted(e,video,item.id)} key={video?.id} className='col-lg-4'>
                        <VidioCard displayData={video} insideCategory={true}/>
                      </div>
                    ))
                    
                  }
              </div>
            </div>
           ))
           :
           <div className="text-danger text-center fw-bolder fs-5">
            No category are added yet
           </div>
        }
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Category details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel
            controlId="floatingInput"
            label="Category Name">
            <Form.Control onChange={e=>setCategoryName(e.target.value)} type="text" placeholder="Category Name" />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleCategory} variant="info">Add</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position="top-center" theme="dark" autoclose={3000} />
    </>
  )
}

export default Category