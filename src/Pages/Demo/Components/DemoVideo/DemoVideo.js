import React, {useState, useEffect} from "react";
import "./DemoVideo.css"
import { getRemSize } from "../../../../Functions/getRemSize";

function DemoVideo({componentState}){
    const [widthAndHeight, setWidthAndHeight] = useState({width: getWidth(), height: getHeight()})

    useEffect(()=>{
        window.addEventListener('resize', ()=>{
            setWidthAndHeight({width: getWidth(), height: getHeight()})
        })
    }, [])

    function getWidth(){
        return window.innerWidth - (35 * getRemSize())
    }

    function getHeight(){
        return 0.35*window.innerWidth
    }
    
    return (
        <div id="demo-video" >
            <div className="wrapper">
                <iframe src={componentState.activeDemo.url}
                    width={widthAndHeight.width}
                    height={widthAndHeight.height}
                    allow="autoplay">
                </iframe>
            </div>
        </div>
    )
}

export default DemoVideo;