import React from 'react';
import './close.scss'


export default function Close() {
    
    
    function close(){
        window.close();
    }
    
    return (
         <img  className='close' onClick={close} src='../images/iconclose.png'></img>
    )
}