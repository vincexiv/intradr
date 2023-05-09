import React from "react";
import "./Constraints.css"
import Button from "../../Elements/Button/Botton";
import SelectOption from "../../Elements/SelectOption/SelectOption";

function Constraints({componentState, updateConstraintCount}){
    
    return (
        <div id="constraints">
            {
                Array.from(Array(componentState.constraintCount).keys()).map(index => {
                    return (
                        <div key={index} className="constraint-item">
                            <div className="signal-element">
                                <input className="constraint-input" type="text" />
                                <SelectOption options={[">", ">=", "<", "<=", "=", "!="]} />
                                <input className="constraint-input" type="text" />
                                <Button btnStyles={{padding: "0.45rem",
                                                    fontSize: "0.9rem",
                                                    color: "white",
                                                    border: "var(--border-primary)",
                                                    backgroundColor: "var(--color-red)"}}
                                        text="Remove"
                                        onBtnClick={()=>updateConstraintCount("reduce")}/>
                            </div>
                        </div>                    
                    )
                })
            }
        </div>
    )
}

export default Constraints;