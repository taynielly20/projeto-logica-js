/*Crie um algoritmo que calcule o volume de uma esfera, dado o seu raio. Utilize a
fórmula: Volume = (4/3) * pi * (raio^3)*/

// Solicitar o comprimento e a largura do retângulo ao usuário
let comprimento = 30;
let largura = 12;

// Calcular o perímetro do retângulo
let perimetro = 2 * (comprimento + largura);

// Calcular a área do retângulo
let area = comprimento * largura;

// Exibir o resultado
console.log("O perímetro do retângulo é: " + perimetro.toFixed(2));
console.log("A área do retângulo é: " + area.toFixed(2));