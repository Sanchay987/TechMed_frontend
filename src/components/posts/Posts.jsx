import React from 'react'
import "./posts.css"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import {Link} from "react-router-dom"

export default function Posts({posts}) {

  const PLocation ="https://techmed-s.onrender.com/images/";

  return (
  <>
    {posts.map((post)=>(
      <div className="col-md-6 mb-4">
            <div className="card">
                {post.photo &&(<img className="card-img-top "  style={{height:"500px"}}  src={PLocation+post.photo} alt=""/>)}
                    <div class="card-body">
                    {post.categories.map((c)=>(<span className="postCat">{c.name}</span>))}
                    <h5 className="card-title mb-0"><Link to={`/post/${post._id}`} className="link"><span className='postTitle'>{post.title}</span></Link></h5>
                        <div className="card-text text-black-50">
                <span>{new Date(post.createdAt).toDateString()}</span>
                <p >{post.desc}</p>
                </div>
            </div>
          </div>
        </div>
    ))}
</>
  )
}
