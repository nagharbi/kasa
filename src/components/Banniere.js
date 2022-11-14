import React from "react";
import homeImg from '../images/home.png';

function Banniere () {
    return (
        <div className='banniere'>
            <img src={homeImg} alt="montagne"/>
            <h2>Chez vous, <span>partout et ailleurs</span></h2>
        </div> 
    );
}


export default Banniere;