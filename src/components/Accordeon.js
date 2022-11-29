import React, { useState } from 'react';

function Accordeon(props) {
    const [checked, setChecked] = useState(true);

    const handleClick = () => {
		setChecked(!checked);
    };

    return (
        <div className="accordeon">
            <input onClick={handleClick} className={`accordeon-checkbox ${checked === true ? 'checked' : ''}`} type="checkbox" id={props.id} />
            <label className="accordeon-label" htmlFor={props.id}>{props.title}</label>
			{
				checked === true ? (
					<div className="accordeon-content">
						{props.content}
					</div>
				) : null
			}
        </div>
    );
}

export default Accordeon;
