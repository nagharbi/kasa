import React from 'react';

function Avatar(props) {
    return (
        <div className='avatar'>
            <div className='avatar-title'>{props.title}</div>
            <div className='avatar-img'></div>
        </div>
    );
}

export default Avatar;