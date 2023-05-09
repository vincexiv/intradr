import React from "react";
import "./Signal.css";
import SelectOption from "../../Elements/SelectOption/SelectOption";
import Button from "../../Elements/Button/Botton";


function Signal({constraints, updateConstraintCount, variables = ["Portfolio_return"]}){
    function handleSubmit(e){
        e.preventDefault()
    }

    return (
        <div id="signal" className="border-primary margin-primary create-bot-main-area">
            <form onSubmit={handleSubmit}>
  
                <div>
                    <p className="signal-element-title">Function</p>
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
                            <Button btnStyles={{marginTop: "1rem",
                                    backgroundColor: "var(--color-background)",
                                    border: "var(--border-primary)"}}
                                    text="Add Constraint"
                                    onBtnClick={(e) => updateConstraintCount("increase")}/>
                        </div>
                    </div>
                    <Button btnStyles={{marginTop: "2.5rem",
                                        backgroundColor: "var(--color-background)",
                                        border: "var(--border-primary)"}}
                            text="Run Bot"
                            onBtnClick={handleSubmit} />
                </div>
            </form>
        </div>
    )
}

export default Signal;