import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Footer from '../home/Footer'
import nayo from '../img/nayo.png'

export class Reviews extends Component {
    render() {
        return (
            <div className="review-main-wrapper">
                <div className="reviews-nav"></div>
                <div className="reviews-container">
                    <h1>Reviews</h1>
                    <div className="reviews-wrapper">
                        <div className="reviews-sub-wrapper1">
                            <div className="reviews-img-wrapper"><img src={nayo} alt="photo"/></div>
                            <div >
                                <Link className="term1">NAYO restaurant</Link>
                                <div className="star-wrapper">
                                <strong>4.5</strong>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                                </div>
                                <p className="rev-par">Based on 57 reviews</p>
                                <div className="term2-wrapper"><Link className="term2" >See all reviews &nbsp;</Link> <Link className="term2">Write a review</Link></div>
                            </div>
                        </div>
                        <div className="review-wrapper2">
                        <svg width="2443" height="2500" viewBox="0 0 256 262" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"/><path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"/><path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"/><path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"/></svg>
                        </div>
                        <div></div>
                    </div>
                    <div className="reviews-wrapper-client">

                        <div  className="rev-intro-wrapper">
                        <div className="reviews-img-wrapper2"><img src={nayo} alt="photo"/></div>
                        <div className="rev-name">
                        <Link className="rev-name-link">John Robinson II</Link>
                        <p>10 months ago</p></div>
                        <div className="other-svg">
                        <svg width="2443" height="2500" viewBox="0 0 256 262" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"/><path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"/><path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"/><path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"/></svg>
                        </div>
                        </div>
                        
                        {/* </div> */}
                        <div style={{display:"flex",alignItems:"flex-start",margin:" 0 20px"}}>
                        <p className="client-info">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                Only open for to go. Got the family sandwich pack, both sausages and ribs to try. 
                                    Chopped beef was full of flavor, molasses heavy sauce was on point. Sausages were both 
                                    home made and delicious, ribs weren't far behind.</p>
                        </div>

                    </div>
                    <div className="reviews-wrapper-client">

                        <div  className="rev-intro-wrapper">
                        <div className="reviews-img-wrapper2"><img src={nayo} alt="photo"/></div>
                        <div className="rev-name">
                        <Link className="rev-name-link">John Robinson II</Link>
                        <p>10 months ago</p></div>
                        <div className="other-svg">
                        <svg width="2443" height="2500" viewBox="0 0 256 262" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"/><path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"/><path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"/><path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"/></svg>
                        </div>
                        </div>
                        
                        {/* </div> */}
                        <div style={{display:"flex",alignItems:"flex-start",margin:" 0 20px"}}>
                        <p className="client-info">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                Excellent location for delicious food, it wasn't very crowded. The service was friendly and observant.
                                 The bill was appropriate.</p>
                        </div>

                    </div>
                    <div className="reviews-wrapper-client">

                        <div  className="rev-intro-wrapper">
                        <div className="reviews-img-wrapper2"><img src={nayo} alt="photo"/></div>
                        <div className="rev-name">
                        <Link className="rev-name-link">John Robinson II</Link>
                        <p>10 months ago</p></div>
                        <div className="other-svg">
                        <svg width="2443" height="2500" viewBox="0 0 256 262" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"/><path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"/><path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"/><path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"/></svg>
                        </div>
                        </div>
                        
                       
                        <div style={{display:"flex",alignItems:"flex-start",margin:" 0 20px"}}>
                        <p className="client-info">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                If Heaven had a barbecue restaurant this would be it. This place has the best brisket in San Antonio Bar None. I took a bite of a burned End that I got and 
                                it was like biting into a piece of heaven. This brisket literally brought me close to Jesus.</p>
                        </div>

                    </div>
                    <div className="reviews-wrapper-client">

                        <div  className="rev-intro-wrapper">
                        <div className="reviews-img-wrapper2"><img src={nayo} alt="photo"/></div>
                        <div className="rev-name">
                        <Link className="rev-name-link">John Robinson II</Link>
                        <p>10 months ago</p></div>
                        <div className="other-svg">
                        <svg width="2443" height="2500" viewBox="0 0 256 262" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"/><path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"/><path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"/><path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"/></svg>
                        </div>
                        </div>
                        
                       
                        <div style={{display:"flex",alignItems:"flex-start",margin:" 0 20px"}}>
                        <p className="client-info">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                Got takeout there for the first time and it was amazing. I recommend the mac n cheese. I will be back for sure.</p>
                        </div>

                    </div>
                    
                    <div className="reviews-wrapper-client">

                        <div  className="rev-intro-wrapper">
                        <div className="reviews-img-wrapper2"><img src={nayo} alt="photo"/></div>
                        <div className="rev-name">
                        <Link className="rev-name-link">John Robinson II</Link>
                        <p>10 months ago</p></div>
                        <div className="other-svg">
                        <svg width="2443" height="2500" viewBox="0 0 256 262" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"/><path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"/><path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"/><path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"/></svg>
                        </div>
                        </div>
                        
                       
                        <div style={{display:"flex",alignItems:"flex-start",margin:" 0 20px"}}>
                        <p className="client-info">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                Love this place. Best BBQ brisket. But the best, is the honey based sauce. Although, I think it is overpriced. I ordered 2 brisket tacos for $10, 
                                wouldn't mind paying that price if they were well served. I strip of brisket in a tortilla is not worth $5.!!!!</p>
                        </div>

                    </div>
                    
                    <div className="reviews-wrapper-client">

                        <div  className="rev-intro-wrapper">
                        <div className="reviews-img-wrapper2"><img src={nayo} alt="photo"/></div>
                        <div className="rev-name">
                        <Link className="rev-name-link">John Robinson II</Link>
                        <p>10 months ago</p></div>
                        <div className="other-svg">
                        <svg width="2443" height="2500" viewBox="0 0 256 262" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"/><path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"/><path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"/><path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"/></svg>
                        </div>
                        </div>
                        
                       
                        <div style={{display:"flex",alignItems:"flex-start",margin:" 0 20px"}}>
                        <p className="client-info">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                Best BBQ I have had since moving to San Antonio! The meat is so tender and juicy it basically
                                 falls off the ribs! The brisket is cooked perfect, not dried out or tough at all!! Definitely try
                                  the Mac and cheese, a different spin than regular Mac and cheese but melts in your mouth! Love this place!!</p>
                        </div>

                    </div>
                    
                </div>
                <br/>
                <div className="review-footer"><Footer/></div>
            </div>
        )
    }
}

export default Reviews
