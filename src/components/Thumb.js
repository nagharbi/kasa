import React from 'react';
import imgThumb from '../images/imgThumb.png'

function Thumb (){
    return(
    <div className='ThumbContainer'>
        <div className='Thumb'>
            <img src={imgThumb} alt="imagethumb"/>
            <p3>Titre de la location</p3> 
        </div>
    </div>
    );
}



export default Thumb;