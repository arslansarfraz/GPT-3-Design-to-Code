import React from 'react'
import './whatGTP.css';
import { Feature } from '../../components'

function WhatGTP() {
    return (
        <div className='whatGPT whatGPT__container' id='whatisGPT'>
            <div className='whatgpt-feature-custome'>
                <Feature title="What is GPT-3" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by." />
            </div>
            <div className='whatGPT__main'>
                <div className='whatGPT__main-heading'>
                    <h2 className='gradient__text'>The possibilities are beyond your imagination</h2>
                </div>
                <div className='whatGPT__main-link'>
                    <a href='#'>Explore The Library</a>
                </div>
            </div>
            <div className='content__feature-box'>
                <Feature title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. " />
                <Feature title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
                <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
            </div>

        </div>
    )
}

export default WhatGTP