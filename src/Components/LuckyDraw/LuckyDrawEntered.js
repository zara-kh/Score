import React from 'react'
import { Link } from 'react-router-dom';

import './luckydrawer.scss';


export default function LuckyDrawEntered() {
    return (
        
        <div  className='lde-container'>
            <div className='lde-goback'>
                 <Link to='/lucky-drawer-enter'> Go back </Link>
            </div>

            <h1> Lucky draw </h1>

            <div className='lde-img'>
                <img src='https://d1icd6shlvmxi6.cloudfront.net/gsc/515J8U/95/46/12/9546127c4807425ab65d8757813a569f/images/lucky_draw/u139.png?token=77bf3ff84cce08eafab1ad886161bb103b6b1f096441e81ba7b480ef0e1aff9d' />
            </div>

            <h1>
                  Congratulations!
            </h1>

            <div className='lde-p'>
                <p>You have entered the lucky draw.</p>
                <p> The results will be declared on</p>
                <p> XXXXXXX</p> 
            </div>

            <div className='lde-button'>
                <Link to='/lucky-drawer-result'><button>SHOW RESULT</button></Link>
            </div>
            
        </div>
    )
}
