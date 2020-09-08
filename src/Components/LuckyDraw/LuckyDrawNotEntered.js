import React from 'react'
import { Link } from 'react-router-dom';

import './luckydrawer.scss';

export default function LuckyDrawNotEntered() {
    return (       
        <div  className='ldne-container'>
            <div className='ldne-goback'>
                <Link to='/add-player'> Go back </Link>
            </div>

            <h1> Lucky draw </h1>

            <div className='ldne-img'>
                <img src='https://d1icd6shlvmxi6.cloudfront.net/gsc/515J8U/95/46/12/9546127c4807425ab65d8757813a569f/images/lucky_draw/u139.png?token=77bf3ff84cce08eafab1ad886161bb103b6b1f096441e81ba7b480ef0e1aff9d' />
            </div>

            <div className='ldne-p'>
                <p>Win XXX.... by participating in our</p>
                <p>lucky draw..</p>
            </div>

            <div className='ldne-button'>
                <Link to='/lucky-drawer-entered'><button>ENTER LUCKY DRAW</button></Link>
            </div>

            <div className='ldne-checkbox' >
                <input type='checkbox' />
                <p>Read Terms & conditions</p>
            </div>  
        </div>
    )
}
