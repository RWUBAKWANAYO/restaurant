

import React, {useEffect } from 'react';
import {useHistory} from 'react-router-dom';
export default function Nayo() {
    const history = useHistory()
  
    useEffect(() => {
      setTimeout(() => {
        history.push('/')
      }, 3000) 
    }, []);
  
    return (
        <div className="loader-container">
            <h1>NAYO</h1>
            <i className="fas fa-fan"></i>
        </div>
    )
}
