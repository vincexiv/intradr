import React, {useState, useEffect} from "react";
import "./InspectVariables.css"
import { apiHost } from "../../variables";
import LineGraph from "../../Charts/LineGraph/LineGraph";

function InspectVariables({componentState, setComponentState}){

    useEffect(()=>{
        fetch(`${apiHost}/graph_data`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                expression_array: componentState.expressionArray,
                assets: componentState.trackedAssets?.map(ta => ta.symbol),
                backdate_period: componentState.figureDetails.backdate_period,
            })
        }).then(res => {
            if(res.ok){
                res.json().then(data => {  
                    setComponentState(componentState => {
                        return {
                            ...componentState,
                            figureDetails: {
                                ...componentState.figureDetails,
                                xvals: getXvals(data),
                                figureData: getFigureData(data)
                            } 
                        }
                    })
                })
            }else{
                res.json().then(error => console.warn(error))
            }
        })
    }, [componentState])

    function getXvals(data){
        for(let variableName in data.graph_data){
            return data.graph_data[variableName].map(v => v[0])
        }
    }

    function getFigureData(data){
        const result = []
        for(const variable in data.graph_data){
            const yVals = data.graph_data[variable].map(v => v[1])
            const title = String(variable)
            const lineGraphStyle = {}
            
            result.push({yvals: yVals, title: title, lineGraphStyle: lineGraphStyle})
        }

        return result
    }


    return (
        <div id="inspect-variables" className="border-primary margin-primary create-bot-main-area">
            <div id="inspect-variables-figure">
                <LineGraph componentState={componentState}/>
            </div>
            <div>
                <ul id="variables">
                    {
                        componentState.variables.map(variable => {
                            return (
                                <li key={variable.name} className="variable-name">{variable.name}</li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default InspectVariables;