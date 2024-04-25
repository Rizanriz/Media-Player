import React from 'react'
import { Link } from 'react-router-dom'

function History() {
  return (
    <div className='container'>
      <div className='d-flex justify-content-between'>
          <h3>Watch History</h3>
          <Link to={"/home"}> <button className='btn'>Back to home</button> </Link>
      </div>
      <table className='table my-5'> 
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>Vidio Link</th>
            <th>Time stamp</th>
            <th>...</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Deadpool</td>
            <td><a href="https://www.youtube.com/embed/cen0rBKLuYE" target='blank'>https://www.youtube.com/embed/cen0rBKLuYE</a> </td>
            <td>22/4/2024 10:15am</td>
            <td><button className='btn'><i class="fa-solid fa-trash text-danger"></i></button></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default History
