
import React from 'react';
import './Notification.scss';

function Notification(props) {
    const { show, type, msg } = props;
    return (
        <div className={`notification ${show ? 'show' : 'hide'}`} data-type={type}>
            <span className="msg">{msg}</span>
            <span className="emoji">{type === 'error' ? `😕` : `😄`}</span>
        </div>
    )
}

export default Notification;