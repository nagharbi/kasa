import React from 'react';

function Avatar(props) {
    return (
        <div className='avatar'>
            <div className='avatar-title'>{props.name}</div>
            <img className='avatar-img' src={props.picture} alt={`Photo de ${props.name}`} />
        </div>
    );
}

export default Avatar;