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
import { getUntrackedAssets } from "./UtilityFunctions";
import Backtest from "../../Components/Backtest/Backtest";

function CreateBot({componentState, setComponentState}){
    useEffect(()=>{
        if(setComponentState){
            fetch(`${apiHost}/assets?market=${componentState.market}&index=${componentState.index}&limit=${componentState.limit}`, {
                method: "GET",
                headers: {'Accept': 'application/json'},
            }).then(res => {
                if(res.ok){
                    res.json().then(data => {
                        setComponentState(componentState => (
                            {
                                ...componentState,
                                fullAssetList: data,
                                untrackedAssets: getUntrackedAssets(data, componentState?.trackedAssets)
                            }
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
                        constraintCount: componentState.constraintCount - 1
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
            return <DoYourMath componentState={componentState} setComponentState={setComponentState} />
        }else if(actionName === "inspect-variables"){
            return <InspectVariables componentState={componentState} setComponentState={setComponentState} />
        }else if(actionName === "backtest"){
            return <Backtest />
        }else if(actionName === "set-configurations"){
            const constraints = <Constraints
                                        componentState={componentState}
                                        updateConstraintCount={updateConstraintCount}/> 
                                
            return <Signal constraints={constraints} updateConstraintCount={updateConstraintCount}/>
        }
    }

    return (
        <div id="create-bot">
            <LeftSide componentState={componentState}
                      setComponentState={setComponentState} /> 
            <MiddleSide componentState={componentState}
                        setComponentState={setComponentState}
                        getActionComponent={getActionComponent}/>           
            <RightSide componentState={componentState}/>
        </div>
    )
}

export default CreateBot;