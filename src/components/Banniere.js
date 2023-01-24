import React from "react";

function Banniere (props) {
    return (
        <div className='banniere'>
            <img src={props.img} alt="paysage"/>
            { props.title ? <h2>{props.title} <span>{props.subtitle}</span></h2> : null }
        </div> 
    );
}


export default Banniere;