import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getHistoryAPI, removeHistoryAI } from '../Services/allAPI'

function History() {

  const [vidioHistory,setVidioHistory] = useState([])

  console.log(vidioHistory);
  useEffect(()=>{
    getAllHistory()
  },[])

  const getAllHistory = async()=>{
    try {
      const result = await getHistoryAPI()
      setVidioHistory(result.data)
    } catch (error) {
      console.log(error);
    }
  }

  const handleHistory = async(videoId)=>{
    try {
      await removeHistoryAI(videoId)
      getAllHistory()
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='container'>
      <div className='d-flex justify-content-between'>
          <h3>Watch History</h3>
          <Link to={"/home"}> <button className='btn'>Back to home</button> </Link>
      </div>
      <table className='table my-5'> 
        <thead>
          <tr className='text-center'>
            <th>#</th>
            <th>Caption</th>
            <th>Vidio Link</th>
            <th>Time stamp</th>
            <th>...</th>
          </tr>
        </thead>
        <tbody>
          {
            vidioHistory.length>0?
            vidioHistory?.map((item,index)=>(
          <tr className='text-center' key={item?.id}>
            <td>{index+1}</td>
            <td>{item?.caption}</td>
            <td><a href={item?.youtubeURL} target='blank'>{item?.youtubeURL}</a> </td>
            <td>{item?.timeStamp}</td>
            <td><button onClick={()=>handleHistory(item?.id)} className='btn'><i class="fa-solid fa-trash text-danger"></i></button></td>
          </tr>
            ))
          :
          <div className="text-danger fw-bolder fs-5 p-3">NO HISTORY</div>
          }
        </tbody>
      </table>
    </div>
  )
}

export default History
