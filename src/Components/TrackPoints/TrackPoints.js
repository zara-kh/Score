import React from 'react';
import { Link } from 'react-router-dom';
import './trackpoints.scss';

import Footer from '../Footer/Footer';
import Header from '../Header/ScoreHeader';



import { Collapse } from 'antd';

function ViewMoreLess({ status }) {
    return (
        <div className='viewStatus'>
            <span>XX</span>
            <span>{ status }</span>
        </div>
    )
}

// const track = [
//     {
//         name:'Favorites'
//     },
//     {
//         name:'Predict:'
//     },
//     {
//         name:'Spin'
//     },
//     {
//         name:'Lucky draw'
//     },
//     {
//         name:'Spend'
//     },
//     {
//         name:'Refer'
//     },
// ]

export default function TrackPoints() {

    const { Panel } = Collapse;

    function callback(key) {

    }

    return(
        <div  className='tr-container'>
            <Header/>
            <div className='tr-goback'>
                <Link to='/add-player' className='tr-link1'> Go back </Link>
                <Link to='/add-player' className='tr-link2'> How to redeem</Link>
            </div>
            <h1>
                Track points
            </h1>
            <div className='tr-p'>
                <p>Total earned : XX points</p>
            </div>
            <Collapse onChange={callback} className='tr-collapse' expandIcon={({ isActive }) => isActive ? <ViewMoreLess status='View less' /> : <ViewMoreLess status='View more' />  }>
                
                {/* {track.map((value,key)=> */}
                    <Panel className='tr-panel' header='Favorites' key='1'>
                        <div className='tr-panel-box-title'>
                            <div>Team wins</div>
                            <div>x 3</div>
                            <div>XX</div>
                        </div>
                        <h4>Player performance</h4>
                        <div className='tr-panel-box-item'>
                            <div>- 4s</div>
                            <div>x 5</div>
                            <div>XX</div>
                        </div>
                        <div className='tr-panel-box-item'>
                            <div>- 6s</div>
                            <div>x 7</div>
                            <div>XX</div>
                        </div>
                        <div className='tr-panel-box-item'>
                            <div>Wickets</div>
                            <div>x 3</div>
                            <div>XX</div>
                        </div>
                    </Panel>
                    <Panel className='tr-panel' header='Predict' key='2'>
                        <div className='tr-panel-box-item-sec'>
                            <div>15th Sep, 2020</div>
                            <div>XX</div>
                        </div>
                        <div className='tr-panel-box-item-sec'>
                            <div>17th Sep, 2020</div>
                            <div>XX</div>
                        </div>
                    </Panel>
                    <Panel className='tr-panel' header='Spin' key='3'>
                        <div className='tr-panel-box-item-sec'>
                            <div>15th Sep, 2020</div>
                            <div>XX</div>
                        </div>
                        <div className='tr-panel-box-item-sec'>
                            <div>17th Sep, 2020</div>
                            <div>XX</div>
                        </div>
                    </Panel>
                    <Panel className='tr-panel' header='Lucky draw' key='4'>
                        <p className='tr-panel-box'>Comming soon...</p>
                    </Panel>
                    <Panel className='tr-panel' header='Spend' key='5'>
                        <p className='tr-panel-box'>Comming soon...</p>
                    </Panel>
                    <Panel className='tr-panel' header='Refer' key='6'>
                        <div className='tr-panel-box-item-sec'>
                            <div>Shalini Nair</div>
                            <div>XX</div>
                        </div>
                        <div className='tr-panel-box-item-sec'>
                            <div>Sunil Deskpande</div>
                            <div>XX</div>
                        </div>
                    </Panel>
                {/* )} */}
            </Collapse> 
            <Footer/>
        </div>
    )
}
