import React from "react";
import "./DoYourMath.css"

function DoYourMath({componentState, setComponentState}){

    function updateStrategy(e){
        setComponentState(componentState => (
            {
                ...componentState,
                strategy: e.target.value
            }
        ))
    }

    function evaluateExpression(e){
        let expressionArray = []
        if(e.key == "Enter"){
            expressionArray = e.target.value.split("\n")
            expressionArray = expressionArray.filter(stg => stg.length != 0)
            console.log(expressionArray)
        }
        // console.log(e.code)
    }

    return (
        <textarea id="do-your-math"
                  className="border-primary margin-primary create-bot-main-area"
                  value={componentState.strategy}
                  onChange={updateStrategy}
                  onKeyUp={evaluateExpression}>
        </textarea>
    )
}

export default DoYourMath;