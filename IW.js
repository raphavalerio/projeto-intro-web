/*Estadios de Futebol
- Nome
- Capacidade/Maiores publicos
- é Particular?
- Quem utiliza?
*/

//Informações dos Estádios
const nome = "Morumbi";
const capacidade = 60000;
const particular = true;
const timesMandantes = ["São Paulo"];

const nome2 = "Pacaembu";
const capacidade2 = 35000;
const particular2 = false;
const timesMandantes2 = ["São Paulo, Corinthians, Palmeiras, Santos"];

const nome3 = "Maracanã";
const capacidade3 = 80000;
const particular3 = false;
const timesMandantes3 = ["Flamengo, Vasco, Fluminense, Botafogo"]

//Média das capacidades
const media = (capacidade+capacidade2+capacidade3)/3;
console.log(`Média da capacidades do Estádios:${media} lugares`);

//Checagem se todas as booleanas são verdadeiras
console.log(`Todos os Estádios são particulares:`,
particular===particular2 && particular2===particular3 && particular===particular3);

//Relatório com todos os dados de cada Estádio
console.log(`${nome.toUpperCase()}\n
Capacidade:${capacidade} lugares
É particular?:${particular}
Time Mandante:${timesMandantes}`);

console.log(`${nome2.toUpperCase()}\n
Capacidade:${capacidade2} lugares
É particular:${particular2}
Times Mandantes:${timesMandantes2}`);

console.log(`${nome3.toUpperCase()}\n
Capacidade:${capacidade3} lugares
É particular:${particular3}
Times Mandantes:${timesMandantes3}`);
