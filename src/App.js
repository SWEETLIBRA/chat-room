import React, { useEffect, useRef, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ChatList from './components/ChatList';
import Message from './components/Message';
import Home from './router/Home';
import NavBar from './router/NavBar';
import NotFound from './router/NotFound'
import Toggler from './store/Toggler';


function App() {
  
  return (
      <div className="App">
          {/* <Message/> */}
          {/* <ChatList/> */}
          <NavBar />
          <Routes>
            <Route exact path='/' element = {<Home userName={"Пользователь"}/>}/>
            <Route path='chatList' element={<ChatList/>}>
              <Route path=':chatId' element={<ChatList/>}/>
            </Route>
            <Route path='profile' element={<Toggler/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
      </div>
  );
}

export default App;