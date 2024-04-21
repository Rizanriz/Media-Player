import React from 'react'
import Add from "./../Components/Add"
import { Link } from 'react-router-dom'


function Home() {
  return (
    <div>
      <Add/>
        <Link to={"/History"}>Watch History </Link>
        <div className="row">
          <h2>All Vidios</h2>
          <div className="col-lg-6">
            <h3>View</h3>
          </div>
          <div className="col-lg-6">
            <h3>Category</h3>
          </div>
        </div>
    </div>
  )
}

export default Home