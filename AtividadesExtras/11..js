/**
 * Crie uma variável chamada "massa" e atribua a ela o valor 10. 
 * Calcule a energia (em joules) de uma substância utilizando a 
 * fórmula E = m * c^2, onde m é a massa e c é a velocidade da luz 
 * aproximada (3e8 metros por segundo). Exiba o resultado no console.
 */

let massa = 10;
let velocidadeLuz = 3e8;

let energia = massa * Math.pow(velocidadeLuz, 2);

console.log("A energia da substância é: " + energia + " joules");
