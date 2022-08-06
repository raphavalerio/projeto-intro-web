/*Estadios de Futebol
- Nome
- Capacidade/Maiores publicos
- é Particular?
- Quem utiliza?
*/

//Semana 1 e 2
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
const timesMandantes3 = ["Flamengo, Vasco, Fluminense, Botafogo"];

//Média das capacidades
const media = (capacidade+capacidade2+capacidade3)/3;
console.log(`Média da capacidades dos Estádios:${media} lugares`);

//Checagem se todas as booleanas são verdadeiras
const checkBoo = particular===particular2 && particular2===particular3 && particular===particular3
console.log(`Todos os Estádios são particulares: ${checkBoo}`);

//Relatório com todos os dados de cada Estádio
console.log(`${nome.toUpperCase()}\n\nCapacidade:${capacidade} lugares\nÉ particular?:${particular}\nTime Mandante:${timesMandantes}`);

console.log(`${nome2.toUpperCase()}\n\nCapacidade:${capacidade2} lugares\nÉ particular:${particular2}\nTimes Mandantes:${timesMandantes2}`);

console.log(`${nome3.toUpperCase()}\n\nCapacidade:${capacidade3} lugares\nÉ particular:${particular3}\nTimes Mandantes:${timesMandantes3}`);

//Semana 3
morumbi = {
    nome:"Morumbi",
    capacidade: 60000,
    particular: true,
    timesMandantes:["São Paulo"]
};
pacaembu = {
    nome:"Pacaembu",
    capacidade: 35000,
    particular: false,
    timesMandantes:["São Paulo"]
};
maracana = {
    nome:"Maracanã",
    capacidade: 80000,
    particular: false,
    timesMandantes:["Flamengo, Vasco, Fluminense, Botafogo"]
};

const estadios = [];
// estadios.push(morumbi,pacaembu,maracana);
// console.log(estadios)

//Semana 4
if(checkBoo === true){
    estadios.push(morumbi,pacaembu,maracana)
}else{
    alert("A lista de estádios não foi inserida.")
}