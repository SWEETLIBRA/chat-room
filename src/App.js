import React, { useEffect, useRef, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ChatList from './components/ChatList';
import Message from './components/Message';
import Home from './router/Home';
import NavBar from './router/NavBar';
import NotFound from './router/NotFound'


function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
          {/* <Message/> */}
          {/* <ChatList/> */}
          <NavBar />
          <Routes>
            <Route path='/' element = {<Home userName={"Пользователь"}/>}/>
            <Route path='chatList' element={<ChatList/>}>
              <Route path=':chatId' element={<ChatList/>}/>
            </Route>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
      </div>
    </BrowserRouter>
      
    
  );
}

export default App;