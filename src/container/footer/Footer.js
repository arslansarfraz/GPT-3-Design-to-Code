import React from 'react'
import './footer.css'
import logo from '../../assets/logo.png'

function Footer() {
    return (
        <div className='gpt__footer sec__spacer'>
            <div className='gpt__footer-top'>
                <span><h2>Do you want to step in to the future before others</h2></span>
                <span><button>Request Early Access</button></span>
            </div>
            <div className='gpt__footer-end'>
                <div className='gpt__footer-end-logo'>
                    <img src={logo} />
                    <p> Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
                </div>
                <div className='gpt__footer-end-links'>
                    <span>Links</span>
                    <ul>
                        <li><a href='#'>Overons</a></li>
                        <li><a href='#'>Social Media</a></li>
                        <li><a href='#'>Counters</a></li>
                        <li><a href='#'>Contact</a></li>
                    </ul>
                </div>
                <div className='gpt__footer-end-links'>
                    <span>Company</span>
                    <ul>
                        <li><a href='#'>Terms & Conditions</a></li>
                        <li><a href='#'>Privacy Policy</a></li>
                        <li><a href='#'>Contact</a></li>
                    </ul>
                </div>
                <div className='gpt__footer-end-links'>
                    <span>Get in touch</span>
                    <ul>
                        <li><a href='#'>Crechterwoord K12 182 DK Alknjkcb</a></li>
                        <li><a href='#'>085-132567</a></li>
                        <li><a href='#'>info@payme.net</a></li>
                    </ul>
                </div>

            </div>
            <div className='copyright'><p>© 2023 GPT. All rights reserved.</p></div>
        </div>
    )
}

export default Footer