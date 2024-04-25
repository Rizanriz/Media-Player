import React from 'react'
import Add from "./../Components/Add"
import { Link } from 'react-router-dom'
import View from '../Components/View'


function Home() {
  return (
    <div>
      <Add/>
        <div className="row">
          <div className="col-lg-6">
          <h2>All Vidios</h2>
          <View/>
          </div>
          <div className="col-lg-6">
            <h3>Category</h3>
          </div>
        </div>
        <Link to={"/History"}> <button className='btn bg-warning mt-5'>Watch History</button> </Link>
    </div>
    
  )
}

export default Home