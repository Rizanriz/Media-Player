import React from 'react'
import gif from './../assets/music.gif'
import { Card } from 'react-bootstrap'
import settings from './../assets/settings.gif'

function Landing() {
  return (
    <div className='landingsection container '>
      <div className="row">
        <div className="col-lg-6 mt-5 ">
          <h3>Welcome to the <span className='text-warning'>Party</span></h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi cumque quia, architecto quos ab, repellat maxime veniam sequi delectus minus vel? Earum numquam cum totam quae accusantium minus esse atque.</p>
          <button className='btn bg-warning'>Get Started</button>
        </div>
        <div className="col-lg-6 d-flex justify-content-end mt-4 " >
          <img style={{ borderRadius: "20px" }} src={gif} alt="" />
        </div>
      </div>
      <div className='features p-5'>
        <h3 className='text-center m-5'>Features</h3>
        <div className="row">
          <div className="col-lg-4 d-flex justify-content-center">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={settings} />
              <Card.Body>
                <Card.Title>Categorise Vidio</Card.Title>
                <Card.Text>
                  User can categorise the vidio by drag and drop
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4 d-flex justify-content-center">
          <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={settings} />
              <Card.Body>
                <Card.Title>Managing History</Card.Title>
                <Card.Text>
                   User can manage the watch history of the vidio
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4 d-flex justify-content-center" >
          <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={settings} />
              <Card.Body>
                <Card.Title>Managing Vidio</Card.Title>
                <Card.Text>
                  You can upload ,view and remove the vidio
                </Card.Text>
              </Card.Body>
            </Card> 
          </div>
        </div>
      </div>
      <div className="row border rounded p-5 my-5">
        <div className="col-lg-5">
          <h3 className='mt-2 text-danger'>Simple,fast and powerfull</h3>
          <p> <span className='fs-4 text-warning'>Play Everthing </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, exercitationem. Repellendus, natus explicabo voluptates a similique in earum blanditiis quia facere nemo sint magni distinctio, illum quos iure nisi sunt!</p>
          <p> <span className='fs-4 text-warning'>Play Everthing </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, exercitationem. Repellendus, natus explicabo voluptates a similique in earum blanditiis quia facere nemo sint magni distinctio, illum quos iure nisi sunt!</p>
          <p> <span className='fs-4 text-warning'>Play Everthing </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, exercitationem. Repellendus, natus explicabo voluptates a similique in earum blanditiis quia facere nemo sint magni distinctio, illum quos iure nisi sunt!</p>
        </div>
        <div className="col"></div>
        <div className="col-lg-6">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/uJMCNJP2ipI" title="Deadpool &amp;" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  )
}

export default Landing