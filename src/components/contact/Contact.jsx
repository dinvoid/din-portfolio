import React, { useRef } from 'react';
import './contact.css'
import IMAGECONTACT from "../../assets/contac-me.png"
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_5z10vl3', 'template_yhjh9sp', form.current, 'l1jNu28necArOT9Td')
        .then((result) => {
            console.log(result.text);
            console.log("message sent");
        }, (error) => {
            console.log(error.text);
            console.log("message not sent");
        });
    };
  return (
    
      <section id="contact">
      <h5 id="">Contact Me</h5>
      <h2>Get in touch</h2>

      <div className="container contact-container">

            <div className="details content">
                <h3 id>Hi, Let's have a chat.</h3>
                <p>I'd love if you reached out to me.</p>
                <div className="image">
                <img src={IMAGECONTACT} alt="contact" />
                </div>
                <p>Contact Information</p>
                <p> <a href="tel:09655776202">09655776202</a></p>
                <p><a href="mailto: dincanoybetalmos@gmail.com">dincanoybetalmos@gmail.com</a></p>
                
                
              
               


            </div>
        
            <div className="details form">
                <h1>Contact Me</h1>
                <form ref={form} onSubmit={sendEmail}>
                <div>
                    <label>Name</label>
                    <input type="text" name="user_name" required />
                </div>
                <div>
                    <label>Your email</label>
                    <input type="email" name="user_email" required />
                </div>
                <div>
                    <label>Your message</label>
                    <textarea name="message" cols="30" rows="6">
                    </textarea>
                </div>
                <div>
                    <input id="submit" type="submit" vlaue="send"/>
                </div>  
              </form>
            </div>
      </div>
      
   </section>
   
  )
}

export default Contact