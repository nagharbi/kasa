import React from 'react';

// j'ai passer le name et picture en props pour rendre le composant generique
function Avatar(props) {
    return (
        <div className='avatar'>
            <div className='avatar-title'>{props.name}</div>
            <img src={props.picture} alt={props.name} className='avatar-img' />
        </div>
    );
}

export default Avatar;