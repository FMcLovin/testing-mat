export function stddev(numberList : number[], media: number){

  // Calcular la desviación estándar
  var sumaDiferenciasAlCuadrado = 0;
  
  for (let index = 0; index < numberList.length; index++) {
    sumaDiferenciasAlCuadrado += Math.pow(numberList[index] - media, 2);
  }

  return Math.sqrt(sumaDiferenciasAlCuadrado / numberList.length);

}

