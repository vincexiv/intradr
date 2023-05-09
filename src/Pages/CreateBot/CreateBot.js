import React, {useEffect, useState} from "react";
import "./CreateBot.css"
import DoYourMath from "../../Components/DoYourMath/DoYourMath";
import InspectVariables from "../../Components/InspectVariables/InspectVariables";
import Signal from "../../Components/Signal/Signal";
import Constraints from "../../Components/Constraints/Constraints";
import LeftSide from "./LeftSideComponent/LeftSide";
import RightSide from "./RightSideComponent/RightSide";
import MiddleSide from "./MiddleSideComponent/MiddleSide";
import { apiHost } from "../../variables";

function CreateBot({market = "US", index="N/A", limit=10}){
    const [componentState, setComponentState] = useState({
        action: "do-your-math",
        untrackedAssets: [],
        trackedAssets: [],
        constraintCount: 1,
        variables: ["AAPL_return"],
        bots: ["xiv_bot"],
        market: market,
        index: index
    })

    useEffect(()=>{
        if(setComponentState){
            fetch(`${apiHost}/assets?market=${market}&index=${index}&limit=${limit}`, {
                method: "GET",
                headers: {'Accept': 'application/json'},
            }).then(res => {
                if(res.ok){
                    res.json().then(data => {
                        console.log(data)
                        setComponentState(componentState => (
                            {...componentState, untrackedAssets: data}
                        ))
                    })
                }else {
                    res.json().then(err => {
                        console.warn(err)
                    })
                }
            })
        }
    }, [])

    function updateConstraintCount(action){
        if(action === "reduce"){
            if(componentState.constraintCount > 1){
                setComponentState(componentState => {
                    return {
                        ...componentState,
                        constraintCount: componentState.constraintCount + 1
                    }
                })
            }
        }else if (action === "increase"){
            setComponentState(componentState => {
                return {
                    ...componentState,
                    constraintCount: componentState.constraintCount + 1
                }
            })
        }        
    }

    function getActionComponent(){
        const actionName = componentState.action
        if(actionName === "do-your-math"){
            return <DoYourMath />
        }else if(actionName === "inspect-variables"){
            return <InspectVariables />
        }else if(actionName === "update-signals"){
            const constraints = <Constraints
                                        componentState={componentState}
                                        updateConstraintCount={updateConstraintCount}/> 
                                
            return <Signal constraints={constraints} updateConstraintCount={updateConstraintCount}/>
        }
    }

    return (
        <div id="create-bot">
            <LeftSide componentState={componentState} setComponentState={setComponentState} /> 
            <MiddleSide componentState={componentState} setComponentState={setComponentState} getActionComponent={getActionComponent}/>           
            <RightSide componentState={componentState}/>
        </div>
    )
}

export default CreateBot;