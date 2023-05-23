import React from "react";
import "./RightSide.css"
import PlainList from "../../../Components/PlainList/PlainList";
import FundamentalList from "../../../Components/FundamentalsList/FundamentalList";

function RightSide({componentState}){
    return (
        <div id="right-side" className="border-primary margin-primary side">
            <PlainList componentState={componentState} variable="variables" title="Variables"/>
            <FundamentalList componentState={componentState} variable="fundamentals" title="Fundamentals" />
            <PlainList componentState={componentState} variable="strategies" title="Strategies"/>
        </div>
    )
}

export default RightSide;