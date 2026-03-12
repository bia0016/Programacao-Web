//buscar elemento via js
let meuElemento = document.getElementById("paragrafo");
console.log(meuElemento);
console.log(meuElemento.textContent); //pegar o conteudo da tag
//buscar elemento HMTL pela class(e)
let paragrafo1 = document.getElementsByClassName("paragrafo");
console.log(paragrafo1);
for(let i = 0; i < paragrafo1.length; i++){
    console.log(paragrafo1[i].textContent);
}
//length - o tamanho da variavel
let paragrafo2 = document.getElementsByTagName("p");
console.log(paragrafo2);
//criar elemento HTML
let destino = document.getElementById("elemento"); //buscando o elemento HTML
let p = document.createElement("p"); //criar elemento HTML
p.textContent = "paragrafo criado via JavaScript";
destino.append(p); //adicionar ao DOM
let lista = document.getElementById("elemento2");
let ul= document.createElement("ul");
let itens = ["Arroz", "Feijão", "Carne"];
for(let i=0; i<itens.length;i++){
    let li = document.createElement("li");
    li.textContent = itens[i];
    ul.append(li);
}
lista.append(ul);

//operacao de soma
//funcao somar 
function somar(){
    //pegar os dois valores digitados pelo usuario
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);
    let soma = n1 + n2;
    //console.log(soma);
    let saida = `Resultado: <b>${soma}</b>`;
    document.getElementById("resultado").innerHTML=saida;
}

//eventos = botao
let botao = document.getElementById("botao1");
botao.onclick = function(){
    alert("Clicou!");
    botao.textContent = "Você clicou!";
    botao.style.backgroundColor = "blue";
}