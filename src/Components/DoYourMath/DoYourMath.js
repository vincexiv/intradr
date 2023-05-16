import React from "react";
import "./DoYourMath.css"
import { apiHost } from "../../variables";

function DoYourMath({componentState, setComponentState}){

    function updateStrategy(e){
        setComponentState(componentState => (
            {
                ...componentState,
                strategy: e.target.value
            }
        ))
    }

    function getUpdatedVariables(existingVariables, newVariables){
        // Keep only existing variables that are not in new variables
        // existingVariables = existingVariables.filter(existingVar => {
        //     return !newVariables.find(newVar => existingVar.name == newVar.name)
        // })

        // return [...existingVariables, ...newVariables]
        console.log(newVariables)
        return newVariables
    }

    function evaluateExpressions(expressionArray, assets ){
        fetch(`${apiHost}/evaluate`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                expression_array: expressionArray,
                assets: assets
            })
        }).then(res => {
            if(res.ok){
                res.json().then(data => {
                    setComponentState(componentState => (
                        {
                            ...componentState,
                            expressionArray: expressionArray,
                            variables: getUpdatedVariables(componentState.variables, data.results)
                        }
                    ))
                })
            }else {
                res.json().then(error => {
                    console.warn(error)
                })
            }
        })
    }

    function handleKeyUp(e){
        if(e.key == "Enter"){
            let expressionArray = e.target.value.split("\n")
            expressionArray = expressionArray.filter(stg => stg.length != 0)

            evaluateExpressions(expressionArray, componentState.trackedAssets?.map(ta => ta.symbol))
        }
        // console.log(e.code)
    }

    return (
        <textarea id="do-your-math"
                  className="border-primary margin-primary create-bot-main-area"
                  value={componentState.strategy}
                  onChange={updateStrategy}
                  onKeyUp={handleKeyUp}>
        </textarea>
    )
}

export default DoYourMath;