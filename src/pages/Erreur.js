import { NavLink } from "react-router-dom";
import Header from "../components/Header";

function Error () {
    return (
        <div>
            <Header />
            <div className="error-container">
               <div className="error-code">404</div>  
               <span className="error-info">Oups! La page que vous demandez n'existe pas.</span>
               <NavLink className="error-link" to="/" exact="true">
                    Retourner sur la page d’accueil
               </NavLink>
            </div>
        </div>
    )
}

export default Error;
