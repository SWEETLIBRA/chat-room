import React from 'react';
import { Link } from 'react-router-dom';

const chatDelete = ({chats}) => {
    return (
        <div>
            {chats.map((e, id) =>
                <div key={id}>
                    <p className='chatDelete'>❌</p>
                    <div className='userChats'>
                        <Link to={`${id}`}>{e.name}</Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default chatDelete;