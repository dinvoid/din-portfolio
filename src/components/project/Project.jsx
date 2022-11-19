import React from 'react'
import './project.css'
import {Link} from 'react-router-dom';
import Project1 from "../../assets/portfolioimage.png";
import Project2 from "../../assets/weatherapp1.png";
import Project3 from "../../assets/dinasaur.png";
import Project4 from "../../assets/guessnum.png";
import Project5 from "../../assets/feedbackport.png";
import Project6 from "../../assets/crud1.png";
const Project = () => {
  return (
    <section id="projects">
       <h5 id="">Featured Projects</h5>
       <h2>This is my projects</h2>

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
          <span class="code">EmailJS</span>
          <span class="code">CSS</span>
        </div>      
        </a> 

        <a
         href="https://github.com/dinvoid/Weather-APP"
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
         href="https://github.com/dinvoid/DinasaurGame"
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
         href="https://github.com/dinvoid/guessthenumber"
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
         href="https://github.com/dinvoid/CRUD-PHP"
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
      </div>
    </div>

    <div class="view-project">   
    
    <Link to="Allproject"><a class="btn btn-primary" href="projects">View All Projects</a>  </Link>          
	  </div>
  </section>
  )
}

export default Project