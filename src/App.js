import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  Routes,
  Route,
} from "react-router-dom";
//this is rect domm
import { useState } from 'react';
function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);
  const showAlert = (message,type)=>{
      setalert({
        msg:message,
        type:type
      })   
      setTimeout(() => {
        setalert(null);
      }, 1500);
  }
  const toggleMode=()=>{
    if(mode==="light"){
      showAlert("Dark mode has been enabled","success");
      setmode("dark");
      document.body.style.backgroundColor="#042743";
    }
    else{
      showAlert("light mode has been enabled","success")
      setmode("light");
      document.body.style.backgroundColor="white";
    }
  }


  return (
   <>
    <Navbar title="TextUtiles" aboutTitle="About" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    {/* <div className="container"> */}
          {/* <Routes>
            <Route exact path="/" component={()=>{<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}}/>
            <Route path="/about" component={()=>{<About />}} />
          </Routes> */}
        {/* </div> */}
        <div className="container">
        <Routes>
          <Route exact path="/" element={<TextForm heading="Enter text to analyze" mode={mode} showAlert={showAlert} />}/>
          <Route exact path="/about" element={<About mode={mode}/>}/>
        </Routes>
        </div>
    
  </>
  );
}
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

export default App;
 