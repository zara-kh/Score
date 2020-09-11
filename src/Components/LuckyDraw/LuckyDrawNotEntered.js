import React from 'react'
import { Link } from 'react-router-dom';

import './luckydrawer.scss';

import Footer from '../Footer/Footer';
import Header from '../Header/ScoreHeader';
import GoBack from '../GoBack/GoBack';
import Close from '../Close/Close';




export default function LuckyDrawNotEntered(props) {
    return (       
        <div  className='ldne-container'>
            <Header title='Lucky draw' />
            <div className='goback-close'>
                <GoBack goback={props}/>
                <Close/>
            </div>

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
