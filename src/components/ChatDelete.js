import React from 'react';
import { Link } from 'react-router-dom';

const ChatDelete = ({chats}) => {
    return (
        <div>
            {chats.map((e, id) =>
                <div key={id}>
                    {/* <p className='chatDelete'>❌</p> */}
                    <div className='userChats'>
                        <Link to={`${id}`}>{e.name}</Link>
                        <span className='cross'>❌</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatDelete;