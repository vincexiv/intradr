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
                        <div key={index}>
                            <div className="signal-element">
                                <SelectOption options={componentState.variables}/>
                                <SelectOption options={[">", ">=", "<", "<=", "=", "!="]} />
                                <SelectOption options={[]}/>
                                <Button btnStyles={{}}
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