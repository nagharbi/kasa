import React from 'react';
import imgThumb from '../images/imgThumb.png'

function Thumb (props) {
    return(
        <article className='thumb-container'>
            <a href='#' className='thumb'>
                <img src={imgThumb} alt="image du thumb"/>
                <p className='thumb-title'>Titre de la location</p>
            </a>
        </article>
    );
}

export default Thumb;