import { createSlice } from "@reduxjs/toolkit"

const initialState = [
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
]

const sliceFormChat = createSlice({
    name: 'chats',
    initialState,
    reducers:{
        addChat: (state, action) => {
            return [...state, action.payload]
        },
        removeChat: (state) => {
            return [...state.filter((e,i) => i < state.length -1)]
        }
    }
})

export const {addChat, removeChat} = sliceFormChat.actions
export const chatReducer = sliceFormChat.reducer