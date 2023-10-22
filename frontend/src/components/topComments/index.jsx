
import React, { useState } from 'react'
import "./styles.scss"

const Comment = () => {
    return (
        <li className='comment__content'>
            <div className='comment__image'/>
            <div className='comment__details'>
                <h5>Player Name</h5>
                <p>This is a basic comment left by a player explaining what they can expect at the gym.</p>
            </div>
        </li>
    )
}

function TopComments() {
    const [comments, setComments ] = useState([1,2,3, 4,5])
    return (
        <section className='comments__wrapper'>
            <header className='comments__header'>
                <div className='comments__title'>
                    <h2>Top Comments</h2>
                    <p>View All</p>
                </div>

            </header>
            <ul className='comments__comments'>
                {
                    comments.slice(0,3).map(comment => {
                        return (
                            <Comment key={comment} />
                        )
                    })
                }
            </ul>
        </section>

    )
}

export default TopComments
