import React, { useState, useEffect } from 'react';

import { Checkbox } from 'antd';



export default function Player({ player }) {

    const [playerIsChecked, togglePlayerChecked] = useState(false);

    useEffect(()=> {
        togglePlayerChecked(player.isChecked);
    }, [player]);

    function onChangePlayesCheckbox(e) {

        const newPlayer = {
            id: player.id,
            name: player.name,
            img: player.img,
        };

        let storagePlayers = JSON.parse(localStorage.getItem('players')) || [];

        let issetUser = storagePlayers.filter(item => item.id === newPlayer.id)[0];

        if(!issetUser) {
            if(storagePlayers.length <= 2){
                storagePlayers.push(newPlayer);
            }
            else{
                alert('You can choose only 3 players!');
                return;
            }
        }
        else {
            for(let i=0;i<storagePlayers.length;i++) {

                if(storagePlayers[i].id === player.id){
                    storagePlayers.splice(i,1)
                }
            }
        }
        localStorage.setItem('players', JSON.stringify(storagePlayers));

        togglePlayerChecked(!playerIsChecked);
        

    }

    return (
        <div className='ap-player'>
            <div className='ap-player-info'>
                <img src={player.img} alt='' />
                <span>{ player.name }</span>
            </div>
            <Checkbox onChange={onChangePlayesCheckbox} checked={playerIsChecked} disabled={player.disabled} />
        </div>
    )
}
