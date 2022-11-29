import React from 'react';
import { NavLink } from 'react-router-dom';

function Thumb (props) {
    return(
        <article className='thumb'>
        <NavLink to={'/logement/' + props.id } className='thumb-link'>
            <div className='thumb-card' style={{ backgroundImage: `url(${props.img})`}}>
                <span className='thumb-title'>{props.title}</span>
                <div className='thumb-bg'></div>
            </div>
        </NavLink>
    </article>
    );
}

export default Thumb;