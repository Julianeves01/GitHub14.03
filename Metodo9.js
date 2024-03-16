//Array.prototype.splice()
//O método splice() altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos.

//Exemplo1:
comidas = ["Arroz", "Feijão", "Carne"];
comidas.splice(1, 0, "batata");

console.log(comidas);
//Resultado esperado: ['Arroz', 'batata', 'Feijão', 'Carne']

//Exemplo2: 
verduras = ["Alface", "Couve", "Acelga"];
verduras.splice(2, 0, "brócolis");

console.log(verduras);