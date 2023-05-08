import React from "react";
import "./PlainList.css"

function PlainList({componentState, variable, title}){
    return (
        <div id="available-variables" className="border-primary margin-primary">
            <h3 id="available-variables-title">{title}</h3>
            <ul>
                {
                    componentState[variable].map(variable => {
                        return <li key={variable}>{variable}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default PlainList;