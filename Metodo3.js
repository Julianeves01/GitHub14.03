//Array.prototype.reduce()
//O método reduce() executa uma função reducer

//Exemplo1:
const array1 = [1, 2, 3, 4];
const valorInicial = 0;
const somaInicial = array1.reduce(
  (acumulador, valorInicial) => acumulador + valorInicial,
  valorInicial,
);
console.log(somaInicial);
//Resultado esperado: 10

//Exemplo2:
const array2 = [5, 10, 15, 20];
const ValorInicial = 0;
const SomaInicial = array2.reduce(
   (acumulador, valorInicial) => acumulador + valorInicial,
   valorInicial,
);
console.log(SomaInicial);
//Resultado esperado: 50

