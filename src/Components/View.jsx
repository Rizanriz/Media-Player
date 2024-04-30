import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VidioCard from './VidioCard'
import { GetallVideoAPI } from '../Services/allAPI'

function View({addvidioRes}) {

  const [removeVidioRes,setRemoveVidioRes] = useState("")
  const [allVidios, setAllVidios] = useState([])


  console.log(allVidios);
  useEffect(() => {
    getAllVidio()
  }, [addvidioRes,removeVidioRes])

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

  return (
    <div>
      <Row className='p-3'> {
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