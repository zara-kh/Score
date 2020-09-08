import React from 'react';
import { Link } from 'react-router-dom';
import './trackpoints.scss';

import { Collapse } from 'antd';



function ViewMoreLess({ status }) {
    return (
        <div className='viewStatus'>
            <span>XX</span>
            <span>{ status }</span>
        </div>
    )
}

const track = [
    {
        name:'Favorites'
    },
    {
        name:'Predict:'
    },
    {
        name:'Spin'
    },
    {
        name:'Lucky draw'
    },
    {
        name:'Spend'
    },
    {
        name:'Refer'
    },
]

export default function TrackPoints() {

    const { Panel } = Collapse;

    function callback(key) {

    }

    const text = `
        A dog is a type of domesticated animal.
        Known for its loyalty and faithfulness,
        it can be found as a welcome guest in many households across the world.
    `;

    return(
        <div  className='tr-container'>
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
                
                {track.map((value,key)=>
                <Panel className='tr-panel' header={value.name} key={key}>
                    <p className='tr-panel-box'>{text}</p>
                </Panel>
                )}
            </Collapse> 
        </div>
    )
}
