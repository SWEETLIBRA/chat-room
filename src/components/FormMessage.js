import React, { useEffect, useRef } from 'react';
import { Input, Button } from '@mui/material';

const FormMessage = ({data, setData, setMessage, ariaLabel}) => {
    const {text, author} = data
    const ref = useRef(null)

    // useEffect(() => {
    //     ref.current?.focus()
    // },[ref.current])
    
    const submitForm = (e) => {
        e.preventDefault()
        if (text.length > 0){
            setMessage(prevState => [...prevState, {text, author}])
        }
            setData({
                text: '',
                author: ''
            })
    }
    return (
        <form onSubmit={submitForm}>
            <Input autoFocus inputProps={ariaLabel} placeholder='Name' value={text} onChange={(e) =>
                setData(prevState => ({...prevState, text: e.target.value}))}
            />
             <Input inputProps={ariaLabel} placeholder='Text' value={author} onChange={(e) =>
                setData(prevState => ({...prevState, author: e.target.value}))}
            />
            <Button type='submit' variant="contained" color="success" style={{height:27}}>Send</Button>
        </form>
    );
};

export default FormMessage;