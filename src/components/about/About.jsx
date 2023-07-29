import React from 'react'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./about.css"
export default function About() {
  return (
    <>

<nav className="navbar navbar-expand-md mystyle justify-content-center">
    <span style={{color:"white"}}>ABOUT</span>
  </nav>


<div className="container my-4">
    <div className="row">
      <div className="col-md-6 mb-4">
        <img src="https://cdn.pixabay.com/photo/2015/02/02/11/09/office-620822_1280.jpg" alt="" className="img-fluid rounded"/>
      </div>

      <div className="col-md-6">
        <h2>About Us</h2>
        <p style={{color:"black"}}>
        Welcome to our "New Technologies Blogs" section, where we bring you the latest insights 
        and trends from the ever-evolving tech world. Stay informed about cutting-edge advancements,
         from Artificial Intelligence and Blockchain to IoT and beyond. Our curated blogs, written by 
         industry experts, ensure you're up-to-date with innovative solutions and potential disruptions. 
         Engage in discussions, explore diverse perspectives, and join our vibrant tech community. 
         Embrace the digital frontier and be ready to adapt to the exciting changes shaping the future. 
         Empower yourself with knowledge and inspiration in this dynamic hub of technological discovery.
         Trustworthy and user-friendly, this section is your go-to resource for staying informed and 
         inspired by the latest developments in the realm of technology.
        </p>
      </div>
    </div>
  </div>


    </>
  )
}
