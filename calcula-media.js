// 1. Criando um array vazio
const notas = [];

// 2. Preenchendo o array
notas.push(Number(prompt("Digite a primeira nota:"))); // Índice 0
notas.push(Number(prompt("Digite a segunda nota:"))); // Índice 1
notas.push(Number(prompt("Digite a terceira nota:"))); // Índice 2

console.log(notas);
const peso1 = 2;
const peso2 = 3;
const peso3 = 5;
const somaPesos = peso1 + peso2 + peso3;

const soma = (notas[0]*2) + (notas[1]*3) + (notas [2]*5);
const media = soma / somaPesos;

const resultado = document.getElementById("resultado");

resultado.innerHTML = `
   <ul>
      <li>A nota 1 digitada foi ${notas[0]}</li>
      <li>A nota 2 digitada foi ${notas[1]}</li>
      <li>A nota 3 digitada foi ${notas[2]}</li>
   </ul>
   <h2 style="color:${media > 6 ? 'green' : 'red'}">A sua média ponderada é de <strong>${media}!</strong></h2>
`;