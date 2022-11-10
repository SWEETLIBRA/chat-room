// import { applyMiddleware, createStore, compose } from "redux";
// import{ profileReducer } from "./reducer"

import { configureStore } from "@reduxjs/toolkit";
import { chatReducer } from "../slices/sliceFormChat";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export const store = createStore(profileReducer, composeEnhancers(applyMiddleware()))
export const store = configureStore({
    reducer:{
        chats: chatReducer
    }
})