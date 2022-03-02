import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h1>Contact Me</h1>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <AiOutlineMail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>rahadm19@gmail.com</h5>
            <a href="mailto:rahadm19@gmail.com">Send a message</a>
          </article>
          <article className="contact_option">
            <BsFacebook className='contact_option-icon'/>
            <h4>Facebook</h4>
            <h5>Ra Had</h5>
            <a href="https://web.facebook.com/ra.had.908132/" target='_blank' rel="noreferrer">Go to facebook</a>
          </article>
          <article className="contact_option">
            <IoLogoWhatsapp className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+8801703363009</h5>
            <a href="https://api.whatsapp.com/send?phone=+8801703363009" target='_blank' rel="noreferrer" >Send a message</a>
          </article>

        </div>
        <form action="">
          <input type="text" name='name' placeholder='Your full Name' required/>
          <input type="email" name='email' placeholder='Your Mail' required/>
          <textarea name="message"  rows="7" placeholder='Your Message'></textarea>
          <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
