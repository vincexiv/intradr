import React from "react";
import "./Button.css"

function Button({btnStyles, text, onBtnClick, onHover, btnType="default"}){

    return (
        <button className={btnType}
                style={btnStyles}
                onClick={()=>onBtnClick()}
                onHover={onHover}>
            {text}
        </button>
    )
}

export default Button;