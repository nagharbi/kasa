import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Banniere from '../components/Banniere';
import Thumb from '../components/Thumb';
import homeImg from '../images/home.png';
import { getAllLogement } from'../services/service';

function Home() {
    const [logements, setlogements] = useState([]);

    useEffect(()=> {
        async function load() {
            const data=  await getAllLogement();
            setlogements(data);
        }
        load();
    }, []);

    return (
        <div>
            <Header />
            <Banniere img={homeImg} title="Chez vous, " subtitle ="partout et ailleurs" />
            <div className='thumb-main'>
                <div className='thumb-container'>
                    {logements.map((item)=><Thumb key={item.id} title={item.title} img={item.cover}/>) }
                </div>
            </div>
        </div>
    );
}

export  default Home;