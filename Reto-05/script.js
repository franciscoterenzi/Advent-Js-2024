function organizeShoes(shoes) {
   //creo un objeto para agrupar las botas por tamanio
   const shoeSizes = {}

    //organizo las botas por tamanio y tipo

    shoes.forEach(shoe => {
        const {type, size} = shoe
        if (!shoeSizes[size]){
            shoeSizes[size] = {left: 0, right : 0}
        }
         shoeSizes[size][type === 'I' ? 'left' : 'right' ]++
    });

    //encontrar los pares completos
    const pairedSizes = []
    for(const size in shoeSizes){
        const {left,right} = shoeSizes[size]
        const pairs = Math.min(left,right)
        for(let i = 0; i<pairs;i++){
            pairedSizes.push(parseInt(size))
        }

    }

    return pairedSizes
  }


  const shoes = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 42 }
  ]
  
  valor = organizeShoes(shoes)
  // [38, 42]

  console.log(valor)