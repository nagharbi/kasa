import React from "react";
import Banniere from "../components/Banniere";
import Footer from "../components/Footer";
import Header from "../components/Header";
import imgapropos from "../images/apropos.png";

function Apropos(){
    return (
        <div>
            <Header/>
            <Banniere img={imgapropos}/>
            <Footer/>
        </div>
    );
}


export  default Apropos;