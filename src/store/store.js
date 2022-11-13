import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware, createStore, compose } from "redux";
import { chatReducer } from "./slices/sliceFormChat";
import{ profileReducer } from "./reducer"

// это не нужно больше, так как встроенно в тулкит
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export const store = createStore(profileReducer, composeEnhancers(applyMiddleware()))

//код преподавателя

// стор создаем через функцию configureStore из тулкита внутри reducer передаем все редьюсеры нашей программы
// редьюсеры получаем из созданных слайсов -> смотрите комменты в слайс
export const store = configureStore({
    reducer:{
        chats:chatReducer,
        profile:profileReducer
    }
})