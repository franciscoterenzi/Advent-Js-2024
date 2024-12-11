function organizeInventory(inventory) {
    //Controlo si esta vacio
    if(inventory.length === 0){
        return {}
    }

    const resultado = inventory.reduce((acc, inventario)=>{
        const {category, name, quantity} = inventario
        //Me pregunto si la categoria esta en el acumulado, sino la agrego
        if (!acc[category]){
            acc[category] = {}
        }

        //Si la categoria y el nombre estan en el acumulador, le sumo la quantity
        if (acc[category][name]){
            acc[category][name] += quantity
        }else {
            //Si el juguete es nuevo en la categoria lo agregamos
            acc[category][name] = quantity
        }

        return acc;

    },{});

    return resultado
        
  }




