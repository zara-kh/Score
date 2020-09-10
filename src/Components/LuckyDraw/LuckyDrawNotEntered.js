import React from 'react'
import { Link } from 'react-router-dom';

import './luckydrawer.scss';

import Footer from '../Footer/Footer';
import Header from '../Header/ScoreHeader';



export default function LuckyDrawNotEntered() {
    return (       
        <div  className='ldne-container'>
            <Header/>
            <div className='ldne-goback'>
                <Link to='/add-player'> Go back </Link>
            </div>

            <h1> Lucky draw </h1>

            <div className='ldne-img'>
                <img src='images/luckyDrawerImage2.png' alt='' />
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
            <Footer/>
        </div>
    )
}
