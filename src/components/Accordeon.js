import React, { useState } from 'react';

function Accordeon(props) {
    const [checked, setChecked] = useState(false);

    const handleClick = () => {
		setChecked(!checked);
    };

    const generateContent = () => {
        // si le contenu des accordeons est un tableau
        if (Array.isArray(props.content)) {
            return props.content.map((item, index) => (
                <div key={index}>
                    {item}
                </div>
            ));
        }
        return props.content;
    }

    return (
        // si j'ai mis le parmétre small dans l'appel du composant donc on ajoute la classe accordeon-small
        <div className={`accordeon ${props.small === true ? 'accordeon-small' : ''}`}>
            <input onClick={handleClick} className={`accordeon-checkbox ${checked === true ? 'open' : ''}`} type="checkbox" id={props.id} />
            <label className="accordeon-label" htmlFor={props.id}>{props.title}</label>
			{
				checked === true ? (
					<div className={`accordeon-content ${props.size}`}>
						{generateContent()}
					</div>
				) : null
			}
        </div>
    );
}

export default Accordeon;
