import React, { useState } from "react";
import left from "../images/arrow-left.png";
import right from "../images/arrow-right.png";

function Carrousel(props) {
    const[index, setIndex] = useState(0);
    const [currentImg, setCurrentImg] = useState(props.imgs[index]);

    function onNext () {
        let current = index + 1 ;
        // si la position actuel de l'image = à la dernier image
        // donc current = 0
        if (current === props.imgs.length) {
            current = 0;
        }
        setCurrentImg(props.imgs[current]);
        setIndex(current);
    }

    function onPrev() {
        let current = index - 1;
        if (index === 0) {
            current = props.imgs.length - 1;
        }
        setCurrentImg(props.imgs[current]);
        setIndex(current);
    }

    return (
        <div className="carroussel">
            <div className="carroussel-container">
                <img className="carroussel-img" src={currentImg} />
            </div>
            {/* si j'ai une image j'affiche les fleshs si non j'affiche rien */}
            {props.imgs.length > 1 ? (
                <>
                    <div className="carroussel-controls">
                        <img onClick={onPrev} src={left} className="carroussel-controls-img" alt="arrow left" />
                        <img onClick={onNext} src={right} className="carroussel-controls-img" alt="arrow right" />
                    </div>
                    {/* nombre d'image en bas */}
                    <div className="carroussel-counter">{index + 1 }/{props.imgs.length}</div>
                </>
            ) : null}
        </div>
    );
}

export default Carrousel;