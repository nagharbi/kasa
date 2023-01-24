import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Banniere from '../components/Banniere';
import Thumb from '../components/Thumb';
import homeImg from '../images/home.png';
import { getAllLogement } from'../services/service';

function Home() {
    const [logements, setLogements] = useState([]);
    // useEffect indique a react qui va effectuer un recupération des logements.
    useEffect(()=> {
        async function load() {
            const data = await getAllLogement();
            setLogements(data);
        }
        load();
    }, []);

    return (
        <div>
            <Header />
            <Banniere img={homeImg} title="Chez vous, " subtitle ="partout et ailleurs" />
            <div className='thumb-main'>
                <div className='thumb-container'>
                    {/* map() : iterer sur les données et retournée chaque logement dans thumb  */}
                    {logements.map((logement ) => <Thumb key={logement.id} id={logement.id} title={logement.title} img={logement.cover}/>)}
                </div>
            </div>
        </div>
    );
}

export default Home;