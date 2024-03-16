//Array.prototype.toLocaleString()
//O método toLocaleString() retorna uma representaçao de elementos de um array. 

//Exemplo1:
temperaturaCelsius = [22.5, 30, 15.75, 27.3];
temperaturaFormatadas = temperaturaCelsius.map(temp => temp.toLocaleString('pt-BR', { style: 'unit', unit: 'celsius' }));
console.log(temperaturaFormatadas);

//Resultado esperado: [22,5 °C', '30 °C', '15,75 °C', '27,3 °C' ]

//Exemplo2:
numero = 0;
data = new Date();
ambos= [ numero, data,];

resultado = ambos.toLocaleString();

console.log(resultado);