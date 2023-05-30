import React, {useRef} from "react";
import "./DemoListItem.css"
import Button from "../../../Elements/Button/Botton";

function DemoListItem({demo, onClick}){
    const demoRef = useRef()

    function toggleDescription(demo){
        const demoDescriptionElement = demoRef.current.querySelector(`#demo-description-${demo.id}`)
        demoDescriptionElement.classList.toggle("display-none")
    }

    return (
        <li ref={demoRef} className="demo-list-item border-primary margin-primary">
            <div id="text">
                <p id="long-name" onClick={()=>onClick(demo)}>{demo.name}</p>
                <div id={`description-btn-${demo.id}`} className="description-btn">
                    <Button 
                        key={`btn-${demo.name}`}
                        btnStyles={{color: "green", padding: "0.2rem 0.5rem 0.2rem 0.5rem", fontSize: "0.8rem", fontWeight: 900}}
                        onBtnClick={()=>toggleDescription(demo)}
                        text="details"/>
                </div>
            </div>
            <div id={`demo-description-${demo.id}`} className="demo-description display-none" onClick={()=>toggleDescription(demo)}>
                {
                    demo.description === ""? "Description not available" : demo.description
                }
            </div>
        </li>
    )
}

export default DemoListItem;