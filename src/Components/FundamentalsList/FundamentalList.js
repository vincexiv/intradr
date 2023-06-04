import React, {useRef} from "react";
import UnorderedList from "../../Elements/UnorderedList/UnorderedList";
import "./FundamentalList.css"

function FundamentalList({componentState, title}){
    const fundamentalListItemRef = useRef()

    function toggleFundamentalDetailsShow(itemId){
        const details = fundamentalListItemRef.current.querySelector(`#${itemId}`)
        details.classList.toggle("display-none")
    }

    return (
        <div id="fundamental-list" className="border-primary margin-primary">
            <h3 className="fundamental-list-title">{title}</h3>
            <ul ref={fundamentalListItemRef} className='the-list'>
                {
                    componentState.fundamentals.map(asset => {
                        const assetDetails = componentState.trackedAssets.find(tAsset => tAsset.symbol === asset.name)
                        return (
                            <li key={`${asset.name}-li`} className="fundamental-list-item">
                                <p className="header" onClick={()=>toggleFundamentalDetailsShow(`${asset.name}-info`)}>
                                    <span className="long-name">{assetDetails.longName}</span>
                                    <span className="symbol">{assetDetails.symbol}</span>
                                </p>
                                <div id={`${asset.name}-info`} className="display-none asset-info">
                                    <UnorderedList variable={asset.value} />
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default FundamentalList;