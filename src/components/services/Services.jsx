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
                <p>Gather and evaluate user requirements in collaboration with product managers and engineers</p>
              </li>
              <li>
                <AiFillCheckCircle className='service_list-icon'/>
                <p>Designing graphic user interface elements, like menus, tabs and widgets</p>
              </li>
              <li>
                <AiFillCheckCircle className='service_list-icon'/>
                <p>Build page navigation buttons and search fields</p>
              </li>
              <li>
                <AiFillCheckCircle className='service_list-icon'/>
                <p>Develop UI mockups and prototypes that clearly illustrate how sites function and look like</p>
              </li>
              <li>
                <AiFillCheckCircle className='service_list-icon'/>
                <p>Create original graphic designs (e.g. images, sketches and tables)</p>
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
                <p>creating website designs.</p>
              </li>
              <li>
                <AiFillCheckCircle className='service_list-icon'/>
                <p>producing sample sites</p>
              </li>
              <li>
                <AiFillCheckCircle className='service_list-icon'/>
                <p>meeting with clients to discuss requirements and/or project progress</p>
              </li>
              <li>
                <AiFillCheckCircle className='service_list-icon'/>
                <p>demonstrating and receiving feedback about draft sites</p>
              </li>
              <li>
                <AiFillCheckCircle className='service_list-icon'/>
                <p>keeping up to date with recent technological and software developments</p>
              </li>
              <li>
                <AiFillCheckCircle className='service_list-icon'/>
                <p>developing skills and expertise in appropriate software/programming languages such as HTML and Javascript</p>
                
              </li>
              <li>
                <AiFillCheckCircle className='service_list-icon'/>
                <p>creating products that are user-friendly, effective and appealing</p>

              </li>
              <li>
                <AiFillCheckCircle className='service_list-icon'/>
                <p>digital retouching and image editing</p>

              </li>
              <li>
                <AiFillCheckCircle className='service_list-icon'/>
                <p>working as part of a multidisciplinary team</p>

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