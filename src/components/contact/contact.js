import { Component } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { MdPhoneInTalk,MdLocationPin } from "react-icons/md";
import swal from "sweetalert";
import './contact.css'


class Contact extends Component{
    state={
        name:"",
        number:"",
        email:"",
    }

    popup=()=>{
        swal({
            title: "Thank You !", 
            icon: "success",
            button: "Back",
          })
        }

    handleChange=(e)=>{
        this.setState({[e.target.id]:e.target.value})
    }

    handleForm=(e)=>{
        e.preventDefault();
        this.setState({name:"",number:"",email:""})
        this.popup();
    }

    

    render(){
        

        const disable=this.state.name.length<1 || this.state.number.length<1 || this.state.email.length<1;
        console.log(this.state)
        return(
            <div className="contact-main-container" id="contact">
                <h2>Contact Me</h2>
                <div className="underline"/>
                <div className="contact-flex-container">
                    <div className="info-contact-container">
                        <h3>Let's Connect</h3>
                        <p>Got any suitable jobs where I can contribute? <br/>You can find me here !</p>
                        <div className="flex align-items"><AiOutlineMail style={{margin:"10px", color:"#858585", fontSize:"24px"}}/><text>merai.viraj@gmail.com</text>
                        </div>
                        <br/>
                        <div className="flex align-items"><MdPhoneInTalk style={{margin:"10px" , color:"#858585", fontSize:"24px"}}/><text>+91 9604340920</text></div>
                        <br/>
                        <div className="flex align-items"><MdLocationPin style={{margin:"10px" , color:"#858585", fontSize:"24px"}}/><text>Valsad, Gujarat - 396 001.</text></div>
                    </div>
                    <div className="form-contact-container">
                        <h3>Send me a message</h3>
                        <form>
                            First & Last Name: <span>*</span><br/>
                            <input type="text" value={this.state.name} onChange={this.handleChange}
                            id="name" />
                            <br/>
                            Phone Number: <span>*</span><br/>
                            <input type="text" value={this.state.number} onChange={this.handleChange}
                            id="number"/>
                            <br/>
                            Email Address: <span>*</span><br/>
                            <input type="email" value={this.state.email} onChange={this.handleChange}
                            id="email"/>
                            <br/>
                            Message:<br/>
                            <textarea rows="4"/>
                            <br/>
                            <button onClick={this.handleForm} disabled={disable}>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;