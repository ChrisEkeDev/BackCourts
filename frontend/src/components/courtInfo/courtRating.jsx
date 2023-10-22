import React from 'react'
import { TbStar, TbStarFilled, TbStarHalfFilled } from 'react-icons/tb'

function CourtRating({rating}) {
    const mockData = [1,2,3,4,5]

    return (
        <ul className='ratings__wrapper'>
            {mockData.map((item) => {
                console.log(item, rating);
                return (
                    <li className='ratings__star' >
                        {
                            rating < item ?
                            <TbStar color='rgba(22, 22, 22, .25)'/> : rating > item && rating < item + 1 ?
                            <TbStarHalfFilled color="#FF4003"/> :
                            <TbStarFilled color="#FF4003"/>
                        }
                    </li>
                )
            })}
        </ul>
    )
}

export default CourtRating
