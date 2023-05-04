import React, {useState} from "react";
import "./CreateBot.css"
import DoYourMath from "../../Components/DoYourMath/DoYourMath";
import InspectVariables from "../../Components/InspectVariables/InspectVariables";
import ItemList from "../../Components/ItemList/ItemList";
import Button from "../../Elements/Button/Botton";

function CreateBot(){
    const [action, setAction] = useState(<DoYourMath />)

    return (
        <div id="create-bot">
            <div className="right-side-items">
                <ItemList subject="Assets"/>
                <ItemList subject="Tracking"/>
            </div>

            <div>
                <div>
                    <ul className="actions">
                        <li className="margin-primary border-primary">
                            <Button
                                btnStyles={{minWidth: "10rem"}}
                                text="create bot"
                                onBtnClick={()=>setAction(<DoYourMath />)} />
                        </li>
                        <li className="margin-primary border-primary">
                            <Button
                                btnStyles={{minWidth: "10rem"}} 
                                text="inspect variables"
                                onBtnClick={()=>setAction(<InspectVariables />)} />
                        </li>
                        <li className="margin-primary border-primary">
                            <Button
                                btnStyles={{minWidth: "10rem"}} 
                                text="set expectations"
                                onBtnClick={()=>setAction(<InspectVariables />)} />
                        </li>
                    </ul>
                </div>

                {action}

                <div>
                    <ul className="actions">
                        <li className="margin-primary border-primary">
                            <Button
                                btnStyles={{width: "10rem"}}
                                text="backtest"
                                onBtnClick={()=>setAction(<DoYourMath />)} />
                        </li>
                        <li className="margin-primary border-primary">
                            <Button
                                btnStyles={{width: "10rem"}} 
                                text="start trading"
                                onBtnClick={()=>setAction(<InspectVariables />)} />
                        </li>
                    </ul>
                </div>
                
            </div>
            <ItemList />
        </div>
    )
}

export default CreateBot;