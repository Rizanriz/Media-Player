import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VidioCard from './VidioCard'
import { GetallVideoAPI, addVideoAPI, getSingleCategoryAPI, updateCategoryAPI } from '../Services/allAPI'

function View({addvidioRes,removeCategoryVideoRes,setRefreshCategory}) {

  const [removeVidioRes,setRemoveVidioRes] = useState("")
  const [allVidios, setAllVidios] = useState([])

  console.log(allVidios);
  useEffect(() => {
    getAllVidio()
  }, [addvidioRes,removeVidioRes,removeCategoryVideoRes])

  const getAllVidio = async () => {
    try {
      const result = await GetallVideoAPI()
      console.log(result);
      if (result.status >= 200 && result.status < 300) {
        setAllVidios(result.data)
      }
    } catch (error) {
      console.log(error);
    }
  }

  const dragOverView = (e)=>{
    e.preventDefault()
  }
  const handleCategoryVideo = async(e)=>{
    const {categoryId,vidioDetail} = JSON.parse(e.dataTransfer.getData("dataShare"))
    try {
      const {data} = await getSingleCategoryAPI(categoryId)
      console.log("data",data);

      const updatedCategoryVideoList = data.AllVideos.filter(item=>item.id !== vidioDetail.id)
      console.log(updatedCategoryVideoList);
      
      const {categoryName,id} = data
      const categoryResult = await updateCategoryAPI(categoryId,{id,categoryName,AllVideos:updatedCategoryVideoList})
      console.log(categoryResult,"fetched");

      await addVideoAPI(vidioDetail)
      setRefreshCategory(categoryResult.data)
      
      getAllVidio()

    } catch (error) {
      console.log("error");
    }
  }
  return (
    <div>
      <Row className='p-3' droppable={true} onDragOver={e=>dragOverView(e)} onDrop={e=>handleCategoryVideo(e)}> {
        allVidios.length > 0 ?
          allVidios?.map(vidio => (
            <Col key={vidio?.id} sm={12} md={6} lg={4}>
              <VidioCard displayData={vidio} setRemoveVidioRes={setRemoveVidioRes}/>
            </Col>
          ))
          :
          <div className='fw-bolder text-danger'>Nothing to diaplay</div>
      }

      </Row>
    </div>
  )
}

export default View