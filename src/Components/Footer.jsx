import React from 'react'
import { Link } from 'react-router-dom'
import footerCss from "./../Components/Footer.module.css"


function Footer() {
  return (
    <div className='container mt-5 w-100'>
      <div style={{height:"200px"}} className='d-flex justify-content-between'>

        <div className="intro" style={{width:"400px"}}>
        <h5><i className="fa-solid fa-music"></i> Media Player</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ullam velit voluptas quibusdam magni quia sequi enim, error blanditiis ipsam odit aspernatur minus alias facere exercitationem eum, hic nostrum architecto?</p>
        </div>

        <div className={footerCss.links}>
          <h5>Links</h5>
          <Link to={'/'}>Landing Page</Link>
          <Link to={'/home'}>Home Page</Link>
          <Link to={'/history'}>History Page</Link>
        </div>
        <div className={footerCss.guides}>
          <h5>Guides</h5>
          <a href="">React</a>
          <a href="">React Bootstrap</a>
          <a href="">React router</a>
        </div>
        <div className={footerCss.contact}>
          <h5>Contact US</h5>
          <div className='d-flex'>
            <input type="text" placeholder='Enter your E-mail' className='form-control'/>
            <button className='btn'><i class="fa-solid fa-arrow-right"></i></button> 
          </div>
          <div className='d-flex justify-content-between mt-3'>
            <a href=""><i class="fa-brands fa-instagram"></i></a>
            <a href=""><i class="fa-brands fa-linkedin"></i></a>
            <a href=""><i class="fa-brands fa-facebook"></i></a>
            <a href=""><i class="fa-brands fa-whatsapp"></i></a>
            <a href=""><i class="fa-solid fa-envelope"></i></a>
          </div>
        </div>
      </div>
      <p className='d-flex justify-content-center'>© 2024 Media Player. All rights reserved</p>
    </div>
  )
}

export default Footer