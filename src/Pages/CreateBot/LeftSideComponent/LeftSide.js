import React from "react";
import "./LeftSide.css"
import ItemList from "../../../Components/ItemList/ItemList";
import { getUntrackedAssets } from "../UtilityFunctions";
import { apiHost } from "../../../variables";

function LeftSide({componentState, setComponentState}){
    function startTracking(trackedAsset){
        const updatedTrackedAssets = [...componentState.trackedAssets, trackedAsset]
        const fullAssetList = componentState.fullAssetList

        setComponentState(componentState => ({
            ...componentState,
            untrackedAssets: getUntrackedAssets(fullAssetList, updatedTrackedAssets),
            trackedAssets: updatedTrackedAssets,
            portfolioSize: componentState.portfolioSize + 1
        }))

        fetch(`${apiHost}/fundamentals`, {
            method: 'POST',
            headers: {"Content-Type": "application/json", "Accept": "application/json"},
            body: JSON.stringify({ticker: trackedAsset.symbol})
        }).then(res => {
            if(res.ok){
                res.json().then(data => {
                    setComponentState(componentState => {
                        return {
                            ...componentState,
                            fundamentals: [...componentState.fundamentals, data]
                        }
                    })
                })
            }
        })
    }

    function stopTracking(untrackedAsset){
        const updatedTrackedAssets = componentState.trackedAssets.filter(asset => asset.symbol !== untrackedAsset.symbol)
        const fullAssetList = componentState.fullAssetList

        setComponentState(componentState => ({
            ...componentState,
            untrackedAssets: getUntrackedAssets(fullAssetList, updatedTrackedAssets),
            trackedAssets: updatedTrackedAssets,
            portfolioSize: componentState.portfolioSize - 1
        }))
    }

    return (
        <div id="left-side" className="side">
            <ItemList
                    subject="Assets"
                    clickActionName="Track"
                    itemList={componentState?.untrackedAssets}
                    clickActionFunction={startTracking}
                    emptyListMessage=""/>
            <ItemList
                    subject="Tracking"
                    clickActionName="Untrack"
                    itemList={componentState?.trackedAssets}
                    clickActionFunction={stopTracking}
                    emptyListMessage="You aren't tracking any assets yet. Click 'track' on the available assets to add it to this list"/>
        </div>
    )
}

export default LeftSide;