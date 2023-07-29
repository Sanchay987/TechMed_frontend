import React, { useEffect, useState } from 'react'
import "./homepage.css"
import { useLocation } from 'react-router-dom'
import Home from '../../components/home/Home'
import Posts from '../../components/posts/Posts'
import Categories from '../../components/categories/Categories'
import axios from "axios"
import Footer from '../../components/footer/Footer'
import About from '../../components/about/About'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"

import { BASE_URL } from '../../components/helper'
export default function HomePage() {

  const[posts,newPosts] = useState([]);
  const {search}= useLocation();

  useEffect(()=>{
    const getPosts = async()=>{
      const res = await axios.get(`${BASE_URL}/posts/`+search)
    newPosts(res.data)
    }
    getPosts()
  },[search])

  
  return (
    <>
     <Home />
     <Categories/>
     <div className="container card-deck">
      <div className="row">
      <Posts posts={posts}/>
      </div>
    </div>
    <About/>
    <Footer/>
     </>
  )
}
