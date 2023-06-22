/**Crie uma variável chamada "cateto1" e atribua a ela o valor de 3. 
 * Crie uma variável chamada "cateto2" e atribua a ela o valor de 4. 
 * Calcule a hipotenusa de um triângulo retângulo utilizando 
 * a fórmula c^2 = a^2 + b^2, onde c é a hipotenusa e a e b são os catetos, 
 * e exiba o resultado no console. */

let cateto1 = 3;
let cateto2 = 4;

let hipotenusa = Math.sqrt(Math.pow(cateto1, 2) + Math.pow(cateto2, 2));

console.log("A hipotenusa do triângulo retângulo é: " + hipotenusa);
