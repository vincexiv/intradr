import React from "react";
import "./Demo.css"
import DemoVideo from "./Components/DemoVideo/DemoVideo";
import DemoMenu from "./Components/DemoMenu/DemoMenu";

function Demo({componentState, setComponentState}){
    return (
        <div id="demo">
            <div className="demo-container">
                <DemoMenu componentState={componentState} setComponentState={setComponentState} />
                <DemoVideo componentState={componentState}/>
            </div>
        </div>
    )
}

export default Demo;