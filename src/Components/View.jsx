import React from 'react'
import { Col, Row } from 'react-bootstrap'
import VidioCard from './VidioCard'

function View() {
  return (
    <div>
      <Row>
       <Col sm={12} md={6} lg={3}>
         <VidioCard/>
        </Col>
       <Col sm={12} md={6} lg={3}>
         <VidioCard/>
        </Col>
       <Col sm={12} md={6} lg={3}>
         <VidioCard/>
        </Col>
       <Col sm={12} md={6} lg={3}>
         <VidioCard/>
        </Col>
      </Row>
    </div>
  )
}

export default View