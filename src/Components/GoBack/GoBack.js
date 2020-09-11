import React from 'react';
import './goback.scss'
// import IconBack from 'images/icongoback.png'


export default function Footer(goback) {

    function GoBack(){
        goback.goback.history.goBack()
    }
    return (
         <img  className='goback' onClick={GoBack} src='../images/icongoback.png'  alt=''></img>
    )
}