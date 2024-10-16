import React from 'react'
import logo from '../../assets/imges/nav/logo.png'
export default function NavBar() {
  return (
    <>
    <nav className="navbar">
      <div className="logo">
        
        <img src={logo} alt="Logo" />
      </div>
      <ul className="nav-menu">
        <li><a href="#">Become a renter</a></li>
        <li><a href="#">Rental deals</a></li>
        <li><a href="#">How it work</a></li>
        <li><a href="#">Why choose us</a></li>
      </ul>
      <div className="nav-buttons">
        <button>Sign   
 In</button>
        <button>Sign Up</button>
      </div>
    </nav>
    </>
  )
}
