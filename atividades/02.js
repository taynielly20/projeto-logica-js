/*Crie um algoritmo que converta uma temperatura em Fahrenheit para Celsius. Utilize
a fórmula: Celsius = (Fahrenheit - 32) / 1.8*/

// Temperatura em Fahrenheit
let temperaturaFahrenheit = 50;

// Converter Fahrenheit para Celsius
let temperaturaCelsius = (temperaturaFahrenheit - 32) / 1.8;

// Exibir o resultado
console.log("A temperatura em Celsius é: " + temperaturaCelsius.toFixed(2));

// Exibimos o resultado da temperatura com duas casas decimais usando o método toFixed().