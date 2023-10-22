import React from 'react'
import CourtRating from './courtRating'
import "./styles.scss"
import { TbPlayBasketball, TbBallBasketball } from 'react-icons/tb'

function CourtInfo() {
  return (
    <section className='court_info__wrapper'>
        <header className='court_info__header'>
            <div className='court_info__title'>
                <h1>LA Fitness</h1>
                <p>798 E Vista Ridge Mall Dr, Lewisville, TX</p>
                <CourtRating rating={3.5}/>
            </div>
            <div className='court_info__action'>
                <span>Join this team</span>
                <button className='court_info__button'>
                    <TbBallBasketball/>
                </button>
            </div>
        </header>
    </section>
  )
}

export default CourtInfo
