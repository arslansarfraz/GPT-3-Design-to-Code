import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png'
import './navbar.css'

function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div >
            <div className='gpt__navbar'>
                <div className='gpt__navbar-logo'>
                    <img src={logo} alt="GTP-Logo" />
                </div>
                <div className='gpt__navbar-links'>
                    <ul>
                        <li><a href='#home'>Home</a></li>
                        <li><a href='#whatisGPT'>What is GPT?</a></li>
                        <li><a href='#openai'>Open AI</a></li>
                        <li><a href='#casestudy'>Case Study</a></li>
                        <li><a href='#libaray'>Library</a></li>
                    </ul>
                </div>
                <div className='gpt__navbar-login'>
                    <a href='#'>Sign In</a>
                    <button>Sign Up</button>
                </div>
            </div>

            <div className='gpt__navbar-menu'>
                {toggleMenu ? <RiCloseLine color='#fff' fontSize={27} onClick={() => { setToggleMenu(false) }} /> : <RiMenu3Line color='#fff' fontSize={27} onClick={() => { setToggleMenu(true) }} />}

                {toggleMenu && (
                    <div className="gpt__navbar-menu_container scale-up-center">
                        <div className="gpt__navbar-menu_container-links">
                            <ul>
                                <li><a href='#home'>Home</a></li>
                                <li><a href='#whatisgpt'>What is GPT?</a></li>
                                <li><a href='#openai'>Open AI</a></li>
                                <li><a href='#casestudy'>Case Study</a></li>
                                <li><a href='#libaray'>Library</a></li>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar