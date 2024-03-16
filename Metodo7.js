//Array.prototype.some()
//O método some() testa se ao menos um dos elementos no array passa no teste implementado pela função atribuída e retorna um valor true ou false

//Exemplo1:
numeros = ["1", "2", "3", "4", "5"];

even = (element) => element % 2 === 0;

console.log(numeros.some(even));
//Resultado espetado: true

//Exemplo2:
idade = [3, 10, 18, 20];

idade.some(checarAdulto);
function checarAdulto(idade) {
  return idade> 18;
}
console.log(idade.some(even));

