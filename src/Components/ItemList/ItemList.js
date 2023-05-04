import React from "react";
import Search from "../../Elements/Search/Search";
import "./ItemList.css"

function ItemList({subject}){
    return (
        <div id="item-list" className="border-primary margin-primary">
            <h2 className="margin-primary">{subject}</h2>
            <Search />
        </div>
    )
}

export default ItemList;