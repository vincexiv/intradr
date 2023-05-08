import React from "react";
import "./Constraints.css"
import Button from "../../Elements/Button/Botton";
import SelectOption from "../../Elements/SelectOption/SelectOption";

function Constraints({componentState, updateConstraintCount}){
    console.log(componentState.constraintCount)
    
    return (
        <div id="constraints">
            {
                Array.from(Array(componentState.constraintCount).keys()).map(index => {
                    return (
                        <div key={index} className="constraint-item">
                            <div className="signal-element">
                                <SelectOption options={componentState.variables}/>
                                <SelectOption options={[">", ">=", "<", "<=", "=", "!="]} />
                                <SelectOption options={[]}/>
                                <Button btnStyles={{padding: "0.2rem 0.4rem 0.2rem 0.4rem",
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