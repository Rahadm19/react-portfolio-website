import React from 'react'
import './footer.css'
import {BsFacebookv} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'></a>
      <ul className='peramalink'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimornial">Testimornial</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        
        <a href=""> <AiFillInstagram /></a>
        <a href=""> <BsTwitter /></a>
      </div>
      <small className="copyright">
        Copyright by @rahad
      </small>
    </footer>
  )
  
}

export default Footer
