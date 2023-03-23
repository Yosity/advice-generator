import React from "react";

const Advice = (props) => {
    return (
      <div>
        <h1>Advice #{props.count}</h1>
        <p>{props.advice}</p>
      </div>
    )
}

export default Advice