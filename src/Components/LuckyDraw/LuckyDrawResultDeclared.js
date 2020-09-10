import React from 'react'
import { Link } from 'react-router-dom';

import './luckydrawer.scss';

import Footer from '../Footer/Footer';
import Header from '../Header/ScoreHeader';


   
export default function LuckyDrawResultDeclared() {
    return (
        <div  className='ldrd-container'>
            <Header/>
            <div className='ldrd-goback'>
                <Link to='/lucky-drawer-entered'> Go back </Link>
            </div>

            <h1> Lucky draw </h1>

            <div className='ldrd-img'>
                 <img src='images/luckyDrawerImage1.jpg' alt='' />
            </div>

            <h1>
                Winners
            </h1>   

            <div className='ldrd-p'>
                <p>1st Prize : XXXXXXXX</p>
                <p>2nd Prize : XXXXXXXX</p>
                <p>3rd Prize : XXXXXXXX</p>
            </div>
            <Footer />
        </div>
    )
}
    