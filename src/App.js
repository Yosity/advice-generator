import './App.css';
import Advice, {updateAdvice} from './Advice';
import React , {useState,useEffect} from 'react';

function App() {
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div className="container">
      <Advice/>
      <div id="pattern-divider"></div>
      <div id='dice-container' role= "button" onClick={refreshPage}>
        <div id="dice"></div>
      </div>
    </div>
  );
}


export default App;
