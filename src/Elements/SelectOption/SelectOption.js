import React from "react";
import "./SelectOption.css"

function SelectOption({options=[]}){
    return (
        <div id="select-option">
            <select>
                {
                    options.map(option => {
                        return (
                            <option key={option} value={option}>{option}</option>
                        )
                    })
                }
            </select>
        </div>
    )
}

export default SelectOption;