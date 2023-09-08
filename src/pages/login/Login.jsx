import React, { useContext,useState } from 'react'
import "./login.css"
import axios from 'axios';
import { Context } from '../../context/Context';
import { BASE_URL } from '../../components/helper';
export default function Login() {

  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const{dispatch} = useContext(Context);

     
    const handleSubmit=async(e)=>{
      e.preventDefault();
      dispatch({type:"LOGIN_START"});
      try {
        const res =await axios.post(`${BASE_URL}/auth/login`,{username,password,});
        dispatch({type:"LOGIN_SUCCESS",payload:res.data});
      } catch (err){
        dispatch({type:"LOGIN_FAILURE"});
      }

    }




  return (
    <>
    <div className="text-center body styled-form">
    <form className="form-signin" onSubmit={handleSubmit}>
      <h1 className="h3 mb-3 font-weight-normal">LOGIN</h1>
      <label className="sr-only">UserName</label>
    <input className="form-control mb-3" type="text" placeholder="Enter your name..." onChange={e=>setUsername(e.target.value)}></input>

    <label className="sr-only">Password</label>
    <input className="form-control mb-3" type="password" placeholder="Enter your password..." onChange={e=>setPassword(e.target.value)}></input>
      

      <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
    </form>

  </div>
</>
  )
}
