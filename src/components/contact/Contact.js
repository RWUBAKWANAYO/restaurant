import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Footer from '../home/Footer'
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
init("user_ZX8CfNsaksl0RW0SOvCIl");

export class Contact extends Component {
    state = {
        sendUserName:"",
        sendUserEmail:"",
        sendPhone:"",
        sendUserMessage:"",
        messag:""
    }
    sendEmail = (e)=>{
        e.preventDefault()
        emailjs.send("service_5yg5mnf","template_dnr258h",{
               name: this.state.sendUserName,
               email: this.state.sendUserEmail,
               phone:this.sendPhone,
               message: this.state.sendUserMessage,
               })  .then((result) => {
                   this.setState({messag: "Message send successfully"})
                console.log(result.text,);
            }, (error) => {
                console.log(error.text);
                this.setState({messag: "Fail to send"})
            });
        
    }
    render() {
        return (
            <div>
                <div className="contact-nav">
                    
                </div>
                <div className="contact-wrapper">
                    
                    <div className="contact-text-container">
                        <div className="contact-text-sub-container">
                    <h1>Contact us</h1>
                    <div className="contact-text-wrapper">
                        <div >
                        
                        <p>2M Smokehouse BBQ</p>
                        <p>2731 S WW White Rd.</p>
                        <p>San Antonio, TX 78222</p>
                        <p><span>P: </span> 210-885-9352</p>
                        <Link className="contact-link"><p><span>E: </span> info@2msmokehouse.com</p></Link>
                        </div>
                        <div>
                            <p>Hours of Operation:</p>
                        </div>
                        <div>
                        <p><span>Thursday – Sunday:</span> 11:00 AM – 4:00 PM/ OR SOLD OUT</p>
                        <p><span>Monday-Wednesday:</span> Closed</p>
                        <p><span>***Closing time is subject to availability!</span></p>
                        <p>We look forward to seeing you soon!</p>
                        </div>
                        </div>
                        </div>
                    </div>
                   
                    <div className="contact-input-container">
                       <form onSubmit={this.sendEmail}>
                       <label>Name</label>
                        <input type="text" required="text"
                        onChange = {(e)=>this.setState({sendUserName:e.target.value})}/>
                        <label>Phone</label>
                        <input type="text" required ="text"
                        onChange = {(e)=>this.setState({sendPhone:e.target.value})}/>
                        <label>Email</label>
                        <input type="email" required="emai;"
                        onChange = {(e)=>this.setState({sendUserEmail:e.target.value})} />
                        <label>Message(Optional)</label>
                        <textarea className="contact-text" type="text" required="text" cols ="40" rows="10"
                        onChange = {(e)=>this.setState({sendUserMessage:e.target.value})}/>
                        <label style={{fontSize:"12px",color:"orangered"}}>{this.state.messag}</label>
                        <input type="submit" value="SUBMIT" id="contact-submit-btn"/>
                       </form>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Contact
