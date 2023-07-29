import React, { useContext, useEffect, useState } from 'react'
import "./singlePost.css"
import { useLocation } from 'react-router-dom'
import axios from "axios"
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context'
import Comments from './comment/comments'
import { BASE_URL } from '../helper'
export default function SinglePost() {

  const PLocation ="https://techmed-s.onrender.com/images/";
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post,setPost] = useState([]);
  const {user} = useContext(Context);
  const [title,setTitle]=useState("");
  const [desc,setDesc]=useState("");
  const[updateMode,setUpdateMode]=useState(false);

  useEffect(()=>{
    const getPost = async()=>{
    const res =await axios.get(`${BASE_URL}/posts/`+path);
         setPost(res.data)
    }
    getPost()
  },[path]);

const handleDelete=async()=>{
    try {
        await axios.delete(`${BASE_URL}/posts/` + path,{data:{username:user.username},});
        window.location.replace("/"); 
    } catch (err) {
      console.log(err);
    }
}

const handleUpdate=async()=>{
    try {
        await axios.put(`${BASE_URL}/posts/` + path,{username:user.username,title,desc,});
        window.location.reload();
        window.location.replace("/");  
        setUpdateMode(false);
    } catch (err) {
      console.log(err);
    }
}


  return (
    <>
    <div className="container my-4">
    <div className="row">
      <div className="col-md-8 mx-auto">
        <div className="card">
        {post.photo && (<img className="card-img-top" src={PLocation+post.photo} alt=""></img>)}
        <div class="card-body">
              <div class="d-flex justify-content-between mt-4">
                  <span className="card-text">Author:<Link to={`/?user=${post.username}`} className="link"><b>{post.username}</b></Link></span>
                  <span className="card-text">{new Date(post.createdAt).toDateString()}</span>
                </div>
{updateMode ? <input type="text" className="" value={title} onChange={(e)=>setTitle(e.target.value)} autoFocus/>:(
  <div class="d-flex justify-content-between mt-4">
    <h1 className="card-text">
    {post.title}</h1>
    {post.username === user?.username && 
       (<div>
       <i className="singlePostIcon far fa-edit" onClick={()=>setUpdateMode(true)}></i> 
       <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i></div> )}      
       </div>   
     )}
    

  
   <div class="d-flex flex-column justify-content-center mt-4">
   {updateMode ? (<textarea className="card-text mb-4" value={desc} onChange={(e)=>setDesc(e.target.value)}/>):(<p className='card-text'>{post.desc}</p>)}
   {updateMode && (<button type="button" class="btn btn-primary" onClick={handleUpdate}>Update</button>)}
   </div>
      </div>
      <Comments post ={post}/>
      </div>
    </div>
    </div>
    </div>
</>

  )
}
