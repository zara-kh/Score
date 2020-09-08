import React from 'react'
import { Link } from 'react-router-dom';

import './luckydrawer.scss';
   
export default function LuckyDrawResultDeclared() {
    return (
        <div  className='ldrd-container'>

            <div className='ldrd-goback'>
                <Link to='/lucky-drawer-entered'> Go back </Link>
            </div>

            <h1> Lucky draw </h1>

            <div className='ldrd-img'>
                <img src='https://d1icd6shlvmxi6.cloudfront.net/gsc/515J8U/95/46/12/9546127c4807425ab65d8757813a569f/images/lucky_draw/u144.jpg?token=c0d54657476b019be225957c994c4c94dc23fe3aae7d7fcbc1a1be1dab0b8652' />
            </div>

            <h1>
                Winners
            </h1>

            <div className='ldrd-p'>
                <p>1st Prize : XXXXXXXX</p>
                <p>2nd Prize : XXXXXXXX</p>
                <p>3rd Prize : XXXXXXXX</p>
            </div>
        
        </div>
    )
}
    