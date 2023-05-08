import React, {useState} from "react";
import "./DoYourMath.css"

function DoYourMath(){
    const [strategy, setStrategy] = useState(
`You can write your strategy here.`)
    function updateStrategy(e){
        setStrategy(e.target.value)
    }

    return (
        <textarea id="do-your-math" className="border-primary margin-primary" value={strategy} onChange={updateStrategy}>
        </textarea>
    )
}

export default DoYourMath;