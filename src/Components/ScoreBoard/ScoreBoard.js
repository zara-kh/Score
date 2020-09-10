import React from 'react';
import './scoreboard.scss';

import ScoreHeader from './ScoreHeader';
import Team from './Team';
import ScorMessage from './ScorMessage';
import TeamMembers from './TeamMembers';

import Footer from '../Footer/Footer'



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
                <div className='sc-team-cont'>
                    <TeamMembers tm='2' flag='https://www.themontserratreporter.com/wp-content/uploads/2016/06/1024px-West_Indies_Cricket_Cap_Insignia.svg.png' />
                    <TeamMembers tm='1' flag='https://theflagcompany.in/wp-content/uploads/2018/10/india-flag-small.png' />

                </div>

                <Footer />
            </div>
        </div>
    )
}

export default ScoreBoard;