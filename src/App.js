import './App.css';
import React, { useState } from 'react'
import Navbar  from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';

import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";


function App() {
  const [mode,setMode] = useState('light');
  const [greenMode, setgreenMode] = useState('light')
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) =>{
        setAlert({
          msg:message,
          type: type
        })
        setTimeout(()=>{
          setAlert(null);
        },1500)
  }
  const toggleDarkMode=()=>{
   if (mode ==='dark'){
        setMode('light')
        document.body.style.backgroundColor='white';
        showAlert('Light mode has been enabled','success')
    }
    else{
     
        setMode('dark')
        document.body.style.backgroundColor='grey';
        showAlert('Dark mode has been enabled','success')
      }
  }
  const toggleGreenMode=()=>{
    if (greenMode === 'green'){
         setgreenMode('light')
         document.body.style.backgroundColor='white';
         showAlert('Light mode has been enabled','success')
     }
     else{
         setgreenMode('green')
         document.body.style.backgroundColor='green';
         showAlert('Green mode has been enabled','success')
    }
  }
  return (
    // in react return only ONE html tag
  <>
  <Router>
  <Navbar name="TextUtils" mode ={mode} greenMode = {greenMode} toggleMode1={toggleDarkMode} toggleMode2={toggleGreenMode}/>
  <Alert alert={alert}/>
  <div className="container my-3">
    <Routes>
    <Route exact  path = "/" element={<TextForm showalert={showAlert} heading="Enter text to analyze below" mode = {mode} />} />
    <Route exact path ="/about" element={<About/>}/>
    </Routes>
  </div>
  </Router>
  </>
   );
}

export default App;
