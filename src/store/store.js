import { configureStore } from "@reduxjs/toolkit";
import { chatReducer } from "./slices/sliceFormChat";
import{ profileReducer } from "./reducer"

export const store = configureStore({
    reducer:{
        chats:chatReducer,
        profile:profileReducer
    }
})