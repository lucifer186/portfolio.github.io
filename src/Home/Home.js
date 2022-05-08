import React from "react";
import "./Home.css";
import Typical from "react-typical";
function Home() {
  return (
    <div className="profile">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="col">
            <div className="col-icon">
              <a href="https://www.facebook.com/manoj.mahawar.9083477" target="_blank" rel="noreferrer">
                <i className="fa fa-facebook-square " id="fb" ></i>
              </a>
              <a href="https://www.instagram.com/manojmahawar_7805/" target="_blank" rel="noreferrer">
                <i className="fa fa-instagram" id="in" ></i>
              </a>
              <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer">
                <i className="fa fa-linkedin" id="li" ></i>
              </a>
              <a href="https://github.com/lucifer186/" target="_blank"rel="noreferrer" >
                <i className="fa fa-github" id="git" ></i>
              </a>
            </div>
          </div>
          <div className="portfolio-details-name">
            <span className="primary-text"  >
              {""}
              Hello, I am <span className="highlighted-text">Manoj</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "FrontEnd development",
                    1000,
                    "Backend development📮",
                    1000,
                    "Programming🌐",
                    1000,
                  ]}
                  wrapper="p"
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building application with front and back end
                operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <a href="#ContactMe" >

            <button className="btn primary-btn"  >
              {""}
              Let's Talk
            </button>
            </a>
            <a href="RESUME.pdf" download="RESUME.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
