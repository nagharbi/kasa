import Header from "../components/Header";

function Error () {
    return (
        <div>
            <Header />
            <div className="error-container">
               <div className="error404">404</div>  
               <span className="error-info">Oups! La page que vous demandez n'existe pas.</span>
               <a href= "#" className="error-link">Retourner sur la page d’accueil</a>
            </div>
        </div>
    )
}

export default Error;
