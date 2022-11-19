import React from 'react'
import './allproject.css'
import Project1 from "../../assets/portfolioimage.png";
import Project2 from "../../assets/weatherapp1.png";
import Project3 from "../../assets/dinasaur.png";
import Project4 from "../../assets/guessnum.png";
import Project5 from "../../assets/feedbackport.png";
import Project6 from "../../assets/crud1.png";
import Project7 from "../../assets/javadocumentation.png";
import Project8 from "../../assets/clock.png";
import Project9 from "../../assets/qoutes.png";
const Allproject = () => {
  return (
    <section id="projects">
       <h5 id="">Featured Projects</h5>
       <h2>This is my projects</h2>
       <div id='project-type'>
        <span>Web Development</span><span>Game Development</span><span>Art</span>
       </div>

    <div className='container'>

      <div className='project-grid' >
      <a
         href="#ok"
         class="project project-tile"
        >
        <img src={Project1}  class="project-image" alt="project" /> 
          <p class="project-title">
            <span class="code">&lt;</span>
            Portfolio
            <span class="code">&#47;&gt;</span>            
          </p>  
          
        <div class="language">
          <span class="code">React</span>
          <span class="code">Emailjs</span>
          <span class="code">CSS</span>
        </div>      
        </a> 

        <a
         href="ok"
         class="project project-tile"
        >
        <img src={Project2}  class="project-image" alt="project" /> 
        <p class="project-title">
            <span class="code">&lt;</span>
            Weather App
            <span class="code">&#47;&gt;</span>
          </p>  

        <div class="language">
          <span class="code">HTML/CSS</span>
          <span class="code">Javascript</span>
          <span class="code">Weather Api</span>
        </div>   
        </a> 

        <a
         href="#ok"
         class="project project-tile"
        >
        <img src={Project3}  class="project-image" alt="project" /> 
        <p class="project-title">
            <span class="code">&lt;</span>
            Dinasaur Game
            <span class="code">&#47;&gt;</span>
          </p>
          <div class="language">
          <span class="code">HTML</span>
          <span class="code">CSS</span>
          <span class="code">Javascript</span>
        </div>     
        </a> 

        <a
         href="#ok"
         class="project project-tile"
        >
        <img src={Project4}  class="project-image" alt="project" /> 
          <p class="project-title">
            <span class="code">&lt;</span>
            Guess The Number
            <span class="code">&#47;&gt;</span>            
          </p>  
          
        <div class="language">
          <span class="code">HTML</span>
          <span class="code">CSS</span>
          <span class="code">Javascript</span>
        </div>      
        </a> 

        <a
         href="ok"
         class="project project-tile"
        >
        <img src={Project5}  class="project-image" alt="project" /> 
        <p class="project-title">
            <span class="code">&lt;</span>
            Student Feedback
            <span class="code">&#47;&gt;</span>
          </p>  

        <div class="language">
          <span class="code">Java</span>
          <span class="code">MySql</span>
          <span class="code">Neatbeans</span>
        </div>   
        </a> 

        <a
         href="#ok"
         class="project project-tile"
        >
        <img src={Project6}  class="project-image" alt="project" /> 
        <p class="project-title">
            <span class="code">&lt;</span>
            CRUD-PHP
            <span class="code">&#47;&gt;</span>
          </p>
          <div class="language">
          <span class="code">PHP/Mysql</span>
          <span class="code">Bootstrap</span>
          <span class="code">Vanilla JS</span>
        </div>     
        </a> 

        <a
         href="https://github.com/dinvoid/java-documentation-page"
         class="project project-tile"
        >
        <img src={Project7}  class="project-image" alt="project" /> 
        <p class="project-title">
            <span class="code">&lt;</span>
            Java Documentation Page
            <span class="code">&#47;&gt;</span>
          </p>
          <div class="language">
          <span class="code">HTML</span>
          <span class="code">CSS</span>
        
        </div>     
        </a> 

        <a
         href="https://github.com/dinvoid/clock"
         class="project project-tile"
        >
        <img src={Project8}  class="project-image" alt="project" /> 
        <p class="project-title">
            <span class="code">&lt;</span>
            Clock
            <span class="code">&#47;&gt;</span>
          </p>
          <div class="language">
          <span class="code">HTML</span>
          <span class="code">CSS</span>
          <span class="code">Vanilla JS</span>
        </div>     
        </a> 

        <a
         href="https://github.com/dinvoid/random-qoute-generator"
         class="project project-tile"
        >
        <img src={Project9}  class="project-image" alt="project" /> 
        <p class="project-title">
            <span class="code">&lt;</span>
            Qoutes-Generator
            <span class="code">&#47;&gt;</span>
          </p>
          <div class="language">
          <span class="code">HTML</span>
          <span class="code">CSS</span>
          <span class="code">JQUERY</span>
        </div>     
        </a> 
      </div>
    </div>
    
   
  </section>
  )
}

export default Allproject