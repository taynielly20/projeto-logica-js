/**
 * Crie uma variável chamada "numero" e atribua a ela um número inteiro qualquer.
 *  Verifique se o número é primo utilizando uma estrutura condicional (for) 
 * e exiba a mensagem no console.
 */

let numero = 20;
let primo = true;

for (let i = 2; i < numero; i++) {
  if (numero % i === 0) {
    primo = false;
    break;
  }
}

if (primo) {
  console.log("O número é primo.");
} else {
  console.log("O número não é primo.");
}
