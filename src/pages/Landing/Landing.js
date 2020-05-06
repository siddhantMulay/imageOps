import React from 'react';
import './Landing.scss';

import EmptyState from '../../components/Page/Landing/EmptyState/EmptyState';
import Gallery from '../../components/Page/Landing/Gallery/Gallery';

function Landing(props) {
    return (
        <div data-page="landing">
            <div className="galleryContainer">
                <Gallery />
            </div>
        </div>
    )
}

export default Landing;