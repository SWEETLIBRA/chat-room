import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ChatList1 from './components/ChatList1';
import Message from './components/Message';
import NavBar from './router/NavBar';
import NotFound from './router/NotFound'
import Toggler from './store/Toggler';


function App() {
  return (
      <div className="App">
          <NavBar />
          <Routes>
            <Route exact path='/' element = {<Message/>}/>
            <Route path='chatList' element={<ChatList1/>}>
              <Route path=':chatId' element={<ChatList1/>}/>
            </Route>
            <Route path='profile' element={<Toggler/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
      </div>
  );
}

export default App;