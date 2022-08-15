import React from 'react'
import {Link} from "react-router-dom"
export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>
    
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <a className="navbar-brand mt-2 mt-lg-0" href="#">
            <Link to="/" className='Title-navbar-changer'>LUNA STORE</Link>
          </a>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link className="nav-link" to="/" >Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About" >About</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/Resalt" >Resalt</Link>
            </li>
          </ul>
        </div>
    
      <div className="d-flex align-items-center">
          <a className="text-reset me-3" href="#">
          </a>
    
         
          <div className="dropdown">
            <a
              className="text-reset me-3 dropdown-toggle hidden-arrow"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
            <i className="fas fa-shopping-cart"></i>
              <span className="badge rounded-pill badge-notification bg-danger">1</span>
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <li>
                <a className="dropdown-item" href="#">Bought</a>
              </li>
              <li>
                <a className="dropdown-item" href="#">Shoping News</a>
              </li>
              
            </ul>
          </div>
          <div className="dropdown">
            <a
              className="dropdown-toggle d-flex align-items-center hidden-arrow"
              href="#"
              id="navbarDropdownMenuAvatar"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                className="rounded-circle"
                height="25"
                alt="Black and White Portrait of a Man"
                loading="lazy"
              />
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuAvatar"
            >
              <li>
                <Link className="dropdown-item" to="/login" >Login</Link>
              </li>
              <li>
              <Link className="dropdown-item" to="/Setting" >Setting</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}
