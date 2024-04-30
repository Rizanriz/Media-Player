import React, { useState } from 'react'
import Add from "./../Components/Add"
import View from '../Components/View'
import { Link } from 'react-router-dom'


function Home() {

  const [addvidioRes,setAddvidioRes] = useState("")
  
  return (
    <div>
      <Add setAddvidioRes={setAddvidioRes} />
        <div className="row">
          <div className="col-lg-6">
          <h2 className='text-center'>All Vidios</h2>
          <View addvidioRes={addvidioRes}/>
          </div>
          <div className="col-lg-6">
            <h3 className='text-center'>Category</h3>
          </div>
        </div>
        <Link to={"/History"}> <button className='btn bg-warning mt-5'>Watch History</button> </Link>
    </div>
    
  )
}

export default Home