//Array.prototype.sort()
//O método sort() ordena os elementos do próprio array e retorna o array.

//Exemplo1:
numeros = [10, 5, 1, 2, 7];

function compararNumeros(a, b) {
  return a - b;
}

numeros.sort(compararNumeros);
console.log("numeros ordenados:", numeros);

//Exemplo2: 
numeros = [74, 280, 37, 44, 15];

function compararNumeros(a, b) {
  return a - b;
}

numeros.sort(compararNumeros);
console.log("numeros ordenados:", numeros);
