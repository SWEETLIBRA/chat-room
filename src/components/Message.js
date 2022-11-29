import { createAsyncThunk } from '@reduxjs/toolkit';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import '../styles/Message.css';
import FormMessage from './FormMessage';
import Sms from './Sms';

const Message = () => {
    // const dispatch = useDispatch()
    const [messageList, setMessageList] = useState([])
    const [messageBody, setMessageBody] = useState({
        text: '',
        author: ''
    })
    // const BOT_MESSAGE = 'Сообщение получено'

    // useEffect(() => {
    //     if(messageList.length > 0 && messageList.slice(-1)[0].author != 'Bot'){
    //         setTimeout(() => {
    //             setMessageList(prevState => [...prevState, {text: BOT_MESSAGE, author: 'Bot'}])
    //         },1500)
    //     }
        // dispatch(robotMessage())
    // },[messageList])

    return (
        <div className='formMessage'>
            <FormMessage data={messageBody} setData={setMessageBody} setMessage={setMessageList}></FormMessage>
            <div className='messageList'>
                {
                    messageList.map((e, i) => <Sms text={e.text} author={e.author} key={i}/>)
                }
            </div>
        </div>
    );
};

export default Message;

export const robotMessage = createAsyncThunk(
    'robotMessage',
    async function({messageList, chatId}, {dispatch}) {
        const ROBOT_MESSAGE = 'Сообщение получено'
        if(messageList.length > 0) {
            if(messageList[messageList.length -1].author !== 'Bot') {
                setTimeout(() => {
                    dispatch(robotMessage({text: ROBOT_MESSAGE,author: 'Bot', id: Number(chatId)}))
                },1500)
            }
        }
    }
)

