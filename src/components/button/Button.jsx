import React from 'react'
import './button.css'

function Button(props) {
    return (
        <button className="button">
            <span className="button__content">
              {props.content}  
            </span>
            
        </button>
    )
}

export default Button
