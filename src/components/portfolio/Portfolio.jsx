import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio.png'
import IMG2 from '../../assets/portfolio.png'
import IMG3 from '../../assets/portfolio.png'
import IMG4 from '../../assets/portfolio.png'
import IMG5 from '../../assets/portfolio.png'
import IMG6 from '../../assets/portfolio.png'

// object 
const data = [
  {
    id:1,
    image: IMG1,
    title: " Responsive Portfolio By bootsrap 5",
    github: "https://github.com/Rahadm19",
    demo: "https://rahadm19.github.io/myportfolio/"
  },
  {
    id:2,
    image: IMG2,
    title: "Bank transection history",
    github: "https://github.com/Rahadm19",
    demo: "https://rahadm19.github.io/Baper-bank/"
  },
  {
    id:3,
    image: IMG3,
    title: "Responsive Panda products",
    github: "https://github.com/Rahadm19",
    demo: "https://rahadm19.github.io/panda-products-bootstrap/"
  },
  {
    id:4,
    image: IMG4,
    title: "Responsive penguin Fation",
    github: "https://github.com/Rahadm19",
    demo: "https://rahadm19.github.io/Panguein-Fashion/"
  },
  {
    id:5,
    image: IMG5,
    title: "This  is  the world length converter",
    github: "https://github.com/Rahadm19",
    demo: "https://rahadm19.github.io/myportfolio/"
  },
  {
    id:6,
    image: IMG6,
    title: "This  is  the world length converter",
    github: "https://github.com/Rahadm19",
    demo: "https://rahadm19.github.io/myportfolio/"
  }
  
  
  ]

const Portfolio = () => {
  return (
    <section>
    <h5>My Recent work</h5>
    <h1>Portfolio</h1>
    <div className="container portfolio_container">
      {
        data.map(({id, image, title
        , github,demo}) =>{
          return (
            <article key={id} className="portfolio_item">
        <div className="portfolio_item-image">
               <img src={image
              } alt={title} />
        </div>
          <h3>{title}</h3>
          <div className="porfolio_item-cta">
          <a href={github} className='btn' target='_blank'>Github</a>
          <a href={demo} className='btn btn-primary' target='_blank'>Live Demo </a>
          </div>
      </article>
          )
        })
      }
    </div>
    </section>
  )
}

export default Portfolio