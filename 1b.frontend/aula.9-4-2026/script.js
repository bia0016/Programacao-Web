//obj
const pessoa={//obj
    nome:'fulano',
    idade:10,
    status:true
};
console.log(pessoa);
//acessar as propriedades do obj
console.log(pessoa.idade);
const veiculo={};
veiculo.marca='fiat';
veiculo.ano=2023;
console.log(veiculo);
veiculo.marca='byd';
console.log(veiculo);
//construtor->diversas instancias de um mesmo obj
class veiculo2 {
    constructor(marca, ano) {
        this.marca = marca;
        this.ano = ano;
    }
}
const c1=new veiculo2('ford', 2019);
const c2=new veiculo2('fiat', 1980);
console.log(c1);
console.log(c2);
//modificador de acesso
class contaBancaria{
    //saldo=0; //quando ta vazio é publico
    #saldo=0; //# - private em java
    constructor(saldoInicial){
        this.#saldo=saldoInicial;
    }
    //metodo
    getSaldo(){
        return this.#saldo;
    }
}
const conta=new contaBancaria(100);
console.log(conta.saldo);
console.log(conta.getSaldo());
//array
const pessoa2=['fulano', 'ciclano'];
pessoa2[2]='beltrano';
console.log(pessoa2);
//metodos
pessoa2.push('ana'); //push-adiciona ao final do array
console.log(pessoa2);
pessoa2.unshift('maria'); //unshift - desloca a lista e adiciona ao comeco do array
console.log(pessoa2);
pessoa2.splice(1,0,'joao');//splice - é usado para adicionar e remover itens nalguma posicao
console.log(pessoa2);
pessoa2.pop();//pop - remove o ultimo elemento
console.log(pessoa2);
pessoa2.shift(); //shift - remove o primeiro elemento
console.log(pessoa2);
pessoa2.slice(2,1);//splice - (2[posicao do vetor],1[quantos elementos remover apos a posicao])
console.log(pessoa2);
