import React from "react";
import "./CreateBot.css"
import DoYourMath from "../../Components/DoYourMath/DoYourMath";
import InspectVariables from "../../Components/InspectVariables/InspectVariables";
import Signal from "../../Components/Signal/Signal";
import Constraints from "../../Components/Constraints/Constraints";
import LeftSide from "./LeftSideComponent/LeftSide";
import RightSide from "./RightSideComponent/RightSide";
import MiddleSide from "./MiddleSideComponent/MiddleSide";
import Backtest from "../../Components/Backtest/Backtest";

function CreateBot({componentState, setComponentState}){
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