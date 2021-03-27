import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import MapContainer from './MapItem'


export class Home extends Component {
   
    render() {
        return (
         
            <div className="home-container">
                <div className="intro-shadow"> </div>
                <div className="intro-sub-shadow"> </div>
                
                <div className="logo-container">
                <i className="fas fa-fan"></i>
                <div className="logo-wrapper">
                    <h1>NAYO</h1>
                    <p>RWANDAN RESTAURANT</p>
                </div>
                
                </div>
                <div className="home-line"><hr/></div>
                <div className="syloger">
                    <h1>WE PROVIDE</h1>
                    <h1>GREAT</h1>
                    </div>
               <divi className="intro-menu-shadow"></divi>
               <divi className="intro-menu-sub-shadow"></divi>
                <div className="intro-container">
                
                <div className="home-intro"><h1 >EXPERIENCE THE TRUE TASTE OF FOOD</h1></div>
                <div className="intro-menu">
                    <div className="intro-menu-wrapper">
                    <Link to="./Menu" className="intro-menu-link">
                    <i className="fas fa-fan"></i>
                    <h1>LUNCH & DINNER MENU</h1>
                    </Link>
                    </div >
                    <div className="intro-line"></div>
                    <div className="intro-menu-wrapper">
                   <Link to="./Menu" className="intro-menu-link">
                   <i className="fas fa-fan" ></i>
                    <h1>DRINKS & SNACKS</h1>
                   </Link>
                    </div>
                </div>
                </div>
                <div className="expression-container">
                    <div className="book-container">
                        <div className="book-wrapper">
                            <h1>EXPERIENCE THE</h1>
                            <h1>FOOD</h1>
                            <button>BOOK NOW</button>
                        </div>
                    </div>
                    <div className="slider-container">
                        <div className="slider-wrappera">
                        <img src="https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="food-img"/>
                        <img src="https://images.pexels.com/photos/2175211/pexels-photo-2175211.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"alt="food-img"/>
                        <img src="https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"alt="food-img"/>
                        <img src="https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"alt="food-img"/>
                        <img src="https://images.pexels.com/photos/6164009/pexels-photo-6164009.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"alt="food-img"/>
                        <img src="https://images.pexels.com/photos/2170312/pexels-photo-2170312.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"alt="food-img"/>
                        </div>
                        <div className="button-wrapper">
                            <button className="button1a"></button>
                            <button className="button2a"></button>
                            <button className="button3a"></button>
                            <button className="button4a"></button>
                            <button className="button5a"></button>
                            <button className="button6a"></button>
                            
                        </div>
                    </div>
                </div>
              
                <div className="expression-container">
                   
                    <div className="slider-container">
                        <div className="slider-wrapperb">
                        <img src="https://images.pexels.com/photos/3908198/pexels-photo-3908198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"alt="food-img"/>
                        <img src="https://images.pexels.com/photos/1835743/pexels-photo-1835743.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="food-img"/>
                        <img src="https://images.pexels.com/photos/339696/pexels-photo-339696.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"alt="food-img"/>
                        <img src="https://images.pexels.com/photos/2568270/pexels-photo-2568270.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"alt="food-img"/>
                        <img src="https://images.pexels.com/photos/2110927/pexels-photo-2110927.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"alt="food-img"/>
                        <img src="https://images.pexels.com/photos/1484678/pexels-photo-1484678.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"alt="food-img"/>
                        

                        </div>
                        <div className="button-wrapper">
                            <button className="button1b"></button>
                            <button className="button2b"></button>
                            <button className="button3b"></button>
                            <button className="button4b"></button>
                            <button className="button5b"></button>
                            <button className="button6b"></button>
                            
                        </div>
                    </div>
                    <div className="book-container">
                        <div className="book-wrapper">
                            <h1>EXPERIENCE THE</h1>
                            <h1>DRINKS</h1>
                            <Link ><button>BOOK NOW</button></Link>
                        </div>
                    </div>
                </div>
               
                <div className="expression-container">
                    <div className="book-container">
                        <div className="book-wrapper">
                            <h1>EXPERIENCE THE</h1>
                            <h1>EXCITEMENT</h1>
                            <button>BOOK NOW</button>
                        </div>
                    </div>
                    <div className="slider-container">
                        <div className="slider-wrappera">
                        <img src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="food-img"/>
                        <img src="https://images.pexels.com/photos/5693059/pexels-photo-5693059.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"alt="food-img"/>
                        <img src="https://images.pexels.com/photos/2977515/pexels-photo-2977515.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"alt="food-img"/>
                        <img src="https://images.pexels.com/photos/3215592/pexels-photo-3215592.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"alt="food-img"/>
                        <img src="https://images.pexels.com/photos/5920642/pexels-photo-5920642.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"alt="food-img"/>
                        <img src="https://images.pexels.com/photos/5945575/pexels-photo-5945575.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"alt="food-img"/>
                        </div>
                        <div className="button-wrapper">
                            <button className="button1a"></button>
                            <button className="button2a"></button>
                            <button className="button3a"></button>
                            <button className="button4a"></button>
                            <button className="button5a"></button>
                            <button className="button6a"></button>
                            
                        </div>
                    </div>
                </div>
                <div className="expression-container">
                   
                   <div className="slider-container">
                       <div className="slider-wrapperb">
                       <img src="https://images.pexels.com/photos/1114425/pexels-photo-1114425.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"alt="food-img"/>
                       <img src="https://images.pexels.com/photos/4992827/pexels-photo-4992827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="food-img"/>
                       <img src="https://images.pexels.com/photos/2291599/pexels-photo-2291599.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"alt="food-img"/>
                       <img src="https://images.pexels.com/photos/2504969/pexels-photo-2504969.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"alt="food-img"/>
                       <img src="https://images.pexels.com/photos/2140980/pexels-photo-2140980.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"alt="food-img"/>
                       <img src="https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"alt="food-img"/>
                       

                       </div>
                       <div className="button-wrapper">
                           <button className="button1b"></button>
                           <button className="button2b"></button>
                           <button className="button3b"></button>
                           <button className="button4b"></button>
                           <button className="button5b"></button>
                           <button className="button6b"></button>
                           
                       </div>
                   </div>
                   <div className="book-container">
                       <div className="book-wrapper">
                           <h1>CREATE MEMORIES</h1>
                           <h1>AT NAYO</h1>
                           <Link ><button>BOOK NOW</button></Link>
                       </div>
                   </div>
               </div>
            
               <div className="expression-container">
                    <div className="book-container">
                        <div className="book-wrapper">
                            <h1>SHARE THE</h1>
                            <h1>EXPERIENCE</h1>
                            <button>BOOK NOW</button>
                        </div>
                    </div>
                    <div className="slider-container">
                        <div className="slider-wrappera">
                        <img src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="food-img"/>
                        <img src="https://images.pexels.com/photos/5693059/pexels-photo-5693059.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"alt="food-img"/>
                        <img src="https://images.pexels.com/photos/2977515/pexels-photo-2977515.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"alt="food-img"/>
                        <img src="https://images.pexels.com/photos/3215592/pexels-photo-3215592.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"alt="food-img"/>
                        <img src="https://images.pexels.com/photos/5920642/pexels-photo-5920642.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"alt="food-img"/>
                        <img src="https://images.pexels.com/photos/5945575/pexels-photo-5945575.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"alt="food-img"/>
                        </div>
                        <div className="button-wrapper">
                            <button className="button1a"></button>
                            <button className="button2a"></button>
                            <button className="button3a"></button>
                            <button className="button4a"></button>
                            <button className="button5a"></button>
                            <button className="button6a"></button>
                            
                        </div>
                    </div>
                </div>
                <br/>
                <div className="bottom-wrapper">
                <MapContainer/>
                <div className="hm-footer-wrapper" ><Footer/></div>
                </div>
            </div>
            
          
        )
    }
}

export default Home
