import React from "react";
import "./Signal.css";
import SelectOption from "../../Elements/SelectOption/SelectOption";
import Button from "../../Elements/Button/Botton";


function Signal({constraints, updateConstraintCount, variables = ["AAPL_return"]}){
    function handleSubmit(e){
        e.preventDefault()
    }

    return (
        <div id="signal" className="border-primary margin-primary">
            <form onSubmit={handleSubmit}>
  
                <div>
                    <p className="signal-element-title">Goal</p>
                    <div id="objective-function" className="signal-element">
                        <SelectOption options={["maximize", "minimize"]}/>
                        <SelectOption options={variables}/>
                    </div>
                </div>

                <div>
                    <div>
                        <p className="signal-element-title">Constraints</p>
                        <div id="subject-to">
                            <div>
                                {constraints}
                            </div>
                            <Button btnStyles={{}}
                                    text="Add Constraint"
                                    onBtnClick={(e) => updateConstraintCount("increase")}/>
                        </div>
                    </div>
                    <input type="submit" value="Run Bot" onClick={handleSubmit}/>
                </div>
            </form>
        </div>
    )
}

export default Signal;