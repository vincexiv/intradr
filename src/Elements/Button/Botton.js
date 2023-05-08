import React from "react";
import "./Button.css"

function Button({btnStyles, text, onBtnClick, btnType="default"}){

    return (
        <button className={btnType}
                style={btnStyles}
                onClick={()=>onBtnClick()}>
            {text}
        </button>
    )
}

export default Button;