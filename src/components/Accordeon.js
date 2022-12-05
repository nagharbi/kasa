import React, { useState } from 'react';

function Accordeon(props) {
    const [checked, setChecked] = useState(true);

    const handleClick = () => {
		setChecked(!checked);
    };

    const generateContent = () => {
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
        <div className={`accordeon ${props.small === true ? 'accordeon-small' : ''}`}>
            <input onClick={handleClick} className={`accordeon-checkbox ${checked === true ? 'checked' : ''}`} type="checkbox" id={props.id} />
            <label className="accordeon-label" htmlFor={props.id}>{props.title}</label>
			{
				checked === true ? (
					<div className="accordeon-content">
						{generateContent()}
					</div>
				) : null
			}
        </div>
    );
}

export default Accordeon;
