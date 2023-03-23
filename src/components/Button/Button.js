import React from "react";


const Button = (props) => {
    return (
      <div id='dice-container' role="button" onClick={props.handleClick} className={ props.isDisabled ? 'disabled' : 'enabled'}>
        <div id="dice"></div>
      </div>
    )
  }



export default Button