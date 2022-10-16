/*Estadios de Futebol
- Nome
- Capacidade
- é Particular?
- Proprietario
*/

// Semana 1 e 2

const nome1 = "La Bombonera";
const capacidade1 = 49000;
const particular1 = true;
const mandantes1 = ["Boca Juniors"]

const nome2 = "Morumbi";
const capacidade2 = 60000;
const particular2 = true;
const mandantes2 = ["São Paulo"]

const nome3 = "Old Trafford";
const capacidade3 = 750000;
const particular3 = true;
const mandantes3 = ["Manchester United"]

const nome4 = "Maracanã";
const capacidade4 = 80000;
const particular4 = false;
const mandantes4 = ["Flamengo", "Fluminense"]

let mediaCapacidade = (capacidade1 + capacidade2 + capacidade3 + capacidade4)/4;
console.log(mediaCapacidade);

let checkBoo = particular1 && particular2 && particular3 && particular4
console.log(checkBoo);

console.log(`${nome1.toLocaleUpperCase()}\nCapacidade: ${capacidade1}\nParticular: ${particular1}\nTimes Mandantes: ${mandantes1}`);
console.log(`${nome2.toLocaleUpperCase()}\nCapacidade: ${capacidade2}\nParticular: ${particular2}\nTimes Mandantes: ${mandantes2}`);
console.log(`${nome3.toLocaleUpperCase()}\nCapacidade: ${capacidade2}\nParticular: ${particular3}\nTimes Mandantes: ${mandantes3}`);
console.log(`${nome4.toLocaleUpperCase()}\nCapacidade: ${capacidade3}\nParticular: ${particular4}\nTimes Mandantes: ${mandantes4}`);


// Semana 3 e 4

const objeto1 = {
    nome:"la bombonera",
    capacidade: 49000,
    particular:true,
    mandantes:"Boca Juniors",
    imagem:"./Imagens/Bombonera.jpg",
    link:"https://www.estadios.net/estadio-la-bombonera/"
}
const objeto2 = {
    nome:"morumbi",
    capacidade: 77011,
    particular:true,
    mandantes:"São Paulo",
    imagem:"./Imagens/morumbi.jpeg",
    link:"https://www.estadios.net/estadio-do-morumbi/"
}
const objeto3 = {
    nome:"old trafford",
    capacidade: 76212,
    particular:true,
    mandantes:"Manchester United",
    imagem:"./Imagens/old esc.webp",
    link:"https://www.estadios.net/estadio-do-manchester-united/"
}
const objeto4 = {
    nome:"maracanã",
    capacidade: 80000,
    particular: false,
    mandantes:"Flamengo e Fluminense",
    // imagem:,
    // link:
}
const objeto5 = {
    nome: "estádio da luz",
    capacidade: 64642,
    particular: true,
    mandantes: "Benfica",
    imagem: "./Imagens/estadio-da-luz-lisboa-e1626295014281.jpg",
    link:"https://www.estadios.net/estadio-da-luz/"
};
const objeto6 = {
    nome: "estádio do dragão",
    capacidade: 50033,
    particular: true,
    mandantes: "Porto",
    imagem: "./Imagens/estádio-do-dragão.jpg",
    link:"https://pt.wikipedia.org/wiki/Est%C3%A1dio_do_Drag%C3%A3o"
};
const objeto7 = {
    nome: "santiago bernabéu",
    capacidade: 81044,
    particular: true,
    mandantes: "Real Madrid",
    imagem: "../Imagens/Real Madrid Santiago Bernabeu Stadium & Museum Entrance Ticket in Madrid.jpg",
    link:"https://www.estadios.net/estadio-real-madrid/"
}
;

let estadios = [];

if(objeto1.particular){
    estadios.push(objeto1)
}else{
    alert("La Bombonera não será adicionado")
}if(objeto2.particular){
    estadios.push(objeto2)
}else{
    alert("Morumbi não será adicionado")
}
if(objeto3.particular){
    estadios.push(objeto3)
}else{
    alert("Old Trafford não será adicionado")
}
if(objeto4.particular){
    estadios.push(objeto4)
}else{
    // alert("Maracanã não será adicionado")
}
if(objeto5.particular){
    estadios.push(objeto5)
}
if(objeto6.particular){
    estadios.push(objeto6)
}
if(objeto7){
    estadios.push(objeto7)
}

console.log(estadios);

// Semana 5

for(valor of estadios){
    for(propridade in valor){
        console.log(`${propridade}: ${valor[propridade]}`);
    }
}

// Semana 6

function string(objeto){
    return console.log(`${objeto.nome.toLocaleUpperCase()}\nCapacidade: ${objeto.capacidade} lugares\nParticular: ${objeto.particular}\nTimes madantes: ${objeto.mandantes}`);
}

// string(objeto2)


function info(arrayObjetos,string){
    for (s in arrayObjetos){
        for(info in arrayObjetos[s]){
            if(arrayObjetos[s][info] === string){
                let main = document.querySelector("main")
                let div = document.createElement("div");
                div.setAttribute("id","divEstadios")
                let section = document.createElement("section");
                section.setAttribute("id",`estadio1`)
                let img = document.createElement("img")
                img.setAttribute("id","imagens")
                img.src = estadios[s].imagem
                let link = document.createElement("a")
                link.setAttribute("href",estadios[s].link)
                link.innerHTML = `Nome: ${estadios[s].nome.toUpperCase()}`
                link.setAttribute("target","_blank")
                link.setAttribute("id","link")
                let ul = document.createElement("ul")
                let li1 = document.createElement("li")
                let li2 = document.createElement("li")
                
                let li4 = document.createElement("li")
                li2.innerHTML = `Capacidade: ${estadios[s].capacidade} lugares`
                
                li4.innerHTML = `Mandante(s): ${estadios[s].mandantes}`
                ul.setAttribute("id","listaUl")
            
            
                main.appendChild(div)
                div.appendChild(section)
                section.appendChild(img)
                section.appendChild(ul)
                ul.appendChild(li1)
                ul.appendChild(li2)
                ul.appendChild(li4)
                li1.appendChild(link)
            }
        }
    }
}

for ( let i = 0; i < estadios.length; i ++){
    let div = document.getElementById("divEstadios");
    let section = document.createElement("section");
    section.setAttribute("id",`estadio1`)
    let img = document.createElement("img")
    img.setAttribute("id","imagens")
    img.src = estadios[i].imagem
    let link = document.createElement("a")
    link.setAttribute("href",estadios[i].link)
    link.innerHTML = `Nome: ${estadios[i].nome.toUpperCase()}`
    link.setAttribute("target","_blank")
    link.setAttribute("id","link")
    let ul = document.createElement("ul")
    let li1 = document.createElement("li")
    let li2 = document.createElement("li")
    
    let li4 = document.createElement("li")
    li2.innerHTML = `Capacidade: ${estadios[i].capacidade} lugares`
    
    li4.innerHTML = `Mandante(s): ${estadios[i].mandantes}`
    ul.setAttribute("id","listaUl")


    div.appendChild(section)
    section.appendChild(img)
    section.appendChild(ul)
    ul.appendChild(li1)
    ul.appendChild(li2)
    
    ul.appendChild(li4)
    li1.appendChild(link)

}

function botao(event) {
    event.preventDefault()
    let valor = document.getElementById("pesquisa").value.toLowerCase();
    if(value = "") {
        alert("Esse estádio não existe")
    }else{
        document.getElementById("divEstadios").remove()
        info(estadios,valor)
    }


}
