import React, { useState } from 'react';
import { List } from '@mui/material';
import { ListItem } from '@mui/material';

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
            <div>
                <List sx={{ bgcolor: 'primary.main', display: 'flex', flexDirection: 'column', width: '100%', height: '100vh', maxWidth: '200px', marginTop: '10px' }}>
                    {chats.map(chat => 
                    <ListItem key={chat.id} 
                    >
                        {`${chat.id}. ${chat.name}`}
                    </ListItem>)}
                </List>
            </div>
        
    );
};

export default ChatList;