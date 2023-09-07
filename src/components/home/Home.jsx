import React from 'react'
import "./home.css"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Link } from 'react-router-dom'
import homeimage from "../../images/blog6.jpg"
export default function Header() {
  return (
<>
<div className="container">
  <img src={homeimage} alt="Snow" style={{width: "100%"}}/>
  <div className="centered"><h1 className='style'>TechMed</h1>
  <h3 className='style'>Exploring the future one byte at a time through</h3>
  <Link to={'/aboutFooter'}><button type="button" class="btn btn-info">About</button></Link>
  </div>
</div>

</>
  )
}

