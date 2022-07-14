import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
import Alert from './Components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom"; 

function App() {
  const [mode, setMode] = useState('light') //weather dark mode is enable or not
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#343a40'
      document.body.style.color = 'white'
      showAlert("Dark Mode Enabled", "success")
    }

    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert("Light Mode Enabled", "success")
    }
  }

  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode} />
        {/* <Navbar/> */}
        <Alert alert={alert} />

        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About />}> */}
            {/* </Route> */}
            {/* <Route exact path="/" element={<TextForm heading="Enter the text to analyze" />} /> */}
            <TextForm heading="Enter the text to analyze" />
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
