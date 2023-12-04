import './App.css';
import React, {useState} from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import AboutUs from './components/AboutUs';
import {
  BrowserRouter, 
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const[mode, setMode] = useState("white");
  const[backgroundColor1, setbackgroundColor] = useState({backgroundColor : "white", color: "black"})
  {document.body.style.backgroundColor = backgroundColor1.backgroundColor}

  return (
    <BrowserRouter >
    <Navbar title="Text-Specs" about="About Us" mode={mode} setMode={setMode} backgroundColor1={backgroundColor1} setbackgroundColor={setbackgroundColor}/>
  
      <TextForm mode={mode} setMode={setMode} backgroundColor1={backgroundColor1}/>
    <div className="App">
    <Routes>
      <Route path='/about' element={<AboutUs mode={mode} setMode={setMode} backgroundColor1={backgroundColor1}/>}/>
      {/* <Route path ='/home' element={<TextForm mode={mode}/>}/> */}
    </Routes>
    </div>
   
    
    </BrowserRouter>
  );
}

export default App;
