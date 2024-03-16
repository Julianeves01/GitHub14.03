//Array.prototype.splice()
//O método splice() altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos.

//Exemplo1 (já adicionando um elemento):
comidas = ["Arroz", "Feijão", "Carne"];
comidas.splice(1, 0, "batata");

console.log(comidas);
//Resultado esperado: ['Arroz', 'batata', 'Feijão', 'Carne']

//Exemplo2 (já adicionando um elemento): 
verduras = ["Alface", "Couve", "Acelga"];
verduras.splice(2, 0, "brócolis");

console.log(verduras);
//Resultado esperado:['Alface', 'Couve', 'brócolis', 'Acelga']


//Remover elementos:
let alfabeto = ["a", "b", "c", "d", "e"];
alfabeto.splice(3, 1); // Remove 1 elemento a partir do índice 3
console.log(alfabeto); 
//Resultado esperado: [ 'a', 'b', 'c', 'e' ]

//Substituit elementos:
let Alfabeto = ["a", "b", "c", "d", "e"];
Alfabeto.splice(2, 1, "x", "y"); // Remove 1 elemento a partir do índice 2 e substitui por "x" e "y"
console.log(Alfabeto);

//Resultado esperado: ["a", "b", "x", "y", "d", "e"]

