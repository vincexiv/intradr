import React from "react";
import "./DemoMenu.css"

function DemoMenu({componentState, setComponentState}){
    const generalDemos = componentState.demos?.filter(demo => demo.type === "general")
    const functionDemos = componentState.demos?.filter(demo => demo.type === "function")
    
    return (
        <div id="demo-menu" className="border-primary">
            <div id="general-demos" className="demo-group-item">
                <h2 className="demo-head">General Demos</h2>
                <ul>
                    <li>Calculating the Sharpe Ratio</li>
                </ul>
            </div>
            <div id="function-demos" className="demo-group-item">
                <h2 className="demo-head">Functions</h2>
                <ul>
                    <li>
                        <p></p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default DemoMenu;