import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import Login from './componentes/Login';
//import logo from './logo_pitang.png';
import Register from './componentes/Registro';


function App() {
  return (
    <div className="App">
      <div className="App-header">
      {/*<div><img src={logo} alt="logo"/></div>*/}
        <div>
          <Register/>
        </div>
      </div>
    </div>
  );
}
export default App;
