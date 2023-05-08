import React, {useState} from "react";
import "./DoYourMath.css"

function DoYourMath(){
    const [strategy, setStrategy] = useState(
`
You can write your strategy here.

It is as simple as typing mathematical expressions, which will be interpreted by our system upon deploying.

When you finish and are satisfied with your work, you can click "Backtest" to test your strategy and then "Run Bot" 😎
`)
    function updateStrategy(e){
        setStrategy(e.target.value)
    }

    return (
        <textarea id="do-your-math" className="border-primary margin-primary" value={strategy} onChange={updateStrategy}>
        </textarea>
    )
}

export default DoYourMath;