import React from 'react'
import './copyright.css'

function Copyright() {
    return (
        <div className="copyright">
            <p>
                {`Copyright © `}
                <a href="https://victor-githui.netlify.app/">Shikilia Stores</a>
                {` ${new Date().getFullYear()} | Dashboard Designed and Developed by `}
                <a href="https://victor-githui.netlify.app/">Samchi Systems & Solutions (Victor Githui)</a>
            </p>
        </div>
    )
}

export default Copyright
