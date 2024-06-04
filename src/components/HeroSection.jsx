import React from 'react'
import "../styles/HeroSection.css";
import image from "../images/360_F_109403483_qocRmeSFXJ6KlF3yoaDBuI3CZOiNGfCw.jpg";
import star from "../images/Star1.png";
import firstImg from "../images/mobile1-removebg.png";
import secondImg from "../images/mobile2-removebg-preview.png";
import thirdImg from "../images/mobile3-removebg-preview.png";

const HeroSection = () => {
  return (
    <div>
      <div className="hero-title">
        <p className='title'>Make The Best Financial Decisions</p>
      </div>
      <div className="desc">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum unde reiciendis nemo cumque! Odit pariatur, rem error eius eum, ad sed commodi, sit illo numquam eaque mollitia aperiam? </p>
      </div>
      <div className="start-btn">
        <button type="button" className='btn'>Get Started</button>
      </div>
      <div className="video-btn">
        <img src={image} alt="" className='play'/>
        <span>Watch Video</span>
      </div>

      <div className="aside-image">
        <div className="first-ellipse"></div>
        <div className="second-ellipse"></div>
        <div className="third-ellipse"></div>
        <img src={firstImg} alt="first-mobile" className='firstImg'/>
        <img src={secondImg} alt="second-mobile" className='secondImg'/>
        <img src={thirdImg} alt="third-mobile" className='thirdImg'/>
      </div>

      <div className='left-side'>
        <p className='text'>a</p>
        <div className='inner-element'>
          <div className="premium">
            <p className='premium-title'>Uifry Premium</p>
            <p className='premium-subtitle'>Free Trial</p>
          </div>
          <div className="inner-rect">
            <div className="rectangle"></div>
            <div className="inner-text">
              <div className='group1'></div>
              <div className='group2'></div>
            </div>
          </div>
          <p className='normal-text'>Make the best financial decisions</p>
          <div className="rect1"></div>
          <div className="rect2"></div>
          <img src={star} alt="" srcset="" className='star5'/>
          <div className="rect2_1"></div>
          <div className="rect3"></div>
          <div className="rect4"></div>
          <div className="rect5"></div>
        </div>
      </div>
      {/* Stars */}
      <img src={star} alt="star" className='star1'/>
      <img src={star} alt="star" className='star2'/>
      <img src={star} alt="star" className='star3'/>
      <img src={star} alt="star" className='star4'/>
    </div>
  )
}

export default HeroSection
