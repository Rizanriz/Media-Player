import React from 'react'
import gif from './../assets/music.gif'

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
          <img  style={{borderRadius:"20px"}} src={gif} alt="" />
          </div>
        </div>
    </div>
  )
}

export default Landing