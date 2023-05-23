import React, {useRef} from "react";
import "./PlainList.css"

function PlainList({componentState, variable, title}){
    const plainListRef = useRef()
    function toggleShowDetails(e, mainId, detailsId){
        const main = plainListRef.current.querySelector(`#${mainId}`)
        const details = plainListRef.current.querySelector(`#${detailsId}`)

        details.classList.toggle("display-none")
        main.querySelector(".shape").classList.toggle("display-none")
        main.querySelector(".value").classList.toggle("display-none")
    }

    return (
        <div id="plain-list" className="border-primary margin-primary">
            <h3 id="plain-list-title">{title}</h3>
            <ul ref={plainListRef}>
                {
                    componentState[variable].map(variable => {
                        return <li key={variable.name} onClick={(e)=>toggleShowDetails(e, `${variable.name}-main`, `${variable.name}-details`)}>
                            <p id={`${variable.name}-main`} className="item-name-and-value">
                                <span className="name-and-shape">
                                    <span className="name">{variable.name}</span>
                                    <span className="shape">{` ${variable.shape? `(${variable.shape})` : ""}`}</span>
                                </span>
                                <span className="value">{variable.value}</span>
                            </p>
                            <div id={`${variable.name}-details`} className="details display-none"> 
                                <div className="detail-item">
                                    <div className="name">Shape</div>
                                    <div className="content">{`${variable.shape? `(${variable.shape})` : ""}`}</div>
                                </div>
                                <div className="detail-item">
                                    <div className="name">
                                        { Number(variable.shape) === 1? "Value" : "Values" }
                                    </div>
                                    <div className="content">{variable.value}</div>
                                </div>
                            </div>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default PlainList;