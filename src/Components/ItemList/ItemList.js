import React from "react";
import "./ItemList.css"
import Search from "../../Elements/Search/Search";
import Button from "../../Elements/Button/Botton";
import ListItem from "../../Elements/ListItem/ListItem";

function ItemList({subject, itemList=[], clickActionName="Track", clickActionFunction}){
    const theList = itemList?.map(item => {
        const btn = <Button 
                        key={`btn-${item.name}`}
                        btnStyles={{padding: "0.2rem 0.5rem 0.2rem 0.5rem", fontSize: "0.8rem"}}
                        onBtnClick={()=>clickActionFunction(item)}
                        text={clickActionName}/>

        return <ListItem key={`list-item-${item.name}`} btnElement={btn} text={item.name}/>
    })


    return (
        <div id="item-list" className="border-primary margin-primary">
            <h2 className="margin-primary">{subject}</h2>
            <Search />

            <ul id="the-list" className="margin-primary">
                {theList}
            </ul>
        </div>
    )
}

export default ItemList;