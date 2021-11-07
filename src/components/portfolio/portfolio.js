import { Component } from "react";
import "./portfolio.css";
import PortImg1 from "../images/portfolio-img-1.png"
import PortImg2 from "../images/portfolio-img-2.png"
import PortImg3 from "../images/portfolio-img-3.png"
import PortImg4 from "../images/portfolio-img-4.png"
import PortImg5 from "../images/portfolio-img-5.png"
// import PortImg1 from "../images/portfolio-img-1.png"

class Portfolio extends Component{
    render(){
        return(
            <div className="portfolio-container" id="portfolio">
                <h2>My Portfolio</h2>
                <div className="underline"></div>
                <div className="portfolio-img-container">
                    <a href="https://viraj1607.github.io/project4-clock/" target="_blank"><div className="item1 items"></div></a>
                    <a href="https://viraj1607.github.io/university_website/" target="_blank"><div className="item2 items"></div></a>
                    <a href="https://viraj1607.github.io/gaming-webpage/" target="_blank"><div className="item3 items"></div></a>
                    <a href="https://viraj-reactassignment-3.netlify.app/" target="_blank"><div className="item4 items"></div></a>
                    <a href="https://viraj1607.github.io/courses-responsive_website/" target="_blank"><div className="item5 items"></div></a>
                    <a href="https://viraj1607.github.io/project5-to_do_app/" target="_blank"><div className="item6 items"></div></a>
                </div>
            </div>
        )
    }
}

export default Portfolio;