import React from 'react';
import './Button.scss';

function Button(props) {
    const { action, text } = props;
    return (
        <button className="custButton" onClick={action}>
            {text}
        </button>
    )
}

export default Button;