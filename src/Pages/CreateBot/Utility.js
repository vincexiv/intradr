import { apiHost } from "../../variables"

async function updateAssets({componentState, setComponentState, market, index}){
    market = market || "US"
    index = index || "N/A"
    console.log(componentState)
    if(setComponentState){
        console.log("hat")
        fetch(`${apiHost}/assets?market=${market}&index=${index}`, {
            method: "GET",
            headers: {'Accept': 'application/json'},
        }).then(res => {
            if(res.ok){
                res.json().then(data => {
                    console.log(data)
                    setComponentState(componentState => (
                        {...componentState, untrackedAssets: data}
                    ))
                })
            }else {
                res.json().then(err => {
                    console.warn(err)
                })
            }
        })
    }

}

export {updateAssets}