import React from "react";
import "./StartTradingBtn.css"

function StartTradingBtn({onBtnClick}){
    return (
        <button id="start-trading-btn"
            onClick={()=>onBtnClick()}>
                Ready?
        </button>
    )
}

export default StartTradingBtn;