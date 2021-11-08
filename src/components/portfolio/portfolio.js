import { Component } from "react";
import "./portfolio.css";

class Portfolio extends Component{
    render(){
        return(
            <div className="portfolio-container" id="portfolio">
                <h2>My Portfolio</h2>
                <div className="underline"></div>
                <div className="portfolio-img-container">
                    <a href="https://viraj1607.github.io/project4-clock/" target="_blank"><div className="item1 items"><h3>Clock Project</h3></div></a>
                    <a href="https://viraj1607.github.io/university_website/" target="_blank"><div className="item2 items"><h3>University Webpage</h3></div></a>
                    <a href="https://viraj1607.github.io/gaming-webpage/" target="_blank"><div className="item3 items"><h3>Gaming World</h3></div></a>
                    <a href="https://viraj-reactassignment-3.netlify.app/" target="_blank"><div className="item4 items"><h3>Feedback Form</h3></div></a>
                    <a href="https://viraj1607.github.io/courses-responsive_website/" target="_blank"><div className="item5 items"><h3>Online Courses Webpage</h3></div></a>
                    <a href="https://viraj1607.github.io/project5-to_do_app/" target="_blank"><div className="item6 items"><h3>To Do JS</h3></div></a>
                </div>
            </div>
        )
    }
}

export default Portfolio;