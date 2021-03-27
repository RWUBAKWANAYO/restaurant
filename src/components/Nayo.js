

import React, {useEffect } from 'react';
import {useHistory} from 'react-router-dom';
export default function Nayo() {
    const history = useHistory()
  
    useEffect(() => {
        function fetchBusinesses() {
            setTimeout(() => {
                history.push('/')
              }, 3000) 
          }
          fetchBusinesses()
     
    }, []);
  
    return (
        <div className="loader-container">
            <h1>NAYO</h1>
            <i className="fas fa-fan"></i>
        </div>
    )
}
