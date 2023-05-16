import React from "react";
import "./MiddleSide.css"
import Button from "../../../Elements/Button/Botton";

function MiddleSide({setComponentState, getActionComponent}){
    function openAction(action){
        setComponentState(componentState => ({
            ...componentState,
            action: action
        }))   
    }

    return (
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
                            text="inspect variables"
                            onBtnClick={()=>openAction('inspect-variables')} />
                    </li>
                    <li className="margin-primary border-primary">
                        <Button
                            btnStyles={{minWidth: "10rem"}}
                            text="backtest"
                            onBtnClick={()=>openAction('backtest')} />
                    </li>
                    <li className="margin-primary border-primary">
                        <Button
                            btnStyles={{minWidth: "10rem"}} 
                            text="set configurations"
                            onBtnClick={()=>openAction('set-configurations')} />
                    </li>
                </ul>
            </div>

            {getActionComponent()}
        </div>
    )
}

export default MiddleSide