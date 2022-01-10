import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode=()=>
  {
    if(mode==='dark')
    {
      setMode('light');
      document.body.style.backgroundColor='#EAFDFF'
    }
    else
    {
      setMode('dark');
      document.body.style.backgroundColor='black'
    }
  }
  return (
    <div id="main">
    
<Navbar title="TextUtils" toggle={toggleMode} mode={mode} />
<TextForm heading="Enter your text to analyse" mode={mode} />

    </div>
  );

}

export default App;
