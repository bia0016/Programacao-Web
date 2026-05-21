const mysql=require('mysql2');
//parametros de configuracao do banco
const db=mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'catolica',
    database:'dbprogramacaoweb',
    port:'3307'
});
//estabelecer a conexão
db.connect(err=>{
    if(err) throw err;
    console.log('conectado ao banco de dados.');
});
//exportar o modulo de conexao
module.exports=db;