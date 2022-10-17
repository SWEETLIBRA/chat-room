import React, { useEffect, useState } from 'react';
import '../styles/Message.css';
import FormMessage from './FormMessage';
import Sms from './Sms';

const Message = () => {
    const [messageList, setMessageList] = useState([])
    const [messageBody, setMessageBody] = useState({
        text: '',
        author: ''
    })
    const BOT_MESSAGE = 'Сообщение получено'

    useEffect(() => {
        if(messageList.length > 0 && messageList.slice(-1)[0].author != 'Bot'){
            setTimeout(() => {
                setMessageList(prevState => [...prevState, {text: BOT_MESSAGE, author: 'Bot'}])
            },1500)
        }
    },[messageList])

    return (
        <div className="gide">
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

