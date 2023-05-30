import React from "react";
import "./Search.css";

function Search({}){

    function onSubmit(e){
        e.preventDefault()
        const searchInput = e.target.querySelector("#search-content").value
        console.log(searchInput)
    }

    return (
        <div id="search-bar">
            <form onSubmit={onSubmit}>
                <input id="search-content" type="text" className="border-primary margin-primiary"/>
                <input id="search-btn" type="submit" value="Search" className="border-primary margin-primiary"/>
            </form>
        </div>
    )
}

export default Search;