import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VidioCard from './VidioCard'
import { GetallVideoAPI } from '../Services/allAPI'

function View() {

  const [allVidios,setAllVidios] = useState([])
  console.log(allVidios);
  useEffect(()=>{
    getAllVidio()
  },[])

  const getAllVidio= async()=>{
    try {
      const result = await GetallVideoAPI()
      console.log(result);
      if(result.status>=200 && result.status<300){
        setAllVidios(result.data)
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Row className='p-3'> 
       <Col sm={12} md={6} lg={4}>
         <VidioCard/>
        </Col>
      </Row>
    </div>
  )
}

export default View