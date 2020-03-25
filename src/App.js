import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './componentes/Login';
//import image from '../public/logo';


function App() {
  return (
    <div className="App">
      {/*<div><img src={logo}></img></div>*/}
      <div className="App-header">
        <div className="Center-box">
          <Login/>
        </div>
      </div>
    </div>
  );
}

export default App;
