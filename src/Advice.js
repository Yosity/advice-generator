
import React ,{useEffect, useState} from "react";

let Advice = () =>{
    let [count,setCount] = useState(1);
    let [advice,setAdvice] = useState("");
  
    let updateAdvice = () => {
        console.log("executed")
        let fetchAdvice = fetch("https://api.adviceslip.com/advice")
        .then((res) =>{
            res.json().then(data=>{
                setAdvice(data.slip.advice);
            })
        })
}
    return(
        <div>
            <h1>Advice #{count}</h1>
            <p>{advice}</p>
        </div>
    )
  
  }

  export default Advice