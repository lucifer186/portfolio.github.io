import React from "react";
import "./Navbaar.css";
function Navbaar() {
  return (
    <>
    <div class="scroll-container">
    {/* <button class="btn-scroll"> */}
      {" "}
      <i class="fa fa-arrow-up"></i>
    {/* </button> */}
  </div>
    <div className="nav-container">
      <div className="nav-parent">
        <div class="header-hamburger">
           <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="bars"
            class="svg-inline--fa fa-bars fa-w-14 header-hamburger-bars"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            
            <path
              fill="currentColor"
              d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
            ></path> 
          </svg> 
          {/* <i class="svg-inline--fa fa-bars "></i> */}
        
        </div>
        <div className="header-logo">
          <span>PORTFOLIO </span>
        </div>
        <div className="header-options">
          <div class="header-option header-option-seperator">
           <span><a href="#header" id="h" >Home</a></span> 
          </div>
          <div class="header-option header-option-seperator ">
           <span><a href="#AboutMe" >AboutMe</a></span> 
          </div>
          <div class="header-option header-option-seperator ">
          <span> <a href="#resume">Resume</a></span>
          </div>
          <div class="header-option ">
           <span> <a href="#ContactMe">ContactMe</a></span>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Navbaar;
