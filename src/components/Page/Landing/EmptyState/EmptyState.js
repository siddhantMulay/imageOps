import React from 'react';
import './EmptyState.scss';
import Button from '../../../Common/Button/Button';
import LineIcons from 'react-lineicons';

function EmptyState(props) {
    const { action, text } = props;
    return (
        <div className="emptyState">
            <div className="emptyStateInner">
                <span>🙁</span>
                <span>{text}</span>
                <Button
                    text="Let's Upload"
                    action={action}
                />
                <span className="note">only 1024x1024 image is accepted</span>
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