import React, {useState, useEffect} from "react";
import "./DemoVideo.css"
import { getRemSize } from "../../../../Functions/getRemSize";

function DemoVideo({componentState}){
    
    return (
        <div id="demo-video" >
            <div className="demo-video-container">
                <iframe

                    src={componentState.activeDemo.url}
                    title="YouTube video player"
                    frameborder="0"
                    className="responsive-iframe"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                    </iframe>
            </div>
        </div>
    )
}

export default DemoVideo;