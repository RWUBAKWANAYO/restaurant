import React, { useEffect} from 'react'
import { BrowserRouter, Route, Switch, useHistory} from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Menu from './components/menu/Menu';
import Reviews from './components/reviews/Reviews';
import Events from './components/events/Events';
import Contact from './components/contact/Contact';
import Nayo from './components/Nayo'


const Routing = ()=>{
  const history = useHistory()
  useEffect(()=>{
    
      history.push('/Nayo')
      
    
  }) 
  return(
      <div> <Navbar/>
          <Switch>
          
          <Route exact path="/"><Home/></Route>
          <Route exact path="/Menu"><Menu/></Route>
          <Route exact path="/Events"><Events/></Route>
          <Route exact path="/Reviews"><Reviews/></Route>
          <Route exact path="/Contact"><Contact/></Route>
          <Route exact path="/Nayo"><Nayo/></Route>
         </Switch>
      </div>
  )
}


export default function App() {
  return (
    
    <BrowserRouter>
    <Routing/>
   
    

    </BrowserRouter>
  )
}

