import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './addplayer.scss';

import { Select } from 'antd';
import Player from './Player';

import Footer from '../Footer/Footer';
import Header from '../Header/ScoreHeader';


export default function AddPlayer() {

    let initialplayers = [
        {
            id:1,
            name:'David Warner',
            isChecked:false,
            disabled: false,
            img:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT9H3CJ-CeP3SmTJ2MlOe41r-l7zyQT036atGQGKanZdVIHEmPn5YcZzhsGpmbMajaq92L27WprRH6HKFa8GcH2o7Govr25kEqoIg'
        },
        {
            id:2,
            name:'Vijay Shankar',
            isChecked:false,
            disabled: false,
            img:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT-x6jJgpLd83L2fQ8FRSNG3dqUzWbLkmxI5pw1i3nSCUrVuYWOeZWqvroACg6kv0ORXs5hCm4oSGx0Q3_bHikMxxsaHzB0ViTXMA'
        },
        {
            id:3,
            name:'Jonny Bairstow',
            isChecked:false,
            disabled: false,
            img:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSwW48FzJ4q5SReM4Puc3akYhpZn1h78uD5keRcQ52pvUX6IlpzYakyfHcJ7k0AwEtAanfTjzhItOw0Za8R32HyiB6QiY6Qd-ADOw'
        },
        {
            id:4,
            name:'Nitish Rana',
            isChecked:false,
            disabled: false,
            img:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSyatRWKa37a2R9OtC1PUGqD9Tly_JFH2e1UPwqx6oWDt7cMd_Fy_pqnRfMxAmWwFxWfQXUt4whwQOI1HLu9btFNMfD2pxoFBfLDQ'
        },
        {
            id:5,
            name:'Andre Russell',
            isChecked:false,
            disabled: false,
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXNamQnYaiTNS8c3zpMCnzOGpChNBMbk0lL0BqY74V_NnmHB7_899iAKZ8SycKcX2eISJzmUWvu5JlSAAS2SmAD0458CNB1F24Vg'
        },
        {
            id:6,
            name:'Robin Uthappa',
            isChecked:false,
            disabled: false,
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4eVIfnzbl_sPJuHk5qIxqhe7tKLiM4ZDVA5LP2J5fw9io48luGNL0QOL5-BQeehsw9m6NdfWlBHkU1U_14C9xydUz7HF-KC68pn0'
        },
        {
            id:7,
            name:'Piyush Chawla',
            isChecked:false,
            disabled: false,
            img:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRHYQm6jNFfg-oc0iLzTN4CMq_Tvtnfc9mCfdWNIxdHVREY6kxO0UgdsWyeBh6zSrnJQvdkixDkUhfTtk_0U0fmEXHgjZKiwSSl9g'
        },
        {
            id:8,
            name:'Moeen Ali',
            isChecked:false,
            disabled: false,
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpBrCeLAM2P7mExl4yotaimjJVqzjhAGe7_i-pJOv20POM2EQ45jriwNJeuv6YfUKJe24RU2Y8K8PUY3HUJmha-HG7hf_2JJAj0A'
        },
        {
            id:9,
            name:'Rashid Khan',
            isChecked:false,
            disabled: false,
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaRbQHkAtfv7b2JY91CaKQsUXdbgFw6-YEtdNtPVnib2vVnwSfqJnQ-s3KkNMuYLYj2hCOWXodGf4yaxlgU8xnrcBrpt8HOAo6KA'
        },
        {
            id:10,
            name:'Siddarth Kaul',
            isChecked:false,
            disabled: false,
            img:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSaOqmsLJfNb713KNeFCrB3vTiFYNTuFgE5aYio3SNmIBd3r_LqDhPrt3WZHol_e4z8ToQnuE5yNXoJm2ikekjt1SfTj6Vl5mttVsc'
        },
        {
            id:11,
            name:'Shakib Al Hasan',
            isChecked:false,
            disabled: false,
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH2G5WN-J35PIiV6vPcfcE-3LCJT2g_FJH4pC15ZHJzhejK4_jIT6gJkc2-dZtlk0mMEqlWgja2jhgbNXOgRgcwthviXfK7xrgNA'
        }
    ];

    const [players, setPlayers] = useState([]);
    const [team, setTeam] = useState('');


    function setPlayerStatus(initialplayers, storagePlayers, isChecked) {

        for(let i = 0; i < initialplayers.length; i++){

            for(let j = 0; j < storagePlayers.length; j++){

                if(initialplayers[i].id === storagePlayers[j].id) {

                    initialplayers[i].isChecked = isChecked;

                }
            }
        }

        return initialplayers
    }

    useEffect(()=>{
        
        let storagePlayers = JSON.parse(localStorage.getItem('players')) || []

        initialplayers = setPlayerStatus(initialplayers, storagePlayers, true);
        
        let team = localStorage.getItem('team') || '';
        setTeam(team);
        setPlayers(initialplayers);

    },[])

    const { Option } = Select;

    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
    
        while (0 !== currentIndex) {
      
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
    }

    const onChangeTeamName = (name) => {
 
        if(name !== localStorage.getItem('team')){
            let storagePlayers = JSON.parse(localStorage.getItem('players')) || []
            let restartPlayers = setPlayerStatus(players, storagePlayers, false);
            setPlayers(shuffle(restartPlayers));
            localStorage.removeItem('players');
        }

        localStorage.setItem('team', name);
        setTeam(name);
    }

    return (
        <div>
            <div className='ap-root'>
                <div className='ap-container'>
                    <Header title='Select Players'/>
                    
                    <div className='ap-select-team'>
                        <span>Team</span>
                        <Select
                            showSearch
                            style={{ width: 200 }}
                            placeholder="Select a team"
                            value={ team }
                            optionFilterProp="children"
                            onChange={onChangeTeamName}
                            filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0 }
                        >
                            <Option value="team1">Team 1</Option>
                            <Option value="team2">Team 2</Option>
                            <Option value="team3">Team 3</Option>
                        </Select>
                    </div>
                    <p className='ap-players-title'>Players</p>
                    
                   <div className='ap-players-table'> {
                        players.map((player, key)=> <Player player={player} key={key} />)
                    }</div>

                    <div className='ap-add-player-next'>
                        <Link to='confirm-player'><button>Next</button></Link>
                    </div>
                    
                    <Footer/>
                </div>
            </div>
        </div>
    )
}
