import React from "react";
import "./AvailableVariables.css"

function AvailableVariables({variables}){
    return (
        <div id="available-variables">
            <p className="signal-element-title">Available Variables</p>
            <ul>
                {
                    variables.map(variable => {
                        return <li key={variable}>{variable}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default AvailableVariables;