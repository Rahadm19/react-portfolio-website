import React from 'react'
import './about.css'
import Me from '../../assets/best1.jpg'
import {BsAward} from 'react-icons/bs'
import {RiUserSettingsLine} from 'react-icons/ri'
import {FcFolder} from 'react-icons/fc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h1>About Me</h1>
      <div className="container about_container">
        <div className="about_me">
            <div className="about_me-image">
              <img src={Me} alt="" />
            </div>
        </div>
        <div className="about_content">
            <div className="about_cards">
              <article className='about_card'>
                <BsAward className='about-icon'/>
                <h5>Experience</h5>
                <small>1+ Year working</small>
              </article>
              <article className='about_card'>
                <RiUserSettingsLine className='about-icon'/>
                <h5>Clients</h5>
                <small>200+ Worldwide</small>
              </article>
              <article className='about_card'>
                <FcFolder className='about-icon'/>
                <h5>Projects</h5>
                <small>100+ Projects</small>
              </article>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto cupiditate eveniet voluptatem, ipsa velit reprehenderit quae, eum ratione mollitia consectetur quo. Dolorum dicta, perferendis illum vero tenetur eligendi ex expedita!</p>
            <a href="#contact" className='btn buton btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
