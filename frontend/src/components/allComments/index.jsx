import React, { useState } from 'react'
import "./styles.scss"
import { TbThumbUp } from 'react-icons/tb'

const Comment = () => {
    return (
        <li className='all_comment__content'>
            <div className='comment__image'/>
            <div className='comment__details'>
                <h5>Player Name</h5>
                <p>This is a basic comment left by a player explaining what they can expect at the gym.</p>
            </div>
            <div className='all_comment__likes'>
                <TbThumbUp/>
                <span>20</span>
            </div>
        </li>
    )
}

function AllComments() {
    const [comments, setComments ] = useState([1,2,3, 4,5, 6,7,8,9])
    return (
        <section className='all_comments__wrapper'>
            <header className='all_comments__header'>
                <div className='all_comments__title'>
                    <h2>All Comments</h2>
                    <p>Showing {comments.length} comments</p>
                </div>

            </header>
            <ul className='all_comments__comments'>
                {
                    comments.map(comment => {
                        return (
                            <Comment key={comment} />
                        )
                    })
                }
            </ul>
        </section>
    )
}

export default AllComments
