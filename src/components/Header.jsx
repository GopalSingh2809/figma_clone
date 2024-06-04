import React from 'react';
import logo from "../images/logo.png"
import "../styles/Header.css"
const Header = () => {
  return (
    <div className='header-container'>
      <div className="logo">
        <img src={logo} alt="logo" className='logo-img'/>
        <h1 className='logo-heading'>Uifry<sup style={{fontWeight:"lighter",fontSize:"6px"}}>TM</sup></h1>
      </div>
      <div className="links">
        <ul className='nav-links'>
          <li><span style={
            {color:"#FF5555",fontWeight:"bold"}
          }>Home</span></li>
          <li>About Us</li>
          <li>Pricing</li>
          <li>Features</li>
        </ul>
      </div>
      <div className="download-btn">
        <button type="button" className='btn'>Download</button>
      </div>
    </div>
  )
}

export default Header
