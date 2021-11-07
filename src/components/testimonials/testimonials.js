import { Component } from "react";
import ImgTesti from "../images/testi-img.png";
import ImgTesti2 from "../images/testi2-img.png";
import "./testimonials.css";


class Testimonials extends Component{
    render(){
        return(
            <div className="testi-main-container">
                <h3>What People say about me</h3>
                <div className="underline"></div>
                <div className="testi-subcontainer">
                    <div className="testi-flex-container">
                        <div className="testi-flex-subcontainer">
                            <img src={ImgTesti}  style={{backgroundColor:"lightcoral"}}alt="testi-img"/>
                            <h4 style={{color:"#373742"}}>Elizabeth Martin</h4>
                            <span style={{color:"#7B7B88"}}>SaveSpace Inc.</span>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
                        </div>
                        <div className="mobile testi-flex-subcontainer">
                            <img src={ImgTesti2} style={{backgroundColor:"lightsalmon"}} alt="testi-img"/>
                            <h4 style={{color:"#373742"}}>Alberto Donko</h4>
                            <span style={{color:"#7B7B88"}}>ScreepApp</span>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
                        </div>
                        <div className="mobile testi-flex-subcontainer">
                            <img src={ImgTesti} alt="testi-img"/>
                            <h4 style={{color:"#373742"}}>Alexander Parkinson</h4>
                            <span style={{color:"#7B7B88"}}>MyTravel.com</span>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
                        </div>
                    </div>
                    <div className="more-testimonials">
                        <p>View more testimonials</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Testimonials;