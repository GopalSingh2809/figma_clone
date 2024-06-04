import React from 'react'
import "../styles/Features.css"
import mobile from "../images/Features.png"

const Features = () => {
  return (
    <div>
      <div className="left">
        <div className="first-ellipse"></div>
        <div className="second-ellipse"></div>
        <div className="third-ellipse"></div>
        <img src={mobile} alt="mobile" className='mobile'/>
      </div>
      <div className="right">
        {/* Headings */}
        <p className='heading'>Features</p>
        <h1 className='title'>Uifry Premium</h1>
        {/* Description */}
        <p className='def-heading'>Budgeting Intervals</p>
        <p className='def-desc'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, itaque. Necessitatibus architecto natus, quaerat tempora voluptate illo rem quidem quas.
        </p>
        <p className='def-heading'>Budgeting Intervals</p>
        <p className='def-desc'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, itaque. Necessitatibus architecto natus, quaerat tempora voluptate illo rem quidem quas,
        </p>
        <p className='def-heading'>Budgeting Intervals</p>
        <p className='def-desc'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, itaque. Necessitatibus architecto natus, quaerat tempora voluptate illo rem quidem quas
        </p>
      </div>
    </div>
  )
}

export default Features
