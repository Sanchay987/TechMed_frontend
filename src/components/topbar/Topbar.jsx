import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./topbar.css"
export default function Topbar() {
  // const PLocation ="https://techmed-s.onrender.com/images/";
  const {user,dispatch} = useContext(Context);
  const handleLogout=()=>{
    dispatch({type:"LOGOUT"});
  }

  return (
<>

<nav className="navbar mystyle navbar-expand-lg">
<span className="navbar-brand mb-0 h1 fonti">TechMed</span>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarNav">

    <ul className="navbar-nav">
      <li className="nav-item active"><Link className="nav-link" to="/">HOME<span className="sr-only">(current)</span></Link></li>
      <li className="nav-item"><Link className="nav-link" to="/setting">SETTINGS</Link></li>
      <li className="nav-item"><Link className="nav-link" to="/write">WRITE</Link></li>
      <li className="nav-item nav-link" onClick={handleLogout}>{user && "LOGOUT"}</li>
      {user ? (<Link className='nav-link ' to="/setting"><img className="topImg" src={user.profilePic} alt="None"/></Link>) : (
  <div>
           <li className="nav-item"><Link className="nav-link" to="/login">LOGIN</Link></li>
           <li className="nav-item"><Link className="nav-link" to="/register">REGISTER</Link></li>
           </div>
          )}
    </ul>
    </div>
 

</nav>

    </>
  )
}
