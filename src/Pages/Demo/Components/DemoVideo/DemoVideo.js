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
        const width = screen.innerWidth - (35 * getRemSize())

        if(window.innerWidth < (70 * getRemSize())){
            return window.innerWidth - (6 * getRemSize())
        }else {
            return width
        }
    }

    function getHeight(){
        const height =  0.35*window.innerWidth

        if(window.innerWidth < (70 * getRemSize())){
            const width = getWidth()
            return width * 0.7
        }else {
            return height
        }
    }
    
    return (
        <div id="demo-video" >
            <div className="wrapper">
                <iframe
                    width={widthAndHeight.width}
                    height={widthAndHeight.height}
                    src={componentState.activeDemo.url}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                    </iframe>
            </div>
        </div>
    )
}

export default DemoVideo;