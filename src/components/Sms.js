import React from 'react';

const Sms = ({author, text}) => {
    return (
        <div>
            <hr/>
            <h1>{author}</h1>
            <p>{text}</p>
            <hr/>
        </div>
    );
};

export default Sms;