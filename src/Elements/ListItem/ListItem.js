import React from "react";
import "./ListItem.css"

function ListItem({text1, text2, btnElement}){
    return (
        <li id="list-item" className="border-primary margin-primary">
            <div id="text">
                <p id="long-name">{text1}</p>
                <p id="ticker">{text2}</p>
            </div>
            {btnElement}
        </li>
    )
}

export default ListItem;