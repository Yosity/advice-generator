import './App.css';
import Advice from './Advice';
import React , {useState,useEffect} from 'react';

function App() {
  return (
    <div className="container">
      <Advice/>
      <div id="pattern-divider"></div>
      <div id='dice-container'>
        <div id="dice"></div>
      </div>
    </div>
  );
}


export default App;
