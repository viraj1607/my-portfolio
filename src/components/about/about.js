import { Component } from "react";
import ImgAbout from "../images/about-img.png"
import ImgHtml from "../images/html-logo.png"
import ImgCss from "../images/css-logo.png"
import ImgJs from "../images/js-logo.png"
import ImgReact from "../images/react-logo.png"
import ImgGh from "../images/github-logo.png"
import ImgPy from "../images/python-logo.png"
import './about.css'

class About extends Component{
    render(){
        return(
            <div className="about-container" id='about'>
                <div className="img-about-conatiner">
                    <img src={ImgAbout} alt="about-img"></img>
                </div>
                <div className="info-about-conatiner">
                    <h2>About Me</h2>
                    <div className="underline"/>
                    <p>I'm a web designer and front-end developer with 7 years of professional experience. I'm interested in all kinds of visual communication, but my major focus is on designing web, mobile and tablet interfaces. I also have skills in other fields like branding, icon design or web development.</p>
                    <p>I enjoy turning complex problems into simple, beautiful and intuitive designs. When I'm not pushing pixels, you'll find me cooking, gardening or working out in the park.</p>
                    <div className="tech-logos">
                        <h5>Languages/Library/Technology</h5>
                        <div className="tech-logos-flex">
                            <img src={ImgHtml} alt="html-logo"/>
                            <img src={ImgCss} alt="css-logo"/>
                            <img src={ImgJs} alt="js-logo"/>
                            <img src={ImgReact} alt="react-logo"/>
                            <img src={ImgGh} alt="github-logo"/>
                            <img src={ImgPy} alt="python-logo"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;