import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectorChat } from '../store/selectors/selectorChat';
import { removeChat } from '../store/slices/sliceFormChat';

const UserChat = () => {
    const chats = useSelector(selectorChat)
    const dispatch = useDispatch()
    return (
        <div>
            {chats.map((e, id) =>
                <div key={id}>
                    <div className='userChats'>
                        <Link to={`${id}`}>{e.name}</Link>
                        <span onClick={() => {dispatch(removeChat())}} className='cross'>❌</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserChat;