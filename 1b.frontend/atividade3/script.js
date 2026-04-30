//1. contador de cliques
let botao1=document.getElementById('botao1'); 
let botao2=document.getElementById('botao2'); 
let p1=document.getElementById('p1'); 
let clique=0;
botao1.addEventListener('click',function(){
    clique++;
    console.log(clique);
    p1.innerHTML=`Contador de cliques: ${clique}`;
})
botao2.addEventListener('click',function(){
    if(clique < 1){
        alert('O contador de cliques está zerado!');
        console.log(`O contador de cliques está zerado`);
        return;
    }
    clique--;
    console.log(clique);
    p1.innerHTML=`Contador de cliques: ${clique}`;
})
//2. texto dinâmico
let input=document.getElementById('input');
let p2=document.getElementById('p2');
let p3=document.getElementById('p3');
input.addEventListener('input', ()=>{
    let valor=input.value;
    let noSpace=valor.replace(/\s/g, '').length;
    p2.innerHTML=`Caracteres: ${noSpace}`;
    console.log(`Caracteres: ${noSpace}`);
})
input.addEventListener('keydown',function(tecla){
    if(tecla.key=='Enter' && input.value.trim() !== ''){
        let newP=document.createElement('p');
        newP.textContent=input.value;
        p3.appendChild(newP);
        input.value='';
        console.log(newP);
    }
})
//3. adicionar lista
function funcao(){
    let menuSelecao=document.getElementById('menuSelecao');
    let ol=document.getElementById("ol");
    let ul=document.getElementById("ul");
    let valor=menuSelecao.value;
    if(valor=='opcao1'){
        console.log(`Lista ordenada`);
        for(let i=0;i<4;i++){
            let li=document.createElement('li');
            li.textContent=`item ${i}`;
            ol.append(li);
            console.log(`item ${i}`);
        }
    }else if(valor=='opcao2'){
        console.log(`Lista não ordenada`);
        for(let i=0;i<4;i++){
            let li=document.createElement('li');
            li.textContent=`item ${i}`;
            ul.append(li);
            console.log(`item ${i}`);
        }
    }
}
//4. limpar página
function limpar(){
    clique=0;
    document.getElementById('input').value='';
    document.getElementById('p1').innerHTML='';
    document.getElementById('p2').innerHTML='';
    document.getElementById('p3').innerHTML='';
    document.getElementById('ol').innerHTML='';
    document.getElementById('ul').innerHTML='';
    let p4=document.getElementById('p4');
    console.clear();
    console.log(`Página limpa com sucesso!`);
}