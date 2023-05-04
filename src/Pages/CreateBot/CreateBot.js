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
                <ItemList />
                <ItemList />
            </div>

            <div>
                <div>
                    <ul className="actions">
                        <li className="margin-primary border-primary">
                            <Button
                                btnStyles={{}}
                                text="create bot"
                                onBtnClick={()=>setAction(<DoYourMath />)} />
                        </li>
                        <li className="margin-primary border-primary">
                            <Button
                                btnStyles={{}} 
                                text="inspect variables"
                                onBtnClick={()=>setAction(<InspectVariables />)} />
                        </li>
                        <li className="margin-primary border-primary">
                            <Button
                                btnStyles={{}} 
                                text="objective function"
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
                                text="set function"
                                onBtnClick={()=>setAction(<DoYourMath />)} />
                        </li>
                        <li className="margin-primary border-primary">
                            <Button
                                btnStyles={{width: "10rem"}}
                                text="backtest"
                                onBtnClick={()=>setAction(<DoYourMath />)} />
                        </li>
                        <li className="margin-primary border-primary">
                            <Button
                                btnStyles={{width: "10rem"}} 
                                text="run bot"
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