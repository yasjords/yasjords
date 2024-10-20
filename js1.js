const nome = 'Yasmin';
const sobrenome = 'Garcia';
const idade = 25;
const peso = 64;
const alturaEmM = 1.70;

let imc;
imc = peso / (alturaEmM * alturaEmM)
console.log(imc)

let anoNascimento;
anoNascimento = 2024 - idade;
console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg');
console.log('tem', alturaEmM, 'de altura e seu imc é de', imc);
console.log('e nasceu em', anoNascimento,'.');
