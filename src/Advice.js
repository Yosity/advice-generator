
import React ,{useState} from "react";

const Advice = () =>{
    const [count, setCount] = useState(1);
    const [advice, setAdvice] = useState("");

    const apiURL = "https://api.adviceslip.com/advice";

    fetch(apiURL)
        .then((response) => {
            if (!response) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

           return response.json();
        })
        .then((data ) => {
            return setAdvice(data.slip.advice);
        })

    return(
        <div>
            <h1>Advice #{count}</h1>
            <p>{advice}</p>
        </div>
    )
}

  export default Advice