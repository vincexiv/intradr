import React from "react";
import "./MiddleSide.css"
import Button from "../../../Elements/Button/Botton";

function MiddleSide({componentState, setComponentState, getActionComponent}){
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
                            text="set signals"
                            onBtnClick={()=>openAction('update-signals')} />
                    </li>
                </ul>
            </div>

            {getActionComponent()}

            <div>
                <ul className="actions">
                    <li className="margin-primary border-primary">
                        <Button
                            btnStyles={{minWidth: "10rem"}}
                            text="backtest"
                            onBtnClick={()=>openAction('do-your-math')} />
                    </li>
                    <li className="margin-primary border-primary">
                        <Button
                            btnStyles={{minWidth: "10rem"}} 
                            text="start trading"
                            onBtnClick={()=>openAction('inspect-variables')} />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default MiddleSide