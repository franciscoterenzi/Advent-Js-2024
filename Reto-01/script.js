function prepareGifts(gifts) {
    
    let noRepeat = [...new Set(gifts)]

    return noRepeat.sort((a,b) =>a-b)
  }



