import React from "react";
import "./Constraints.css"
import Button from "../../Elements/Button/Botton";
import SelectOption from "../../Elements/SelectOption/SelectOption";

function Constraints({count, updateConstraintCount, variables}){
    
    return (
        <div id="constraints">
            {
                Array.from(Array(count).keys()).map(index => {
                    return (
                        <div key={index}>
                            <div className="signal-element">
                                <SelectOption options={variables}/>
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