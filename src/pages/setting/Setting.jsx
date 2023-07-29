import React, { useContext, useState } from 'react'
import "./setting.css"
import { Context } from '../../context/Context';
import axios from 'axios';
import { BASE_URL } from '../../components/helper';



export default function Setting() {


  const[file,setFile]=useState(null);
  const[username,setUsername]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const {user,dispatch}= useContext(Context);
  const [success,setSuccess]=useState(false);


  const handleUpdate=async(e)=>{
      e.preventDefault();
      dispatch({type:"UPDATE_START"});
      const updatedUser={ userId:user._id,username, email,password,}
      if(file){
          const mydata =new FormData();
          const nameOfFile =Date.now() + file.name;
          mydata.append("name",nameOfFile);
          mydata.append("file",file);
          updatedUser.profilePic=nameOfFile;
          try {
            await axios.post(`${BASE_URL}/upload`,mydata);
          } catch (err) { }
      }
      try {
          console.log(user._id);
     const res= await axios.put(`${BASE_URL}/users/`+ user._id,updatedUser);
      setSuccess(true);
      dispatch({type:"UPDATE_SUCCESS",payload:res.data});
      } catch (err) {
        dispatch({type:"UPDATE_FAILURE"});
      }
     };





  return (
    <div className="settings">
    <div className="settingsWrapper">
        <form className="settingsForm" onSubmit={handleUpdate}>
            <label>Profile</label>
            <div className="settingsPP">
            <img src={file ? URL.createObjectURL(file): user.profilePic} alt=""></img>
               <label htmlFor="fileInput"><i className="settingsPPIcon far fa-user-circle"></i></label>
               <input type="file" id="fileInput" style={{display:"none"}} onChange={(e)=>setFile(e.target.files[0])}></input>
            </div>
            <label>Username</label>
            <input type="text" placeholder={user.username} onChange={(e)=>setUsername(e.target.value)}></input>
            <label>email</label>
            <input type="email" placeholder={user.email} onChange={(e)=>setEmail(e.target.value)}></input>
            <label>Password</label>
            <input type="password" onChange={(e)=>setPassword(e.target.value)}></input>
            <button className="settingsSubmitButton" type="submit">Update</button>
            {success && <span style={{colour:"green"}}>Updated successfully</span>}
        </form>
    </div>
</div>
  )
}
