import React from "react";
import Header from "../components/Header";
import Tag from "../components/Tag";

function FicheLogement(){
    return (
        <div>
            <Header/>
            <div className="house-container">
            <div className="house-title">Cozy loft on the Canal Saint-Martin</div>
            <span className="house-position">Paris, Île-de-France</span>
            <div className="tag-container">
                    <Tag content="Cozy"/>
                    <Tag content="Canal"/>
                    <Tag content="Paris 10"/>
                </div>
           </div>
        </div>
    );
}


export  default FicheLogement;