import React, { useEffect, useState } from "react";
import Accordeon from "../components/Accordeon";
import Banniere from "../components/Banniere";
import Header from "../components/Header";
import imgapropos from "../images/apropos.png";
import { getDataApropos } from "../services/service";

function Apropos() {
    const [aproposList, setAproposList] = useState([]);

    useEffect(()=> {
        async function load() {
            const data = await getDataApropos();
            setAproposList(data);
        }
        load();
    }, []);

    return (
        <div>
            <Header/>
            <Banniere img={imgapropos}/>
            <div className="apropos-container">
                <div className="accordeon-container">
                    {aproposList.map((item, index) => <Accordeon key={index} id={item.id} title={item.title} content={item.content} size="size-l" />)}
                </div>
            </div>
        </div>
    );
}

export  default Apropos;