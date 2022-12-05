import React from 'react';

function Avatar(props) {
    return (
        <div className='avatar'>
            <div className='avatar-title'>{props.name}</div>
            <img src={props.picture} alt="" className='avatar-img' />
        </div>
    );
}

export default Avatar;