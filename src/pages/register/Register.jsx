import React, { useState } from 'react'
import "./register.css"
import axios from 'axios'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { BASE_URL } from '../../components/helper'

export default function Register() {

  const [username,setUsername]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  

const handleSubmit= async(e)=>{
  e.preventDefault();
  try {
      const res = await axios.post(`${BASE_URL}/auth/register`,{username,email,password,});
      res.data=window.location.replace("/login");
  } catch (err) {
      console.log(err);
  }
}


  return (
   <>
    <div className="text-center body styled-form">
    <form className="form-signin" onSubmit={handleSubmit}>
      <h1 className="h3 mb-3 font-weight-normal">REGISTER</h1>
      <label className="sr-only">UserName</label>
    <input className="form-control mb-3" type="text" placeholder="Enter your name..." onChange={e=>setUsername(e.target.value)}></input>
    <label className="sr-only">Email</label>
    <input className="form-control mb-3" type="text" placeholder="Enter your email..." onChange={e=>setEmail(e.target.value)}></input>
    <label className="sr-only">Password</label>
    <input className="form-control mb-3" type="password" placeholder="Enter your password..." onChange={e=>setPassword(e.target.value)}></input>
      
    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
    </form>
  </div>
  </>
  )
}
