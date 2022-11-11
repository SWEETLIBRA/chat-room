import React, { useEffect, useState } from 'react';
import { Button, List } from '@mui/material';
import { ListItem } from '@mui/material';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader'
import ChatDelete from './ChatDelete';
import Chat from './Chat'
import { useDispatch, useSelector } from 'react-redux';
import { addChat } from '../slices/sliceFormChat';

const ChatList = () => {
    const newChat = {
        id: 2,
        name:'Alex',
        messages: []
    }
    const dispatch = useDispatch()
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
    // получаем спискок чатов из стора редакс
    const chatsFromStore = useSelector(state => state.chats)
    console.log(chatsFromStore)

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
                        <ListItem><h2 className='chats'>Чаты</h2></ListItem>
                        {/* тут не совсем верно. я так понял у вас рендер списка чатов происходит из компонента chatDelete */}
                        {/* Как бы список чатов в отдельном компоненте ок - но нейминг не лучший */}
                        {/* тут в пропсы уже передаем не чаты из вашего хука setState а их хранилища */}
                        <>
                            <ChatDelete chats={chatsFromStore}/>
                            <Button type='submit' onClick={() => {
                              dispatch(addChat(newChat))  
                            }}>+</Button>
                        </>
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