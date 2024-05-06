import React, { useState } from 'react'
import Add from "./../Components/Add"
import View from '../Components/View'
import { Link } from 'react-router-dom'
import Category from '../Components/Category'


function Home() {

  const [addvidioRes,setAddvidioRes] = useState("")
  const [removeCategoryVideoRes,setRemoveCategoryVideoRes] = useState("")
  const [refreshCategory,setRefreshCategory] = useState("")
  
  return (
    <div>
      <Add setAddvidioRes={setAddvidioRes} />
        <div className="row">
          <div className="col-lg-6">
          <h2 className='text-center'>All Vidios</h2>
          <View setRefreshCategory={setRefreshCategory} addvidioRes={addvidioRes} removeCategoryVideoRes={removeCategoryVideoRes}/>
          </div>
          <div className="col-lg-6">
            <Category refreshCategory={refreshCategory} setRemoveCategoryVideoRes={setRemoveCategoryVideoRes}/>
          </div>
        </div>
        <Link to={"/History"}> <button className='btn bg-warning mt-5'>Watch History</button> </Link>
    </div>
    
  )
}

export default Home