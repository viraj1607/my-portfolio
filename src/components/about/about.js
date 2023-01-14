import { Component } from "react";
import ImgAbout from "../images/about-img.png";
import ImgHtml from "../images/html-logo.png";
import ImgCss from "../images/css-logo.png";
import ImgJs from "../images/js-logo.png";
import ImgReact from "../images/react-logo.png";
import ImgGh from "../images/github-logo.png";
import ImgUn from "../images/unreal.png";
import "./about.css";

class About extends Component {
  render() {
    return (
      <div className="about-container" id="about">
        <div className="img-about-conatiner">
          <img src={ImgAbout} alt="about-img"></img>
        </div>
        <div className="info-about-conatiner">
          <h2>About Me</h2>
          <div className="underline" />
          <p>
            I am an aspiring Full Stack Developer. I have an academic background
            in Computer Engineering. I have gained knowledge in Web Designing
            and Front End Development. Apart from it I have knowledge in Digital
            Marketing. I am seeking an opportunity where I can contribute the
            best through my skills.{" "}
          </p>
          <p>
            In my leisure time, you'll find me analyzing stocks, painting or
            reading.
          </p>
          <div className="tech-logos">
            <h5>Languages/Library/Technology</h5>
            <div className="tech-logos-flex">
              <img src={ImgHtml} alt="html-logo" />
              <img src={ImgCss} alt="css-logo" />
              <img src={ImgJs} alt="js-logo" />
              <img src={ImgReact} alt="react-logo" />
              <img src={ImgGh} alt="github-logo" />
              <img src={ImgUn} alt="python-logo" />
              <img
                src="https://webimages.mongodb.com/_com_assets/cms/kuyjf3vea2hg34taa-horizontal_default_slate_blue.svg?auto=format%252Ccompress"
                alt="mongodb-logo"
                style={{ width: "75px" }}
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png"
                alt="node-logo"
                style={{ width: "75px" }}
              />
              <img
                src="https://toppng.com/uploads/preview/firebase-logo-11609361103azdpszm85x.png"
                alt="firebase-logo"
              />
              <img src="https://mui.com/static/logo.png" alt="mui-logo" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
