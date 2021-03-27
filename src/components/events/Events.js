import React, { Component } from 'react'
import Footer from '../home/Footer'

export class Events extends Component {
    render() {
        return (
            <div className="event-main-wrapper">
                <div className="event-nav"></div>

                    <div className="event-wrapper">
                        <div></div>
                        <div id="pic-hide">
                            <h1>PRIVATE DINING</h1>
                        </div>
                        <div id="pic1"> 
                        <img src="https://images.pexels.com/photos/273920/pexels-photo-273920.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
                        </div>
                        <div id="pic2">
                        <img src="https://images.pexels.com/photos/1484516/pexels-photo-1484516.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
                        </div>
                        <div id="pic3">
                        <img src="https://images.pexels.com/photos/2487438/pexels-photo-2487438.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
                        </div>
                        <div id="pic4">
                        <img src="https://images.pexels.com/photos/6400957/pexels-photo-6400957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
                        </div>
                    </div>
                    <div className="event-text">
                        <div className="event-desc">
                            <h1>FULL & PARTIAL RESTAURANT EVENTS</h1>
                            <p>We welcome groups to exclusively reserve Bresca and treat their guests to our exciting approach to modern bistronomy. 
                            We can accommodate standing receptions of up to 115 guests or seated dinners of up to 70 in our main dining room. </p>
                            <p>LARGE GROUP DINNER EVENTS- We can also accommodate dinner groups with a specially curated menu in the dining room. 
                                Groups will be seated in our dining room at either one table or multiple adjacent tables.  A variety of dining 
                                options are available from a family-style communal feast to a seasonally inspired tasting menu. Please contact 
                                
                                us for more information. We look forward to hosting you!</p>
                                <button>EVENT ENQUIRY</button>
                        </div>
                        
                    </div>

                <Footer/>
            </div>
        )
    }
}

export default Events