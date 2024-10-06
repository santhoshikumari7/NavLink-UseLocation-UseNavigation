import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div>
        <form>
        <h2 style={{
            backgroundColor:"darkmagenta",
            color:"white",
            borderRadius:"20px",
            boxShadow:"5px 5px 5px black",

        }}
        >Signup</h2>
      
        <div>
            <label>First Name</label>
            <input></input>
        </div>
        <div>
            <label>Last Name</label>
            <input></input>
        </div>
        <div>
            <label> Age</label>
            <input></input>
        </div>
        <div>
            <label>Email</label>
            <input></input>
        </div>
        <div>
            <label>Mobile No</label>
            <input></input>
        </div>
        <div>
            <label>Profile Pic</label>
            <input></input>
        </div>
        <button type='button'>Signup</button>
      </form>
      <br></br>
      <br></br>
      <Link to="/">Login</Link>
    </div>
  )
}

export default Signup
