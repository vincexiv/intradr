import React from "react";
import UnorderedList from "../../Elements/UnorderedList/UnorderedList";
import "./PlainList.css"

function PlainList({componentState, variable, title}){


    return (
        <div id="plain-list" className="border-primary margin-primary">
            <h3 className="plain-list-title">{title}</h3>
            <UnorderedList componentState={componentState} variable={variable} />
        </div>
    )
}

export default PlainList;