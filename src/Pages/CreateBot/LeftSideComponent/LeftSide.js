import React from "react";
import "./LeftSide.css"
import ItemList from "../../../Components/ItemList/ItemList";
import { getUntrackedAssets } from "../UtilityFunctions";

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