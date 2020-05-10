
import React from 'react';
import './Loader.scss';

function Loader(props) {
    const { active } = props;
    return (
        <div className={`loader`} data-active={active}>
            <div className="loadingInner">
                Looking for the stuff you uploaded... 🧐
            </div>
        </div>
    )
}

export default Loader;