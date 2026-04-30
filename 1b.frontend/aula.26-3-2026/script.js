//criar precos do combustivel
const precoGasolina=6.69;
const precoEtanol=4.30;
const precoDiesel=6.03;
//funcao atualizarValor identificar o tipo de combustivel
function atualizarValor(){
    let tipo=document.getElementById('combustivel').value;
    console.log(tipo);
    //escolha do combustivel
    let precoPorLitro;
    switch(tipo){
        case 'gasolina':precoPorLitro=precoGasolina;break;
        case 'etanol':precoPorLitro=precoEtanol;break;
        case 'diesel':precoPorLitro=precoDiesel;break;
        default:console.log("Escolha uma opção");return;
    }
    console.log(precoPorLitro);
    let litros=parseFloat(document.getElementById('litros').value);
    calcularValorAbastecimento(precoPorLitro, litros);
}
let tipoCombustivel=document.getElementById('combustivel');
tipoCombustivel.addEventListener("change", atualizarValor);
//funcao que recebe os dados do combustivel (tipo é a qtd de litros)
function calcularValorAbastecimento(precoCombustivel, litros){
    //document.getElementById('resultado').textContent=valorTotal;
    if(litros<=0 || isNaN(litros)){
        document.getElementById('resultado').textContent='Insira um valor válido!';
        return;
    }else{
        let valorTotal=precoCombustivel*litros;
        document.getElementById('resultado').textContent=conversaoMoeda(valorTotal);
        //let n=Number(valorTotal.toFixed(2));
        //valorTotal=n;
        //let p=document.getElementById('resultado');
        //p.innerHTML=`Resultado: R$${n}`;
        //console.log("R$ " + n);
    }
}
function conversaoMoeda(valor){
    return 'R$ '+valor.toLocaleString('pt-br', {
        minimumFractionDigits: 2, maximumFractionDigits: 2});
}
let litros=document.getElementById('litros');
litros.addEventListener('input', atualizarValor);
litros.addEventListener('keydown', function(c){
    if(c.key=="Enter"){
        c.preventDefault();
        atualizarValor();
    }
})