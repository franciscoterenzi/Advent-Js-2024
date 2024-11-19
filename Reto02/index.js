function manufacture(gifts, materials) {

    return gifts.filter((gift) => [...gift].every(element =>materials.includes(element)))
    
}

console.log(manufacture(gifts, materials))