import React from 'react';
import './scoreboard.scss';

import ScoreHeader from './ScoreHeader';
import Team from './Team';
import ScorMessage from './ScorMessage';
import TeamMembers from './TeamMembers';

const ScoreBoard = () => {

    return (
        <div className='sc-root'>
            <div className='sc-container'>
                <ScoreHeader />     
                <p className='sc-date'>15/12/19</p>    
                <div className='sc-teams'>
                    <Team team='https://theflagcompany.in/wp-content/uploads/2018/10/india-flag-small.png' dir='left' teamName='IND' />
                    <Team team='https://www.themontserratreporter.com/wp-content/uploads/2016/06/1024px-West_Indies_Cricket_Cap_Insignia.svg.png' dir='right' teamName='WI' />
                </div> 
                <ScorMessage />  
                <TeamMembers flag='https://theflagcompany.in/wp-content/uploads/2018/10/india-flag-small.png' />
                <TeamMembers flag='https://www.themontserratreporter.com/wp-content/uploads/2016/06/1024px-West_Indies_Cricket_Cap_Insignia.svg.png' />
            </div>
        </div>
    )
}

export default ScoreBoard;