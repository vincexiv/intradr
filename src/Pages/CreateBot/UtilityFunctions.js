function getUntrackedAssets(fullAssetList, trackedAssets, number=10){
    trackedAssets = trackedAssets || []
    fullAssetList = fullAssetList || []

    const untrackedAssets = []
    for(let i = 0; i < fullAssetList?.length; i++){
        const asset = trackedAssets.find(tracked => {
            return fullAssetList[i].symbol === tracked.symbol
        })

        if(asset === undefined){
            untrackedAssets.push(fullAssetList[i])
        }
        
        if(untrackedAssets.length > number){
            break
        }
    }

    return untrackedAssets   
}

export {getUntrackedAssets}