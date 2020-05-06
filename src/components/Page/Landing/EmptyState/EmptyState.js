import React from 'react';
import './EmptyState.scss';
import Button from '../../../Common/Button/Button';
import LineIcons from 'react-lineicons';

function EmptyState() {
    return (
        <div className="emptyState">
            <div className="emptyStateInner">
                <span>🙁</span>
                <span>Thing's empty</span>
                <Button text="Let's Upload" />
            </div>

            <div className="emptyImg">
                <LineIcons name="image" />
            </div>
            
            <div className="emptyImg">
                <LineIcons name="gallery" />
            </div>

        </div>
    )
}

export default EmptyState;