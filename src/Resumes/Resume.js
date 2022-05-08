import React from "react";
import eduction from '../asserts/education.png'
import inter from '../asserts/inter.png'
import skill from '../asserts/skill.png'
import project from '../asserts/project.png'
import "./Resume.css";
function Resume() {
  return (
    <div
      className="resume-container  screen-container fade-in"
      style={{ opacity: "5", transform: "translateY(1px)" }}
      id="resume"
    >
      <div className="resume-content">
        <div className="heading-container">
          <div class="screen-heading">
            <span>Resume</span>
          </div>
          <div class="screen-sub-heading">
            <span>My formal Bio Details</span>
          </div>
          <div className="heading-seperator">
            <div class="seperator-line"></div>
            <div class="seperator-blob">
              <div></div>
            </div>
          </div>
        </div>
        <div className="resume-card">
          <div className="resume-bullets ">
            <div className="bullet-container">
              <div class="bullet-icons"></div>
              <div className="bullets">
                <div className="bullet selected-bullet ">
                  <img
                    class="bullet-logo"
                    src={eduction}
                    alt="B"
                  />
                 <a href="#edu"> <span class="bullet-label">Education</span></a>
                </div>
                <div className="bullet">
                  <img
                    class="bullet-logo"
                    src={project}
                    alt="B"
                  />
                <a href="#skil" ><span class="bullet-label">Programming Skills</span></a>
                </div>
                <div className="bullet">
                  <img
                    class="bullet-logo"
                    src={skill}
                    alt="B"
                  />
                 <a href="#pro"> <span class="bullet-label">Projects</span></a>
                </div>
                <div className="bullet">
                  <img
                    class="bullet-logo"
                    src={inter}
                    alt="B"
                  />
                  <a href="#int" ><span class="bullet-label">Interests</span></a>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-bullets-details">
            <div class="resume-details-carousal">
              <div class="resume-screen-container " id="edu">
                <div class="resume-heading">
                  <div class="resume-main-heading">
                    <div class="heading-bullet"></div>
                    <span>Royal Academy School</span>
                    <div class="heading-date">2018-2019</div>
                  </div>
                  <div class="resume-sub-heading">
                    <span>Percentage: 85% </span>
                  </div>
                  <div class="resume-heading-description">
                    <span></span>
                  </div>
                </div>
                <div class="resume-heading">
                  <div class="resume-main-heading">
                    <div class="heading-bullet"></div>
                    <span>Indian Institute of Technogy Dharwad</span>
                    <div class="heading-date">2019-2023</div>
                  </div>
                  <div class="resume-sub-heading">
                    <span>B.Tech from Electrical Engineering</span>
                  </div>
                  <div class="resume-heading-description">
                    <span></span>
                  </div>
                </div>
              </div>
              
              <div class="resume-screen-container programming-skills-container" id="skil" >
                <div class="skill-parent">
                  <div class="heading-bullet"></div>
                  <span>JavaScript</span>
                  <div class="skill-percentage">
                    <div
                      class="active-percentage-bar"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>
                <div class="skill-parent">
                  <div class="heading-bullet"></div>
                  <span>React JS</span>
                  <div class="skill-percentage">
                    <div
                      class="active-percentage-bar"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>
                <div class="skill-parent">
                  <div class="heading-bullet"></div>
                  <span>PHP</span>
                  <div class="skill-percentage">
                    <div
                      class="active-percentage-bar"
                      style={{ width: "50%" }}
                    ></div>
                  </div>
                </div>
                <div class="skill-parent">
                  <div class="heading-bullet"></div>
                  <span>Express JS</span>
                  <div class="skill-percentage">
                    <div
                      class="active-percentage-bar"
                      style={{ width: "50%" }}
                    ></div>
                  </div>
                </div>
                <div class="skill-parent">
                  <div class="heading-bullet"></div>
                  <span>Node JS</span>
                  <div class="skill-percentage">
                    <div
                      class="active-percentage-bar"
                      style={{ width: "89%" }}
                    ></div>
                  </div>
                </div>
                <div class="skill-parent">
                  <div class="heading-bullet"></div>
                  <span>Mongo Db</span>
                  <div class="skill-percentage">
                    <div
                      class="active-percentage-bar"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                </div>
                <div class="skill-parent">
                  <div class="heading-bullet"></div>
                  <span>SQL</span>
                  <div class="skill-percentage">
                    <div
                      class="active-percentage-bar"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div>
                <div class="skill-parent">
                  <div class="heading-bullet"></div>
                  <span>HTML</span>
                  <div class="skill-percentage">
                    <div
                      class="active-percentage-bar"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>
                <div class="skill-parent">
                  <div class="heading-bullet"></div>
                  <span>CSS</span>
                  <div class="skill-percentage">
                    <div
                      class="active-percentage-bar"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                </div>
              </div>
              <div class="resume-screen-container" id="pro">
                <div class="resume-heading" id="res1">
                  <div class="resume-main-heading">
                    <div class="heading-bullet"></div>
                    <span id="per">Personal Portfolio Website</span>
                    <div class="heading-date" id="f1">2021-2022</div>
                  </div>
                  <div class="resume-sub-heading" id="tech1">
                    <span>Technologies Used: React JS, Bootsrap</span>
                  </div>
                  <div class="resume-heading-description" id="d1">
                    <span>
                      A Personal Portfolio website to showcase all my details
                      and projects at one place.
                    </span>
                  </div>
                </div>
                <div class="resume-heading" id="res2" >
                  <div class="resume-main-heading">
                    <div class="heading-bullet"></div>
                    <span id="net">Netflix Clone </span>
                    <div class="heading-date" id="f2">2021-2022</div>
                  </div>
                  <div class="resume-sub-heading" id="tech2">
                    <span>Technologies Used: React Js(useEfect), Firebase, Redux</span>
                  </div>
                  <div class="resume-heading-description" id="d2">
                    <span>
                     A simple netflix clone based on authentication using Firebase.
                    </span>
                  </div>
                </div>
                <div class="resume-heading" id="res3">
                  <div class="resume-main-heading">
                    <div class="heading-bullet"></div>
                    <span id="ele">Electronic lock </span>
                    <div class="heading-date" id="f3">2020-2021</div>
                  </div>
                  <div class="resume-sub-heading" id="tech3">
                    <span>
                      Technologies Used: Basic logic gate, Electric wire, LED light, Breadboard. 
                    </span>
                  </div>
                  <div class="resume-heading-description" id="digit">
                    <span>
                     A 4 digit electronic code lock using two-input basic logics gates. An electronic lock opens only for certain combinations
                     of digits inputs match.
                    </span>
                  </div>
                </div>
              </div>
              <div class="resume-screen-container" id="int">
                <div class="resume-heading">
                  <div class="resume-main-heading">
                    <div class="heading-bullet"></div>
                    <span>Learning</span>
                    <div></div>
                  </div>
                  <div class="resume-sub-heading">
                    <span></span>
                  </div>
                  <div class="resume-heading-description" id="re1" >
                    <span>
                      I am very excited to learning new things no matter what because its give me new knowledge
                      and I aslo love to teach people what i know simply because i
                      believe in sharing.
                    </span>
                  </div>
                </div>
                <div class="resume-heading">
                  <div class="resume-main-heading">
                    <div class="heading-bullet"></div>
                    <span>Music</span>
                    <div></div>
                  </div>
                  <div class="resume-sub-heading">
                    <span></span>
                  </div>
                  <div class="resume-heading-description" id="re2" >
                    <span>
                      Listening to soothing music is something i can never
                      compromise with, skimming through Spotify's pop songs
                      charts is at times the best stress reliever that i can get
                      my hands on.
                    </span>
                  </div>
                </div>
                <div class="resume-heading">
                  <div class="resume-main-heading">
                    <div class="heading-bullet"></div>
                    <span>Competitive Gaming</span>
                    <div></div>
                  </div>
                  <div class="resume-sub-heading">
                    <span></span>
                  </div>
                  <div class="resume-heading-description" id="re3" >
                    <span>
                      I like to challenge my reflexes a lot while competing in
                      football games, pushing the rank and having interactive
                      gaming sessions excites me the most.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
