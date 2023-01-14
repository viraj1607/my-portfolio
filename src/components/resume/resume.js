import { Component } from "react";
import "./resume.css";
import ImgResume from "../images/resume-img.png";
import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillGithub } from "react-icons/ai";

class Resume extends Component {
  render() {
    return (
      <div className="resume-main-container" id="resume">
        <h2>Resume</h2>
        <div className="underline" />
        <div className="resume-container">
          <div className="info-resume-container">
            <div className="work-ex">
              <h3>Work Experience</h3>
              <hr />
              <div className="work-ex-info">
                <div className="flex align-items space-between">
                  <div>
                    <h4>SEO Intern - Full Time</h4>
                    <p>Sociolabs, Delhi.</p>
                  </div>
                  <span>Oct '20 - Dec '20</span>
                </div>
                <div className="flex align-items space-between">
                  <div>
                    <h4>Full Stack Developer - Full Time</h4>
                    <p>Melzo, Surat.</p>
                  </div>
                  <span>Nov '21 - Present</span>
                </div>
              </div>
            </div>
            <div className="education">
              <h3>Education</h3>
              <hr />
              <div className="education-info">
                <div className="flex align-items space-between">
                  <div>
                    <h4>Dr. D. Y. Patil College of Engineering, Pune</h4>
                    <p>BE Computer Engineering</p>
                  </div>
                  <span>2016 - 2020</span>
                </div>
                <div className="flex align-items space-between">
                  <div>
                    <h4>Citizen's School, Surat</h4>
                    <p>HSC</p>
                  </div>
                  <span>2014 - 2016</span>
                </div>
              </div>
            </div>
          </div>
          <div className="img-resume-container">
            <img src={ImgResume} alt="resume-img" />
            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/viraj-merai-b26733193"
                target="_blank"
              >
                <BsLinkedin />
              </a>
              <a href="https://www.instagram.com/virajmerai/" target="_blank">
                <BsInstagram />
              </a>
              <a href="https://twitter.com/VirajMerai" target="_blank">
                <AiFillTwitterCircle />
              </a>
              <a href="https://github.com/viraj1607" target="_blank">
                <AiFillGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
