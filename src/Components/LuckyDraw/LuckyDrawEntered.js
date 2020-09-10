import React from 'react'
import { Link } from 'react-router-dom';

import './luckydrawer.scss';

import Footer from '../Footer/Footer';
import Header from '../Header/ScoreHeader';




export default function LuckyDrawEntered() {
    return (
        
        <div  className='lde-container'>
            <Header title='Lucky draw '/>
            
            <div className='lde-goback'>
                 <Link to='/lucky-drawer-enter'> Go back </Link>
            </div>


            <div className='lde-img'>
                 <img src='images/luckyDrawerImage2.png' alt='' />
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
            <Footer/>
        </div>
    )
}
