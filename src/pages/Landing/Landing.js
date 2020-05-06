import React from 'react';
import './Landing.scss';

import EmptyState from '../../components/Page/Landing/EmptyState/EmptyState';

function Landing(props) {
    return (
        <div data-page="landing">
            <div className="galleryContainer">
                <EmptyState />
            </div>
        </div>
    )
}

export default Landing;