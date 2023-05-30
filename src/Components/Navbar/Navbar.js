import React from "react";
import "./Navbar.css"

function Navbar({componentState, setComponentState}){
    function updateActivePage(newPage){
        setComponentState(componentState => ({
            ...componentState,
            activePage: newPage
        }))
    }
    return (
        <div id="navbar">
            <div className="content">
                <h2 className={componentState.activePage === "home"? "nav-item active": "nav-item"}
                    onClick={()=>updateActivePage('home')}>
                        Intradr
                </h2>
                <ul>
                    <li className={componentState.activePage === "home"? "nav-item active": "nav-item"}
                        onClick={()=>updateActivePage('home')}>
                        <h3>home</h3>
                    </li>
                    <li className={componentState.activePage === "demo"? "nav-item active": "nav-item"}
                        onClick={()=>updateActivePage('demo')}>
                        <h3>Demo</h3>
                    </li>
                    <li className={componentState.activePage === "about-us"? "nav-item active": "nav-item"}
                        onClick={()=>updateActivePage('about-us')}>
                        <h3>About Us</h3>
                    </li>
                    <li className={componentState.activePage === "contact"? "nav-item active": "nav-item"}
                        onClick={()=>updateActivePage('contact')}>
                        <h3>Contact</h3>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;