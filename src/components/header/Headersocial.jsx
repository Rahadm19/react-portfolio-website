import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'

const Headersocial = () => {
  return (
    <div className='header_social'>
        <a href="http://linkedin.com" target="_blank"><BsLinkedin/></a>
        <a href="http://github.com" target="_blank"><BsGithub /></a>
        <a href="http://facebook.com" target="_blank"><BsFacebook/></a>
    </div>
  )
}

export default Headersocial