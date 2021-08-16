import React from 'react'
import { Link } from 'react-router-dom'
import './button.css'

function Button(props) {
    return (
        <Link to={props.action}>
            <button className="button">
                <span className="button__content">
                    {props.content}  
                </span>
            </button>
        </Link>
        
    )
}

export default Button
