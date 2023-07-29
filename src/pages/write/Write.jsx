import React, { useContext, useState } from 'react'
import "./write.css"
import axios from "axios"
import { Context } from "../../context/Context";
import { BASE_URL } from '../../components/helper';
export default function Write() {



  const[categories,setCategories]=useState("");
  const [title,setTitle]=useState("");
  const [desc,setDesc]=useState("");
  const [file,setfile]=useState(null);
  const {user}=useContext(Context);


 const handleWrite=async(e)=>{
  e.preventDefault();
  const newpost={username:user.username,title,desc,categories,}
  if(file){
      const mydata =new FormData();
      const nameOfFile =Date.now() + file.name;
      mydata.append("name",nameOfFile);
      mydata.append("file",file);
      newpost.photo=nameOfFile;
      try {
        await axios.post(`${BASE_URL}/upload`,mydata);
      } catch (err) { 
        console.log(err);
      }
  }
  try {
  const res =  await  axios.post(`${BASE_URL}/posts`,newpost);
  window.location.replace("/post/"+res.data._id);
  } catch (err) {
    console.log(err);
  }
 };






  return (
    <div className="container-fluid">
    <div className="write">
  {file && (<img className="writeImg" src={URL.createObjectURL(file)} alt=""/>) }
     <form className="writeForm" onSubmit={handleWrite}>
    <div className="writeFormGroup mt-4">
 <label htmlFor="fileInput"><i className="writeIcon fas fa-plus"></i></label>
 <input type="file" id="fileInput" style={{display:'none'}} onChange={(e)=>setfile(e.target.files[0])}></input>
</div>
<div className="writeFormGroup mt-4">
<input type="text" placeholder="title" autoFocus={true} onChange={(e)=>setTitle(e.target.value)}></input>
</div>
<div className="writeFormGroup mt-4">
<input type="text" placeholder="categorie" onChange={(e)=>setCategories(e.target.value)}></input>
</div>

<div className="d-flex flex-column justify-content-center mt-4">
    <div className="form-group">
    <textarea className="form-control" type="text" placeholder="Tell your story....." id="exampleFormControlTextarea1" rows="3" onChange={(e)=>setDesc(e.target.value)}></textarea>
    </div>
    <button type="submit" className="btn btn-lg btn-light btn-block">Publish</button>
</div>
     </form>
    </div>
    </div>
  )
}
