import React from 'react';
import '../styles/Message.css';

const Message = ({name}) => {
    const theme = 'dark'
    return (
        <div className="gide">
            <div style={{color : theme === 'dark' ? 'blue' : 'red'}}>
                <h1>Traveler, {name}</h1>
            </div>
        </div>
    );
};

export default Message;
