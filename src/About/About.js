import React from "react";
import "./About.css";
function About() {
  return (
    <div class="about-me-container screen-container fade-in" id="AboutMe"   style= {{opacity: "5", transform: "translateY(1px)"}}>
      <div class="about-me-parent">
        <div class="heading-container">
          <div class="screen-heading">
            <span>About Me</span>
          </div>
          <div class="screen-sub-heading">
            <span>Why Choose Me?</span>
          </div>
          <div class="heading-seperator">
            <div class="seperator-line"></div>
            <div class="seperator-blob">
              <div></div>
            </div>
          </div>
        </div>
        <div class="about-me-card">
          <div class="about-me-profile"></div>
          <div class="about-me-details">
            <span class="about-me-description">
             Hi, I'm Manoj Mahawar.
             <br/>
             I design very simple website with simple code. Currently I am studying B.Tech from Indian Institute Technogy Dharwad from Electrical
             Engineering but I am interests in CS and I am learning Full stack development.I also know programming language like:
             Python, C/C++, JavaScript and php etc... At least I believe I know something good and I will can help you for your future projects..
             <br/>
             Thanks for taking your time....Have a good day!! 
            </span>
               
            <div class="about-me-options">
             <a href="#ContactMe" >
              <button class="btn primary-btn"> Hire Me </button>
             </a>
              <a href="RESUME.pdf" download="RESUME.pdf">
                <button class="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
