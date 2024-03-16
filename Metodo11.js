//Array.prototype.reduceRight()
//O método reduceRight() aplica à uma função um acumulador e cada valor do array (da direita para esquerda) é reduzido para um valor único.

//Exemplo1:
numerosInteiros= [8, 5, 3, 49, 18];

somaReduzida = numerosInteiros.reduceRight((acumulador, valorAtual) => {
  return acumulador + valorAtual;
}, 0);

console.log(somaReduzida); 

//Resultado esperado: 83


//Exemplo2:

numerosInteiros= [259, 557, 0, 75, 18];

somaReduzida = numerosInteiros.reduceRight((acumulador, valorAtual) => {
  return acumulador + valorAtual;
}, 0);

console.log(somaReduzida);
