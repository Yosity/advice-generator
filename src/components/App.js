import './App.css';
import React , {useState, useEffect} from 'react';
import Advice from "./Advice/Advice"
import Button from './Button/Button';

function App() {
  const [count, setCount] = useState(1);
  const [advice, setAdvice] = useState("");
  
  // to disable the button for 2s
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    getAdvice();
  }, []);                 //Gotta focus on useEffect magic !

  useEffect(() => {
    if (isDisabled) {
      const timeoutId = setTimeout(() => {
      setIsDisabled(false);
      }, 2000);

      return () => clearTimeout(timeoutId);
    }
  }, [isDisabled]);

  
  const getAdvice = () => {

    const apiURL = "https://api.adviceslip.com/advice";
    fetch(apiURL)
      .then((response) => {
        if (!response) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return response.json();
      })
      .then((data) => {
        setAdvice(data.slip.advice);
      });
  }

  function handleClick() {
    if (!isDisabled) {
      setCount(count + 1);
      getAdvice();
      setIsDisabled(true);
    }
  }


  return (
    <div className="container">
      <Advice count = {count} advice = {advice}/>
      <div id="pattern-divider"></div>
      <Button handleClick = {handleClick} isDisabled = {isDisabled} />
    </div>
  );
}

export default App;
