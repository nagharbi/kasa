import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../components/Header";

function Error (props) {
    let message = (props.code === '404') ? "Oups! La page que vous demandez n'existe pas." : "Oups! Erreur serveur survenu!";
    return (
        <div>
            <Header />
            <div className="error-container">
               <div className="error-code">{props.code}</div>  
               <span className="error-info">{message}</span>
               <NavLink className="error-link" to="/" exact="true">
                    Retourner sur la page d’accueil
               </NavLink>
            </div>
        </div>
    )
}

export default Error;
