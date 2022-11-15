import React from 'react';
import Header from '../components/Header';
import Banniere from '../components/Banniere';
import Footer from '../components/Footer';
import Thumb from '../components/Thumb';
import homeImg from '../images/home.png';

function Home() {
    return (
        <div>
            <Header />
            <Banniere img={homeImg} title="Chez vous " subtitle ="partout et ailleurs" />
            
            {/* <Thumb/> */}
            <Footer />
        </div>
    );
}

export  default Home;