import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './confirmplayer.scss';

import Footer from '../Footer/Footer';
import Header from '../Header/ScoreHeader';
import GoBack from '../GoBack/GoBack';
import Close from '../Close/Close';


export default function ConfirmPlayer(props) {

    const [players, setPlayers] = useState([]);
    const [teamName, setTeamName] = useState('not selected');

    useEffect(() => {
        let storagePlayers = JSON.parse(localStorage.getItem('players')) || [];
        let teamName = localStorage.getItem('team') || 'not selected';

        setTeamName(teamName);
        setPlayers(storagePlayers);
    }, [])

    return (
        <div className='cp-root'>
            <div className='cp-container'>
                <Header title='Your Selection'/>
                <div className='goback-close'>
                        <GoBack goback={props} />
                        <Close/>
                    </div>

                <p className='cp-team-name'>Team - <span>{ teamName }</span></p>
                
                {
                    players.map((player,key)=> 
                         <div className='cp-player-info' key={key}>
                                <img src={player.img} alt='' />
                                <p className='cp-team-player' id={player.id} >{player.name}</p>
                         </div>
                      )
                }

                <div className='cp-confirm-player-buttons'>
                    <Link to='add-player'><button>Edit</button></Link>
                    <Link to='#'><button>Confirm</button></Link>
                </div>

                <Footer/>
             </div>
        </div>
    )
}
