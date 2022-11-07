import React from 'react';
import "./App.css";
import Content from './components/content/Content';
import 'antd/dist/antd.css'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './components/signup/SignUp';
import Contact from './components/contact/Contact';
function App() {
  return( 
  <div>
   <BrowserRouter >
   <Routes>
   
    <Route path="/" element={<Content/>}></Route>
    <Route path="/signup" element={<SignUp/>} ></Route>
    <Route path="/contact" element={<Contact/>} ></Route>
    <Route path="/" element={<Content/>} ></Route>
   </Routes>
   </BrowserRouter>
  </div>
  )
}

export default App;
