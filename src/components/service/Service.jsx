import React from 'react'
import './service.css'
import Webdev  from '../../assets/webdev.svg'
import Art  from '../../assets/art.svg'
import Webdes from '../../assets/webdes.svg'

const Service = () => {
  return (
    <section id="services">
       <h5 id="">My Services</h5>
       <h2>What I Do</h2>
       <div className="container">
         <div className="service-container">
            <div className="service">
                <img src={Webdev} alt="develop" />
                <div>
                <h3>Web Design</h3>
                <p>Gives you a unique website design that is ideal for your personal or company website.</p>  
                <button>More</button> 
                </div>
            </div>
            <div className="service">
               <img src={Art} alt="art" />
               <div>
               <h3>Drawing/Sketching</h3>
               <p>Offer hand drawing using pencil, graphite and charcoal.</p>
               <button>More</button> 
               </div>
            </div>
            <div className="service">
               <img src={Webdes} alt="design" />
               <div>
               <h3>Web Develop</h3>
               <p>Develop highly interactive Front end / User Interfaces for your web and mobile applications.</p>
               <button>More</button>     
               </div>  
            </div>
         
         </div> 
       </div>   
    </section>
  )
}

export default Service