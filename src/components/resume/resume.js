import { Component } from "react";
import "./resume.css";
import ImgResume from  "../images/resume-img.png";
import {BsFacebook, BsInstagram } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillGithub } from "react-icons/ai";

class Resume extends Component{
    render(){
        return(
            <div className="resume-main-container" id="resume">
                <h2>Resume</h2>
                <div className="underline" />
                <div className="resume-container">
                    <div className="info-resume-container">
                        <div className="work-ex">
                            <h3>Work Experience</h3>
                            <hr/>
                            <div>
                                <div className="flex align-items space-between">
                                    <h4>SEO Intern - Full Time</h4>
                                    <span>Aug '21 - Oct '21</span>
                                </div>
                                <p>Sociolabs, Delhi.</p>
                            </div>
                        </div>
                        <div className="education">
                            <h3>Education</h3>
                            <hr/>
                            <div>
                                <div className="flex align-items space-between">
                                    <h4>Dr. D. Y. Patil College of Engineering, Pune</h4>
                                    <span>2016-2020</span>
                                </div>
                                <p>BE Computer Engineering</p>
                                <div className="flex align-items space-between">
                                    <h4>Citizen's School, Surat</h4>
                                    <span>2015-2016</span>
                                </div>
                                <p>HSC</p>
                            </div>
                        </div>
                    </div>
                    <div className="img-resume-container">
                        <img src={ImgResume} alt="resume-img"/>
                        <div className="social-links">
                            <BsFacebook/>
                            <BsInstagram/>
                            <AiFillTwitterCircle/>
                            <AiFillGithub/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Resume