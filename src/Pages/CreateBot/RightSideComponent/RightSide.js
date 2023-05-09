import React from "react";
import "./RightSide.css"
import PlainList from "../../../Components/PlainList/PlainList";

function RightSide({componentState}){
    return (
        <div id="right-side" className="border-primary margin-primary side">
            <PlainList componentState={componentState} variable="variables" title="Variables"/>
            <PlainList componentState={componentState} variable="bots" title="Bots"/>
        </div>
    )
}

export default RightSide;