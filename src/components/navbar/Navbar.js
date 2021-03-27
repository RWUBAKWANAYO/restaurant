import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
    state={
    
        menuDisplay:"flex",
        menuHide:"none",
        largeNav:"0",
        smallNav:"none"
    }

    componentDidMount(){
        window.addEventListener('resize', this.handleResize)
    }


    menuToggle=()=>{
        this.setState({menuDisplay:"none", menuHide:"flex",smallNav:"flex",largeNav:"100%"})
    }
    menuHiding=()=>{
        this.setState({menuDisplay:"flex", menuHide:"none",smallNav:"none",largeNav:"0"})
    }

    handleResize = ()=>{
        if(window.innerWidth > 530){
            this.setState({menuDisplay:"none", menuHide:"none",smallNav:"none"})
        }
        else{
            this.setState({menuDisplay:"flex", menuHide:"none",smallNav:"none"})
        }
    }


    render() {
        return (
            <div>
                <nav className="nav-container" >
                    <ul>
                        
                        <li><Link className="nav-link" to="/">HOME</Link></li>
                        <li><Link className="nav-link" to="/Menu">MENU</Link></li>
                        <li><Link className="nav-link" to="/Events">EVENTS & PRIVATE DINNING</Link></li>
                        <li><Link className="nav-link" to="/Reviews">REVIEWS</Link></li>
                        <li><Link className="nav-link" to="/Contact">CONTACT</Link></li>
                        
                    </ul>
                </nav>
                <nav className="nav-container1" style={{width:`${this.state.largeNav}`}}>
                <div id="menu-icon">
                    <div style ={{display:`${this.state.menuDisplay}`}}  id="menuIcon" onClick={this.menuToggle}><i class="fas fa-bars"></i></div>
                    <div  id="hideIcon" style ={{display:`${this.state.menuHide}`}} onClick={this.menuHiding}><i  class="fas fa-times"></i></div>
                </div >
                    <ul style={{display:`${this.state.smallNav}`}}>
                        <li><Link className="nav-link1" to="/">HOME</Link></li>
                        <li><Link className="nav-link1" to="/Menu">MENU</Link></li>
                        <li><Link className="nav-link1" to="/Events">EVENTS & PRIVATE DINNING</Link></li>
                        <li><Link className="nav-link1" to="/Reviews">REVIEWS</Link></li>
                        <li><Link className="nav-link1" to="/Contact">CONTACT</Link></li>
                        
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navbar
