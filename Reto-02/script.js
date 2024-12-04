function createFrame(names) {
  //Encontrar el nombre mas largo
  const nombreMasLargo =  names.reduce((a,b)=> a.length > b.length ? a : b) 
  const anchoDeMarco = nombreMasLargo.length + 4
  //creo la linea
  const linea = anchoDeMarco >= 0 ?'*'.repeat(anchoDeMarco) : '' //Consigo la linea de por arriba y por abajo
    
  //Crear las lineas con los nombres
  const lineaNombre = names.map(nombre => `* ${nombre}${' '.repeat(anchoDeMarco - nombre.length - 4)} *`)
  
  const marcoCompleto = [linea,...lineaNombre,linea].join('\n')

  return marcoCompleto
  }