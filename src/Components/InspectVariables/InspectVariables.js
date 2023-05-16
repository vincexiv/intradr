import React, {useState, useEffect} from "react";
import "./InspectVariables.css"
import { apiHost } from "../../variables";
import Button from "../../Elements/Button/Botton";

function InspectVariables({componentState}){
    const [figureDetails, setFigureDetails] = useState({
        graph_type: "line",
        variables: [],
        expression_array: [],
        assets: [],
        backdate_period: 3,
        figsize: (9, 4),
        figure: ""
    })

    useEffect(()=>{
        setFigureDetails(figureDetails => {
            return {
                ...figureDetails,
                variables: componentState.variables?.map(va => va.name),
                expression_array: componentState.expressionArray,
                assets: componentState.trackedAssets?.map(ta => ta.symbol)
            }
        })
    }, [])

    function htmlDecode(content) {
        content = content.replace("\\n", "")
      }

    function updateGraph(){
        fetch(`${apiHost}/graph`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "text/html"
            },
            body: JSON.stringify({
                graph_type: figureDetails.graph_type,
                variables: figureDetails.variables,
                expression_array: figureDetails.expression_array,
                assets: figureDetails.assets,
                backdate_period: figureDetails.backdate_period,
                figsize: figureDetails.figsize
            })
        }).then(res => {
            if(res.ok){
                res.json().then(data => {
                    console.log(data)
                })
            }else{
                res.json().then(error => console.warn(error))
            }
        })
    }


    return (
        <div id="inspect-variables" className="border-primary margin-primary create-bot-main-area">
            <div id="inspect-variables-figure">
                <canvas id="line-chart"></canvas>
            </div>
            <div>
                <ul>
                    {
                        componentState.variables.map(variable => {
                            return (
                                <li key={variable.name} className="inspect-variables-li">{variable.name}</li>
                            )
                        })
                    }
                </ul>
                <Button text="update" onBtnClick={updateGraph}/>
            </div>
        </div>
    )
}

export default InspectVariables;