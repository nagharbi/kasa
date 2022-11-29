import React, { useState } from "react";
import left from "../images/arrow-left.png";
import right from "../images/arrow-right.png";

function Carousel(props) {
    const[index, setIndex] = useState(0);
    const [currentImg, setCurrentImg] = useState(props.imgs[index]);

    function onNext () {
        let current = index + 1 ;
        if (current === props.imgs.length) {
            current = 0;
        }
        setCurrentImg(props.imgs[current])
        setIndex(current);
    }

    return (
        <div className="carroussel">
            <div className="carroussel-container">
                <img className="carroussel-img" src={currentImg} />
            </div>
            <div className="carroussel-controls">
                <img src={left} className="carroussel-controls-img" alt="arrow left" />
                <img onClick={onNext} src={right} className="carroussel-controls-img" alt="arrow right" />
            </div>
            <div className="carroussel-counter">{index +1 }/4</div>
        </div>
    );
}

export default Carousel;