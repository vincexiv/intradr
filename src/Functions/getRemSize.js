function getRemSize(){
    // These are defined in index.js file where font size is defined as
    // font-size: clamp(10px, 1.3vh, 16px)
    const minSize = 10
    const maxSize = 16
    const val = window.innerHeight * 1.3/100

    if(val < minSize){
        return minSize
    }else if(val > maxSize){
        return maxSize
    }else {
        return val
    }
}

export {getRemSize}