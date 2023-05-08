import React, {useState} from "react";
import "./CreateBot.css"
import DoYourMath from "../../Components/DoYourMath/DoYourMath";
import InspectVariables from "../../Components/InspectVariables/InspectVariables";
import ItemList from "../../Components/ItemList/ItemList";
import Button from "../../Elements/Button/Botton";
import Signal from "../../Components/Signal/Signal";
import Constraints from "../../Components/Constraints/Constraints";
import PlainList from "../../Components/PlainList/PlainList";

function CreateBot(){
    const [componentState, setComponentState] = useState({
        action: "do-your-math",
        untrackedAssets: [{name: "AAPL"}, {name: "MSFT"}, {name: "What"}],
        trackedAssets: [{name: "ABC"}, {name: "DEF"}, {name: "GEH"}],
        constraintCount: 1,
        variables: ["AAPL_return"],
        bots: ["xiv_bot"]
    })

    function startTracking(trackedAsset){
        const updatedUntrackedAssets = componentState.untrackedAssets.filter(asset => asset.name !== trackedAsset.name)
        const updatedTrackedAssets = [...componentState.trackedAssets, trackedAsset]

        setComponentState(componentState => ({
            ...componentState,
            untrackedAssets: updatedUntrackedAssets,
            trackedAssets: updatedTrackedAssets
        }))
    }

    function stopTracking(untrackedAsset){
        const updatedTrackedAssets = componentState.trackedAssets.filter(asset => asset.name !== untrackedAsset.name)
        const updatedUntrackedAssets = [...componentState.untrackedAssets, untrackedAsset]

        setComponentState(componentState => ({
            ...componentState,
            untrackedAssets: updatedUntrackedAssets,
            trackedAssets: updatedTrackedAssets
        }))
    }

    function updateConstraintCount(action){
        if(action === "reduce"){
            if(componentState.constraintCount > 1){
                setComponentState(componentState => {
                    const newCount = componentState.constraintCount--
                    return {
                        ...componentState,
                        constraintCount: newCount
                    }
                })
            }
        }else if (action === "increase"){
            setComponentState(componentState => {
                const newCount = componentState.constraintCount++
                return {
                    ...componentState,
                    constraintCount: newCount
                }
            })
        }        
    }

    function openAction(action){
        setComponentState(componentState => ({
            ...componentState,
            action: action
        }))   
    }

    function getActionComponent(){
        const actionName = componentState.action
        if(actionName == "do-your-math"){
            return <DoYourMath />
        }else if(actionName == "inspect-variables"){
            return <InspectVariables />
        }else if(actionName == "update-signals"){
            const constraints = <Constraints
                                        componentState={componentState}
                                        updateConstraintCount={updateConstraintCount}/> 
                                
            return <Signal constraints={constraints} updateConstraintCount={updateConstraintCount}/>
        }
    }

    return (
        <div id="create-bot">
            <div id="left-side">
                <ItemList
                        subject="Assets"
                        clickActionName="Track"
                        itemList={componentState?.untrackedAssets}
                        clickActionFunction={startTracking}/>
                <ItemList
                        subject="Tracking"
                        clickActionName="Untrack"
                        itemList={componentState?.trackedAssets}
                        clickActionFunction={stopTracking}/>
            </div>

            <div id="middle-side">
                <div>
                    <ul className="actions">
                        <li className="margin-primary border-primary">
                            <Button
                                btnStyles={{minWidth: "10rem"}}
                                text="build strategy"
                                onBtnClick={()=>openAction('do-your-math')} />
                        </li>
                        <li className="margin-primary border-primary">
                            <Button
                                btnStyles={{minWidth: "10rem"}} 
                                text="add signals"
                                onBtnClick={()=>openAction('update-signals')} />
                        </li>
                    </ul>
                </div>

                {getActionComponent()}

                <div>
                    <ul className="actions">
                        <li className="margin-primary border-primary">
                            <Button
                                btnStyles={{width: "10rem"}}
                                text="backtest"
                                onBtnClick={()=>openAction('do-your-math')} />
                        </li>
                        <li className="margin-primary border-primary">
                            <Button
                                btnStyles={{width: "10rem"}} 
                                text="start trading"
                                onBtnClick={()=>openAction('inspect-variables')} />
                        </li>
                    </ul>
                </div>
                
            </div>

            <div id="right-side" className="border-primary margin-primary">
                <PlainList componentState={componentState} variable="variables" title="Variables"/>
                <PlainList componentState={componentState} variable="bots" title="Bots"/>
            </div>
        </div>
    )
}

export default CreateBot;