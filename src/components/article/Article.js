import React from 'react'

function Article({ img, date, heading, link }) {
    return (
        <div className='blog__article'>
            <div className='blog__article-img'><img src={img} /></div>
            <div className='background-blog'>
                <div className='blog__article-date'><p>{date}</p></div>
                <div className='blog__article-heading'><h2>{heading}</h2></div>
                <div className='blog__article-explore'><a href={link}>Read Full Article</a></div>
            </div>
        </div>
    )
}

export default Article