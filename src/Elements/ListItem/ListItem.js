import React from "react";
import "./ListItem.css"

function ListItem({text, btnElement}){
    return (
        <li id="list-item" className="border-primary margin-primary">
            <p>{text}</p>
            {btnElement}
        </li>
    )
}

export default ListItem;