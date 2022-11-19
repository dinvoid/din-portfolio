import React from 'react'
import CV  from '../../assets/cv.pdf'
const MyCV = () => {
  return (
    <div className="cv">
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" class='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default MyCV