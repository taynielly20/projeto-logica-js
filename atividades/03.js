/*Crie um algoritmo que calcule o preço final de um produto, considerando o preço
de custo e a margem de lucro (em porcentagem).
*/ 

// Solicitar o preço de custo e a margem de lucro ao usuário
let precoCusto = 247;
let margemLucro = 20;

// Calcular o preço final do produto
let precoFinal = precoCusto + (precoCusto * (margemLucro / 100));

// Exibir o resultado
console.log("O preço final do produto é: " + precoFinal.toFixed(2));
