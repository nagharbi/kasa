import React from "react";
import homeImg from '../images/home.png';

function Banniere (props) {
    return (
        <div className='banniere'>
            <img src={props.img} alt="paysage"/>
            { props.title ? <h2>{props.title}, <span>{props.subtitle}</span></h2> : <> </>}
        </div> 
    );
}


export default Banniere;