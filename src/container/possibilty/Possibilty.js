import React from 'react'
import possibiltyImg from '../../assets/feature-Image.png'
import './possibilty.css'

function Possibilty() {
    return (
        <div className='gpt__possibilty'>
            <div className='gpt__possibilty-left'>
                <img src={possibiltyImg} alt="possibilty" />
            </div>
            <div className='gpt__possibilty-right'>
                <div className='gpt__possibilty-right-top-text'>
                    <p>Request Early Access to Get Started</p>
                </div>
                <div className='gpt__possibilty-right-top-heading'>
                    <h2>The possibilities are beyond your imagination</h2>
                </div>
                <div className='gpt__possibilty-right-text'>
                    <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                </div>
                <div className='gpt__possibilty-right-link'>
                    <a href='#'>Request Early Access to Get Started</a>
                </div>
            </div>
        </div>
    )
}

export default Possibilty