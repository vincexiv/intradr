import React from "react";
import "./Button.css"

function Button({btnType, text, callBackFunc}){

    return (
        <button className={btnType}
                style={btnStyles}
                onClick={()=>callBackFunc()}>
            {text}
        </button>
    )
}

export default Button;