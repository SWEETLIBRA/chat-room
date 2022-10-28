import React from 'react';

const FormMessage = ({data, setData, setMessage}) => {
    const {text, author} = data
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
            <input placeholder='Name' value={text} onChange={(e) =>
                setData(prevState => ({...prevState, text: e.target.value}))}
            />
            <input placeholder='Text' value={author} onChange={(e) =>
                setData(prevState => ({...prevState, author: e.target.value}))}
            />
            <button type='submit'>Send</button>
        </form>
    );
};

export default FormMessage;