import React from 'react'
// import { Link } from 'react-router-dom';

import './luckydrawer.scss';

import Footer from '../Footer/Footer';
import Header from '../Header/ScoreHeader';
import GoBack from '../GoBack/GoBack';
import Close from '../Close/Close';


   
export default function LuckyDrawResultDeclared(props) {
    return (
        <div  className='ldrd-container'>
            <Header title='Lucky draw'/>
            <div className='goback-close'>
                <GoBack goback={props}/>
                <Close/>
            </div>


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
    