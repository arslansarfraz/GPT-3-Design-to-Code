import React from 'react'
import './header.css'
// import Avatars
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

function Header() {
    return (
        <div className='header' id='#home'>
            <div className='header__left'>
                <h1>Let’s Build Something amazing with GPT-3 OpenAI</h1>
                <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                <form>
                    <input type="email" placeholder='Your Email Address' />
                    <button type='button' >Get Started </button>
                </form>
                <div className='header__left-avatars'>
                    <img src={people} />
                    <p>1,600 people requested access a visit in last 24 hours</p>
                </div>
            </div>
            <div className='header__right'>
                <img src={ai} alt="AI" />
            </div>
        </div>
    )
}

export default Header