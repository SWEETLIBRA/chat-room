import React, { useEffect, useState } from 'react';
import { Button, List } from '@mui/material';
import { ListItem } from '@mui/material';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader'
import ChatDelete from './ChatDelete';
import Chat from './Chat'
import { number } from 'prop-types';

const ChatList = () => {
    const [chats, setChats] = useState([
        {
            id: 1,
            name: 'Igor',
            messages: [
                {
                    author: 'Igor',
                    text: 'Hello',
                    date: new Date().toLocaleDateString()
                },
                {
                    author: 'Bot',
                    text: 'Сообщение получено',
                    date: new Date().toLocaleDateString()
                }
            ]
        },
        {
            id: 2,
            name:'Alex',
            messages: []
        }
    ])
    const [loading, setLoading] = useState(null)
    const {chatId} = useParams()
    
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setChats(chats)
            setLoading(false)
        }, 1000)
    },[])
    return (
            <div style={{display:'flex', flexGrow:1, position:'relative'}}>
                <WithLoading isLoading = {loading}>
                    <List className='chatList' sx={{ bgcolor: 'primary.main', display: 'flex', flexDirection: 'column', width: '150px', height: '100vh', borderRadius: '5px', overflowX: 'none', overflowY: 'scroll' }}>
                        <ListItem sx={{}}><h2 className='chats'>Чаты</h2></ListItem>
                        <>
                            <ChatDelete chats={chats}/>
                            <Button type='submit' onClick={() => {
                              setChats(p => [...p, chats[0]])  
                            }}>+</Button>
                        </>
                        
                        {chats.map(chat => 
                        <ListItem key={chat.id} 
                        >
                            {/* <p className='userChats'>{chat.name}</p> */}
                        </ListItem>
                        )}
                    </List>
                    {
                        chatId && chats[chatId] ? <Chat chat={chats[chatId]}/> : <h2>Выберите чат</h2>
                    }
                </WithLoading>
            </div>
    );
};

const WithLoading = ({isLoading, children}) => {
    return isLoading || isLoading === null ? <Loader /> : children
}

export default ChatList;