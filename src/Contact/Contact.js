import React, { useRef } from 'react';
import emailjs from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import mail from '../asserts/mailz.jpeg'
import './Contact.css'
function Contact() {
  
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_3xx5y3f', 'template_0mu2wco', form.current, 'sO4Sodl-wAyRKxfJ2')
          .then((result) => {
            toast.success("🦄 Email sent successfully");
          }, (error) => {
              toast.warning('Email not sent!')
          });

          e.target.reset();
        }

  return (
    <div
      class="main-container fade-in"
      id="ContactMe"
      style={{ opacity: "5", transform: "translateY(1px)" }}
    >
     <div className="heading-container">
          <div class="screen-heading">
            <span>Contact Me</span>
          </div>
          <div class="screen-sub-heading">
            <span>Get In Touch</span>
          </div>
          <div className="heading-seperator">
            <div class="seperator-line"></div>
            <div class="seperator-blob">
              <div></div>
            </div>
          </div>
        </div>
      <div className="central-form">
        <div class="col">
          <h2 class="title">
            <p class="styles_typicalWrapper__1_Uvh">Get In Touch 📧</p>
          </h2>{" "}
          <a href="https://www.facebook.com/manoj.mahawar.9083477" target="_blank" rel="noreferrer">
            <i class="fa fa-facebook-square" id="fb" ></i>
          </a>
          <a href="https://www.instagram.com/manojmahawar_7805/" target="_blank" rel="noreferrer">
            <i class="fa fa-instagram" id="in" ></i>
          </a>
          <a href="https://github.com/lucifer186/" target="_blank" rel="noreferrer">
            <i className="fa fa-github" id="git"></i>
          </a>
          <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer">
            <i className="fa fa-linkedin" id="li"></i>
          </a>
        </div>
        <div className="back-form">
          <div class="img-back">
            <h4>Send Your Email Here!</h4>
            <img src={mail}/>
          </div>
          <form ref={form} onSubmit={sendEmail} >
            <p></p>
            <label htmlFor="name">Name</label>
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              
              required
            />
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              
              required
            />
            <label htmlFor="subject">Subject</label>
            <input name="subject" type="text"  placeholder='Subject..'  required/>
            <label htmlFor="messgae">Message</label>
            <textarea name="message" type="text" cols="3" rows="2" placeholder='Message...' required></textarea>
            <div class="send-btn">
              <button type="submit">
                send<i class="fa fa-paper-plane"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* <div class="scroll-container">
          <i class="fa fa-arrow-up"></i>
      </div> */}
      <ToastContainer />
    </div>
  );
}

export default Contact;
