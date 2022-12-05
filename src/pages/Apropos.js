import React from "react";
import Banniere from "../components/Banniere";
import Header from "../components/Header";
import imgapropos from "../images/apropos.png";

function Apropos() {
    return (
        <div>
            <Header/>
            <Banniere img={imgapropos}/>
        </div>
    );
}

export  default Apropos;