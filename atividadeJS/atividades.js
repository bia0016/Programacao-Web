//atividade 1
let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let valorAleat = nums[Math.floor(Math.random() * nums.length)];
console.log(valorAleat);
let item2 = document.getElementById("dica");
let item3 = document.getElementById("saida");
function find(){
    let item1 = parseInt(document.getElementById("nro").value);
    let i;
    if(item1 > valorAleat){
        let dica = `O número sorteado é <u>menor<u> que <b>${item1}`;
        document.getElementById("dica").innerHTML=dica;
    }else if(item1 < valorAleat){
        let dica = `O número sorteado é <u>maior<u> que <b>${item1}`;
        document.getElementById("dica").innerHTML=dica;
    }else{
        let saida = `Você encontrou o valor sorteado <b>${item1}`;
        document.getElementById("saida").innerHTML=saida;
    }
}
//atividade 2
function jogar(usuario) {
    let opcoes = ["pedra", "papel", "tesoura"];
    let computador = opcoes[Math.floor(Math.random() * 3)];
    console.log(`Você escolheu: ` + usuario);
    console.log(`Computador escolheu: ` + computador);
    document.getElementById("escComp").innerHTML = 'Computador escolheu: ' + computador;
    if(usuario === computador) {
        let mensagem = 'empate';
        console.log(mensagem);
        document.getElementById("result").innerHTML = mensagem;
    }else if(
        (usuario === "pedra" && computador === "tesoura") ||
        (usuario === "papel" && computador === "pedra") ||
        (usuario === "tesoura" && computador === "papel")
    ){
        let mensagem = 'você venceu';
        console.log(mensagem);
        document.getElementById("result").innerHTML = mensagem;
    }else{
        let mensagem = 'você perdeu';
        console.log(mensagem);
        document.getElementById("result").innerHTML = mensagem;
    }
}
//atividade 3
function calcular(){
    let n1 = parseFloat(document.getElementById("n1").value);
    let lista = document.getElementById("listaTabuada");
    lista.innerHTML = "";
    for(let i = 0; i <= 10; i++){
        let res = n1 * i;
        let li = document.createElement("li");
        li.textContent = n1 + " * " + i + " = " + res;
        console.log(`${n1} * ${i} = ${res}`);
        lista.appendChild(li);
    }
}
//atividade 4
function lines(){
    let n2 = parseInt(document.getElementById('n2').value);
    let p = document.getElementById('p');
    p.innerHTML = '';
    for(let i = 0; i <= n2; i++){
        let mensagem = "*".repeat(i) + "<br>";
        p.innerHTML += mensagem;
        console.log(mensagem);
    }
}
//atividade 5
function somar(){
    let exit = parseInt(document.getElementById("exit").value);
    let p1 = document.getElementById('p1');
    p1.innerHTML = '';
    let n = 0;
    let soma = 0;
    let texto = "";
    for(let i = 1; i <= exit; i++){
        n = n * 10 + 1;
        soma += n;
        texto += n;
        if(i < exit){
            texto += " + ";
        }
    }
    texto += "<br>A soma é: " + soma;
    p1.innerHTML = texto;
    console.log(`A soma é: ` + texto);
}

