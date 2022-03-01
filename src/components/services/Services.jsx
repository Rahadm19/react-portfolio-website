import React from 'react'
import './services.css'
 import {AiFillCheckCircle} from 'react-icons/ai'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h1>Services</h1>
      <div className="container services_container">
        <article className='service'>
            <div className="service_head">
              <h3>UI/UX Design</h3>
            </div>
            <ul className="service_list">
              <li>
                <AiFillCheckCircle className='service_list-icon'/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <AiFillCheckCircle className='service_list-icon'/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <AiFillCheckCircle className='service_list-icon'/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <AiFillCheckCircle className='service_list-icon'/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <AiFillCheckCircle className='service_list-icon'/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </li>
            </ul>
        </article>
        {/* end of ui/ux designn */}
        <article className='service'>
            <div className="service_head">
              <h3>Web Design & development </h3>
            </div>
            <ul className="service_list">
              <li>
                <AiFillCheckCircle className='service_list-icon'/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <AiFillCheckCircle className='service_list-icon'/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <AiFillCheckCircle className='service_list-icon'/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <AiFillCheckCircle className='service_list-icon'/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <AiFillCheckCircle className='service_list-icon'/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <AiFillCheckCircle className='service_list-icon'/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </li>
            </ul>
        </article>
        {/* end of Web development designn */}
        <article className='service'>
            <div className="service_head">
              <h3>Content Create</h3>
            </div>
            <ul className="service_list">
              <li>
                <AiFillCheckCircle className='service_list-icon'/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <AiFillCheckCircle className='service_list-icon'/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <AiFillCheckCircle className='service_list-icon'/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <AiFillCheckCircle className='service_list-icon'/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <AiFillCheckCircle className='service_list-icon'/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </li>
            </ul>
        </article>
        {/* end of content creation designn */}
        
      </div>
    </section>
  )
}

export default Services