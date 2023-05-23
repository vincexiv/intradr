import React from "react";
import UnorderedList from "../../Elements/UnorderedList/UnorderedList";
import "./FundamentalList.css"

function FundamentalList({componentState, variable, title}){
    return (
        <div id="fundamental-list" className="border-primary margin-primary">
            <h3 className="fundamental-list-title">{title}</h3>
            <UnorderedList componentState={componentState} variable={variable} />
        </div>
    )
}

export default FundamentalList;