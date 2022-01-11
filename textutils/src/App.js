import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const sendAlert=(message,type)=>
  {
    setAlert({
      message:message,
      type:type
    });
    setTimeout(
      ()=>(setAlert(null)),
      2000
    );
  }
  const toggleMode=()=>
  {
    if(mode==='dark')
    {
      setMode('light');
      document.body.style.backgroundColor='#EAFDFF'
      sendAlert("Applied Light mode","info")
    }
    else
    {
      setMode('dark');
      document.body.style.backgroundColor='black'
      sendAlert("Applied Dark mode","info")
    }
  }
  return (
    <div id="main">
    <Router>
    <Navbar title="TextUtils" toggle={toggleMode} mode={mode} />
      <Alert alert={alert} />
      <Routes>
          <Route exact path="/" element={<TextForm sendAlert={sendAlert} heading="Enter your text to analyse" mode={mode} />} />
          <Route exact path="/about" element={<About mode={mode}/>}/>
      </Routes>
    </Router>
    </div>
  );

}

export default App;
