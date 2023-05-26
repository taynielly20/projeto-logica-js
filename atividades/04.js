/*Crie um algoritmo que calcule o volume de uma esfera, dado o seu raio. Utilize a
fórmula: Volume = (4/3) * pi * (raio^3)*/

// Solicitar o raio da esfera ao usuário
let raio = 9;

// Calcular o volume da esfera
let volume = (4/3)* pi *(raio**3);
//let volume = (4/3) * Math.PI * Math.pow(raio, 3);

// Exibir o resultado
console.log("O volume da esfera é: " + volume.toFixed(2));
