function createXmasTree(height, ornament) {
    
  let copa = ''
  
  for(let i = 1;i<=height;i++){
    //calcular espacios
    const espacios = "_".repeat(height-i)
    //calcular los caracteres
    const caracteres = ornament.repeat(2 * i - 1)
    //junto la fila
    copa += espacios + caracteres + espacios + "\n"

  }
  //armo la base
  copa += "_".repeat(height-1) + '#'+ "_".repeat(height-1) + "\n" 
  copa += "_".repeat(height-1) + '#' + "_".repeat(height-1)



  return copa

  
}
