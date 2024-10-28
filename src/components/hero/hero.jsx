import React from 'react'
import './hero.css'
import { Link } from 'react-router-dom'; 
import dark_arrow from '../../assets/dark_arrow.png'
const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h3>Trusted Friend WingMan</h3>
        <h1>We will be always there for you</h1>
        <p>
        WINGMAN is your trusted farmer friend—a web-based platform designed to revolutionize the way consumers purchase fresh produce by connecting them directly with local farmers. By cutting out the middlemen, WINGMAN ensures fair pricing, better profits for farmers, and fresher, more affordable products for consumers.
        </p>
        <Link to="/login">  
          <button className='getbtn'><span>Get Started</span> <img src={dark_arrow} alt=""/></button>
        </Link>
      </div>
    </div>
  )
}

export default Hero