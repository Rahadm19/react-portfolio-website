import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What skill I have</h5>
      <h1>My experience</h1>
      <div className="container experience_container">
        <div className="experience_fontend">
            <h3 className='text-center'>Fontend Development</h3>
            <div className="experience_content">
              <article className='experience_details'>
      	          
                   <h5 className='experience-p'><BsFillPatchCheckFill /> HTML</h5>
                  <small className='text-lights'>This is here</small>
              </article>
              <article className='experience_details'>
      	          
                   <h5 className='experience-p'><BsFillPatchCheckFill /> CSS</h5>
                  <small className='text-lights'>This is here</small>
              </article>
              <article className='experience_details'>
      	          
                   <h5 className='experience-p'><BsFillPatchCheckFill /> TAILWIND</h5>
                  <small className='text-lights'>This is here</small>
              </article>
              <article className='experience_details'>
      	          
                   <h5 className='experience-p'><BsFillPatchCheckFill /> BOOTSTRAP</h5>
                  <small className='text-lights'>This is here</small>
              </article>
              <article className='experience_details'>
      	          
                   <h5 className='experience-p'><BsFillPatchCheckFill /> JAVA-SCRIPT</h5>
                  <small className='text-lights'>This is here</small>
              </article>
              <article className='experience_details'>
      	          
                   <h5 className='experience-p'><BsFillPatchCheckFill /> REACT</h5>
                  <small className='text-lights'>This is here</small>
              </article>
            </div>
        </div>
        <div className="experience_backend">
        <h3 className='text-center'>Fontend Development</h3>
            <div className="experience_content">
              <article className='experience_details'>
      	          
                   <h5 className='experience-p'><BsFillPatchCheckFill />      Node Js </h5>
                  <small className='text-lights'>This is here</small>
              </article>
              <article className='experience_details'>
      	          
                   <h5 className='experience-p'><BsFillPatchCheckFill /> MongoDB</h5>
                  <small className='text-lights'>This is here</small>
              </article>
              <article className='experience_details'>
      	          
                   <h5 className='experience-p'><BsFillPatchCheckFill /> PHP</h5>
                  <small className='text-lights'>This is here</small>
              </article>
              <article className='experience_details'>
      	          
                   <h5 className='experience-p'><BsFillPatchCheckFill /> LARRABEL</h5>
                  <small className='text-lights'>This is here</small>
              </article>
              <article className='experience_details'>
      	          
                   <h5 className='experience-p'><BsFillPatchCheckFill /> MySQL</h5>
                  <small className='text-lights'>This is here</small>
              </article>
              <article className='experience_details'>
      	          
                   <h5 className='experience-p'><BsFillPatchCheckFill /> React</h5>
                  <small className='text-lights'>This is here</small>
              </article>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
