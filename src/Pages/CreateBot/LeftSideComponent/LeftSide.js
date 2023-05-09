import React from "react";
import "./LeftSide.css"
import ItemList from "../../../Components/ItemList/ItemList";

function LeftSide({componentState, setComponentState}){
    function startTracking(trackedAsset){
        const updatedUntrackedAssets = componentState.untrackedAssets.filter(asset => asset.symbol !== trackedAsset.symbol)
        const updatedTrackedAssets = [...componentState.trackedAssets, trackedAsset]

        setComponentState(componentState => ({
            ...componentState,
            untrackedAssets: updatedUntrackedAssets,
            trackedAssets: updatedTrackedAssets
        }))
    }

    function stopTracking(untrackedAsset){
        const updatedTrackedAssets = componentState.trackedAssets.filter(asset => asset.symbol !== untrackedAsset.symbol)
        const updatedUntrackedAssets = [...componentState.untrackedAssets, untrackedAsset]

        setComponentState(componentState => ({
            ...componentState,
            untrackedAssets: updatedUntrackedAssets,
            trackedAssets: updatedTrackedAssets
        }))
    }

    return (
        <div id="left-side" className="side">
            <ItemList
                    subject="Assets"
                    clickActionName="Track"
                    itemList={componentState?.untrackedAssets}
                    clickActionFunction={startTracking}/>
            <ItemList
                    subject="Tracking"
                    clickActionName="Untrack"
                    itemList={componentState?.trackedAssets}
                    clickActionFunction={stopTracking}/>
        </div>
    )
}

export default LeftSide;