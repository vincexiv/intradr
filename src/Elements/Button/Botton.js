import React from "react";
import "./Button.css"

function Button({btnStyles, btnType="default", text, onBtnClick}){

    return (
        <button className={btnType}
                style={btnStyles}
                onClick={()=>onBtnClick()}>
            {text}
        </button>
    )
}

export default Button;