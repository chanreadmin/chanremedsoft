import React from 'react'
import './MenuBar.css'

import { Link } from 'react-router-dom'
function MenuBar() {
  return (
<nav className="navbar navbar-expand-lg navbar-light">
  <div className="container">
    <Link to={'/'} className="navbar-brand" ><img src="logo.png" alt="logo"/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse ms-auto" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2  mb-lg-0 mx-auto">
        <li className="nav-item ">
          <Link to={'/'} className="nav-link" >Home</Link>
        </li>
        <li className="nav-item">
          <Link to={'/about'} className="nav-link" >About</Link>
        </li>
        
        <li className="nav-item">
          <Link to={'/product'} className="nav-link">Product</Link>
        </li>
        <li className="nav-item">
          <Link to={'/services'} className="nav-link">Services</Link>
        </li>
        <li className="nav-item">
          <Link to={'/contact'} className="nav-link">Contact</Link>
        </li>
      </ul>
      <form className="d-flex">
          <Link to={'/quote'}><button className="btn btn-outline-primary" type="submit">Quote </button></Link>
    
      </form>
    </div>
  </div>
</nav>
  )
}

export default MenuBar