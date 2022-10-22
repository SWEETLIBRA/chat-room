import React, { useState } from 'react';
// import { List } from '@mui/material';
// import { ListItem } from '@mui/material';

const ChatList = () => {
    const [chats, setChats] = useState([
        {
            id: 0,
            name: 'Igor'
        },
        {
            id: 1,
            name:'Alex'
        }
    ]) 
    return (
        <>
        {chats.map(chat => <h2 key={chat.id} style={{display: 'flex', flexDirection: 'column',width: '100%',maxWidth: '200px',boxSizing: 'border-box', background: 'gray'}}>{chat.name}</h2>)}
            <div>
                {/* <List>
                    <ListItem>{chats.name}</ListItem>
                </List> */}
            </div>
        </>
        
    );
};

export default ChatList;