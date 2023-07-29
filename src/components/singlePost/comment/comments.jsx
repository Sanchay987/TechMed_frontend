import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../../context/Context';
import axios from "axios"
import { BASE_URL } from '../../helper';

export default function Comments({post}) {

const {user} = useContext(Context);
const [comment,setComment] = useState([]);
const [allComment,setAllComment] =useState([]);


const addComment =async(e)=>{
    const newComment = {
        name: user.username,
        postId: post._id,
        comments: comment
    };
try {
    await axios.post(`${BASE_URL}/comment/new`,newComment);
    window.location.reload();
} catch (error) {
    console.log(error);
}
}


useEffect(()=>{
    const getComments = async()=>{
    const res = await axios.get(`${BASE_URL}/comment/new/`+post._id);
         setAllComment(res.data);
    }
    getComments();
  },[post]);

const handleDelete =async(comment)=>{
    try {
        await axios.delete(`${BASE_URL}/comment/new/` +comment._id);
        window.location.replace("/"); 
    } catch (err) {
      console.log(err);
    }
}


  return (
    <div class="container">
  <div class="row">
    <div class="col-md-6">
        <div class="form-group">
          <label for="comment">Comment here</label>
          <textarea class="form-control"placeholder='write something...' rows="4" id="comment" required onChange={(e)=>setComment(e.target.value)}></textarea>
        </div>
        <button type="submit" class="btn btn-primary" onClick={(e) => addComment(e)}>Submit</button>
    </div></div>
    <div className='row'>
    <div class="col-md-6">
        {
            allComment && allComment.length > 0 && allComment.map(comment => (

                        <div className='border border-dark mt-2'>
                        <p style={{color:"black"}}>{comment.name}</p>
                        <p style={{color:"black"}}>{comment.comments}</p>
                       <p style={{color:"black"}}>{comment.name === user.username && (<i className="fa-solid fa-trash" onClick={() => handleDelete(comment)}></i>)}</p>
                        </div>
                    ))
                }
    </div>
    </div>
</div>
  )
}
