import React from "react";
import UnorderedList from "../../Elements/UnorderedList/UnorderedList";
import "./PlainList.css"

function PlainList({componentState, variable, title}){


    return (
        <div id="plain-list" className="border-primary margin-primary">
            <h3 className="plain-list-title">{title}</h3>
            <div className="the-list">
                <UnorderedList componentState={componentState} variable={componentState[variable]} />
            </div>
        </div>
    )
}

export default PlainList;