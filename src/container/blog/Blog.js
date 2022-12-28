import React from 'react'
import './blog.css'
import { Article } from '../../components'
import { blog1, blog2, blog3, blog4, blog5 } from './imports'

function Blog() {
    return (
        <div className='gpt__blog sec__spacer'>
            <div className='gpt__blog-heading'>
                <h2>A lot is happening, We are blogging about it.</h2>
            </div>
            <div className='gpt__blog-comp'>
                <div className='gpt__blog-a'>
                    <Article img={blog1} date="Sep 26, 2021" heading="GPT-3 and Open  AI is the future. Let us exlore how it is?" link="#" />
                </div>
                <div className='gpt__blog-b'>
                    <Article img={blog2} date="Sep 26, 2021" heading="GPT-3 and Open  AI is the future. Let us exlore how it is?" link="#" />
                    <Article img={blog3} date="Sep 26, 2021" heading="GPT-3 and Open  AI is the future. Let us exlore how it is?" link="#" />
                    <Article img={blog4} date="Sep 26, 2021" heading="GPT-3 and Open  AI is the future. Let us exlore how it is?" link="#" />
                    <Article img={blog5} date="Sep 26, 2021" heading="GPT-3 and Open  AI is the future. Let us exlore how it is?" link="#" />
                </div>
            </div>
        </div>
    )
}

export default Blog