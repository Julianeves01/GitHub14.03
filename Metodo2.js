//Array.prototype.push()
//O método push() adiciona um ou mais elementos ao final de um array

//Exemplo1:
numeros = [2, 4, 6];
numeros.push(8);

console.log(numeros); [2, 4, 6, 8]

numeros.push(10, 12, 14);

console.log(numeros); [2, 4, 6, 8, 10, 12, 14]

//Exemplo2: 
cores = ["azul", "rosa", "cinza"];
cores.push("prata");

console.log(cores); ["azul", "rosa", "cinza", "prata"]
cores.push("roxo", "amarelo");

console.log(cores); ["azul", "rosa", "cinza", "prata", "roxo", "amarelo"];
