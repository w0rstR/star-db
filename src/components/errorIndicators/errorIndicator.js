import React from 'react'
import icon from './death-star.png'
import './errorIndicator.css'


const ErrorIndacator = ()=>{
    return(
        <div className="error-indicator">
            <img src={icon} alt="errpr icon"/>
            <span className="boom">BOOM!</span>
            <span>
                Something has gone terribly wrong
            </span>
            <span>
                (but we already sent droids to fix it)
            </span>
        </div>
    )
}
export default ErrorIndacator