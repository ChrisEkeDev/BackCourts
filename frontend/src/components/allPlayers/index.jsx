import React, { useState } from 'react'
import "./styles.scss"

const Player = ({player}) => {
    return (
        <li className='player__content'>
            <div className='player__image'/>
            <div className='player__details'>
                <h5>{player}</h5>
                <p>Joined 12/12/23</p>
            </div>
        </li>
    )
}

function AllPlayers() {
    const [players, setPlayers ] = useState(["Chris", "Vince", "Jesse", "Mar", "Quinton", "Mike", "Will", "Simon", "Marcus", "Richard"])
  return (
    <section className='all_players__wrapper'>
        <header className='all_players__header'>
                <div className='all_players__title'>
                    <h2>All Players</h2>
                    <p>{players.length} players</p>
                </div>

            </header>
            <ul className='all_players__players'>
                {
                    players.map(player => {
                        return (
                            <Player player={player} key={player} />
                        )
                    })
                }
            </ul>
    </section>
  )
}

export default AllPlayers
