import React, { useEffect, useState } from 'react'
import "./categories.css"
import axios from 'axios';
import { Link } from 'react-router-dom';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { BASE_URL } from '../helper';

export default function Categories() {


  const [categories,setcategories] = useState([]);

useEffect(()=>{
   const getCategories = async()=>{
    const res = await axios.get(`${BASE_URL}/categories`);
    setcategories(res.data);
   };
   getCategories();
},[]);




  return (

<>
  <nav className="navbar mystyle  navbar-expand-md mystyle justify-content-center">
    <span style={{color:"Black"}}>CATEGORIES</span>
</nav>

  <div className="container my-4">
    <div className="row d-flex">
      <div className="col-md-12 centered-header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
      <ul className="navbar-nav">
    {categories.map((c)=>(<li  className="nav-item"><Link className='nav-link' to={`/?categorie=${c.name}`}>{c.name}</Link></li>))}
    </ul>
    </nav>
      </div>
    </div>
  </div>
<hr/>

</>
  )
}
