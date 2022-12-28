import React from 'react'
import './features.css'
import { Feature } from '../../components'

function Features() {
    const featuresData = [
        {
            title: 'Improving end distrusts instantly ',
            text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.'
        },
        {
            title: 'Become the tended active ',
            text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.'
        },
        {
            title: 'Message or am nothing ',
            text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.'
        },
        {
            title: 'Really boy law county ',
            text: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.'
        }
    ]
    return (
        <div className='features__sec sec__spacer' id='openai'>
            <div className='features__sec-left'>
                <h1>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
                <a href='#'>Request Early Access to Get Started</a>
            </div>
            <div className='features__sec-right'>
                {featuresData.map((item, index) => (
                    <Feature title={item.title} text={item.text} key={index} />
                ))}
            </div>
        </div>
    )
}

export default Features