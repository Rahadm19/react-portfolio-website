import React from 'react'
import './nav.css'
import {AiTwotoneHome} from 'react-icons/ai' 
import {AiOutlineUser} from 'react-icons/ai'
import {GiSkills} from 'react-icons/gi'
import {FcServices} from 'react-icons/fc'
import {IoMdContact} from 'react-icons/io'
import { useState } from 'react'
const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#header" onClick={()=>setActiveNav('#header')} className={activeNav === '#' ? 'active': ''}><AiTwotoneHome/></a>
      <a href="#about" onClick={()=>setActiveNav ('#about')} className={activeNav === '#about' ? '#' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={()=>setActiveNav ('#')} className={activeNav === '#experience' ? '#' : ''}><GiSkills/></a>
      <a href="#services" onClick={()=>setActiveNav ('#services')} className={activeNav === '#services' ? '#' : ''}><FcServices/></a>
      <a href="#contact"  onClick={()=>setActiveNav ('#contact')} className={activeNav === '#contact' ? '#' : ''}><IoMdContact/></a>
    </nav>
  )
}

export default Nav