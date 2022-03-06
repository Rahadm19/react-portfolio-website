import React from 'react'
import './header.css'
import Cta from './Cta'
import Me from '../../assets/best.png'
import Headersocial from './Headersocial'

const Header = () => {
  return (
    <header>
      <div id='header' className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Rahad</h1>
        <h5 className='text-light'>Technical Sales Engineer</h5>
        <h5 className='text-light'>Fullstack Developer</h5>
        <Cta />
        <Headersocial />

        <div className="me">
          <img src={Me} alt="" />
        </div>

         <a href="#contact" className='scroll-down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
