import React from 'react'
import Add from "./../Components/Add"
import { Link } from 'react-router-dom'
import View from '../Components/View'


function Home() {
  return (
    <div>
      <Add/>
        <Link to={"/History"}>Watch History </Link>
        <div className="row">
          <div className="col-lg-6">
          <h2>All Vidios</h2>
          <View/>
          </div>
          <div className="col-lg-6">
            <h3>Category</h3>
          </div>
        </div>
    </div>
  )
}

export default Home