import React, { Component } from 'react'
import {Link} from  'react-router-dom';
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
init("user_ZX8CfNsaksl0RW0SOvCIl");
export class Footer extends Component {
    state = {
        sendUserName:"",
        sendUserEmail:""
    }
    sendEmail = (e)=>{
        e.preventDefault()
        emailjs.send("service_5yg5mnf","template_dnr258h",{
               name: this.state.sendUserName,
               email: this.state.sendUserEmail,
               message: "New Subscriber",
               })  .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        
    }
    render() {
        return (
            <div className="footer-container">
                <div className="footer-sub-container"><img src="https://images.pexels.com/photos/6126306/pexels-photo-6126306.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="footer-img"/></div>

                <div className="footer-wrapper" id="wrapper1">
                <div className="logo-container2">
                <i class="fas fa-fan"></i>
                <div className="logo-wrapper2">
                    <h1>NAYO</h1>
                    <p id="logo-par"> RWANDAN RESTAURANT</p>
                </div>
                </div>
                <h2 id="follow">FOLLOW US</h2>
                <div className="media-icon">
                <a href="https://twitter.com/rwubakwanayo" target="blank"> <i className="fab fa-twitter"></i></a>
                <a href="https://www.instagram.com/rwubakwanayo/" target="blank"><i className="fab fa-instagram"></i></a>
                <a href="https://web.facebook.com/sleck.warble" target="blank"><i className="fab fa-facebook-f"></i></a>
                <a href="https://www.youtube.com/rwubakwanayo/" target="blank"><i className="fab fa-youtube"></i></a>
                </div>
                </div>
                <div className="footer-wrapper" id="wrapper2">
                    <h2>NAVIGATION</h2>
                   <Link className="footer-nav" to="./">Home</Link>
                   <Link className="footer-nav" to="./Menu">Menu</Link>
                   <Link className="footer-nav" to="./Events">Events & Private dinning</Link>
                   <Link className="footer-nav" to="./Reviews">Reviews</Link>
                   <Link className="footer-nav" to="./Contact">Contact</Link>
                </div>
                <div className="footer-wrapper" id="wrapper3">
                    <h2>HOURS</h2>
                    <p>Hours of Operation:</p>
                    <p>Thursday-Sunday :</p>
                    <p>11:00AM-4:00 PM Or Sold out</p>
                    <p>Monday-Wednesday:</p>
                    <p>Closed</p>
                    <p>***Closing time is subject to availability!</p>
                </div>
                <div className="footer-wrapper" id="footerWrapper">
                    <h2>CONTACT</h2>
                    <p>Address: KN153 st-Nyamirambo </p>
                    <p>Nyarugenge-Kigali </p>
                    <p>Phone: +250780338830</p>
                    <a  href="https://webmail.au.syrahost.com/" target="_blank" className ="emailLink"><p>nayorestaurant@gmail.com</p></a>
                    <br/>
                    <h2>join Us</h2>
                    <input type="text"placeholder="Name" name="user_name"
                    onChange = {(e)=>this.setState({sendUserName:e.target.value})}/>
                    <input type="email"placeholder="Email" name="user_email"
                    onChange = {(e)=>this.setState({sendUserEmail:e.target.value})}/>
                    <button onClick={this.sendEmail}>JOIN MAILING LISTING</button>
                </div>
            </div>
        )
    }
}

export default Footer

