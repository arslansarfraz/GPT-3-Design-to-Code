import React from 'react'
import './feature.css'
function Feature({ title, text }) {
    return (
        <div className='feature__content'>
            <div className='feature__content-title'>
                <div className='title0'></div>
                <h2>{title}</h2>
            </div>
            <div className="feature__content-text">
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Feature

